import React from 'react';
import { connect } from 'dva';
import { Layout,  Button, Radio, Form, Input, Card, Empty, Tag, Select, Modal, Upload} from 'antd';
import Icon from 'components/Icon';

import BaseComponent from 'components/BaseComponent';
import Editor from 'components/Editor';
import { antdNotice } from 'components/Notification'

import { getLastParams } from '@/utils/func'
import './index.less';
@connect(({ create,loading }) => ({
  create,  submitting: loading.effects['register/submit']
}))
@Form.create()
export default class Createartical extends BaseComponent {
  state = {
      html: '',
      id: "",
      loading: false,
      imageUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      fileList:[],
  };

  
  beforeUpload =  (file) =>{
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }



  onTextChange = html => {
    this.setState({
        html
    });
  };

  componentWillMount (){
    const { dispatch, location } = this.props;
    dispatch({type: 'create/getTags'})
    const id = getLastParams(location.pathname)
      if( id ){
        this.setState({
            id
        });
        dispatch({
          type:"create/getone",
          payload:{
            id:id
          }
        }).then(res=>{
          if (res && res.status == 1){
              antdNotice.error(res.message)
          }else{
              this.setState({fileList:[res.data.images]});
          }
        })
    }
  }
  //表单验证
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if(!this.state.html){
        antdNotice.error('文章内容不能为空!')
      }
      values.content = this.state.html;
      if(values.tags){
        const new_tags = [];
        values.tags.map((item)=>{
            new_tags.push({"tag_name":item});
        })
        values.tags = new_tags;
      }
      values.images = this.state.fileList[0]
      if (!err) {
          //编辑
          if(this.state.id){
              values.id = parseInt(this.state.id)
              dispatch({
                  type: 'create/update',
                  payload: {
                      ...values
                  }
              }).then((res)=>{
                  antdNotice.error(res.message);
                  if(res.status == 0){
                      window.location.href="/admin/artical/list";
                  }
              });
              //新增
          }else{
              dispatch({
                  type: 'create/create',
                  payload: {
                      ...values
                  }
              }).then((res)=>{
                  antdNotice.error(res.message);
                  if(res.status == 0){
                      window.location.href="/admin/artical/list";
                  }
              });
          }
      }
    });
  };

  

  //图片删除
  onRemove = (file)=>{
    const { dispatch } = this.props;
        dispatch({
          type: 'create/deleteImg',
          payload: {
              ...this.state.fileList[0]
          }
      }).then((res)=>{
          
          if(res.status == 0){
              this.setState({fileList:[]})
              antdNotice.error(res.message);
          }
      });
  }
  
  onChange =  (info) => {
    this.setState({ fileList: info.fileList});
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.\
      this.setState({fileList:[info.fileList[0].response.data]});
    }
    if(info.file.status === 'removed'){
      this.setState({fileList:[]});
    }
  }

  render() {
    const { form,submitting,create } = this.props;
    const { defaultTags, articalInfo } = create
    const { getFieldDecorator } = form;
    const { loading, imageUrl,  fileList} = this.state;
    const uploadButton = (
      <div>
        {loading ? <Icon type="loading" font="iconfont" spin /> :  <Icon type="add" font="iconfont" spin /> }
        <div style={{ marginTop: 8 }}>上传</div>
      </div>
    );
    var  tags = [];
    { articalInfo && articalInfo.Tags.map(item=>{
        tags.push(item.tag_name)
        })
    }
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    }
    return (
      <Layout className="full-layout page dashboard-page">
        <Layout.Content>
        <Icon type="loading" font="iconfont" spin />
          <Card>
          <Form 
            onSubmit={this.handleSubmit} 
            className="control-hooks"
            layout="horizontal"
            {...formItemLayout}
            >
            <Form.Item
              label="文章标题"
              name ="title" 
            >
              {getFieldDecorator('title', {
                  initialValue:articalInfo && articalInfo.title,
                  rules: [
                      {
                        required: true,
                        message: '文章标题不能为空!'
                      }
                ]
              })(<Input size="large" placeholder="文章标题" />)}

            </Form.Item>

            <Form.Item label="封面" name="cover_image">
                <Upload
                    action="/v1/image/Upload?type=artical"
                    listType="picture-card"
                    fileList={fileList}
                    onChange = {this.onChange}
                    onRemove = {this.onRemove}
                  >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Input type="hidden" value=""/>
            </Form.Item>
            <Form.Item
              label="标签"
              name ="tags"
            >
              {getFieldDecorator('tags', {
                  initialValue:tags,
              })(
                  <Select
                      mode="multiple"
                      showArrow
                      style={{ width: '100%' }}>
                      { defaultTags && defaultTags.map((item)=>(
                          <Select.Option value={item.name} key={item.id}>{item.name}</Select.Option>
                      ))}
                  </Select>
              )}
            </Form.Item>
            <Form.Item
              label="内容"
            >
                <Editor onChange={this.onTextChange} value={articalInfo && articalInfo.content} />
            </Form.Item>
            <Form.Item wrapperCol = {{span: 24}} style={{"textAlign":"center"}}>
            <Button type="primary"   loading={submitting} htmlType="submit" className="register-form-button">
                {articalInfo?"修改":"新增"}
            </Button>
          </Form.Item>
          </Form>
          </Card>
        </Layout.Content>
      </Layout>
    );
  }
}






import React from 'react';
import { connect } from 'dva';
import { Layout,  Button, Radio, Form, Input, Card, Empty, Tag, Select, Upload, Modal} from 'antd';
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
  };

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
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

  componentDidMount (){
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
          }
        })
    }
  }
  //表单验证
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch, create } = this.props;
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
      if (!err) {
          //编辑
          if(this.state.id){
              values.id = parseInt(this.state.id)
              console.log(values);
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


  render() {
    const { form,submitting,create } = this.props;
    const { defaultTags, articalInfo } = create
    const { getFieldDecorator } = form;
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <Icon type="loading" font="iconfont" spin /> :  <Icon type="add" font="iconfont" spin /> }
        <div style={{ marginTop: 8 }}><Icon type="loading" font="iconfont" spin /></div>
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
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={this.beforeUpload}
                  onChange={this.handleChange}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
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






import React from 'react';
import { connect } from 'dva';
import { Layout,  Button, Radio, Form, Input, Card, Empty, Tag, Select} from 'antd';
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
  };

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
                新增
            </Button>
          </Form.Item>
          </Form>
          </Card>
        </Layout.Content>
      </Layout>
    );
  }
}






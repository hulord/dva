import React from 'react';
import { connect } from 'dva';
import { Layout,  Button, Radio, Form, Input, Card, Empty, Tag, Select} from 'antd';
import BaseComponent from 'components/BaseComponent';
import Editor from 'components/Editor';
import { antdNotice } from 'components/Notification'
import './index.less';
@connect(({ create,loading }) => ({
  create,  submitting: loading.effects['register/submit']
}))
@Form.create()
export default class Createartical extends BaseComponent {
  state = {
    html: ''
  };

  onTextChange = html => {
    this.setState({
        html
    });
  };

  componentDidMount (){
    const { dispatch } = this.props;
    dispatch({type: 'create/getTags'})
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
    });
  };
  //文章标签标签渲染
  tagRender = (props) =>{
    const { label, value, closable, onClose } = this.props;

    return (
        <Tag color={"gold"} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
          gold
        </Tag>
    );
  }

  render() {
    const { form,submitting,create } = this.props;
    const { defaultTags } = create
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
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
                  initialValue:['gold', 'cyan'],
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
              <Editor onChange={this.onTextChange} value={this.state.newHtml} />
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






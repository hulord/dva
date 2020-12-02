import React from 'react';
import { connect } from 'dva';
import { Layout, Col, Row, Button, Radio, Form, Input, Card, Empty   } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Editor from 'components/Editor';
import { antdNotice } from 'components/Notification'
import './index.less';
const { Content } = Layout;
const FormItem = Form.Item;
@connect(({ artical,loading }) => ({
  artical,  submitting: loading.effects['register/submit']
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
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if(!this.state.html){
        antdNotice.error('文章内容不能为空!')
      }
      values.content = this.state.html;
      if (!err) {
        dispatch({
          type: 'artical/create',
          payload: {
            ...values,
          },
          success: resp => {
            console.log(resp)
          }, // 在dispatch结束后得到成功的回调，非必需
          error: e => {
            console.log(e)
          }, // 在dispatch结束后得到失败的回调，非必需
        });
      }
    });
  };

  render() {
    const { form,submitting } = this.props;
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
        <Content>
          <Card>
          <Form 
            onSubmit={this.handleSubmit} 
            className="control-hooks"
            layout="horizontal"
            {...formItemLayout}
            >
            <FormItem
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

            </FormItem>

            <FormItem
              label="标签"
              name ="tags"
            >
              {getFieldDecorator('tags')(<Input size="large" placeholder="标签" />)}
            </FormItem>
            <FormItem
              label="内容"
            >
              <Editor onChange={this.onTextChange} value={this.state.newHtml} />
            </FormItem>
            <FormItem wrapperCol = {{span: 24}} style={{"textAlign":"center"}}>
            <Button type="primary"   loading={submitting} htmlType="submit" className="register-form-button">
                新增
            </Button>
          </FormItem>
          </Form>
          </Card>
        </Content>
      </Layout>
    );
  }
}






import React from 'react';
import { connect } from 'dva';
import { Layout,  Button, Radio, Form, Input, Card, Empty, Tag, Select, Modal, Upload, DatePicker} from 'antd';
import moment from 'moment';
import Icon from 'components/Icon';

import BaseComponent from 'components/BaseComponent';
import Editor from 'components/Editor';
import { antdNotice } from 'components/Notification'
import { rTime } from '@/utils/func'
import { getLastParams } from '@/utils/func'
import './index.less';
@connect(({ applyCreate,loading }) => ({
  applyCreate,  submitting: loading.effects['register/submit']
}))
@Form.create()
export default class applyCreate extends BaseComponent {
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
    const id = getLastParams(location.pathname)
    if( id ){
        this.setState({
            id
        });
        dispatch({type:"applyCreate/getone", payload:{id:id}})
    }
  }

  //表单验证
  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (!err) {
          if(this.state.id){
              values.id = parseInt(this.state.id)
              dispatch({
                type: 'applyCreate/update',
                payload: {
                    ...values
                }
            }).then((res)=>{
                if(res.status == 0){
                    //window.location.href="/admin/artical/list";
                }else{
                  antdNotice.error(res.message);
                }
            });  
          }else{
              dispatch({
                type: 'applyCreate/create',
                payload: {
                    ...values
                }
            }).then((res)=>{
                if(res.status == 0){
                    window.location.href="review";
                }else{
                    antdNotice.error(res.message);
                }
            }); 
          }
        }
    });
  };

  

  render() {
    const { form,submitting,applyCreate } = this.props;
    const { defaultTags, detail  } = applyCreate
    const { getFieldDecorator } = form;
    const { loading, imageUrl,  fileList} = this.state;
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
              label="申请类型"
              name ="type" 
            >
              {getFieldDecorator('type', {
                  initialValue:detail && detail.type,
              })(
                  <Select
                      showArrow
                      style={{ width: '100%' }}>
                      <Select.Option value={1} key={1}>事假</Select.Option>
                      <Select.Option value={2} key={2}>病假</Select.Option>
                  </Select>
              )}

            </Form.Item>
            <Form.Item
              label="请假理由"
              name ="reason" 
            >
              {getFieldDecorator('reason', {
                  initialValue: detail &&  detail.reason,
                  rules: [
                      {
                        required: true,
                        message: '请假理由不能为空!'
                      }
                ]
              })(<Input size="large" placeholder="请假理由" />)}

            </Form.Item>

            <Form.Item
                label="开始时间"
                name ="start_time"
              >
                {getFieldDecorator('start_time', {
                    initialValue: detail && detail.start_time ?moment(rTime(detail.start_time), 'YYYY-MM-DD'):moment(Date.now()),
                })(
                  <DatePicker/>
                )}
              </Form.Item>
              <Form.Item
                label="结束时间"
                name ="end_time"
              >
                {getFieldDecorator('end_time', {
                    initialValue : detail && detail.end_time ?moment(rTime(detail.end_time), 'YYYY-MM-DD'):moment(Date.now()),
                })(
                  <DatePicker />
                )}
              </Form.Item>
            { detail && detail.id!=null ?(
                <Form.Item
                label="是否同意"
                name ="status"
              >
                {getFieldDecorator('status', {
                    initialValue :detail && detail.status,
                })(
                    <Select
                        showArrow
                        style={{ width: '100%' }}>
                        <Select.Option value={1} key={1}>同意</Select.Option>
                        <Select.Option value={2} key={2}>拒绝</Select.Option>
                    </Select>
                )}
              </Form.Item>
            ):null}

          { detail && detail.id!=null ?(
            <Form.Item
            label="审批意见"
            name ="deal_reason" 
            >
            {getFieldDecorator('deal_reason', {
                initialValue:detail && detail.reason,
            })(<Input size="large" placeholder="请写入审批意见" />)}
            </Form.Item>
          ):null}

            <Form.Item wrapperCol = {{span: 24}} style={{"textAlign":"center"}}>
            <Button type="primary"   loading={submitting} htmlType="submit" className="register-form-button">
                {detail ?"修改":"新增"}
            </Button>
          </Form.Item>
          </Form>
          </Card>
        </Layout.Content>
      </Layout>
    );
  }
}






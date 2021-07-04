import React, { Fragment } from 'react';
import DataTable, { EditableOper } from 'components/DataTable';
import Icon from 'components/Icon';
import { Button, Tag } from 'antd';
import { rTime,getDayAll } from '@/utils/func'
import { getPath } from '../../../../../../utils/func'
import {Link} from "dva/router";
const Tip = DataTable.Tip;
export const columns = (actions)  =>  [
  {
    title: '部门编号',
    name: 'value',
    tableItem: {}
  },
  {
    title: '部门名称',
    name: 'name',
    tableItem: {}
  },
  {
    title: '描述',
    name: 'describe',
    tableItem: {}
  },
  {
    title: '操作',
    tableItem: {
      width: 180,
      render: (text, record) => (
        <DataTable.Oper>
          <Button tooltip="删除" onClick={(e) => {
                actions.delete(record.id)
          }}>
            <Icon type="trash" />
          </Button>
        </DataTable.Oper>
      )
    }
  }
];

export const columns2 = [
  {
    title: '名称',
    name: 'name',
    tableItem: {}
  },
  {
    title: '年龄',
    name: 'age',
    tableItem: {}
  },
  {
    title: '地址',
    name: 'address',
    tableItem: {
      width: 200,
      render: text => <Tip>{text + text + text + text + text + text}</Tip>
    }
  }
];

export const columns3 = [
  {
    title: '角色',
    name: 'role',
    dict: [
      { code: '1', codeName: '管理员' },
      { code: '2', codeName: '游客' },
      { code: '3', codeName: '作者' }
    ],
    tableItem: {}
  }
];


export const columns6 = (actions)=> {
    const fields = [
      {
        title: '员工姓名',
        name: 'user.username',
        tableItem: {
          width: 100,
          fixed: 'left',
          type: 'input',
          editing: (text, record) => {}
        }
      },
      {
        title: '所属部门',
        name: 'user.department.name',
        tableItem: {
          width: 100,
          fixed: 'left',
          type: 'number',
          editing: (text, record) => {}
        }
      },
      {
        title: '角色',
        name: 'user.role.name',
        tableItem: {
          width: 100,
          fixed: 'left',
          type: 'number',
          editing: (text, record) => {}
        }
      },
  ];
  var date = new Date();//中国标准时间
  var year = date.getFullYear();//获取完整的年份(4位)
  var month = date.getMonth();//获取当前月份(0-11,0代表1月)
  const dates =  getDayAll(year+"-"+month+'-25',year+"-"+(month+1)+'-24');
  dates.forEach(item => {
    fields.push({
      title: item,
      name: "attendance."+item,
      tableItem: {}
    });
  });
  fields.push(  {
    title: '操作',
    tableItem: {
      width: 180,
      render: (text, record) => (
        <DataTable.Oper>
          <Button tooltip="删除" onClick={(e) => {
                actions.delete(record.id)
          }}>
            <Icon type="trash" />
          </Button>
        </DataTable.Oper>
      )
    }
  })
  return fields;
}

export const columns5 = (field) => [
  {
    title: '员工姓名',
    name: 'user.username',
    tableItem: {
      type: 'input',
      editing: (text, record) => record.id === editingKey,
      rules: [{ required: true, message: '请输入名称！' }]
    }
  },
  {
    title: '所属部门',
    name: 'user.department.name',
    tableItem: {
      type: 'number',
      editing: (text, record) => record.id === editingKey
    }
  },
  {
    title: '角色',
    name: 'user.role.name',
    tableItem: {
      type: 'number',
      editing: (text, record) => record.id === editingKey
    }
  },
  {
    title: '工时',
    name: 'attendance',
    dict: ["1","12"],
    tableItem:  {
      width: 200,
      render: text =>{
        console.log(field)
      }
    },
    children: [
      {
        title: '预算',
        dataIndex: 'completionRate',
        align: 'center'
      },
      {
        title: '已完成',
        dataIndex: 'yearOnYear',
        align: 'center'
      },
      {
        title: '完成率',
        dataIndex: 'monthOnMonth',
        align: 'center'
      }
    ]
  },
  {
    title: '角色',
    name: 'role',
    dict: [
      { code: '1', codeName: '员工' },
      { code: '2', codeName: '经理' },
      { code: '3', codeName: '老总' }
    ],
    tableItem: {
      type: 'select',
      editing: (text, record) => record.id === editingKey
    }
  },
  {
    title: '操作',
    tableItem: {
      width: 180,
      render: (text, record) => (
        <EditableOper>
          {form =>
            record.id === editingKey ? (
              <Fragment>
                <a onClick={e => self.onSave(record, form)}>保存</a>
                <a onClick={e => self.onCancelEdit()}>取消</a>
              </Fragment>
            ) : (
              <a onClick={e => self.onEdit(record)}>修改</a>
            )
          }
        </EditableOper>
      )
    }
  }
];

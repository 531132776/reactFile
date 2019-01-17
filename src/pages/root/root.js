import React, { Component } from 'react';

import Axios from 'axios';
import qs from 'qs'

import { Table } from 'antd'

import './root.css'

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

class Root extends Component {

  render() {
    class Rec extends React.Component {

      async getList() {
        let obj = {
          pageIndex: "1",
          orderType: "1",
          refundType: "0",
          isCheck: "0",
          isRefund: "1",
          keyword: null
        };
        const res = await Axios.post('/pc/refund/list', qs.stringify(obj))
        // console.log(res);
        // const tableArr = res.data.dataSet
      }
      componentDidMount() {
        this.getList()
      }
      render() {
        return (
          <div className="root_table">
            <Table dataSource={dataSource} columns={columns}></Table>
          </div>
        )
      }
    }
    return (

      <div className="root">
        <Rec></Rec>
        
      </div>
    )
  }
}

export default Root;
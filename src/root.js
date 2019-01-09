import React, { Component } from 'react';

import Axios from 'axios';
import qs from 'qs'

import { Table } from 'antd'

import './root.css'

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'sex',
  dataIndex: 'sex',
  key: 'sex',
},
{
  title: 'add',
  dataIndex: 'add',
  key: 'add',
},
{
  title: 'reduction',
  dataIndex: 'reduction',
  key: 'reduction',
}
]
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
        console.log(res);
        const tableArr = res.data.dataSet
      }
      componentDidMount() {
        this.getList()
      }
      render() {
        return (
          <div className="root_table">
            <Table dataSource={this.props.tableArr} columns={columns}></Table>
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
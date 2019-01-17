import React, { Component } from 'react';
import { Button } from 'antd'


let styleCSS = {
    padding: '10px'
}
class Home_2 extends Component {
    constructor(props) {
        super(props); 
        this.state = { keyword: "", channelList: [] }
    }
        render() {

            var userList = [
                {
                    id: 100,
                    name: '林xx',
                    age: 18
                }, {
                    id: 104,
                    name: '黄xx',
                    age: 20
                }, {
                    id: 106,
                    name: '王xx',
                    age: 30
                }
            ]
            return (
                <div id="home2">
                    <ul>
                        {
                            userList.map(v => {
                                return <li key={v.id} style={styleCSS}>
                                    <Button type="primary" onClick={() => this.routerTo(v)}>Primary</Button>
                                </li>
                            })
                        }
                    </ul>

                </div>
            );
        }
        routerTo(v){
            this.props.history.push({
                pathname: `/root/${v.id}`,
                state: { data: v }
            })
        }
    }

    export default Home_2
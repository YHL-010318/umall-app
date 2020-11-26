import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import { reqCate } from '../../utils/http'
import "./Cate.styl"
export default class Cate extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            n: 0
        }
    }
    componentDidMount() {
        reqCate().then(res => {
            this.setState({
                data: res.data.list
            })
        })
    }
    //修改n
    changeN(index) {
        this.setState({
            n: index
        })
    }
    //跳转到list
    toList(name, id) {
        this.props.history.push("/list/" + name + "/" + id)
    }
    render() {
        let { data, n } = this.state
        let rightList = data[n] ? data[n].children : []
        return (
            <div>
                <Header title="分类"></Header>
                <div className="cate">
                    <div className="left">
                        {
                            data.map((item, index) => {
                                return <div onClick={() => this.changeN(index)} className={index === n ? 'select' : ''} key={item.id}>{item.catename}</div>
                            })
                        }
                    </div>
                    <div className="right">
                        {
                            rightList.map(item => {
                                return (
                                    <div className="item" key={item.id} onClick={() => this.toList(item.catename, item.id)}>
                                        <div className="con">
                                            <img src={item.img} alt="" />
                                            <div>{item.catename}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

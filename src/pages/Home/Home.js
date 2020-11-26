import React, { Component } from 'react'
import Info from "./components/Info/Info"
import Banner from "./components/Banner/Banner"
import Nav from "./components/Nav/Nav"
import List from "./components/List/List"
import Header from "../../components/Header/Header"
import { reqBanner, reqHomeGoods } from '../../utils/http'
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            //商品列表数据
            goods: [],
            //1.轮播图
            banner: []
        }
    }

    componentDidMount() {
        reqHomeGoods().then(res => {
            this.setState({
                goods: res.data.list[0].content
            })
        }),
            reqBanner().then(res => {
                this.setState({
                    banner: res.data.list
                })
            })

    }

    push() {
        console.log(this.props);
        this.props.history.push("/index/shop")
    }
    replace() {
        this.props.history.replace("/index/shop")
    }
    render() {
        let { goods, banner } = this.state
        return (
            <div>
                <Header title="首页"></Header>
                {/* 信息 */}
                <Info></Info>

                {/* 轮播图 */}
                {/* 传递给banner组件 */}
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null}

                {/* 导航 */}
                <Nav></Nav>
                {/* 列表 */}
                <List goods={goods}></List>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import querystring from "querystring"
import { reqDetail } from "../../utils/http"
import "./Detail.styl"
import Info from "./conponents/Info/Info"
import Picker from "./conponents/Picker/Picker"
export default class Detail extends Component {
    constructor() {
        super()
        this.state = {
            detail: {},
            //控制弹框的状态
            isshow: false
        }
        this.des = React.createRef()
    }
    componentDidMount() {
        let str = this.props.location.search;//'?id=1&a=10&b=20&c=30'-->{id:"1",a:"10",b:"20",c:"30"}
        let result = querystring.parse(str.slice(1))
        //ajax
        reqDetail(result.id).then(res => {
            let list = res.data.list[0]
            list.specsattr = JSON.parse(list.specsattr)
            this.setState({
                detail: list
            }, () => {
                console.log(this.state.detail);
                this.des.current.innerHTML = this.state.detail.description
            })
        })


    }
    //弹框出现
    show() {
        this.setState({
            isshow: true
        })
    }
    //弹框消失
    hide() {
        this.setState({
            isshow: false
        })
    }
    render() {
        let { detail, isshow } = this.state;
        return (
            <div className="detail">
                <Header title="商品详情" back></Header>
                {/* 图片 */}
                <img className="img" src={detail.img} alt="" />
                {/* 商品信息 */}
                {detail.goodsname ? <Info detail={detail}></Info> : null}
                {/* 商品描述 */}
                <div ref={this.des}></div>

                <div className="footer">
                    <div className="footer-add" onClick={() => this.show()}>加入购物车</div>
                </div>
                {/* 弹框 */}
                {detail.goodsname && isshow ? <Picker detail={detail} hide={() => this.hide()}></Picker> : null}
            </div>
        )
    }
}

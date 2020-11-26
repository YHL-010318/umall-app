import React, { Component } from 'react'
import "./Picker.styl"
import { reqShopAdd } from "../../../../utils/http"
import { successAlert } from "../../../../utils/alert"
export default class Picker extends Component {
    constructor() {
        super()
        this.state = {
            n: 0
        }
    }
    //点了蒙版
    hide(e) {
        e.target.className === "picker" && this.props.hide()
    }
    //修改n
    changeN(index) {
        this.setState({
            n: index
        })
    }
    //加入购物车
    add() {
        reqShopAdd({
            uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
            goodsid: this.props.detail.id,
            num: 1
        }).then(res => {
            if (res.data.code === 200) {
                successAlert(res.data.msg)
                this.props.hide()
            }
        })
    }
    render() {
        let { detail } = this.props
        let { n } = this.state
        return (
            <div className="picker" onClick={(e) => this.hide(e)}>
                <div className="con">
                    <div className="con-top">
                        <div className="img-parent">
                            <img src={detail.img} alt="" />
                        </div>
                        <p className="goodsname">{detail.goodsname}</p>
                    </div>

                    <h3 className="spec-title">{detail.specsname}</h3>
                    <div className="btns">
                        {
                            detail.specsattr.map((item, index) => {
                                return <span
                                    onClick={() => this.changeN(index)}
                                    className={index === n ? 'select' : ''}
                                    key={item}>{item}</span>
                            })
                        }
                    </div>
                  
                    <div className="btn" onClick={() => this.add()}>加入购物车</div>
                    
                   
                </div>
            </div>
        )
    }
}

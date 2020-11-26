import React, { Component } from 'react'
import "./Nav.styl"
import Qianghou from "../../../../assets/img/111.jpg"
import { Link, NavLink, withRouter } from "react-router-dom"
class Nav extends Component {
    push() {
        console.log(this.props);
        this.props.history.push("/index/shop")
    }
    replace() {
        this.props.history.replace("/index/shop")
    }
    render() {
        return (
            <div className="nav">
               
                <div className="nav-box">
                    <Link to="/index/shop"><img src={Qianghou} alt=""/></Link>
                    <p>限时抢购</p>
                </div>

                <div className="nav-box">
                    <Link to="/index/shop"><img src={Qianghou} alt=""/></Link>
                    <p>积分商城</p>
                </div>
                <div className="nav-box">
                    <Link to="/index/shop"><img src={Qianghou} alt=""/></Link>
                    <p>联系我们</p>
                </div>
                <div className="nav-box">
                    <Link to="/index/shop"><img src={Qianghou} alt=""/></Link>
                    <p>商品分类</p>
                </div>
               
            </div>
        )
    }
}
export default withRouter(Nav)
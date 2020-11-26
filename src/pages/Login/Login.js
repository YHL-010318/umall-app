import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import "./Login.styl"
import{successAlert} from "../../utils/alert"
import { reqLogin } from '../../utils/http'
export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }

    }
    changeUser(e,key){
        this.setState({
          user:{
            ...this.state.user,
            [key]:e.target.value
          }
        })
    }
    login(){
        reqLogin(this.state.user).then(res=>{
            if(res.data.code===200){
                 //弹成功
                 successAlert(res.data.msg)
                 //存用户信息
                 sessionStorage.setItem("userInfo",JSON.stringify(res.data.list))
                 //跳页面
                 this.props.history.push("/index")
            }

        })
    }
    render() {
        return (
            <div className="login">
                <Header title="登录" register></Header>
                <div className="login-name">
                    账号：<input type="text" onChange={(e)=>this.changeUser(e,"phone")} />
                </div>
                <div className="login-pass">
                    密码：<input type="text" onChange={(e)=>this.changeUser(e,"password")} />
                </div>
                <div className="login-btnbox">
                    <div className="btn" onClick={()=>this.login()}>登录</div>
                    <p className="login-forget">忘记密码</p>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import "./Register.styl"
import { reqRegister } from "../../utils/http"
import{successAlert} from "../../utils/alert"
export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
                password: ""
            }
        }

    }
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    submit() {
        reqRegister(this.state.user).then(res => {
            if (res.data.code === 200) {
                //弹成功
                successAlert(res.data.msg)
                this.props.history.push("/login")
            }

        })
    }
    render() {
        return (

            <div className="register">
                <Header title="注册" back></Header>
                <div className="register-tel">
                    手机号:<input type="text" onChange={(e) => this.changeUser(e, "phone")} />
                </div>
                <div className="register-name">
                    昵称:<input type="text" onChange={(e) => this.changeUser(e, "nickname")} />
                </div>
                <div className="register-pass">
                    密码:<input type="text" onChange={(e) => this.changeUser(e, "password")} />
                </div>
                <div className="register-btnbox">
                    <div className="btn" onClick={() => this.submit()}>注册</div>
                </div>
            </div>
        )
    }
}

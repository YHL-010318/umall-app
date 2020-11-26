import React, { Component } from 'react'
import Header from "../../components/Header/Header"
import { reqCateGoods } from '../../utils/http'
import List from "../Home/components/List/List"
export default class BigList extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        reqCateGoods(this.props.match.params.id).then(res => {
            this.setState({
                list: res.data.list? res.data.list : []

            })
        })

    }
    render() {
        return (
            <div className="list">
                <Header back title={this.props.match.params.name}></Header>
                <List goods={this.state.list}></List>
            </div>
        )
    }
}

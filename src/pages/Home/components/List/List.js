import React from 'react'
import "./List.styl"
import {Link} from "react-router-dom"
export default function List(props) {
    let {goods}=props;
    return (
        <div className="list">
            {
                goods.map(item=>{
                    return (
                        <Link to={"/detail?id=" + item.id} className="list-item" key={item.id}>
                        <div className="imgbox"><img src={item.img} alt="" /></div>
                        <div className="titlebox">
                            <p className="goodsname">{item.goodsname}</p>
                            <p className="price">￥ {item.price}</p>
                            <div className="an"><div className="btn">立即抢购</div></div>
                        </div>
                    </Link>
                    )
                })
            }
            
        </div>
    )
}

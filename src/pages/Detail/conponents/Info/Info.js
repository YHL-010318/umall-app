import React from 'react'
import "./Info.styl"
import { filterPrice } from '../../../../filters';
export default function Info(props) {
    let { detail } = props;
    return (
        <div className="info">
            <p className="info-name">{detail.goodsname}</p>
            <span className="info-price">￥{filterPrice(detail.price)}</span>
            {detail.isnew === 1 ? <span className="info-isnew">新品</span> : null}
            {detail.ishot === 1 ? <span className="info-ishot">热卖</span> : null}
            <div className="info-market_price">{filterPrice(detail.market_price)}</div>
        </div>
    )
}

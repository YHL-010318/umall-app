import React from 'react'
import "./Banner.styl"
import { Carousel } from 'antd-mobile';
export default function Banner(props) {
    let { banner } = props;
    return (
        <div className="banner">

            <Carousel
                autoplay={true}
                infinite
                autoplayInterval={3000}

            >
                {banner.map(item => (
                    <a
                        key={item.id}
                        style={{ display: 'inline-block', width: '100%', height:"100%"}}
                    >
                        <img
                            src={item.img}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    </a>
                ))}
            </Carousel>

        </div>
    )
}

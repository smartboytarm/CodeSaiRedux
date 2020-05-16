import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Smartphone from './Smartphone'
import Best from './Best'
import Promo from './Promo'

export default class BaiTapLayout extends Component {
    render() {
        return (<div>
           <div className="bg-dark">
           <Header />
            <Carousel />
            <Smartphone />
            <Best/>
            <Promo />
           </div>
        </div>
        )
    }
}
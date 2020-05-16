import React, { Component } from 'react'
import Products from './Products'

export default class Smartphone extends Component {
    render() {
        return (
            <div>
                <div >
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
  <div className="row ">
    
    <Products></Products>
    <Products></Products>
    <Products></Products>
    <Products></Products>
  </div>
</section>
</div>
  

            </div>
        )
    }
}

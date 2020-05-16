import React, { Component } from 'react'
import XeRedux from './XeRedux'
export default class DanhSachXeRedux extends Component {
    renderXe = () => {
        return this.props.mangSP.map((item,index)=> <div className="col-3" key={index}>
        <XeRedux sanPham={item}></XeRedux>
        
    </div>);
    }
    render() {
        return (
            <div>
               <div className="text-center">
                   <div className="row">
                       {this.renderXe()}
                   </div>
               </div>
            </div>
        )
    }
}

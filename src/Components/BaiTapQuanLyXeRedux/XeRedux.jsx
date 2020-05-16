import React, { Component } from 'react';
import {connect} from 'react-redux';
class XeRedux extends Component {
  
    render() {
        return (
            <div>
               <div className="card border-primary">
  <img className="card-img-top" src="holder.js/100px180/" alt />
  <div className="card-body">
    <h4 className="card-title">Title</h4>
    <p className="card-text">{this.props.sanPham.tenSP}</p>
    <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={()=> this.props.xemChiTiet(this.props.sanPham)}>Xem Chi Tiet</button>
  </div>
</div>

            </div>
        )
    }
}
const mapDispatchToProp = (disPatchs) => {
  return {
    xemChiTiet: (thongTinXe) => {
      let action = {
        type: "XEM_CHI_TIET",
        thongTinXe: thongTinXe
      }
      disPatchs(action)
    }
  }
}
export default connect(null, mapDispatchToProp)(XeRedux)
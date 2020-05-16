import React, { Component } from 'react'
import DanhSachXe from './DanhSachXe';
//dat modal o day se lam nhe giao dien = toi uu nhat
import Modal from './Modal';


export default class BaiTapQuanLyXe extends Component {
     mangSP = [
        { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/CarBasic/products/black-car.jpg', gia: 1000 },
        { maSP: 2, tenSP: 'red car', hinhAnh: './CarBasic/CarBasic/products/red-car.jpg', gia: 2000 },
        { maSP: 3, tenSP: 'silver car', hinhAnh: './CarBasic/CarBasic/products/silver-car.jpg', gia: 3000 },
        { maSP: 3, tenSP: 'Steel car', hinhAnh: './CarBasic/CarBasic/products/steel-car.jpg', gia: 3000 }
    ];
    state = {
       thongtinXe: {maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/CarBasic/products/black-car.jpg', gia: 1000 }
        };
    chonXe = (xeMoi) => {
        this.setState(thongtinXe.xeMoi)
    }
    renderXe = () => {
        let xeMappingDB = this.mangSP.map((xe, index) => (
            <div className="col-6">
                {/* binding data xuong Phim  */}
                <div className="card text-center" key={index} >                    
                <DanhSachXe thuocTinhXe={xe} hamChonXe={this.chonXe}></DanhSachXe>

                </div>
            </div>
        ));
       return xeMappingDB;
     }
     
    render() {
        return (
            <div>
                <div className="row">
                {this.renderXe()}
                <Modal thuocTinhXe={this.state}></Modal>
                </div>
            </div>
        )
    }
}

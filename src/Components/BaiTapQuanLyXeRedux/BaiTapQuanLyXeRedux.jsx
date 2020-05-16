import React, { Component } from 'react'
import DanhSachXe from '../Prop/BaiTapQuanLyXe/DanhSachXe';
import DanhSachXeRedux from './DanhSachXeRedux';
import ModalRedux from './ModalRedux';

export default class BaiTapQuanLyXeRedux extends Component {
    mangSP = [
        { maSP: 1, tenSP: 'black car', hinhAnh: './CarBasic/CarBasic/products/black-car.jpg', gia: 1000 },
        { maSP: 2, tenSP: 'red car', hinhAnh: './CarBasic/CarBasic/products/red-car.jpg', gia: 2000 },
        { maSP: 3, tenSP: 'silver car', hinhAnh: './CarBasic/CarBasic/products/silver-car.jpg', gia: 3000 },
        { maSP: 3, tenSP: 'Steel car', hinhAnh: './CarBasic/CarBasic/products/steel-car.jpg', gia: 3000 }
    ];
    render() {
        return (
            <div>
                <DanhSachXeRedux mangSP={this.mangSP}></DanhSachXeRedux>
                <ModalRedux></ModalRedux>
            </div>
        )
    }
}

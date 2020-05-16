import React, { Component } from 'react'
import Phim from './Phim';

/**
 * props: nhan gia tri tu Component cha truyen vao
 * state: quan ly bien nao bi thay doi khi nguoi dung thuc hien thao tac tren giao dien (click, drop,..)
 * props: ReadOnly= const <=> khong thay doi duoc gia tri
 */
export default class DanhSachPhim extends Component {
    renderFilm = () => {
        // let mangFilm = this.props.mangFilm;
        let {mangFilm} = this.props;
        let phimMap = mangFilm.map((fm, index) => (
            <div className="col-3">
                {/* binding data xuong Phim  */}
                <div className="card text-center" key={index} >                    
                    <Phim phimBinding={fm}></Phim>
                </div>
            </div>
        ));
       return phimMap;
     }
    render() {
        let {mangFilm} = this.props;
        console.log(mangFilm);
        return (
           <div className="container-fluid">
               <h3 className="DanhSachPhim" >DANH SACH PHIM</h3>
               <div className="container">
                   <div className="row">
                   {this.renderFilm()}

                   </div>
               </div>
           </div>
        )
    }
}

import React, { Component } from 'react'
import Modal from './Modal';
/**
 * on tap boc tach
 */
export default class DanhSachXe extends Component {
     
    render() {
        let {chonXe} = this.props;
        let _car = this.props.thuocTinhXe;
        //on tap boc tach let hinhAnh = this.props.hinhAnh;
        let {hinhAnh} = this.props;
        return (
            <div>
                <img className="card-img-top" src={_car.hinhAnh} style={{ width: "100%", height: "100%" }} />
                <div className="card-body text-left ">
                    <h4 className="card-title">{_car.tenSP}</h4>
                    <p className="card-text"><strong>id: </strong>{_car.maSP}</p>
                    <p className="card-text"><strong>Source: </strong>{hinhAnh}</p>
                    <p className="card-text "><strong>Price: </strong>{_car.gia}$</p>
                    <button className="btn btn-primary">Buy</button>
                    <div><br/>
                    <button className="btn btn-success" data-toggle="modal" data-target="#modelId" o>Xem Chi Tiet</button>
                    </div>
                    
                    {/* <p className="card-text">{fm.moTa}</p> */}

                </div>
            </div>
        )
    }
}

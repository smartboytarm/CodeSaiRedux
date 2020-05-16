import React, { Component } from 'react'

export default class Phim extends Component {
    
    render() {
        let fm = this.props.phimBinding;
        return (
            <div>
                <img className="card-img-top" src={fm.hinhAnh} alt={fm.tenPhim} style={{ width: "100%", height: "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">{fm.tenPhim}</h4>
                        {/* <p className="card-text">{fm.moTa}</p> */}
                    </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Data from '../../Data/DataFilms.json'

export default class BaiTapRenderFilm extends Component {
    renderData = () => {
        let arrFilm = Data.map((fm,index) =>  (<div className="card text-left" key={index}>
 
 <img className="card-img-top" src={fm.hinhAnh} alt={fm.tenPhim} style={{width:"100%", height:"200px"}}/>
  <div className="card-body">
    <h4 className="card-title">{fm.tenPhim}</h4>
    <p className="card-text"></p>
 </div>

</div>));
return arrFilm;
    };
    render() {
        return (
            <div >
                <div className="container-fluid">
                    <div className="row">
                {this.renderData()}
                    </div>
                </div>
            </div>
        )
    }
}

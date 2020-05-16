import React, { Component } from 'react'

export default class DataBiding extends Component {
    title1 = "hello CyberSoft";
    renderTitle = () => {
    return <h1>{this.title1}</h1>;
    }
    render() {
        const title = 'Hello WOrld!';
        const hocVien = { ma: 1, ten: 'Nguyen VAn A'};
        // https://pbs.twimg.com/profile_images/823569976342773760/c2RLAG7h_400x400.jpg
        const renderImg = () => {
            return <img src={"../../public/logo192.png"}
            />;
        }
        return (
            <div>
                <p> {this.title1}</p>
                <div className="row">
                    <ul>
                        <li>Ma Hoc Vien: {hocVien.ma}</li>
                        <li>Ten Hoc Vien: {hocVien.ten}</li>
                        {renderImg()}
                        {this.renderTitle()}
                    </ul>
                </div>                
            </div>
        )
    }
}

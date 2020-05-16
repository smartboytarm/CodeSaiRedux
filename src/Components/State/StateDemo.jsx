import React, { Component } from 'react'

export default class StateDemo extends Component {

    /**
     * state la property cua Component (format object)
     * state: luu nhung gia tri thay doi (khi click ) tren giao dien
     * khong truc tiep gan gia tri cho state ma thong qua mot phuong thuc la setState
     * 
     * Buoc lam (strict mode): tao ra newState lam trung gian
     * setState(<state moi>) => giao dien luc do moi duoc render() lai
     * 
     * dong 28: do setState la asynchronous nen this.setState(newState, () => this.state.status)
     * luc nay thi console ra status = true
     */
    state = {
        // bien status thay doi khi click 
        status : false
    }
    name = "Nguyen Van A";

    //renderContent
    renderContent = () => this.state.status ? <h1>Hello {this.name}</h1> : <button onClick= {()=> {this.logIn()}}>Sign In</button>  

    //login function
    logIn = () => {
        // this.state.status = true; 
        let newState = {
            status : true
        }
        //asynchronous chay sau
        this.setState(newState, () => console.log(`chay sau: `,this.state.status));
        // asynchronous chay truoc
        console.log(`chay truoc: `,this.state.status);
    };
    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

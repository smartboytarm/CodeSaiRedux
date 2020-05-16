import React, { Component } from 'react'
/**
 * @param is used for callback function name: renderEventNeedToBeHandle
 * step 1: handle event in react
 * step 2: handle Additional
 */
export default class HandleEvent extends Component {
    //Additional command
    isLogin = true;
    userName  = " Nguyen Van A";
    checkingUserLogin = () => {
        if(this.isLogin){
            //<div><b>Hello {this.userName}</b></div>
        return console.log(this.userName)
        }
        return alert(false)
    }
    //----end of Additional command


    renderClick = () => {
        return alert('hello World')
    }
    // handle event in react
    renderEventNeedToBeHandle = (param1, tag) => console.log(tag.target);
    render() {
        return (
            <div>
                {/* assign event + param as a callback function  */}
               <button id="btn" onClick={this.renderEventNeedToBeHandle.bind(this, "day la tham so")}>Click me!!!</button>
               <button id="btn" onClick={() => this.renderEventNeedToBeHandle('Don\'t do ma ma Do',"do it")}>Dont Click me!!!</button>
               <button id="btn" onClick={this.checkingUserLogin}>Trial Add !!!</button>
            </div>
        )
    }
}

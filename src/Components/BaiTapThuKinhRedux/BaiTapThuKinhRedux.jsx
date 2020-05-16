import React, { Component } from 'react'
import {connect} from 'react-redux'
class BaiTapThuKinhRedux extends Component {
    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './glassesImage/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },  
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './glassesImage/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },   
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './glassesImage/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 4, price: 30, name: 'DIOR D6005U', url:  './glassesImage/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './glassesImage/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './glassesImage/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './glassesImage/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './glassesImage/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './glassesImage/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
       ];
       renderGlassesList =() => {
           return this.arrProduct.map((glassesItem,index)=> (<div className="glassesItem col-4 " key={index} >
               <img style={{width:"150px",cursor:"pointer"}} src={glassesItem.url} alt={glassesItem.name}></img>
           </div>))
       }
    render() {
        // const imgStyle = {
        //     backgroundImage
        // }
        const styleGlass = {width:"250px",left:"50%",top: "130px"};
        const styleDS = {left:"10%",top: "130px"};
       const modelStyle ={left:"28%"}

        return (
            <div className="container" style={{backgroundImage:'url(./glassesImage/background.jpg)', minHeight:"2000px",backgroundSize:"100%"}}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: "2000px" }}>
                    <h3 className="text-center text-light p-3" style={{ backgroundColor: 'rgba(0,0,0,.5)', minHeight: "20px" }}>aasdasdsa</h3>
                    <div className="row">
                        <div className="col-6">
                           <div style={{position: "relative"}} >
                            <img className="position-absolute" src="./glassesImage/model.jpg" alt="asdsad" style={modelStyle}/>

                               <img className="position-absolute" src="././glassesImage/v2.png" alt="" style={styleGlass}/>
                           </div>
                        </div>
                        <div className="col-6">
                            <img src="./glassesImage/model.jpg" alt="asdsad" />
                        </div>
                        {/* Danh Sahc Kinh  */}
                        <div className="danhSachKinh position-absolute" style={styleDS}>
                            {this.renderGlassesList()}
                        </div>
                    </div>
                </div>
           
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        glassesCurrent: state.initialState.glassesCurrent
    }
}

export default connect(mapStateToProps)(BaiTapThuKinhRedux);//create components store the state prop
import React, { Component } from 'react'

export default class VehicleStyle extends Component {
    state = {
        status : false,
        src: './CarBasic/CarBasic/products/red-car.jpg',
        
    }

    clickCard = (getFromTemplate) => {
        // this.state.status = true; 
        let newState = {
            status : true,
            src: getFromTemplate
        }
        //asynchronous chay sau
        this.setState(newState, () => console.log(`chay sau: `,this.state.status));
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7">
                            <img style={{width: '100%'}} src={this.state.src} alt="red-car"/>
                        </div>
                        <div className="col-5">
                            <div className="card text-left">
                                <div className="card-header">
                                    {this.state.src}
                                </div>
                            <div className="card-body  text-primary" >
                                <div className="row" style={{cursor: "pointer"}} onClick={()=>this.clickCard('./CarBasic/CarBasic/products/red-car.jpg')}>
                                    <div className="col-2">
                                        <img style={{width:'100%'}} src="./CarBasic/CarBasic/icons/icon-red.jpg" alt="icon-red"/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Red Painted</h3>
                                        <p>Good Choice!</p>
                                    </div>
                                </div>
                                {/* dong 2  */}
                                <div className="row" style={{cursor: "pointer"}} onClick={()=>this.clickCard('./CarBasic/CarBasic/products/black-car.jpg')}>
                                    <div className="col-2">
                                        <img style={{width:'100%'}} src="./CarBasic/CarBasic/icons/icon-black.jpg" alt="icon-black"/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Black Painted</h3>
                                        <p>Good Choice!</p>
                                    </div>
                                </div>
                                {/* dong 2  */}
                                <div className="row" style={{cursor: "pointer"}} onClick={()=>this.clickCard('./CarBasic/CarBasic/products/silver-car.jpg')}>
                                    <div className="col-2">
                                        <img style={{width:'100%'}} src="./CarBasic/CarBasic/icons/icon-silver.jpg" alt="icon-silver"/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Silver Painted</h3>
                                        <p>Good Choice!</p>
                                    </div>
                                </div>
                                {/* dong 2  */}
                                <div className="row" style={{cursor: "pointer"}} onClick={()=>this.clickCard('./CarBasic/CarBasic/products/steel-car.jpg')}>
                                    <div className="col-2">
                                        <img style={{width:'100%'}} src="./CarBasic/CarBasic/icons/icon-steel.jpg" alt="icon-steel"/>
                                    </div>
                                    <div className="col-10">
                                        <h3>Steel Painted</h3>
                                        <p>Good Choice!</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                    <div className="row">
                        PLease talk in silent
                    </div>
                </div>
            </div>
        )
    }
}

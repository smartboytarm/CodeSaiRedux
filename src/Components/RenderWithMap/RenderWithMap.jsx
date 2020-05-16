import React, { Component } from 'react'

export default class RenderWithMap extends Component {
/**
 * trong React luc render se tao ra mot doi tuong JSX
 * Cach 1 
 * Cach 2 Dung map(), custom array based on root arr
 * Cach 3
 */
    data = [
        {id: 1, name: 'I PHONE X', price: 1000},
        {id: 2, name: 'Note 10 +', price: 5300},
        {id: 3, name: 'Sony XZ 2', price: 300}
    ];

    // renderTable funciton
    RenderTable = () => {
        /* cach 2: 
        DUng map
         */
        let arrayContent = this.data.map((product, index) => {
            return (<tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td></td>
            </tr>)
        });
        /* Cach 1: 
        let arrayContent = [];

        for (let index = 0; index< this.data.length; index++) {
            let prod =  this.data[index];
            // tao 1 the cho mang doi tuong jsx (khong phai chuoi)
            let tagProduct = <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>Hello</td>
            </tr>;
            console.log(tagProduct);
            arrayContent.push(tagProduct);
            // console.log(arrayContent);
        } */
        return arrayContent
    };

    render() {
        return (
            <div>
                <h3>PRODUCTS TABLE</h3>
                <table className="table bg-dark text-light ">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.RenderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

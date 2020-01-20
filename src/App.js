import React, { Component } from 'react';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component{
  showInfoProduct(product){
    if(product.status){
      return <h3>
          ID: { product.id}<br/>
          Name:{product.name} <br/>
          Price: {product.price} <br/>
      </h3>
    }
  }
    render(){
      
      var products=[
        {
          id: 1,
          name: 'Iphone xs max',
          price: 30000000,
          status: true
        },
        {
          id: 2,
          name: 'samsung s10 plus',
          price: 28000000,
          status: true
        }

      ]
      let elements =products.map((product,index)=>{
        return <Product key={index} name={product.name} price={product.price}/>
      })
        return (
          <div>
            <Header/>
            
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               {/*  {elements} */}
               <Product products={products}/>
              </div>
            
            </div>
          </div>
           
            
        )
    }
}

export default App
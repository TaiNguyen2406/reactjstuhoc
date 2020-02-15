import React, { Component } from "react";
import "./App.css";
//import Header from "./components/Header";
import Product from "./components/Product";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      color: "red",
      fontSize: 15
    };
  }
  showInfoProduct(product) {
    if (product.status) {
      return (
        <h3>
          ID: {product.id}
          <br />
          Name:{product.name} <br />
          Price: {product.price} <br />
        </h3>
      );
    }
  }

  changeStatus = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };
  onSetColor = params => {
    this.setState({
      color: params
    });
  };
  onChangeSize = value => {
    this.setState({
      fontSize:
        this.state.fontSize + value > 0 && this.state.fontSize + value < 40
          ? this.state.fontSize + value
          : this.state.fontSize
    });
  };
  onSettingDefault = isTrue => {
    if (isTrue) {
      this.setState({
        color: "red",
        fontSize: 15
      });
    }
  };
  render() {
    var products = [
      {
        id: 1,
        name: "Iphone xs max",
        price: 30000000,
        status: true
      },
      {
        id: 2,
        name: "samsung s10 plus",
        price: 28000000,
        status: true
      }
    ];
    let elements = products.map((product, index) => {
      return <Product key={index} name={product.name} price={product.price} />;
    });

    return (
      // <div>
      //   <Header />

      //   <div className="row">
      //     <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      //       {elements}
      //       {/* <Product products={products}/> */}
      //     </div>
      //   </div>
      //   <button
      //     type="button"
      //     className="btn btn-warning"
      //     onClick={this.changeStatus}
      //   >
      //     Active:{this.state.isActive === true ? "true" : "false"}
      //   </button>
      // </div>
      <div className="container mt-50">
        <div className="row">
          <ColorPicker
            color={this.state.color}
            onReceiveColor={this.onSetColor}
          />
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              fontSize={this.state.fontSize}
              onChangeSize={this.onChangeSize}
            />
            <Reset onSettingDefault={this.onSettingDefault} />
          </div>
          <Result color={this.state.color} fontSize={this.state.fontSize} />
        </div>
        <span style={{ backgroundColor: "yellow" }}>yellow</span>
      </div>
    );
  }
}

export default App;

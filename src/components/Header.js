import React, { Component } from 'react';

class Header extends Component{
    render(){
        return (
         
         <nav className="navbar navbar-inverse">
             <a className="navbar-brand" href="#">Tự học</a>
             <ul className="nav navbar-nav">
                 <li className="active">
                     <a href="#">Trang chủ</a>
                 </li>
                 <li>
                     <a href="#">Danh mục sản phẩm</a>
                 </li>
             </ul>
         </nav>
         
        )
    }
}

export default Header
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-3"> Project quản lý người dùng sử dụng ReactJs </h1>
                    <p className="lead"> với dữ liệu JSON </p>
                </div>
            </div>
        );
    }
}

export default Header;
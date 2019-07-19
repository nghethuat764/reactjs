import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            trangthaihienthi:true
        }
    }
    SetTrangThai=()=>
    {
        this.setState({
            trangthaihienthi:!this.state.trangthaihienthi
        });
    }
    HienThiNut=()=>{
        if(this.state.trangthaihienthi===true)
        {
            return <div className="btn btn-block btn-outline-danger" onClick={()=>this.SetTrangThai()}>Đóng Lại</div>;
        }
        else
        {
            return <div className="btn btn-block btn-outline-success" onClick={()=>this.SetTrangThai()}>Hiển Thị</div>
        }
    }
    HienThiForm=()=>{
        if(this.state.trangthaihienthi===true)
        {
            return (<div className="card bg-light card-fluid text-center mt-1 ">
            <div className="card-header text-center">Thêm mới User</div>
            <div className="card-body">
              <div className="form-group">
                <input type="text" className="form-control btn-block"  placeholder="Tên user" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control"  placeholder="Điện thoại" />
              </div>
              <div className="form-group">
                <select className="custom-select" id="inputGroupSelect03">
                  <option value={1} >Chọn quyền</option>
                  <option value={2} >Admin</option>
                  <option value={3} >Thành viên</option>
                  <option value={4} >Owner</option>
                </select>
              </div>
              <div className="form-group text-center">
                <div className="btn btn-primary btn-block">
                  <div className="fa  fa-plus-circle" /> Thêm mới
                </div>
              </div>
            </div>
          </div>)
        }

    }
    render() {
        return (
            <div className="col-md-3 sm-12 xs-12  ">
                
                {this.HienThiNut()}
                {this.HienThiForm()}
                
  
</div>

        );
    }
}

export default AddUser;

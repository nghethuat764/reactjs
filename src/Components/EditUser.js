import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:this.props.EditUserdata1.id,
            name:this.props.EditUserdata1.Name,
            tel:this.props.EditUserdata1.Tel,
            Permission:this.props.EditUserdata1.Permission
           }
    }
    isChange=(event)=>{
            const name=event.target.name;
            const value=event.target.value;           
            this.setState({[name]:value});        
    }
    clickSave=()=>{        
       var info={};
       info.id=this.state.id;
       info.name=this.state.name;
       info.tel=this.state.tel;
       info.Permission=this.state.Permission;
       this.props.getInfoEdituser(info);
       this.props.SettrangthaiSua1();      
    }
    render() {  
        // console.log('THONG TIN NAME TAI ISCHANGE '+this.state.name+' VÀ ID LÀ '+this.state.id);  
        return (
        <div className="col ">
        <form>
      <div className="card bg-light card-fluid text-center  mt-1 bg-warning">
        <div className="card-header text-center bg-success text-white text-uppercase">Sửa thông tin User</div>
        <div className="card-body bg-success">
          <div className="form-group">
            <input type="text" defaultValue={this.props.EditUserdata1.Name} name="name" className="form-control btn-block" placeholder="Tên user" onChange={(event)=>{this.isChange(event)}}  />
          </div>
          <div className="form-group">
            <input type="text" name="tel" defaultValue={this.props.EditUserdata1.Tel} className="form-control" placeholder="Điện thoại" onChange={(event)=>{this.isChange(event)}} />
          </div>
          <div className="form-group">
            <select className="custom-select" name="Permission" defaultValue={this.props.EditUserdata1.Permission} required onChange={(event)=>{this.isChange(event)}}>
              <option >Chọn quyền mặc định</option>
              <option value={1} >Admin</option>
              <option value={2} >Modrator</option>
              <option value={3} >Normal</option>
            </select>
          </div>
          <div className="form-group text-center">         
         <input type="button" className="btn btn-warning btn-block " value="Lưu" onClick={()=>this.clickSave()} ></input> 
        </div>
      </div>
      </div>
      </form>
      </div>
  );}}

export default EditUser;
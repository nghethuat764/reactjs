import React, { Component } from 'react';
import EditUser from './EditUser';

class AddUser1 extends Component {
  constructor(props) {
    super(props);
    this.state={
      id:"",
      Name:"",
      Tel:"",
      Permission:""
    }
  }
  
isChange=(event)=>{
  const name=event.target.name;
  const value=event.target.value;
  this.setState(
    {
      [name]:value
    }
  );
  //Package Item
  var item={};
  item.id=this.state.id;
  item.Name=this.state.Name;
  item.Tel=this.state.Tel;
  item.Permission=this.state.Permission;
  console.log( 'ITEM '+item.Permission);
  console.log( 'name '+name);
  console.log( 'value '+value);
}
getInfoEdituser =(info)=>{
console.log('hellolooooo '+info.name);
this.props.getusereditinfoforApp(info);
}

Hienthiformsua=()=>{
  if(this.props.Hienthiformsua===true)
  {
    return(<EditUser SettrangthaiSua1={()=>this.props.SettrangthaiSua1()} EditUserdata1={this.props.EditUserdata} getInfoEdituser={(info)=>this.getInfoEdituser(info)} />)
  }
}
  Kiemtratrangthai = () => {
    
    if (this.props.Hienthiform === true) {
      return (
        <div className="col">
          <form>
        <div className="card bg-light card-fluid text-center mt-1 ">
          <div className="card-header text-center">Thêm mới User</div>
          <div className="card-body">
            <div className="form-group">
              <input type="text" name="Name" className="form-control btn-block" placeholder="Tên user"  onChange={(event)=>this.isChange(event)}/>
            </div>
            <div className="form-group">
              <input type="text" name="Tel" className="form-control" placeholder="Điện thoại" onChange={(event)=>this.isChange(event)} />
            </div>
            <div className="form-group">
              <select className="custom-select" name="Permission"  onChange={(event)=>this.isChange(event)} >
                <option >Chọn quyền mặc định</option>
                <option value={1} >Admin</option>
                <option value={2} >Modrator</option>
                <option value={3} >Normal</option>
              </select>
            </div>
            <div className="form-group text-center">         
           <input type="reset" className="btn btn-primary btn-block " onClick={(name,tel,permission)=>this.props.add(this.state.Name,this.state.Tel,this.state.Permission)} value="Thêm mơi" ></input>        
          </div>
        </div>
        </div>
        </form>
        </div>)
    }
    else {

    }
  }

  render() {
    // console.log('State Edituser :  '+this.props.EditUserdata.Name);
    // console.log(Item);
    return (
      
        <div>
        {this.Kiemtratrangthai()}
       {this.Hienthiformsua()}
        </div>
      

    );
  }
}

export default AddUser1;

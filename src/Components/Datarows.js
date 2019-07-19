import React, { Component } from 'react';

class Datarows extends Component {

  
    Quyenstring=()=>
    {
        if(this.props.quyen===1){return "Admin"}
        else if(this.props.quyen===2){return "Moderator"}        
        else{return "Normal User" }
    }
    Editclick=()=>{
      this.props.editusertable();
      this.props.SettrangthaiSua();      
    }
    deleteButtonClick=(iduser)=>{      
      
      this.props.deleteButtonClick(iduser);
      
    }
    render() {
      
        return (
          
            <tr>
            <td >{this.props.stt+1}</td>
            <td>{this.props.username}</td>
            <td>{this.props.sdt}</td>
            <td>{this.Quyenstring()}</td>
            <td >
              <div className="btn btn-group text-center">
                <div className="btn btn-warning" onClick={()=>this.Editclick()}>
                  <i className="fa fa-edit" />Sửa
                </div>
                <div className="btn btn-danger" onClick={(iduser)=>this.deleteButtonClick(this.props.id)}>
                  <i className="fa fa-trash-o" />Xóa
                </div>
              </div>
            </td>
          </tr>
        );
    }
}

export default Datarows;
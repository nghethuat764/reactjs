import React, { Component } from 'react';
import Datarows from './Datarows';

class TableData extends Component {
  deleteButtonClick=(iduser)=>{this.props.deleteButtonClick(iduser);}
  //hàm Map dữ liệu
  DataMappingUser=()=>this.props.Dataparent.map((value,key)=>(
    <Datarows editusertable={(user)=>this.props.EditUserApp(value)}
    SettrangthaiSua={()=>this.props.SettrangthaiSua()}    
        username={value.Name}
        deleteButtonClick={(iduser)=>this.deleteButtonClick(iduser)}
    key={key}
    stt={key}
    id={value.id}
    sdt={value.Tel} quyen={value.Permission}/>
  ))
  //map du lieu tim kiem
    render() {
      
      // console.log(this.props.Dataparent);      
        return (
            <div className="col">
            <table className="table table-striped table-hover ">
              <thead className="table-inverse">
                <tr>
                  <th>STT</th>
                  <th>Họ và Tên</th>
                  <th>Điện thoại</th>
                  <th>Quyền</th>
                  <th>Hoạt động</th>
                </tr>
              </thead>
              <tbody>              
              {this.DataMappingUser()}                
              </tbody>
            </table>
          </div>          
        );
    }
}
export default TableData;
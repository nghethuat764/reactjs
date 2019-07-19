// import React from 'react';
import './../Components/App.js';
import Header from './Header.js';
import SearchForm from './SearchForm.js';
import TableData from './TableData.js';
// import AddUser from './AddUser.js';
import AddUser1 from './AddUser1.js';
import React, { Component } from 'react';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Hienthiform: false,
      data: [],
      textTimkiem:'',
      Hienthiformsua:true,
      EditUserdata:{}
    }
  }
  componentWillMount()
  {
    if(localStorage.getItem('userData')===null)
    {
      localStorage.setItem('userData',JSON.stringify(DataUser))
    }
    else
    {
      var temp=JSON.parse(localStorage.getItem('userData'));
      this.setState({data:temp});
    }
  }
  GettextTimkiem=(dl)=>{
    // alert('kết nối thành công rồi nhé'+dl)
    this.setState({
      textTimkiem:dl
    });
  }
  Ketnoidata=()=>
  {
    //Kết nối mongoDB and Node.js
  }
  Settrangthai = () => {
    this.setState({
      Hienthiform: !this.state.Hienthiform      
    });
  }
  SettrangthaiSua=()=>{
    this.setState({
      Hienthiformsua:!this.state.Hienthiformsua
    });
  }
  Addnewuser=(name,tel,permission)=>{
    //dóng gói đối tượng tên item
    var item={};
    item.id=uuidv1();
    item.Name=name;
    item.Tel=tel;
    item.Permission=permission;
    let Items=this.state.data;
    Items.push(item);
    this.setState({
      data:Items
    });
    localStorage.setItem('userData',JSON.stringify(Items));
    // console.log(Items);
    
  }
  EditUserApp=(user)=>{
    // console.log('Đã ok ok ok!');           
    this.setState({
      EditUserdata:user
    });
    // console.log(''+user.id); 
     
  }
  deleteButtonClick=(iduser)=>{
    // var arr=[1,2,3];
    // arr=arr.filter(item=>item!==2)
    // console.log(arr);
    var dataitem=this.state.data.filter(item=>item.id!==iduser);
    this.setState({data:dataitem});
    //day du lieu vao locaStorage
    localStorage.setItem('userData',JSON.stringify(dataitem));
  }
  //get thong tin user lên App.js
  getusereditinfoforApp=(info)=>{   
    this.state.data.forEach((value,key)=>{     
      if(value.id===info.id)
      {
        // console.log('permission trong info '+info.Permission);
        // console.log('Permission trong value '+value.Permission);
        value.Name=info.name;
        value.Tel=info.tel;
        value.Permission=info.Permission;        
      }
    })    
  }
  render() {   
//   //  console.log('State Edituser :  '+this.state.EditUserdata.Name);
//   localStorage.setItem('key1','haha');
//  console.log( localStorage.getIem('key1'));
// localStorage.setItem('userData',JSON.stringify(DataUser))
   var ketqua=[];   
   this.state.data.forEach((item)=>{
    if(item.Name.indexOf(this.state.textTimkiem)!==-1)
    {
      ketqua.push(item);
    }   
   })  
   //console.log('ket qua la'+ketqua);   
  
    return(   
      <div>        
        <Header />
        <div className="searchForm">
          <div className="container-fluid">
            <div className="row">
              <SearchForm Settrangthai={()=> this.Settrangthai()} hienthinutbienprops={this.state.Hienthiform} Checkkenoiprops={(dl)=>this.GettextTimkiem(dl)}/>
              <div className="col-12">
                <hr />
              </div>              
              <TableData
              deleteButtonClick={(iduser)=>this.deleteButtonClick(iduser)} 
              EditUserApp={(user)=>this.EditUserApp(user)}
              Hienthiformsua={()=>this.state.Hienthiformsua}
              SettrangthaiSua={()=>this.SettrangthaiSua()}              
               Dataparent={ketqua}/>
              {/* <AddUser/> */}
              <AddUser1 EditUserdata={this.state.EditUserdata}
               getusereditinfoforApp={(info)=>this.getusereditinfoforApp(info)}
               Hienthiform={this.state.Hienthiform} Hienthiformsua={this.state.Hienthiformsua}               
              SettrangthaiSua1={()=>this.SettrangthaiSua()}
              add={(name,tel,permission)=>this.Addnewuser(name,tel,permission)}/>              
            </div>
          </div>
        </div>
      </div>      
    );
  }
}
export default App;
// function App() {

//   return (
//     <div>
//      <Header/>
//      <div className="searchForm">
//        <div className="container-fluid">
//          <div className="row">
//       <SearchForm hienthi={()=>this.hienthi()}/>
//       <div className="col-12">
//       <hr />
//       </div>
//       <TableData/>
//       {/* <AddUser/> */}
//       <AddUser1 />       

//          </div>
//        </div>
//      </div>

//     </div>
//   );
// }

// export default App;

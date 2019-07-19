import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempvalue:''
        }
    }    
    isChange=(event)=>{
        console.log(event.target.value);
        this.setState(
            {
                tempvalue:event.target.value
            }
        );
        this.props.Checkkenoiprops(this.state.tempvalue);
    }
    Hienthinut = () => {
        if (this.props.hienthinutbienprops === true) {
            return <div className="btn btn-block btn-outline-danger mt-2" onClick={() => this.props.Settrangthai()} > Đóng Lại </div>
        }
        else {
            return <div className="btn btn-block btn-outline-success mt-2" onClick={() => this.props.Settrangthai()} > Hiển Thị </div>
        }
    }
    render() {
        return (<div className="col-12 " >  <div className="form-group" > <div className="btn-group btn-block" >
            < input type="text" className="form-control " placeholder="Nhập từ khóa tìm kiếm" onChange={(event)=>this.isChange(event)} />
            < div className="btn btn-info  " onClick={(dl)=>this.props.Checkkenoiprops(this.state.tempvalue)} > Tìm </div>
        </div >
            <div> {this.Hienthinut()} </div>
        </div ></div>
        );
    }
}
export default SearchForm;
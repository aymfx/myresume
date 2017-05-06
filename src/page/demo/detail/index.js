import React, { Component } from 'react';
import { List } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import axios from 'axios';
import './index.scss';

class DetailPage extends Component {
    constructor() {//它就是之前的getInitialState
        super();
        this.state = {
            dataSource:[{text:null,key:0}]
        };
    }
    componentWillMount(){
        var that=this;
        axios.get('http://www.maodan.online/php/conn3.php')
        .then(function(res){
            console.log(res,1222);
            that.setState({
            	dataSource:res.data
        })
        })
        .catch(function(error){
        	console.log(error);
        });
        
    }
    refresh() {
        this.setState({ dataSource: getRandomDataSource(25) });
    }
    fetch() {
        this.setState({ dataSource: this.state.dataSource.concat(getRandomDataSource(15)) });
    }
	render() {
        return (
            <div className="yo-flex" id="det">
                <Header title="DETAIL"/>
                <List
                    ref="list"
                    extraClass="flex m-list"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
	                	<div className="yo-card">
	                		<div className="extra">
	                			<img className="img-cover" src={item.image} alt="示例图片" width="100%"/>
	                			<div className="img-desc" style={{marginTop:"-90px"}}>
	                				<h3 className="title" style={{fontSize:"18px",color:"#fff"}}>{item.name}</h3>
	                				<p className="desc" style={{fontSize:"14px",color:"#fff"}}>{item.url}</p>
	                			</div>
	                			<p className="desc" style={{fontSize:'14px'}}><span style={{fontWeight:"bold"}}>主要技术: </span>{item.tech}</p>
	                			<p className="desc" style={{fontSize:'14px'}}><span style={{fontWeight:"bold"}}>标签: </span>{item.description}</p>
	                			<p className="desc" style={{fontSize:'14px'}}><span style={{fontWeight:"bold"}}>项目概况: </span>{item.detail}</p>
	                		</div>
	                	</div>
                    }
                />
                <Footer/>
            </div>
        )
    }
}

let guid = -1;

function getArrayByLength(length) {
    var ret = [];
    for (var i = 0; i < length; i++) {
        ret[i] = null;
    }
    return ret;
}

function getRandomList(size) {
    return getArrayByLength(size).fill(1).map(num => parseInt(Math.random() * 100));
}

function getRandomDataSource(size) {
    return getRandomList(size).map(num => ({ text: num, key: ++guid }));
}


export default DetailPage;

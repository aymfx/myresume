import React, { Component } from 'react';
import { List } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import axios from 'axios';
import './index.scss';

class Detail extends Component {
    constructor() {//它就是之前的getInitialState
        super();
        this.state = {
            dataSource:[{text:null,key:0}]
        };
    }
    componentWillMount(){
        var that=this;
        axios.get('http://www.maodan.online/php/conn.php')
        .then(function(res){
            console.log(res,1222);
            that.setState({
            	dataSource: res.data
        })
        })
        .catch(function(error){
        	console.log(error);
        });
        
    }
    componentDidMount(){
        console.log(12222);
        var oul = document.getElementById('change');
        var oli = oul.getElementsByTagName('li');
        console.log(oli,122,oul);
        for (var i = 0; i < oli.length; i++) {
            var element = oli[i];
            element.classList.remove('item-on');
        }
        oli[0].classList.add('item-on');
    }
    refresh() {
        this.setState({ dataSource: getRandomDataSource(25) });
    }
    fetch() {
        this.setState({ dataSource: this.state.dataSource.concat(getRandomDataSource(15)) });
    }
	render() {
        return (
            <div className="yo-flex" style={{background:"#eee"}} id="list">
                <Header title="SKILL" right={{ title: '点我', onTap: () => videoCapture() }} />
                <List
                    ref="list"
                    extraClass="flex m-list"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
                    <any className="lst" style={{width:"100%"}}>
                    	<p style={{background:"#eee",padding:"0.05rem",width:"100%"}}><b style={{marginRight:"10px",fontSize:"18px"}}>{item.category}</b></p>
                    	<div style={{float:"left",padding:"0.1rem"}}>
                    		<img src={item.image} width="60px" height="60px"/>
                    	</div>
                        <div className="flex" style={{marginLeft:"90px"}}>
                           <p style={{padding:"0.1rem"}}><span style={{color:"#00bcd4"}}>skill: </span>{item.name}</p>
                        </div>
                    </any>
                    
                    }
                    onItemTap={(item, i, ds) => {
                        yoHistory.push(`/detail/${item.id}`);
                    }}
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

function videoCapture(){
var cmr = plus.camera.getCamera();
var res = cmr.supportedVideoResolutions[0];
var fmt = cmr.supportedVideoFormats[0];
console.log("Resolution: "+res+", Format: "+fmt);
cmr.startVideoCapture( function( path ){
		alert( "Capture video success: " + path );  
},
function( error ) {
	alert( "Capture video failed: " + error.message );
	},
	{resolution:res,format:fmt}
	);
}


export default Detail;

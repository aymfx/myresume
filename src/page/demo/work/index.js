import React, { Component } from 'react';
import { List,Scroller } from '$yo-component';
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
        axios.get('http://www.maodan.online/php/conn2.php')
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
        oli[1].classList.add('item-on');
    }
    refresh() {
        this.setState({ dataSource: getRandomDataSource(25) });
    }
    fetch() {
        this.setState({ dataSource: this.state.dataSource.concat(getRandomDataSource(15)) });
    }
	render() {
        return (
            <div className="yo-flex" id="work">
                <Header title="WORK" right={{ title: '点我', onTap: () => scan() }} /> 
                
                <List
                    ref="list"
                    extraClass="flex m-list"
                    dataSource={this.state.dataSource}
                    renderItem={(item, i) =>
                    	<div className="yo-card" style={{minHeight:"400px"}}>
                    		<div className="p-title" style={{marginBottom:'10px'}}>
                    			<p style={{fontSize:"0.15rem",fontWeight:"bold"}}><i><img src={item.icon} style={{width:"36px",borderRadius:"50%",marginRight:"10px"}}/></i>{item.name}</p>
                    		</div>
                    		<img src={item.image} style={{width:"100%",marginBottom:'10px'}}/>
                    		<div className="des" style={{paddingRight:"0.1rem",fontSize:"0.14rem"}}>
                    			<p>{item.time}</p>
                    			<p>{item.posts}</p>
                    			<p><a href={item.url}>{item.url}</a></p>
                    			<p>{item.projects}</p>	
                    		</div>
                    	</div>
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
function scan(){
	$.ajax({
			type:'post',
			url:'http://www.maodan.online/sample/php/getsign.php',
			data:{
				url:window.location.href
			},
			dataType:'json'
		}).done(function(res){
			console.log("hhhres:",res);
			wx.config({
			    debug: false,
			    appId: res.appId,
			    timestamp: res.timestamp,
			    nonceStr: res.nonceStr,
			    signature: res.signature,
			    jsApiList: [
			      // 所有要调用的 API 都要加到这个列表中
			      'scanQRCode'
			    ]
			});
			wx.scanQRCode({
		        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
		        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
		        success: function (res) {
		        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
		        
		    	}
		    });
		})
    
}

export default Detail;

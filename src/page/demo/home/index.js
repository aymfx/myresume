import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import Footer from '$component/footer/index.js';
import yoHistory from '$common/history';
import axios from 'axios';
import './index.scss';

class HomePage extends Component {
	
	constructor() {//它就是之前的getInitialState
        super();
        this.state = {
            dataSource:[],
            hasIntro:false
        };
    }

	//请求ajax数据
	componentWillMount(){
		var that=this;
        axios.get('http://www.maodan.online/php/baseinfo.php')
        .then(function(res){
            console.log(res.data);
            that.setState({
            	dataSource:res.data[0]
        })
        })
        .catch(function(error){
        	console.log(error);
        })
		}
	componentDidMount(){
        console.log(12222);
        var oul = document.getElementById('liu');
        var oli = oul.getElementsByTagName('li');
        console.log(oli,122,oul);
        for (var i = 0; i < oli.length; i++) {
            var element = oli[i];
            element.classList.remove('item-on');
        }
        oli[3].classList.add('item-on');
    }

    render() {
        if(!this.state.dataSource){
        	 return (<div>我正在请求数据哦</div>)
        }else{
        	return (
        	
            <div className="yo-flex">
                {
                <div className='yo-flex'>
                    <Header title="简&emsp;历" left={false}/>
    				<Scroller extraClass="flex" onScroll={() => {
                    }}>
				                
                    <div className="header m-content" style={{height:"150px"}}>
                    	<Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/list');
                        }}>
                            <div className="Header">
                                <div className="headerImg">
                                    <img src={this.state.dataSource.image} width="120px" height="130px"/>
                                </div>
                                <div className="headerInfo">
                                    <h3>刘&emsp;洋</h3>
                                    <p className="tel">18879093092</p>
                                    <p className="email">2726815295@qq.com</p>
                                    <p>性别：男</p>
                                </div> 
                            </div>
                        </Touchable>
                    </div>
                    <div className="yo-list yo-list-group yo-scroller content">
                    	<h3 className="label">身份信息：</h3>
                    	<div className="item"><div className="mark">生&emsp;&emsp;日:</div><div className="flex">{this.state.dataSource.birthday}</div></div>
                    	<div className="item"><div className="mark">身份证号:</div><div className="flex">{this.state.dataSource.idcard}</div></div>
                    	<div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">地&emsp;&emsp;址:</div><div className="flex">{this.state.dataSource.address}</div></div>
                    	
                    	<h3 className="label">教育背景：</h3>
                    	<div className="item"><div className="mark">学&emsp;&emsp;校:</div><div className="flex">{this.state.dataSource.school}</div></div>
                    	<div className="item"><div className="mark">专&emsp;&emsp;业:</div><div className="flex">{this.state.dataSource.major}</div></div>
                    	<div className="item"><div className="mark">入&emsp;&emsp;学:</div><div className="flex">{this.state.dataSource.date}</div></div>
                    	<div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">学&emsp;&emsp;历:</div><div className="flex">{this.state.dataSource.education}</div></div>
                    
                    	<h3 className="label">求职意向：</h3>
                    	<div className="item"><div className="mark">工作类型:</div><div className="flex">{this.state.dataSource.jobtype}</div></div>
                    	<div className="item"><div className="mark">地&emsp;&emsp;点:</div><div className="flex">{this.state.dataSource.jobadd}</div></div>
                    	<div className="item"><div className="mark">求职意向:</div><div className="flex">{this.state.dataSource.jobint}</div></div>
                    	<div className="item" style={{borderBottom:'solid #ccc 1px'}}><div className="mark">期望薪资:</div><div className="flex">{this.state.dataSource.salary}</div></div>  
                    </div>
                </Scroller>
                <Footer/>
	 		</div> 
            }
            </div>
        
        )
        }
    } 
}

export default HomePage;

import React, { Component } from 'react';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Footer extends Component {
    render() {
        return (
           	<ul className="yo-tab yo-tab-view" id="change">
           		<Touchable touchClass="m-content-active" onTap={() => {
				
    				yoHistory.push('/list');
				}}>
	                <li className="item item-y-ico">
	                    <i className="icon iconfont icon-jishunengli yo-ico"></i>
	                    Skill
	                </li>
	            </Touchable>
	            <Touchable touchClass="m-content-active" onTap={() => {
    				yoHistory.push('/work');
				}}>
	                <li className="item item-y-ico">
	                    <i className="icon iconfont icon-gongzuo yo-ico"></i>
	                    Work
	                </li>
                </Touchable>
                <Touchable touchClass="m-content-active" onTap={() => {
    				yoHistory.push('/project');
				}}>
	                <li className="item item-y-ico">
	                    <i className="icon iconfont icon-xiangmu yo-ico"></i>
	                    Project
	                </li>
                </Touchable>
                <Touchable touchClass="m-content-active" onTap={() => {
    				yoHistory.push('/');
				}}>
	                <li className="item item-y-ico item-on">
	                    <i className="icon iconfont icon-wode yo-ico"></i>
	                    Mine
	                </li>
	            </Touchable>
            </ul>
        )
    }
}
/*<Touchable touchClass="m-content-active" onTap={() => {
    yoHistory.push('/list');
}}>
    <div>
        <p className="title">Hello World!</p>
        <p className="notice">Try To Tap This Area!</p>
    </div>
</Touchable>*/
/*Footer.defaultProps = {
    title: '标题',
    left: {
        title: '&#xf07d;',
        onTap: function () {
            yoHistory.go(-1)
        }
    }
}*/

export default Footer;

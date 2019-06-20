/*
* @Author: Rosen
* @Date:   2018-01-23 18:03:55
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-26 13:41:51
*/

import React        from 'react';
import { Link }     from 'react-router-dom'; 

import PageTitle    from 'component/page-title/index.jsx'; 

class Error extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div id="page-wrapper">
            <PageTitle title="出错啦!"/>
            <div className="row">
                <div className="col-md-12">
                    <span>找不到该路径，</span>
                    <Link to="/">点我返回首页</Link>
                </div>
            </div>
        </div>
        );
    }
}

 

export default Error;
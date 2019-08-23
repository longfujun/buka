import React, { Component } from 'react'
import './style.scss'

export default class Search extends Component {
    render() {
        return (
            <div className="page subpage" id="search">
                <div className="top border-bottom">
                    <img src="http://m.buka.cn/static/img/back_01.png" alt="" className="return" onClick={this.returnAction.bind(this)} />
                    <div className="ipt">
                        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt=""/>
                        <input type="search" placeholder="漫画|作者|资讯|漫展" />
                    </div>
                    <span>搜索</span>
                </div>
         </div>
        )
    }
    returnAction(){
        this.props.history.goBack();
    }
}
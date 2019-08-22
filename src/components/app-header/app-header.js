import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default (props)=>{
    return (
        <header className="app-header">

            <div className="left">
                <Link to="/home">
                    <img src="http://m.buka.cn/static/img/logo_2x.png" alt="" className="lef" />
                </Link>
                <span>下载APP</span>
                <img src="http://m.buka.cn/static/img/research_2x.png" alt="" className="rit" />
            </div>

        </header>
    )
}
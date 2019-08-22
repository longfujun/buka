import React from 'react'
import Header from '../../../components/app-header/app-header'
import './style.scss'
const Menu = (props)=>{
    return (
        <div className="page" id="menu">
         <Header/>
            <div className="conten" >
                <h1>排行</h1>
            </div>
        </div>
    )
}

export default Menu;
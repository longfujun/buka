import React from 'react'
import {NavLink} from 'react-router-dom'
import './style.scss'

export default (props)=>{
    const navList = [
        {id: 1, name: '推荐', path: '/home'},
        {id: 2, name: '排行', path: '/menu'},
        {id: 5, name: '分类', path: '/mine'}
    ];
    return (
        <nav className="tab-bar border-bottom">
        {
            navList.map(item=>(
                <NavLink className="tab-item" key={item.id} to={item.path}>
                    <span>{item.name}</span>
                </NavLink>
            ))
        }
        </nav>
    )
}
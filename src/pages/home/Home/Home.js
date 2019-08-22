import React from 'react'
import Header from '../../../components/app-header/app-header'
import './style.scss'
const Home = (props)=>{
    return (
        <div className="page" id="home">
         <Header/>
            <div className="conten" >
                <h1>推荐</h1>
            </div>
        </div>
    )
}

export default Home;
import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import Loading from './pages/common/Loading/Loading'
import TabBar from './components/tab-bar/tab-bar'

// 组件懒加载
// 根页面
const Home = lazy(()=>import('./pages/home/Home/Home'));
const Menu = lazy(()=>import('./pages/menu/Menu/Menu'));
const Mine = lazy(()=>import('./pages/mine/Mine/Mine'));

// 子页面


const NotFind = lazy(()=>import('./pages/common/NotFind/NotFind'));
const Login = lazy(()=>import('./pages/common/Login/Login'));





const AppPanel = (props)=>{
  // 错误边界触发
  // '123'.push('4');
  return (
    <Router>
      <div className="app">
        {/* 根页面 */}
        <Switch>
          <Route path="/" exact render={()=>{
            return <Redirect to="/home"/>
          }}/>
          <Route path='/home' component={Home}/>
          <Route path='/menu' component={Menu}/>
          <Route path='/mine' component={Mine}/>
          <Route component={NotFind}/>
        </Switch>

        {/* 子页面 */}
        

        {/* 导航栏 */}
        <TabBar />

      </div>
    </Router>
  )
}

const App = (props)=>{
  return (
    <Suspense fallback={<Loading/>}>
      {props.isLogin ? <AppPanel /> : <Login />}
    </Suspense>
  );
}

const mapStateToProps = (state)=>({
  isLogin: state.user.isLogin
})
const mapDispatchToProps = ()=>({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);
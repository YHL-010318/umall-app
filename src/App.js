import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom"
import MyRoute from "./utils/MyRoute"
import asyncCom from './utils/asyncComponent'
import "./App.styl"
let Login = asyncCom(() => import("./pages/Login/Login"))
let Register = asyncCom(() => import("./pages/Register/Register"))
let Detail = asyncCom(() => import("./pages/Detail/Detail"))
let List = asyncCom(() => import("./pages/List/List"))
let Index = asyncCom(() => import("./pages/Index/Index"))
export default function App() {
  return (
    <div className="app">
      {/* 一级路由出口 */}
      <Switch>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    <MyRoute path="/index" component={Index}></MyRoute>
    <MyRoute path="/detail" component={Detail}></MyRoute>
    <MyRoute path="/list/:name/:id" component={List}></MyRoute>
    <Redirect to="/login"></Redirect>

</Switch>
    </div>
  )
}

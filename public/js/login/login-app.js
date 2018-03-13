import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Login from "./components/Login"
import store from "./store"

const loginApp = document.getElementById('login-app')

ReactDOM.render(<Provider store={store}> <Login/> </Provider>, loginApp)
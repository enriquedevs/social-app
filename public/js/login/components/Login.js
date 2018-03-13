import React from "react"
import { connect } from "react-redux"

import { loginToTwitter } from "../actions/loginActions"

@connect((store) => {
  return {
    fetching: store.auth.fetching,
    error: store.auth.error
  };
})
export default class Login extends React.Component {

  fetchTweets() {
    this.props.dispatch(loginToTwitter(this.props.user.name, this.props.user.pwd))
  }

  render() {
    const { fetching, error } = this.props;

    return 
      <div>
        <h1>{user.name}</h1>
        <br/>
        <h1>{user.pwd}</h1>
        <br/>
        <h1>{fetching}</h1>
        <br/>
        <h1>{error}</h1>
      </div>
  }
}
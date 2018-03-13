import axios from "axios";

export function loginToTwitter(user, pwd) {
  return function(dispatch) {
    dispatch({type: "LOGIN_TWITTER", payload: {...user, ...pwd}});
    
    axios.get("/oauth_request")
      .then((response) => {
        dispatch({type: "LOGIN_TWITTER_SUCCEDED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "LOGIN_TWITTER_REJECTED", payload: err})
      })
  }
}
export default function reducer(state={
    user: null,
    pwd: null,
    fetching: false,
    error: null
  }, action) {

    switch (action.type) {
      case "LOGIN_TWITTER": {
        return {...state, fetching: true}
      }
      case "LOGIN_TWITTER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "LOGIN_TWITTER_SUCCEDED": {
        return {
          ...state,
          fetching: false,
          user: action.payload.user,
          pwd: action.payload.pwd
        }
      }
    }

    return state
}
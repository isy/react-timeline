export function mapStateToProps(state) {
  return state;
}

export function mapDispatchProps(dispatch) {
  return {
    postTweet: text => {
      dispatch({ type: "POST_TWEET", text });
    },

    changeText: text => {
      dispatch({ type: "CHANGE_TEXT", text });
    }
  };
}

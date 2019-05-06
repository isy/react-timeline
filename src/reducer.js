const initialState = {
  timeline: [],
  text: ""
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "POST_TWEET":
      return {
        ...state,
        text: "",
        timeline: [action.text, ...state.timeline]
      };

    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
}

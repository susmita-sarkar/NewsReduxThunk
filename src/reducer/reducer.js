const initialState = {
  newsArr: []
};

export function changeNews(state = initialState, action) {
  console.log(action.payload);
  switch (action.type) {
    case "CHANGE_NEWS":
    //dsfsdfsdf
      return {
        ...state,
        newsArr: action.payload.articles
      };

    default:
      return state;
  }
}

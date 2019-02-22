const INITIAL_STATE = {
	newsData: {
		newsdata: [],
		newsloading: false,
	},

}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_NEWS":
		state.newsData.newsloading = true;
		return state;
		case "GET_NEWS_OK":
		state.newsData.newsloading = false;
	    state.newsData.newsdata = action.responseData;
		return state;
		case "GET_NEWS_ERROR":
		state.newsData.newsloading = false;
		state.newsData.newsdata = action.responseData;
		return state;
	default:
		return state;
	}
}
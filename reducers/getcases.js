const INITIAL_STATE = {
	GetCases: {
		getcases: [],
		newsloading: false,
	},

}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_CASES":
		state.GetCases.newsloading = true;
		return state;
		case "GET_CASES_OK":
		state.GetCases.newsloading = false;
	    state.GetCases.getcases = action.responseData;
		return state;
		case "GET_CASES_ERROR":
		state.GetCases.newsloading = false;
		state.GetCases.getcases = action.responseData;
		return state;
	default:
		return state;
	}
}
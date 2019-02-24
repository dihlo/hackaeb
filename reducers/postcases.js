const INITIAL_STATE = {
	PostCases: {
		data: {},
		loading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "POST_CASES":
		state.PostCases.loading = true;
		return state;
		case "POST_CASES_OK":
		state.PostCases.loading = false;
		state.PostCases.data = action.responseData;
		return state;
		case "POST_CASES_ERROR":
		state.PostCases.loading = false;
		state.PostCases.error = action.responseData;
		return state;
	default:
		return state;
	}
}


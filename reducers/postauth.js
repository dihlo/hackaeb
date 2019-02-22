const INITIAL_STATE = {
	PostAuth: {
		data: {},
		loading: false,		
	}
}
export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "POST_AUTH":
		state.PostAuth.loading = true;
		return state;
		case "POST_AUTH_OK":
		state.PostAuth.loading = false;
		state.PostAuth.data = action.responseData;
		return state;
		case "POST_AUTH_ERROR":
		state.PostAuth.loading = false;
		state.PostAuth.error = action.responseData;
		return state;
	default:
		return state;
	}
}


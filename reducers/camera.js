const INITIAL_STATE = {
	cameraData: {
		camdata: [],
		loading: false,
	},

}

export default function (state=INITIAL_STATE, action) {
	switch (action.type) {
		case "GET_CAMERA":
		state.cameraData.loading = true;
		return state;
		case "GET_CAMERA_OK":
        state.cameraData.loading = false;
	    state.cameraData.camdata = action.responseData;
		return state;
		case "GET_CAMERA_ERROR":
		state.cameraData.loading = false;
		state.cameraData.error = action.responseData;
		return state;
	default:
		return state;
	}
}
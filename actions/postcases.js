import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const postcases = (data) => {
    console.log('postcases');
	console.log(data);
	return (dispatch) => {
		dispatch({
			type: "POST_CASES"
		});
		axios({
		  method:'post',
		  url:'http://diybankapi.us.to/api/v1/cases',
		  data: data
		})
		.then(function(response) {
				console.log(response)
				dispatch({
					type: "POST_CASES_OK",
					responseData: response.data.token,
				});
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
				
		})
		.catch(function (error) {
			console.log(error)  
			dispatch({
				type: "POST_CASES_ERROR",
				responseData: "error_meals",
			});
		});
	};
};

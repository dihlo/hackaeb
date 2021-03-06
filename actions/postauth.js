import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const postauth = (data) => {
	console.log(data);
	return (dispatch) => {
		dispatch({
			type: "POST_AUTH"
		});
		axios({
		  method:'post',
		  url:'http://diybankapi.us.to/api/v1/login',
		  data: data
		})
		.then(function(response) {
				console.log(response)
				dispatch({
					type: "POST_AUTH_OK",
					responseData: response.data.token,
				});
				axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
				console.log('Bearer ' + response.data.token);
				Actions.prodtab();
		})
		.catch(function (error) {
			console.log(error)  
			dispatch({
				type: "POST_AUTH_ERROR",
				responseData: "error_meals",
			});
		});
	};
};

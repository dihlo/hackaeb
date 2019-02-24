import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const postcases = (data) => {
  console.log('------------------postcases---------------');
	console.log(data);
	// Object.keys(data.actions).map( (key) => {
	// 	return data.actions[key]
	// } )
	//data = JSON.stringify(data);
	newdata = JSON.stringify([data]);
	console.log(newdata);
	return (dispatch) => {
		dispatch({
			type: "POST_CASES"
		});
		axios({
		  method:'post',
		  url:'http://diybankapi.us.to/api/v1/cases',
		  data: newdata
		})
		.then(function(response) {
			console.log('------------------postcases response---------------');
				console.log(response)
				dispatch({
					type: "POST_CASES_OK",
					responseData: response.data,
				});
		})
		.catch(function (error) {
			console.log('------------------postcases error---------------');
			console.log(error)  
			dispatch({
				type: "POST_CASES_ERROR",
				responseData: "error_meals",
			});
		});
	};
};

import axios from 'axios';

export const camera = () => {
	console.log('Я в камера');
	return (dispatch) => {
		dispatch({
			type: "GET_CAMERA"
		});

		axios({
		  method:'get',
		  url:'http://sadikapi.s-vfu.ru/cameras',
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "GET_CAMERA_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "GET_CAMERA_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};

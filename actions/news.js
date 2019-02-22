import axios from 'axios';

export const news = () => {
	console.log('Я в news');
	return (dispatch) => {
		dispatch({
			type: "GET_NEWS"
		});
		console.log(axios.defaults.headers)
		axios({
		  method:'get',
		  url:'http://api.chukuruk.ru/api/v1/news',
		})
		  .then(function(response) {
		  	console.log(response);
		   	dispatch({
				type: "GET_NEWS_OK",
				responseData: response.data,
			});
		  })
		  .catch(function (error) {
		   	dispatch({
				type: "GET_NEWS_ERROR",
				responseData: "error_meals",
			});		  	
		});
	};
};

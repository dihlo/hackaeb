import axios from 'axios';

export function getcases() {
    return (dispatch) => {
        dispatch({
            type: "GET_CASES"
        });

        axios({
            method:'get',
            url:'http://diybankapi.us.to/api/v1/cases',
        })
        .then(function(response) {
            console.log("in getcases OK");
            console.log(response.data);
            dispatch({
                type: "GET_CASES_OK",
                responseData: response.data,
            });
        })
        .catch(function (error) {
            console.log("in getcases ERROR");
            console.log(error);
            dispatch({
                type: "GET_CASES_ERROR",
                responseData: "error_meals",
            });		  	
        });
    }
};

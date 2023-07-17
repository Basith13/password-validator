import axios from "axios";
export const requestPassword = (password) => async (dispatch) => {
  dispatch({ type: "SAVE_PASSWORD_REQUEST" });

  // Perform asynchronous operation
  return axios
    .post("http://localhost:5500/password", {
      password,
    })
    .then((response) =>{
      alert("password saved",response);
    })
    .then((data) => {
      // Dispatch success action
      dispatch({ type: "SAVE_PASSWORD_SUCCESS", payload: data });
    })
    .catch((error) => {
      // Dispatch error action
      dispatch({ type: "SAVE_PASSWORD_FAILURE", payload: error.message });
    });
};

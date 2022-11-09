import axios from "axios";

function registerUser(params:any) {
  const endpoint = 'https://resido-onboarding.herokuapp.com/users';
  return axios.post(endpoint, { ...params.params});
}

export { registerUser }
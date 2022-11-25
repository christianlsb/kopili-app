import Api from "./api";

export const SignUp = async (user_data) => {
  const response = await Api.post("user/create", user_data);

   return response;
  
};

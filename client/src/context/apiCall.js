import { loginFailure, loginStart, loginSuccess, logOut} from "./userRedux";
import { publicRequest } from "../requestMethod";
import { toast } from "react-toastify";


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
    toast.error("Something went wrong !",{
      position: "bottom-center"
  });
  }
};

export const logout = (dispatch)=>{
  dispatch(logOut())
}

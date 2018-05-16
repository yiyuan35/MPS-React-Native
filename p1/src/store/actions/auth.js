import { TRY_AUTH } from './actionTypes';
import App from "../../../App";

export const tryAuth = (authData) => {
    return {
        type: TRY_AUTH,
        authData: authData
    };
};

export const authLogout = () => {
    return dispatch => {
    //   dispatch(authClearStorage()).then(() => {
        App();
    //   });
    //   dispatch(authRemoveToken());
    };
  };
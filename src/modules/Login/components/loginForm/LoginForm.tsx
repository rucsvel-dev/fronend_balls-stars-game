import React, { FC } from 'react';

import {LoginFormProps} from "@modules/Login/components/loginForm/loginFormTypes";
// import GoogleLogin from "react-google-login";

export const LoginForm: FC<LoginFormProps> = ({login}) => {

    return (
        <div>
            <div onClick={login}>dsadad</div>
            {/*<GoogleLogin*/}
            {/*    clientId={'sdasdasad'}*/}
            {/*    buttonText="Log in with Google"*/}
            {/*    // onSuccess={handleLogin}*/}
            {/*    // onFailure={handleLogin}*/}
            {/*    cookiePolicy={'single_host_origin'}*/}
            {/*/>*/}
        </div>
    );
};

import React, {useCallback, useEffect} from 'react';
import { connect, useSelector, useDispatch, } from 'react-redux';
import { RootState } from '@/app/store';
import { sessionStart, startLoadAssets } from '@modules/Common/CommonSlice';
import {Loading} from "@modules/Common/components/loading/Loading";
import { Redirect, useHistory } from 'react-router-dom';
import {LoginForm} from "@modules/Login/components/loginForm/LoginForm";
import { login } from '@modules/Login/LoginSlice';

const mapStateToProps = ({ login, common }: RootState) => ({
    ...login,
    ...common
});

const mapDispatchToProps = {
    sessionStart,
    startLoadAssets,
    login
};

export type Props = ReturnType<typeof mapStateToProps> &
    typeof mapDispatchToProps;

export const LoginComponent: React.FC<Props> = (
    {
        isNewSession,
        assetsLoaded,
        session,
        sessionChecked,
        sessionStart,
        login,
        startLoadAssets,
    }: Props) => {

    const history = useHistory();
    if(isNewSession){
        sessionStart()
    }

    if(!assetsLoaded){
        startLoadAssets();
    }

    const loginAndGoHomeRoute = useCallback(async () => {
        login();
        history.push('/home');
    }, []);

    return (
        <>
            {assetsLoaded ?
                (sessionChecked ?
                    (session ? <Redirect to='/home'/> : <LoginForm login={loginAndGoHomeRoute}/> )
                        :
                    <Loading/>
                )
                    :
                <Loading/>
            }
        </>
    )
};

export const Login = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent);

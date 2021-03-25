import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../store/config'
import { AuthActions } from './actions';
import { AnyAction } from 'redux';

function* handleFetchUser({path, payload}: any){

    try {
        const res  = yield call(config.callApi, 'post', config.api, path, payload);
        
        if(res.errors){
            yield put({type : AuthActions.AUTH_LOGIN_FETCH_USER_ERROR ,error : res.errors[0].message})
        } else {
            yield put({ type : AuthActions.AUTH_LOGIN_FETCH_USER_SUCCESS, payload : res.data.users.login })
        }
    } catch(e) {
        throw new Error(e);
    }
}

/**
 * verify token
 */
function* handleVerifyToken({path, payload} : AnyAction){

    yield config.tryFetching(
        path,
        payload,
        AuthActions.AUTH_TOKEN_VERIFY_FALSE,
        AuthActions.AUTH_TOKEN_VERIFY_TRUE
    )

}

function* handleAuthByGoogle({path, payload} : AnyAction){
    yield config.tryFetching(
        path,
        payload,
        AuthActions.AUTH_BY_GOOGLE_ERROR,
        AuthActions.AUTH_BY_GOOGLE_SUCCESS
    )
}

function* watchFetchUser(){
    yield takeEvery(AuthActions.AUTH_LOGIN_FETCH_USER, handleFetchUser)
    yield takeEvery(AuthActions.AUTH_TOKEN_VERIFY, handleVerifyToken)
    yield takeEvery(AuthActions.AUTH_BY_GOOGLE, handleAuthByGoogle)
}

function* AuthSaga(){
    yield all([fork(watchFetchUser)])
}

export default AuthSaga;
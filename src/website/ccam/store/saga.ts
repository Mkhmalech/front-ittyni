import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../store/config';
import { CCAMActions } from './actions';
import { AnyAction } from 'redux';



function* CCAMListByCode({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        CCAMActions.CCAM_LIST_BY_CODE_ERROR,
        CCAMActions.CCAM_LIST_BY_CODE_SUCCESS
    )
}
//watcher func dispatcher
function* watchCCAM(){

    // fetch tests form server 
    yield takeEvery(CCAMActions.CCAM_LIST_BY_CODE, CCAMListByCode)
}

export function* CCAMSaga(){
    yield all([fork(watchCCAM)])
}
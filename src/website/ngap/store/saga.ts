import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../store/config';
import { NGAPActions } from './actions';
import { AnyAction } from 'redux';



function* NGAPFetchByCode({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        NGAPActions.NGAP_LIST_BY_CODE_ERROR,
        NGAPActions.NGAP_LIST_BY_CODE_SUCCESS
    )
}
//watcher func dispatcher
function* watchCCAM(){

    // fetch tests form server 
    yield takeEvery(NGAPActions.NGAP_LIST_BY_CODE, NGAPFetchByCode)
}

export function* CCAMSaga(){
    yield all([fork(watchCCAM)])
}
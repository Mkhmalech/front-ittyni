import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../store/config';
import { NGAPActions } from './actions';
import { AnyAction } from 'redux';



function* NGAPFetchChapters({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        NGAPActions.NGAP_LIST_CHAPTERS_ERROR,
        NGAPActions.NGAP_LIST_CHAPTERS_SUCCESS
    )
}

function* NGAPFetchGroups({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        NGAPActions.NGAP_LIST_BY_GROUPS_ERROR,
        NGAPActions.NGAP_LIST_BY_GROUPS_SUCCESS
    )
}

function* NGAPFetchActes({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        NGAPActions.NGAP_LIST_ACTES_ERROR,
        NGAPActions.NGAP_LIST_ACTES_SUCCESS
    )
}

function* NGAPFetchDetails({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        NGAPActions.NGAP_FETCH_DETAILS_ERROR,
        NGAPActions.NGAP_FETCH_DETAILS_SUCCESS
    )
}
//watcher func dispatcher
function* watchNGAP(){

    // fetch tests form server 
    yield takeEvery(NGAPActions.NGAP_LIST_CHAPTERS, NGAPFetchChapters)
    // fetch tests form server 
    yield takeEvery(NGAPActions.NGAP_LIST_BY_GROUPS, NGAPFetchGroups)
    // fetch tests form server 
    yield takeEvery(NGAPActions.NGAP_LIST_ACTES, NGAPFetchActes)
    // fetch tests form server 
    yield takeEvery(NGAPActions.NGAP_FETCH_DETAILS, NGAPFetchDetails)
}

export function* NGAPSaga(){
    yield all([fork(watchNGAP)])
}
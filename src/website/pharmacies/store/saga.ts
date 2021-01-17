import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../store/config';
import { PharmaActions } from './actions';
import { AnyAction } from 'redux';


// Fetch twenty pharma
function* PharmaListByCity({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        PharmaActions.PHARMA_LIST_BY_CITY_ERROR,
        PharmaActions.PHARMA_LIST_BY_CITY_SUCCESS
    )
}
// Fetch twenty pharma
function* PharmaListAllCity({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        PharmaActions.PHARMA_LIST_ALL_CITY_ERROR,
        PharmaActions.PHARMA_LIST_ALL_CITY_SUCCESS
    )
}
// Fetch pharma details
function* PharmaFetchDetails({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        PharmaActions.PHARMA_FETCH_DETAILS_ERROR,
        PharmaActions.PHARMA_FETCH_DETAILS_SUCCESS
    )
}
// Fetch pharma details
function* PharmaSearchByName({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        PharmaActions.PHARMA_SEARCH_BY_NAME_ERROR,
        PharmaActions.PHARMA_SEARCH_BY_NAME_SUCCESS
    )
}
//watcher func dispatcher
function* watchPHARMA(){

    // fetch twenty pharma
    yield takeEvery(PharmaActions.PHARMA_LIST_BY_CITY, PharmaListByCity)
    // fetch all pharma
    yield takeEvery(PharmaActions.PHARMA_LIST_ALL_CITY, PharmaListAllCity)
    // fetch all pharma
    yield takeEvery(PharmaActions.PHARMA_FETCH_DETAILS, PharmaFetchDetails)
    // fetch all pharma
    yield takeEvery(PharmaActions.PHARMA_SEARCH_BY_NAME, PharmaSearchByName)
}

export function* PHARMASaga(){
    yield all([fork(watchPHARMA)])
}
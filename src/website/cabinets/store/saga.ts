import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../store/config';
import { CabinetActions } from './actions';
import { AnyAction } from 'redux';


// Fetch twenty pharma
function* CabinetFetchTotalCity({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        CabinetActions.CABINET_LIST_BY_CITY_TOTAL_ERROR,
        CabinetActions.CABINET_LIST_BY_CITY_TOTAL_SUCCESS
    )
}
// Fetch twenty pharma
function* CabinetListByCity({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        CabinetActions.CABINET_LIST_BY_CITY_ERROR,
        CabinetActions.CABINET_LIST_BY_CITY_SUCCESS
    )
}
// Fetch twenty pharma
function* PharmaListAllCity({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        CabinetActions.CABINET_LIST_ALL_CITY_ERROR,
        CabinetActions.CABINET_LIST_ALL_CITY_SUCCESS
    )
}
// Fetch pharma details
function* cabinetFetchDetails({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        CabinetActions.CABINET_FETCH_DETAILS_ERROR,
        CabinetActions.CABINET_FETCH_DETAILS_SUCCESS
    )
}
// Fetch pharma details
function* PharmaSearchByName({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        CabinetActions.CABINET_SEARCH_BY_NAME_ERROR,
        CabinetActions.CABINET_SEARCH_BY_NAME_SUCCESS
    )
}
//watcher func dispatcher
function* watchCabinet(){

    // fetch twenty pharma
    yield takeEvery(CabinetActions.CABINET_LIST_BY_CITY_TOTAL, CabinetFetchTotalCity)
    // fetch twenty pharma
    yield takeEvery(CabinetActions.CABINET_LIST_BY_CITY, CabinetListByCity)
    // fetch all pharma
    yield takeEvery(CabinetActions.CABINET_LIST_ALL_CITY, PharmaListAllCity)
    // fetch all pharma
    yield takeEvery(CabinetActions.CABINET_FETCH_DETAILS, cabinetFetchDetails)
    // fetch all pharma
    yield takeEvery(CabinetActions.CABINET_SEARCH_BY_NAME, PharmaSearchByName)
}

export function* CabinetSaga(){
    yield all([fork(watchCabinet)])
}
import { all, fork, takeEvery } from 'redux-saga/effects'
import * as config from '../../../../store/config';
import { LaboActions } from './actions';
import { AnyAction } from 'redux';


/**
 * labo fetch all
 * @param path
 * @param payload
 */
function* LaboFetchAll({path, payload} : AnyAction) {
    yield config.tryFetching(
        path,
        payload,
        LaboActions.LAB_LABOS_FETCH_ALL_ERROR,
        LaboActions.LAB_LABOS_FETCH_ALL_SUCCESS
    )
}
/**
 * labo fetch all
 * @param path
 * @param payload
 */
function* LaboFetchByCity({path, payload} : AnyAction) {
    yield config.tryFetching(
        path,
        payload,
        LaboActions.LAB_LABOS_FETCH_BY_CITY_ERROR,
        LaboActions.LAB_LABOS_FETCH_BY_CITY_SUCCESS
    )
}
/**
 * labo fetch all
 * @param path
 * @param payload
 */
function* LaboListTwentyByCity({path, payload} : AnyAction) {
    yield config.tryFetching(
        path,
        payload,
        LaboActions.LAB_LABOS_FETCH_TWENTY_BY_CITY_ERROR,
        LaboActions.LAB_LABOS_FETCH_TWENTY_BY_CITY_SUCCESS
    )
}
/**
 * labo fetch details
 */
function* LaboFetchDetails({path, payload} : AnyAction){
    yield config.tryFetching(
        path,
        payload,
        LaboActions.LAB_LABO_FETCH_DETAILS_ERROR,
        LaboActions.LAB_LABO_FETCH_DETAILS_SUCCESS
    )
}
/**
 * labo fetch details
 */
function* LaboSearchByName({path, payload} : AnyAction){
    yield config.tryFetching(
        path,
        payload,
        LaboActions.LAB_LABO_SEARCH_BY_NAME_ERROR,
        LaboActions.LAB_LABO_SEARCH_BY_NAME_SUCCESS
    )
}
//watcher func dispatcher
function* watchLabLabo(){

    // fetch tests form server 
    yield takeEvery(LaboActions.LAB_LABOS_FETCH_ALL, LaboFetchAll)
    yield takeEvery(LaboActions.LAB_LABOS_FETCH_TWENTY_BY_CITY, LaboListTwentyByCity)
    yield takeEvery(LaboActions.LAB_LABOS_FETCH_BY_CITY, LaboFetchByCity)
    yield takeEvery(LaboActions.LAB_LABO_FETCH_DETAILS, LaboFetchDetails)
    yield takeEvery(LaboActions.LAB_LABO_SEARCH_BY_NAME, LaboSearchByName)
}

export function* LabLaboSaga(){
    yield all([fork(watchLabLabo)])
}
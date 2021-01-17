import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import * as config from '../../../store/config';
import { DrugActions } from './actions';
import { AnyAction } from 'redux';



function* DrugFetchByAlphabete({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_LIST_BY_ALPHABETE_ERROR,
        DrugActions.DRUG_LIST_BY_ALPHABETE_SUCCESS
    )
}
function* DrugFetchByCategory({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_LIST_CATEGORIES_ERROR,
        DrugActions.DRUG_LIST_CATEGORIES_SUCCESS
    )
}
function* DrugFetchByChapter({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_LIST_CHAPTERS_ERROR,
        DrugActions.DRUG_LIST_CHAPTERS_SUCCESS
    )
}
function* DrugFetchBySousChapter({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_LIST_SOUS_CHAPTERS_ERROR,
        DrugActions.DRUG_LIST_SOUS_CHAPTERS_SUCCESS
    )
}
function* DrugFetchByGroup({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_LIST_GROUP_ERROR,
        DrugActions.DRUG_LIST_GROUP_SUCCESS
    )
}
function* DrugFetchByAtc({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_LIST_BY_ATC_ERROR,
        DrugActions.DRUG_LIST_BY_ATC_SUCCESS
    )
}
function* DrugFetchDetails({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_FETCH_DETAILS_ERROR,
        DrugActions.DRUG_FETCH_DETAILS_SUCCESS
    )
}
function* DrugFetchByName({path, payload}: AnyAction){
    yield config.tryFetching(
        path, 
        payload,
        DrugActions.DRUG_LIST_BY_NAME_ERROR,
        DrugActions.DRUG_LIST_BY_NAME_SUCCESS
    )
}
//watcher func dispatcher
function* watchMedicine(){

    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_LIST_BY_ALPHABETE, DrugFetchByAlphabete)
    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_LIST_CATEGORIES, DrugFetchByCategory)
    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_LIST_CHAPTERS, DrugFetchByChapter)
    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_LIST_SOUS_CHAPTERS, DrugFetchBySousChapter)
    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_LIST_GROUP, DrugFetchByGroup)
    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_LIST_BY_ATC, DrugFetchByAtc)
    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_FETCH_DETAILS, DrugFetchDetails)
    // fetch tests form server 
    yield takeEvery(DrugActions.DRUG_LIST_BY_NAME, DrugFetchByName)
}

export function* MedicineSaga(){
    yield all([fork(watchMedicine)])
}
import { AnyAction } from 'redux';
import { DrugActions } from './actions';

export const MedicineReducer = (state={}, action : AnyAction) =>{
    switch (action.type) {
        case DrugActions.DRUG_LIST_CATEGORIES_SUCCESS :
            return { ...state, categories : action.payload.listAtcCategories }

        case DrugActions.DRUG_LIST_CHAPTERS_SUCCESS :
            return { ...state, chapters : action.payload.listAtcChapter }

        case DrugActions.DRUG_LIST_SOUS_CHAPTERS_SUCCESS :
            return { ...state, sousChapters : action.payload.listAtcGroup }

        case DrugActions.DRUG_LIST_GROUP_SUCCESS :
            return { ...state, groups : action.payload.listAtcSousGroup }

        case DrugActions.DRUG_LIST_BY_ATC_SUCCESS :
            return { ...state, atcDrugs : action.payload.listDrugByAtc }

        case DrugActions.DRUG_FETCH_DETAILS_SUCCESS :
            return { ...state, details : action.payload.fetchMedicine }

        case DrugActions.DRUG_LIST_BY_NAME_SUCCESS :
            return { ...state, searchMedicine : action.payload.fetchMedicneByName }
            
        default:
            return { ...state };
    }
}
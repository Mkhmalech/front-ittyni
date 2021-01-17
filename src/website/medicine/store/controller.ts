import { store } from "../../..";
import { DrugActions } from "./actions";

export const fetchDrugCategories= ()=>store.dispatch({
    type: DrugActions.DRUG_LIST_CATEGORIES,
    path : 'medicine',
    payload:{
        query:`query{listAtcCategories}`
    }
})
export const fetchDrugChapters= (chapter: string)=>store.dispatch({
    type: DrugActions.DRUG_LIST_CHAPTERS,
    path : 'medicine',
    payload:{
        query:`query{listAtcChapter(chapter:"${chapter}")}`
    }
})
export const fetchDrugSousChapters= (sousChapter: string)=>store.dispatch({
    type: DrugActions.DRUG_LIST_SOUS_CHAPTERS,
    path : 'medicine',
    payload:{
        query:`query{listAtcGroup(sousChapter:"${sousChapter}")}`
    }
})
export const fetchDrugSousGroups= (group: string)=>store.dispatch({
    type: DrugActions.DRUG_LIST_GROUP,
    path : 'medicine',
    payload:{
        query:`query{listAtcSousGroup(group:"${group}"){title code}}`
    }
})
export const fetchDrugByAtc= (code: string)=>store.dispatch({
    type: DrugActions.DRUG_LIST_BY_ATC,
    path : 'medicine',
    payload:{
        query:`query{listDrugByAtc(code:"${code}"){atc _id names{title}}}`
    }
})
export const fetchMedicineDetails= (id: string)=>store.dispatch({
    type: DrugActions.DRUG_FETCH_DETAILS,
    path : 'medicine',
    payload:{
        query:`query{fetchMedicine(id:"${id}"){_id composition atc category names{title presentation ppv distributor}}}`
    }
})
export const searchMedicines= (name: string)=>store.dispatch({
    type: DrugActions.DRUG_LIST_BY_NAME,
    path : 'medicine',
    payload:{
        query:`query{fetchMedicneByName(name:"${name}"){_id names{title}}}`
    }
})
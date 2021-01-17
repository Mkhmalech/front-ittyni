import { store } from "../../..";
import { PharmaActions } from "./actions";

export const pharmafetchByCity = (city: string) =>store.dispatch({
    type : PharmaActions.PHARMA_LIST_BY_CITY,
    path : 'pharma',
    payload : {
        query:`query{fetchTwentyByCity(city: "${city}"){_id account{name}contact{address{street city}tele{fix}}}}`
    }
})
export const pharmafetchAllCity = (city: string) =>store.dispatch({
    type : PharmaActions.PHARMA_LIST_ALL_CITY,
    path : 'pharma',
    payload : {
        query:`query{fetchAllByCity(city: "${city}"){_id account{name}contact{address{street city}tele{fix}}}}`
    }
})
export const pharmafetchDetails = (name: string) =>store.dispatch({
    type : PharmaActions.PHARMA_FETCH_DETAILS,
    path : 'pharma',
    payload : {
        query:`query{fetchPharmaById(id:"${name}"){_id account {name}contact{address{street city}tele{fix}}}}`
    }
})
export const pharmaSearchByName = (name: string) =>store.dispatch({
    type : PharmaActions.PHARMA_SEARCH_BY_NAME,
    path : 'pharma',
    payload : {
        query:`query{searchPharmaByName(name:"${name}"){_id account{name}contact{address{city}}}}`
    }
})
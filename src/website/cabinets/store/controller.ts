import { store } from "../../..";
import { CabinetActions } from "./actions";

export const cabinetfetchTotalCity = () =>store.dispatch({
    type : CabinetActions.CABINET_LIST_BY_CITY_TOTAL,
    path : 'cabinets',
    payload : {
        query:`query{listCabinetsCities{city total}}`
    }
})
export const cabinetfetchByCity = (city: string) =>store.dispatch({
    type : CabinetActions.CABINET_LIST_BY_CITY,
    path : 'cabinets',
    payload : {
        query:`query{listCabinetsTwntyByCity(city: "${city}"){_id account{name}contact{address{street city}tele{fix}}}}`
    }
})
export const cabinetfetchAllCity = (city: string) =>store.dispatch({
    type : CabinetActions.CABINET_LIST_ALL_CITY,
    path : 'cabinets',
    payload : {
        query:`query{listCabinetsAllByCity(city: "${city}"){_id account{name}contact{address{street city}tele{fix}}}}`
    }
})
export const cabinetfetchDetails = (id: string) =>store.dispatch({
    type : CabinetActions.CABINET_FETCH_DETAILS,
    path : 'cabinets',
    payload : {
        query:`query{listCabinetDetailsById(id:"${id}"){_id account {name type}contact{address{street city}tele{fix}}}}`
    }
})
export const cabinetSearchByName = (name: string) =>store.dispatch({
    type : CabinetActions.CABINET_SEARCH_BY_NAME,
    path : 'cabinets',
    payload : {
        query:`query{searchPharmaByName(name:"${name}"){_id account{name}contact{address{city}}}}`
    }
})
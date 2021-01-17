import { store } from "../../../..";
import { LaboActions } from "../store/actions";

export const LaboFetchByCity = (city : String) =>store.dispatch({
    type : LaboActions.LAB_LABOS_FETCH_BY_CITY,
    path : 'labos',
    payload : {
        query : `query{LaboListByCity(city : "${city}"){account{name code}contact{tele{fix fax}address{street city}}}}`
    }
})
export const LaboListTwentyByCity = (city : String) =>store.dispatch({
    type : LaboActions.LAB_LABOS_FETCH_TWENTY_BY_CITY,
    path : 'labos',
    payload : {
        query : `query{LaboListTwentyByCity(city : "${city}"){_id account{name code}contact{tele{fix fax}address{street city}}}}`
    }
})
export const LaboSearchByName = (q : String) =>store.dispatch({
    type : LaboActions.LAB_LABO_SEARCH_BY_NAME,
    path : 'labos',
    payload : {
        query : `query{searchLaboByName(query:"${q}"){_id account{name}contact{address{city}}}}`
    }
})
export class Labos {

    constructor(){}

    /**
     * list All laboratories 
     */
    LaboListAll = () => 
        this.makeRequest(
            LaboActions.LAB_LABOS_FETCH_ALL, 
            `query{LaboListAll{account{name code}contact{tele{fix fax}address{street city}}}}`
        )
    ;

    /**
     * labo detail request
     */
    laboDetailsFetch = (labo : string) =>
            this.makeRequest(
                LaboActions.LAB_LABO_FETCH_DETAILS,
                `query{fetchLaboById(id:"${labo}"){_id account{name code}contact{tele{fix fax}address{street city}}}}`
            )
    /**
     * make Request to api
     * with customize params
     */
    makeRequest = (
        action : string,
        payload : string
    ) => store.dispatch({
        type : action,
        payload : {query : payload },
        path : 'labos'
    })
}
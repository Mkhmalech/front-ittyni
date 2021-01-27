import { store } from "../../..";
import { NGAPActions } from "./actions";

export const fetchChapters = ()=>store.dispatch({
    type : NGAPActions.NGAP_LIST_CHAPTERS,
    path : "ngap",
    payload : {
        query : `query{fetchChapters{chapterLetter chapterLabel}}`
    }
})
export const fetchGroups = (letter : string)=>store.dispatch({
    type : NGAPActions.NGAP_LIST_BY_GROUPS,
    path : "ngap",
    payload : {
        query : `query{fetchGroups(letter : "${letter}")}`
    }
})
export const fetchActes = (group : string)=>store.dispatch({
    type : NGAPActions.NGAP_LIST_ACTES,
    path : "ngap",
    payload : {
        query : `query{fetchActes(group :"${group}"){acteLabel acteCode}}`
    }
})
export const fetchActeDetails = (code : string)=>store.dispatch({
    type : NGAPActions.NGAP_FETCH_DETAILS,
    path : "ngap",
    payload : {
        query : `query{fetchActeDetails(code:"${code}"){_id acteLabel acteCode acteCoefficient chapterLabel groupLabel}}`
    }
})
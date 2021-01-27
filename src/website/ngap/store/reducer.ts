import { AnyAction } from 'redux';
import { NGAPActions } from './actions';

export const NGAPReducer = (state={}, action : AnyAction) =>{
    switch (action.type) {
        case NGAPActions.NGAP_LIST_CHAPTERS_SUCCESS :
            return { ...state, chapters : action.payload.fetchChapters }
        // fetch groups
        case NGAPActions.NGAP_LIST_BY_GROUPS_SUCCESS :
            return { ...state, groups : action.payload.fetchGroups }
          
        // fetch groups
        case NGAPActions.NGAP_LIST_ACTES_SUCCESS :
            return { ...state, actes : action.payload.fetchActes }
        // fetch groups
        case NGAPActions.NGAP_FETCH_DETAILS_SUCCESS :
            return { ...state, acteDetails : action.payload.fetchActeDetails }
          
        default:
            return { ...state };
    }
}
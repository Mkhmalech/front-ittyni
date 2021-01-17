import { AnyAction } from 'redux';
import { PharmaActions } from './actions';

export const PharmaReducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case PharmaActions.PHARMA_LIST_BY_CITY_SUCCESS:
            return { ...state, pharmalist: action.payload.fetchTwentyByCity }

        case PharmaActions.PHARMA_LIST_ALL_CITY_SUCCESS:
            return { ...state, pharmalist: action.payload.fetchAllByCity }

        case PharmaActions.PHARMA_FETCH_DETAILS_SUCCESS:
            return { ...state, pharmaDetails: action.payload.fetchPharmaById }

        case PharmaActions.PHARMA_SEARCH_BY_NAME_SUCCESS:
            return { ...state, searchPharma: action.payload.searchPharmaByName }

        default:
            return { ...state };
    }
}
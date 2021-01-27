import { AnyAction } from 'redux';
import { CabinetActions } from './actions';

export const CabinetReducer = (state = {}, action: AnyAction) => {
    switch (action.type) {
        case CabinetActions.CABINET_LIST_BY_CITY_TOTAL_SUCCESS:
            return { ...state, cityTotal: action.payload.listCabinetsCities }

        case CabinetActions.CABINET_LIST_BY_CITY_SUCCESS:
            return { ...state, cabinetlist: action.payload.listCabinetsTwntyByCity }

        case CabinetActions.CABINET_LIST_ALL_CITY_SUCCESS:
            return { ...state, cabinetlist: action.payload.fetchAllByCity }

        case CabinetActions.CABINET_FETCH_DETAILS_SUCCESS:
            return { ...state, cabinetDetails: action.payload.listCabinetDetailsById }

        case CabinetActions.CABINET_SEARCH_BY_NAME_SUCCESS:
            return { ...state, searchPharma: action.payload.searchPharmaByName }

        default:
            return { ...state };
    }
}
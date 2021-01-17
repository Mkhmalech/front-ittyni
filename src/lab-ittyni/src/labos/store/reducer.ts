import { AnyAction, Reducer } from 'redux';
import { LaboActions } from './actions';

const initialState : LabLaboState = {}
export const LabLaboReducer : Reducer<LabLaboState> = (state=initialState, action : AnyAction) =>{
    switch (action.type) {
        case LaboActions.LAB_LABOS_FETCH_ALL_SUCCESS:
            return {...state, listAll : action.payload.LaboListAll};
        case LaboActions.LAB_LABOS_FETCH_BY_CITY_SUCCESS:
            return {...state, listByCity : action.payload.LaboListByCity};
        case LaboActions.LAB_LABOS_FETCH_TWENTY_BY_CITY_SUCCESS:
            return {...state, listByCity : action.payload.LaboListTwentyByCity};
        case LaboActions.LAB_LABO_FETCH_DETAILS_SUCCESS : 
            return{ ...state, Details : action.payload.fetchLaboById}
        case LaboActions.LAB_LABO_SEARCH_BY_NAME_SUCCESS : 
            return{ ...state, search : action.payload.searchLaboByName}
        default:
            return{...state};
    }
    
}
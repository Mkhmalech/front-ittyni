import { AnyAction } from 'redux';

export const CCAMReducer = (state={}, action : AnyAction) =>{
    switch (action.type) {
        case 'LabTestActions.LAB_TESTS_FR_FETCH_SUCCESS' :
            return { ...state, labtests : action.payload }
            
        default:
            return { ...state };
    }
}
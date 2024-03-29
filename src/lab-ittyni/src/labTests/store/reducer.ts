import { AnyAction } from 'redux';
import { CartActions, LabTestActions } from './actions';
const initialState : LabTestState= {
    labtests : [],
    labtestsAll : []
}
export const LabTestReducer = (state=initialState, action : AnyAction) =>{
    switch (action.type) {
        case LabTestActions.LAB_TESTS_FR_FETCH_SUCCESS :
            return { ...state, labtests : action.payload }

        case LabTestActions.LAB_TESTS_FR_FETCH_TWENTY_SUCCESS :
            return { ...state, labtests : action.payload.fetchTwentyLabTests_fr }

        case LabTestActions.LAB_TESTS_FR_SEARCH_SUCCESS :             
            return { ...state, labtests : action.payload  }
    
        case LabTestActions.LAB_TESTS_EN_FETCH_SUCCESS : 
            return { ...state, labtestsAll : action.payload.AllLabTests_en }

        case LabTestActions.LAB_TESTS_EN_FETCH_DETAILS_SUCCESS : 
            return { ...state, labTestEnDetails : action.payload.LabTestView_en }

        case LabTestActions.LAB_TESTS_FR_FETCH_DETAILS_SUCCESS : 
            return { ...state, labTestFrDetails : action.payload.LabTestFrViewByAbbr }

        case LabTestActions.LAB_TESTS_DETAILS_BY_ID_SUCCESS : 
            console.log(action)
            return { ...state, labTestFrDetails : action.payload.LabTestFrenchById }

        case LabTestActions.LAB_TEST_DETAILS_UPDATE_SUCCESS : 
            return { ...state }

        case LabTestActions.LAB_TESTS_FILTER_BY_EN_NAME_SUCCESS : 
            return { ...state, labtestsAll : action.payload.nameEnFilter }

        case LabTestActions.LAB_TESTS_FR_SEARCH_BY_Name_SUCCESS : 
            return { ...state, searchTests : action.payload.LabTestFrenchSearch }
            
        default:
            return { ...state };
    }
}

export const LabTestCartReducer = (state={tests: []}, action: any) => {
    switch (action.type) {
        case CartActions.ADD_TEST_TO_CART :
            let isExists = state.tests.some((test:any) => test._id === action.payload._id);
            let newCart:any;
            if (!isExists) {
                newCart = state.tests.concat(action.payload)
            } else {newCart= state.tests.filter((t:any)=>t._id !== action.payload._id)}
            return { ...state, tests: newCart };
        default: return { ...state }
    }
}
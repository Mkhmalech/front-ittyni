import { store } from "../../.."
import { AuthActions } from '../store/actions';


/**
 * fetch user and sign in 
 * to @ittyni
 */
export const fetchUser = (email : string, password:string) => store.dispatch({
    type : AuthActions.AUTH_LOGIN_FETCH_USER,
    payload : {
        query :`mutation{ users{login(userInput: {email: "${email}", password: "${password}"}) { userId token username}}}`
    },
    path : 'users'
})

/**
 * verify if Logged
 */
 export const isLogged = () => {
    const token = localStorage.getItem('TTUID')
    verifyToken(token)
}

/**
 * verify token from server
 */
 export const verifyToken = (token : string | null) => {
    if(token === null) return store.dispatch({type : AuthActions.AUTH_TOKEN_NOT_EXIST});
    store.dispatch({
        type : AuthActions.AUTH_TOKEN_VERIFY,
        path : 'users',
        payload : { query : `query{verifyFrontToken(token:"${token}"){ _id email picture firstName lastName }}`}
    })
}

/**
 * google oauth2
 */
export const AuthByGoogle = ({given_name, email, picture, family_name} : any) => store.dispatch({
    type : AuthActions.AUTH_BY_GOOGLE,
    path : 'users',
    payload : {
        query:`mutation{
              signupWithGoogle(email:"${email}", lname : "${given_name}",fname:"${family_name}", picture:"${picture}"){token email picture firstName lastName }
          }`
    }
})

import React, {useReducer} from 'react'
import Global from './index';
import reducer,{initialState} from './reducer'
import actions from './action'
//nos da acceso al contexto
function Provider({children}){

    const [state,dispath] = useReducer(reducer, initialState) //devuelve es estado del dispath
    //denrto del value esta el estado del nuestro contexto
    //provider nos permite acceso al contexto

    //dispaht es la llave para la funcion reducer
 return <Global.Provider value = {[state, dispath, actions]}>  
          {children}
        </Global.Provider> //que el hijo renderice en el provider
}

export default Provider;
import { combineReducers } from 'redux'
import inventorys from './inventorys'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    inventorys,
    form: formReducer
})
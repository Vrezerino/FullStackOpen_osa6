import anecdoteReducer from './anecdoteReducer'
import notifReducer from './notifReducer'
import filterReducer from './filterReducer'
import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
	anecdotes: anecdoteReducer,
	notification: notifReducer,
	filterResults: filterReducer
})

export const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

export default store
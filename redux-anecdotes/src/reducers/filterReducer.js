//import { store } from './store'

export const filterAnecdotes = (filter, anecdotes) => {
	return {
		type: 'FILTER',
		filter: filter,
		anecdotes: anecdotes
	}
}

const filterReducer = (state = null, action) => {
	switch(action.type) {
		case 'FILTER':
			const filterResults = action.anecdotes.filter(a => a.content.includes(action.filter))
			return action.filter ? filterResults : null
		default:
			return state
	}
}

export default filterReducer
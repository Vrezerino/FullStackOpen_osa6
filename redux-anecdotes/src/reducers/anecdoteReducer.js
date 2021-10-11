import anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = () => {
	return async dispatch => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT_ANECDOTES',
			data: anecdotes
		})
	}
}

export const vote = (id, content, votes) => {
	return async dispatch => {
		await anecdoteService.vote(id, content, votes)
		dispatch({
			type: 'VOTE_ANECDOTE',
			data: { id }
		})
	}
}

export const addAnecdote = content => {
	return async dispatch => {
		const newAnecdote = await anecdoteService.createNew(content)
		dispatch({
			type: 'ADD_ANECDOTE',
			data: newAnecdote
		})
	}
}

const anecdoteReducer = (state = [], action) => {
	switch(action.type) {
		case 'VOTE_ANECDOTE':
			const id = action.data.id
			const anecdote = state.find(a => a.id === id)
			const changedAnecdote = {...anecdote, votes: anecdote.votes + 1}
			return state.map(a => a.id !== id ? a : changedAnecdote)
		case 'ADD_ANECDOTE':
			return [...state, action.data]
		case 'INIT_ANECDOTES':
			return action.data
		default:
			return state
	}
}

export default anecdoteReducer
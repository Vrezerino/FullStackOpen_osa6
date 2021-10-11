import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotif } from '../reducers/notifReducer'

const Anecdote = ({ content, votes, vote }) => {
	return (
		<div className='anecdote'>
			<div>
				— {content}
			</div>
			<div>
				<span className='voteInfo'>
					This anecdote has {votes} votes.
				</span>
				<button id='voteBtn' onClick={vote}>Vote!</button>
			</div>
		</div>
	)
}

const AnecdoteList = () => {
	const dispatch = useDispatch()
	const anecdotes = useSelector(({ anecdotes, filterResults }) => {
		return filterResults 
			? filterResults.sort((fs1, fs2) => fs2.votes - fs1.votes)
			: anecdotes.sort((a1, a2) => a2.votes - a1.votes)
	})

	const handleVote = async (id, content, votes) => {
		dispatch(vote(id, content, votes))
		dispatch(setNotif(`You voted: "${content}"`, 10))
	}

	return (
		<div>
			{anecdotes.map(a =>
				<Anecdote key={a.id}
					content={a.content}
					votes={a.votes}
					vote={() => handleVote(a.id, a.content, a.votes) 
				} />
			)}
		</div>
	)
}

export default AnecdoteList
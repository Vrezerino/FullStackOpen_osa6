import { addAnecdote } from "../reducers/anecdoteReducer"
import { setNotif } from "../reducers/notifReducer"
import { connect } from "react-redux"
import React, { useRef } from "react"

const AnecdoteForm = (props) => {
	const anecdoteRef = useRef()

	const postAnecdote = async (e) => {
		e.preventDefault()
		const content = anecdoteRef.current.value
		props.addAnecdote(content)
		props.setNotif(`You added: "${content}"`, 5)
	}

	return (
		<div className='anecdoteForm'>
			<h2>Post new anecdote!</h2>
			<form onSubmit={postAnecdote}>
				<div>
					<input type='text' ref={anecdoteRef} />
				</div>
				<button id='postBtn' type='submit'>Go</button>
			</form>
		</div>
	)
}

const mapDispatchToProps = {
	addAnecdote,
	setNotif
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)
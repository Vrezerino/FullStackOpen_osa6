import { connect } from "react-redux"
import { filterAnecdotes } from "../reducers/filterReducer"

const Filter = (props) => {
	const anecdotes = props.anecdotes
	return(
		<div className='filterInput'>
			<input type='text' 
			placeholder='Search by content...' 
			onChange={({ target }) => props.filterAnecdotes(target.value, anecdotes)}/>
		</div>
	)
}

const mapDispatchToProps = {
	filterAnecdotes
}

export default connect(null, mapDispatchToProps)(Filter)
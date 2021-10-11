import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import './index.css'

const store = createStore(reducer)

const App = () => {
	return (
		<div className='container'>
			<h1>Y'all got any more of them feedbacks</h1>
			<button id='goodBtn' onClick={() => store.dispatch({ type: 'GOOD' })}>Good</button>
			<button id='neutralBtn' onClick={() => store.dispatch({ type: 'OK' })}>Neutral</button>
			<button id='badBtn' onClick={() => store.dispatch({ type: 'BAD' })}>Bad</button>
			<button id='resetBtn' onClick={() => store.dispatch({ type: 'ZERO' })}>Reset stats</button>

			<div>Good: {store.getState().good}</div>
			<div>Neutral: {store.getState().ok}</div>
			<div>Bad: {store.getState().bad}</div>
			<div>All: {Object.values(store.getState()).reduce((a, b) => a + b)}</div>
		</div>
	)
}

const renderApp = () => {
	ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
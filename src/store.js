
import { createStore } from 'unistore/preact'

export let actions = store => ( {
	offline( state ) {
		return { offline: state.offline }
	}
} )

export default initialState => createStore( initialState )

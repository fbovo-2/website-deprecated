
import { h }       from 'preact'
import Router      from 'preact-router'
import { Home }    from './components/home'
import { Privacy } from './components/privacy'

export default ( { url } ) => (
	<Router url={ url }>
		<Home path="/" />
		<Privacy path="/privacy" />
	</Router>
);

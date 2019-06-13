
import { h, render } from 'preact'
import { Provider }  from 'unistore/preact'
import Router        from './router'
import createStore   from 'unistore'

window.__STATE__.offline = false;

const root  = document.getElementById( 'app' ),
      store = createStore( window.__STATE__ )

render(
	<Provider store={ store }>
		<Router />
	</Provider>,
	root.parent,
	root
)

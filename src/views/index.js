
const path         = require( 'path' ),
      { h }        = require( 'preact' ),
      { render }   = require( 'preact-render-to-string' ),
      Helmet       = require( 'preact-helmet' ),
      { Provider } = require( 'unistore/preact' ),
      Router       = require( '../router' ).default,
      createStore  = require( 'unistore' ).default

module.exports = function ( { url } ) 
{
	const store = createStore( { offline: true } )
	let state   = store.getState(),
	    params  = { url: url },
	    html    = render(
	        h( Provider, { store: store },
	            h( Router, params )
	        )
	    ),
	    head    = Helmet.rewind()

	return `<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		${ head.title.toString() }
		${ head.meta.toString() }
		${ head.link.toString() }
	</head>
	<body>
		<div id="app">${ html }</div>
		<script>window.__STATE__ = ${ JSON.stringify( state ).replace( /<|>/g, '' ) }</script>
		<script src="/assets/js/main.js"></script>
	</body>
</html>`
}

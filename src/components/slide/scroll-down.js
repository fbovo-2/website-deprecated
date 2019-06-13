
import { h, Component } from 'preact';

export default class ScrollDown extends Component 
{
	/**
	 * Constructor
	 *
	 * @param  {Object}  props
	 */
	constructor( props )
	{
		super( props );

		this.smoothScroll = {
			timer: null,

			stop: function () {
				clearTimeout( this.timer );
			},

			scrollTo: function ( id, callback ) {
				const settings = {
					duration: 1000,
					easing: {
						outQuint: function ( x, t, b, c, d ) {
							return c*((t=t/d-1)*t*t*t*t + 1) + b;
						}
					}
				};

				let percentage,
				    startTime,
				    node       = document.getElementById( id ),
				    nodeTop    = node.offsetTop,
				    nodeHeight = node.offsetHeight,
				    body       = document.body,
				    html       = document.documentElement,
				    height     = Math.max(
						body.scrollHeight,
						body.offsetHeight,
						html.clientHeight,
						html.scrollHeight,
						html.offsetHeight
					),
				    windowHeight      = window.innerHeight,
				    offset            = window.pageYOffset,
				    delta             = nodeTop - offset,
				    bottomScrollableY = height - windowHeight,
				    targetY           = ( bottomScrollableY < delta ) ?
					bottomScrollableY - ( height - nodeTop - nodeHeight + offset ):
					delta;

				startTime = Date.now();
				percentage = 0;

				if ( this.timer ) {
					clearInterval( this.timer );
				}

				function step () {
					let yScroll,
					    elapsed = Date.now() - startTime;

					if ( elapsed > settings.duration ) {
						clearTimeout( this.timer );
					}

					percentage = elapsed / settings.duration;

					if (percentage > 1) {
						clearTimeout( this.timer );

						if ( callback ) {
							callback();
						}
					} 
					else {
						yScroll = settings.easing.outQuint( 0, elapsed, offset, targetY, settings.duration );
						
						window.scrollTo( 0, yScroll );

						this.timer = setTimeout( step, 10 );     
					}
				}

				this.timer = setTimeout( step, 10 );
			}
		};
	}

	/**
	 * Handle click event
	 *
	 * @param  {Event}  e
	 */
	handleClick( e )
	{
		e.preventDefault();

		let to = e.currentTarget.getAttribute( 'href' ).replace( /^#/, '');

		this.smoothScroll.scrollTo( to );
	}

	/**
	 * Renderer
	 *
	 * @param  {Object}
	 * @param  {Object}
	 * @return {String}
	 */
	render( { target }, {} ) 
	{
		return (
			<div class="slide__scroll-down">
				<a href={ target } aria-label="Scroll to { target }" onClick={ ( e ) => this.handleClick( e ) }>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
						<path fill="#333333" d="m121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c0.8 0.8 1.8 1.2 2.9 1.2 1 0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"></path>
					</svg>
				</a>
			</div>
		);
	}
}

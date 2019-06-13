
import { h, Component } from 'preact'

export default class Dialog extends Component 
{
	// state = { 
	// 	open: false 
	// };

	componentDidMount() 
	{
		if ( 'open' in this.props ) {
			this.setState( { open: this.props.open } );
		}
	}

	open() 
	{
		// if ( document.body.className.indexOf( 'no-scroll' ) === -1 ) {
		// 	document.body.className += ' '+'no-scroll';
		// }
		document.body.classList.add( 'no-scroll' );

		this.setState( { open: true } );
	}

	close() 
	{
		this.setState( { open: false } );

		document.body.classList.remove( 'no-scroll' );
	}

	render( props, state ) 
	{
		return (
			<div className={ "dialog -inner"+( state.open ? ' -open' : '' ) }>
				<div class="dialog__close" onClick={ e => this.close() }>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129">
						<path fill="#ffffff" d="M7.6 121.4c0.8 0.8 1.8 1.2 2.9 1.2s2.1-0.4 2.9-1.2l51.1-51.1 51.1 51.1c0.8 0.8 1.8 1.2 2.9 1.2 1 0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8L70.3 64.5l51.1-51.1c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8 0L64.5 58.7 13.4 7.6C11.8 6 9.2 6 7.6 7.6s-1.6 4.2 0 5.8l51.1 51.1L7.6 115.6C6 117.2 6 119.8 7.6 121.4z" />
					</svg>
				</div>
				<div class="dialog__content">{ this.props.children }</div>
			</div>
		)
	}
}

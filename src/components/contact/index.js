
import { h, Component } from 'preact'

export default class Contact extends Component 
{
	constructor( props ) 
	{
		super( props );

		const Form       = require( 'preact-forms-helper' ).Form,
		      Validators = require( 'preact-forms-helper' ).Validators

		this.state = {
			form:   new Form( {
				name:    { validators: [ Validators.maxLength( 32 ) ] },
				email:   { validators: [ Validators.required(), Validators.email() ] },
				message: { validators: [ Validators.required(), Validators.minLength( 16 ), Validators.maxLength( 1024 ) ] },
				privacy: { validators: [ Validators.required(), Validators.minLength( 1 ) ] }
			} ),
			text:   'Send the Message',
			status: 'ready'
		}
	}

	formSubmit( e ) 
	{
		e.preventDefault();

		if ( ( this.state.status == 'ready' ) && this.state.form.isValid() ) {
			this.setState( { 
				text:   '...sending',
				status: 'sending' 
			} )

			console.log( this.state.form.getValues() )

			// this.button.disable();

			// let data = {
			// 	name:    this.name.getValue(),
			// 	email:   this.email.getValue(),
			// 	message: this.message.getValue(),
			// 	privacy: this.privacy.isValid()
			// };

			// AJAX call
			// axios.post( '/api/contact', data )
			// 	.then( res => {
			// 		if ( ( 'success' in res.data ) && ( res.data.success == true ) ) {
			// 			this.setState( {
			// 				lastSent: Date.now()
			// 			} );

			// 			this.button.setText( 'Success' );
			// 		}
			// 		else {
			// 			this.button.setText( 'Failed' );
			// 		}

			// 		setTimeout( () => {
			// 			this.formStatus( 'ready' );
			// 			this.resetForm();
			// 			this.button.setText( 'Submit the message' );
			// 		}, 2500 );

			// 		// this.setState( { sent: true }, this.resetForm() )
			// 	} )
			// 	.catch( () => {
			// 		// this.state.formFeedbackMessages.push( 'Message not sent, please try again.' );

			// 		this.button.setText( 'Failed' );
			// 		this.button.enable();
			// 	} );
		}

		// return () => console.log( this.state.name, this.state.email, this.state.privacy );
	}

	render( {}, { form, text, status } ) 
	{
		const validateField = require( 'preact-forms-helper' ).validateField;

		return (
			<div id="contact" class="slide -full -contact">
				<div class="slide__content -middle">
					<form onSubmit={ ( e ) => this.formSubmit( e ) }>
						<div class="grid">
							<div class="grid__cell">
								<h3 class="title -xl -center"> How about a coffee ? </h3>
							</div>
						</div>
						<div class="grid">
							<div class="grid__cell -span-4/12@desk">
								<div class="coffee">
									<div class="coffee__cup">
										<svg viewBox="0 0 340 655" xmlns="http://www.w3.org/2000/svg">
											<path d="M192.044 539.256c13.729 0 25.517-4.526 34.088-13.086 11.183-11.206 15.419-27.645 11.976-46.348-3.259-17.702-13.119-35.517-27.766-50.163-18.106-18.106-41.428-28.916-62.386-28.916-13.74 0-25.534 4.531-34.108 13.105-11.155 11.156-15.4 27.609-11.955 46.33 3.259 17.702 13.12 35.517 27.766 50.163 18.106 18.106 41.428 28.915 62.385 28.915zm-72.141-108.747l19.542 19.542a7.476 7.476 0 0 0 5.304 2.197 7.5 7.5 0 0 0 5.304-12.803l-19.547-19.547c4.898-2.734 10.809-4.154 17.451-4.154 17.067 0 36.424 9.167 51.778 24.522 12.519 12.518 20.907 27.531 23.621 42.272 1.928 10.472.76 19.771-3.257 26.953l-48.833-48.833a7.5 7.5 0 0 0-10.607 0 7.5 7.5 0 0 0 0 10.606l48.838 48.838c-4.898 2.734-10.81 4.154-17.452 4.154-17.067 0-36.424-9.167-51.778-24.522-12.519-12.518-20.907-27.53-23.62-42.272-1.929-10.471-.762-19.771 3.256-26.953z" fill="#333" fill-rule="nonzero" />
											<path d="M332.5 245h-24.145l-13.579-54.319A7.5 7.5 0 0 0 287.5 185h-235a7.5 7.5 0 0 0-7.276 5.681L31.645 245H7.5a7.5 7.5 0 0 0-7.5 7.5v40a7.5 7.5 0 0 0 7.5 7.5h8.107l13.156 155.685a7.5 7.5 0 0 0 14.948-1.262L36.154 365h267.693L286.1 575H53.9l-7.663-90.685c-.35-4.128-3.984-7.202-8.105-6.842a7.5 7.5 0 0 0-6.842 8.104L45.026 648.13a7.5 7.5 0 0 0 7.474 6.869h235a7.5 7.5 0 0 0 7.474-6.869L324.393 300h8.107a7.5 7.5 0 0 0 7.5-7.5v-40a7.5 7.5 0 0 0-7.5-7.5zM59.393 640l-4.225-50h229.665l-4.225 50H59.393zm245.721-290H34.886l-4.225-50h278.678l-4.225 50zM325 285H15v-25h22.344c.106.002.216.002.324 0H272.5a7.5 7.5 0 0 0 7.5-7.5 7.5 7.5 0 0 0-7.5-7.5H47.105l11.25-45h223.289l13.579 54.319A7.502 7.502 0 0 0 302.5 260H325v25z" fill="#333" fill-rule="nonzero" />
											<path d="M167.618 124.861c-6.21-6.206-9.618-14.432-9.618-23.189 0-8.756 3.415-16.99 9.618-23.2 9.419-9.408 14.604-21.922 14.604-35.232 0-13.31-5.185-25.813-14.604-35.24M237.507 150.826c-4.191-4.187-6.507-9.758-6.507-15.68a22.014 22.014 0 0 1 6.507-15.684c7.407-7.411 11.497-17.255 11.497-27.731 0-10.476-4.078-20.324-11.497-27.731M96.507 150.826C92.32 146.64 90 141.068 90 135.146a22.014 22.014 0 0 1 6.507-15.684c7.411-7.411 11.497-17.255 11.497-27.731 0-10.476-4.078-20.324-11.497-27.731" stroke="#333" fill="#fff" stroke-width="15" stroke-linecap="round" />
										</svg>
									</div>
								</div>
							</div>
							<div class="grid__cell -span-8/12@desk -offset-4@desk">
								<div class="input-wrapper">
									<label for="contact-name"> Your Name </label>
									<input id="contact-name" type="text" name="name" className={ "input-text" } onInput={ validateField( this, form ) } />
								</div>

								<div class="input-wrapper">
									<label for="contact-email"> Your E-mail <sup>*</sup></label>
									{ form.isTouched( 'email' ) && form.hasErrors( 'email' ) ? <div class="feedback -error"> Please enter a valid e-mail address. </div> : '' }
									<input id="contact-email" type="email" name="email" className={ "input-text"+( form.hasErrors( 'email' ) ? ' -error' : '' ) } onChange={ validateField( this, form ) } />
								</div>
							</div>
						</div>
						<div class="grid">
							<div class="grid__cell">
								<div class="input-wrapper">
									<label for="contact-message"> Your Message </label>
									{ form.isTouched( 'message' ) && form.hasErrors( 'message' ) ? <div class="feedback -error"> Please enter a message. </div> : '' }
									<textarea id="contact-message" name="message" onChange={ validateField( this, form ) }></textarea>
								</div>
							</div>
						</div>
						<div class="grid">
							<div class="grid__cell">
								<div class="input-wrapper">
									<input id="contact-privacy" type="checkbox" name="privacy" value="accepted" className={ "input-checkbox"+( form.hasErrors( 'privacy' ) ? ' -error' : '' ) } checked={ form.isSelected( 'privacy', 'accepted' ) } onChange={ validateField( this, form ) } />
									<label for="contact-privacy"> I have read and agree </label> 
									<span> to the <a href="/privacy">Privacy Policy</a> including the processing of my personal data </span>
									{ form.isTouched( 'privacy' ) && form.hasErrors( 'privacy' ) ? <div class="feedback -error"> You must read and accept our Privacy Policy. </div> : '' }
								</div>
							</div>
						</div>
						<div class="grid">
							<div class="grid__cell">
								<button type="submit" disabled={ ( status != 'ready' ) || ! form.isValid() } class="button -wide@mobile">{ text }</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}

}

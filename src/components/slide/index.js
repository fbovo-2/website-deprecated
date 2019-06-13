
import { h, Component, createRef } from 'preact'
import ScrollDown                  from './scroll-down'
import Dialog                      from './dialog'

export class SlideBanner extends Component 
{
	componentDidMount() 
	{
		// this.images = this.importDefault( require.context( '../../assets/images/screens', false, /\.(png|jpe?g|svg)$/ ) );

		// console.log( this.images );
	}

	importDefault( r ) 
	{
		return r.keys().map( r );
	}

	render( { scroll }, {} ) 
	{
		return (
			<div class="slide -full -gray">
				<div class="slide__content -middle">
					<div class="container -hello">
						<div class="grid">
							<div class="grid__cell -span-12/12 -span-6/12@desk">
								<h1 class="box title -mega -no-margin" data-aos="fade-right"> Hello, I am <br /> Filippo </h1>
							</div>
						</div>
					</div>
				</div>
				{ scroll ? <ScrollDown target={ scroll } /> : '' }
			</div>
		)
	}
}

export class SlideIntro extends Component 
{
	openDialog( e )
	{
		if( this.dialog ) {
			this.dialog.open();
		}
	}

	closeDialog( e )
	{
		if( this.dialog ) {
			this.dialog.close();
		}
	}

	render( { scroll }, {} ) 
	{
		return (
			<div id="intro" class="slide -full -intro">
				<div class="slide__content -middle">
					<div class="container">
						<div class="grid">
							<div class="grid__cell">
								<h2 class="text -center" data-aos="fade-up"> Some people call me 
									<span class="text -italic tooltip"> full-stack developer 
										<span class="tooltip__info">
											<span class="title"> / fʊl / stæk / dɪˈvɛl ə pər / </span>
											<span class="text -s"> <b> full-stack developer </b>, a kind of people who master a variety of skills and use these skills to complete a product independently. </span>
										</span>
									</span> 
									, <br /> I define myself as <span class="text -italic">integrator</span>. 
								</h2> 
								<h3 class="title -center" data-aos="fade-up" data-aos-delay="400"> I cooperate with different teams, <br /> I understand the language of designers, coders and managers. </h3>
								<p class="text -center" data-aos="fade-up" data-aos-delay="800"> <a class="button" onClick={ e => this.openDialog( e ) }> Learn more </a> </p>
							</div>
						</div>
					</div>
				</div>
				{ scroll ? <ScrollDown target={ scroll } /> : null }
				<Dialog ref={ dialog => this.dialog = dialog }>
					<div class="grid">
						<div class="grid__cell">
							<p> The full stack developers are involved in a horizontal technical requirement, so that can make a prototype design for a product very rapidly with their wide range of techniques. <br /> With the full stackability, they have a broader angle of view and a more active mindset. Moreover, they will be more sensitive to techniques, products and designs. </p>
							<p> From another aspect, a full stack developer, can provide help to everyone in the team and <b> greatly reduce </b> the time and technical costs of team communication, technology docking. </p>
						</div>
					</div>
				</Dialog>
			</div>
		)
	}
}

export class SlideWorks extends Component 
{
	render( { scroll }, {} ) 
	{
		return (
			<div id="works" class="slide -full -gray -works">
				<div class="slide__content -middle">
					<div class="container">
						<div class="grid">
							<div class="grid__cell">
								<h2 class="text -center"> One of the brains behind : </h2>
								<div class="grid -no-gutter">
									<div class="grid__cell -span-6/12@desk">
										<h3 class="title -right@desk"><span data-aos="fade-right"> Ermanno Scervino online store </span></h3>
									</div>
									<div class="grid__cell -span-6/12@desk -offset-6@desk">
										<div className="screen -first">
											<img src="/assets/images/screens/scervino.jpg" alt="Ermanno Scervino" data-aos="fade" data-aos-delay="400" className="screen__image" />
										</div>
									</div>
								</div>
								<div class="grid -no-gutter">
									<div class="grid__cell -span-6/12@desk -offset-6@desk">
										<h3 class="title"><span data-aos="fade-left"> Imperial Group online stores </span></h3>
									</div>
									<div class="grid__cell -span-6/12@desk">
										<div className="screen">
											<img src="/assets/images/screens/imperial.jpg" alt="Imperial Fashion group" data-aos="fade" data-aos-delay="400" className="screen__image" />
										</div>
									</div>
								</div>
								<div class="grid -no-gutter">
									<div class="grid__cell -span-6/12@desk">
										 <h3 class="title -right@desk"><span data-aos="fade-right"> Reda 1865 online store </span></h3>
									</div>
									<div class="grid__cell -span-6/12@desk -offset-6@desk">
										<div className="screen">
											<img src="/assets/images/screens/reda.jpg" alt="Reda 1865" data-aos="fade" data-aos-delay="400" className="screen__image" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{ scroll ? <ScrollDown target={ scroll } /> : '' }
			</div>
		)
	}
}

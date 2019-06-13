
import { h }                                   from 'preact'
import { Link }                                from 'preact-router'
import { connect }                             from 'unistore/preact'
import Helmet                                  from 'preact-helmet'
import { actions }                             from '../store'
import { SlideBanner, SlideIntro, SlideWorks } from './slide'
import Contact                                 from './contact'

export const Home = connect( [ 'offline' ], actions )(
	( { offline } ) => (
		<div class="page -home">
			<Helmet
				htmlAttributes={{ lang: "en", amp: undefined }} // amp takes no value
				title="Filippo Bovo"
				// titleTemplate="Filippo Bovo - %s"
				// defaultTitle="Filippo Bovo"
				// titleAttributes={{ itemprop: "name", lang: "en" }}
				// base={{ target: "_blank", href: "http://mysite.com/" }}
				meta={ [
					// { http-equiv: "X-UA-Compatible", content: "IE=edge" },
					{ name: "viewport", content: "width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6,shrink-to-fit=no,viewport-fit=cover" },
					{ name: "description", content: "Filippo Bovo agile web developer and team leader" },
					{ name: "keywords", content: "Filippo Bovo,developer,full-stack,frontend,backend,team leader,agile,scrum" },
					{ property: "og:type", content: "article" },
					{ name: "theme-color", content: "white" },
					{ name: "mobile-web-app-capable", content: "yes" },
					// iOs
					{ name: "apple-mobile-web-app-title", content: "Filippo Bovo" },
					{ name: "apple-mobile-web-app-capable", content: "yes" },
					{ name: "apple-mobile-web-app-status-bar-style", content: "default" },
					// Windows
					{ name: "msapplication-navbutton-color", content: "black" },
					{ name: "msapplication-TileColor", content: "black" },
					{ name: "msapplication-TileImage", content: "ms-icon-144x144.png" },
					{ name: "msapplication-config", content: "browserconfig.xml" },
					// Pinned Sites
					{ name: "application-name", content: "Application Name" },
					{ name: "msapplication-tooltip", content: "Tooltip Text" },
					{ name: "msapplication-starturl", content: "/" },
					// Tap highlighting
					{ name: "msapplication-tap-highlight", content: "no" },
					// UC Mobile Browser
					{ name: "full-screen", content: "yes" },
					{ name: "browsermode", content: "application" },
					// Disable night mode for this page
					{ name: "nightmode", content: "enable/disable" },
					// Layout mod
					{ name: "layoutmode", content: "fitscreen/standard" },
					// imagemode - show image even in text only mode
					{ name: "imagemode", content: "force" },
					// Orientation
					{ name: "screen-orientation", content: "portrait" }
				] }
				link={ [
					{ rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Merriweather:400,400i,700,700i|Montserrat:400,400i,700,700i" },
					{ rel: "stylesheet", href: "/assets/css/mobile.css" },
					{ rel: "stylesheet", media: "screen and (min-width: 64.063em)", href: "/assets/css/desktop.css" },
					// Main Link Tags
					{ rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/images/icons/icon_16x16.png" },
					{ rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/images/icons/icon_32x32.png" },
					{ rel: "icon", type: "image/png", sizes: "48x48", href: "/assets/images/icons/icon_48x48.png" },
					{ rel: "icon", type: "image/png", sizes: "96x96", href: "/assets/images/icons/icon_96x96.png" },
					{ rel: "icon", type: "image/png", sizes: "128x128", href: "/assets/images/icons/icon_128x128.png" },
					{ rel: "icon", type: "image/png", sizes: "256x256", href: "/assets/images/icons/icon_256x256.png" },
					{ rel: "icon", type: "image/png", sizes: "512x512", href: "/assets/images/icons/icon_512x512.png" },
					// iOS
					{ rel: "apple-touch-icon", type: "image/png", href: "/assets/images/icons/icon_52x52.png" },
					{ rel: "apple-touch-icon", type: "image/png", sizes: "72x72", href: "/assets/images/icons/icon_72x72.png" },						
					//- link( href="touch-icon-iphone.png", rel="apple-touch-icon" )
					//- link( href="touch-icon-ipad.png", rel="apple-touch-icon", sizes="76x76" )
					//- link( href="touch-icon-iphone-retina.png", rel="apple-touch-icon", sizes="120x120" )
					//- link( href="touch-icon-ipad-retina.png", rel="apple-touch-icon", sizes="152x152" )
					// Startup Image
					{ rel: "apple-touch-startup-image", type: "image/png", href: "/assets/images/icons/icon_320x480.png" },
					// Pinned Tab
					{ rel: "mask-icon", color: "white", size: "any", href: "/assets/images/icons/icon.svg" },
					// Android
					{ rel: "icon", sizes: "192x192", href: "/assets/images/icons/icon_192x192.png" },						
					{ rel: "icon", sizes: "128x128", href: "/assets/images/icons/icon_128x128.png" },						
					// Other
					{ rel: "shortcut icon", type: "image/x-icon", href: "/assets/images/icons/favicon.ico" },						
					// UC Browser
					{ rel: "apple-touch-icon-precomposed", sizes: "52x52", href: "/assets/images/icons/icon_52x52.png" },						
					{ rel: "apple-touch-icon", sizes: "72x72", href: "/assets/images/icons/icon_72x72.png" },						
					// Manifest.json
					{ rel: "manifest", href: "/manifest.json" }
				] }
				// noscript={ [
				// 	{ innerHTML: `<link rel="stylesheet" type="text/css" href="foo.css" />` }
				// ] }
				// onChangeClientState={ ( newState ) => console.log( newState ) }
			/>
			<SlideBanner scroll="#intro" />
			<SlideIntro  scroll="#works" offline={ offline } />
			<SlideWorks  scroll="#contact" />
			{ offline ? '' : <Contact /> }
		</div>
	)
)

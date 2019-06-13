
import { h }                                   from 'preact'
import { Link }                                from 'preact-router'
import { connect }                             from 'unistore/preact'
import Helmet                                  from 'preact-helmet'
import { actions }                             from '../store'

export const Privacy = connect( [ 'offline' ], actions )(
	( { offline } ) => (
		<div class="page -privacy">
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
			<div class="grid">
				<div class="grid__cell">
					<h1> FilippoBovo.com Privacy Policy </h1>
					<p> Your privacy is important to me. It is my policy to respect your privacy regarding any information I may collect from you across my website: FilippoBovo.com. </p>
					
					<h2> Information I collect </h2>
					<p> <b>When you visit my website</b>: The server automatically log your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other standard data provided by your web browser. </p>
					<p> <b>When you use the contact form</b>: I ask for your name, e-mail address, and whether you agree to my policies. This information is mandatory, as I use it to get in touch with you. I will never publish your email address and I keep our conversations strictly confidential. </p>

					<h2> My legal bases for processing </h2>
					<p> I process information lawfully, fairly and transparently. I only collect and process information about you only where: </p>
					<ul>
						<li> you give me consent to do so for a specific purpose (eg. entering your email address so I can contact you) </li>
						<li> I need to process your data to comply with a legal obligation </li>
						<li> it satisfies a legitimate interest, such as for research and development and to protect my legal rights and interests </li>
					</ul>
					<p> When you consent to use of information about you for a specific purpose, you have the right to change your mind at any time, but this won’t affect any processing I’ve already done. </p>
					<p> While I retain this information, I’ll protect it within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification. That said, I advise that no method of electronic transmission or storage is 100% secure and cannot guarantee absolute data security. </p>
					
					<h2> Collecting and using information </h2>
					<p> I collect, hold, use and disclose information for the following purposes: </p>
					<ul>
						<li> to enable you to access and use my website, associated applications and associated social media platforms; </li>
						<li> to contact and communicate with you about email enquiries; </li>
						<li> for internal record keeping; </li>
						<li> for analytics, market research and business development, including to operate and improve my website, associated applications and associated social media platforms; and
		to comply with legal obligations and resolve any disputes that I may have. </li>
					</ul>

					<h2> Disclosure of personal information to third parties </h2>
					<p> FilippoBovo.com is supported by third-party providers to facilitate the provision of a transactional website. These include DNS management, web hosting. </p>
					<p> I will comply with government and law enforcement requests for data, as required by law, in connection with any actual or prospective legal proceedings, or in order to establish, exercise or defend my legal rights. </p>
					<p> I do not sell or rent your personal information to marketers or third parties. </p>

					<h2> International transfers of personal information </h2>
					<p> The data I retain is stored and processed in Italy, and/or where I and my third-party providers maintain facilities. By providing me with your personal information, you consent to the disclosure to these overseas third parties. </p>

					<h2> Your rights as user </h2>
					<p> <b>Choice and consent</b>: By providing your information to me, you consent to me collecting, holding, using and disclosing it in accordance with this privacy policy. You are free to refuse my request for information, with the understanding that I may be unable to provide you with generated Terms of Service and Privacy Policy statements without it. If you’re under 16 years of age, you must supply evidence of your parent or legal guardian’s knowledge and permission of you providing me with information. </p>
					<p> <b>Information from third parties</b>: If I receive information about you from a third party, I’ll protect it as set out in this privacy policy. If you are a third party providing information about somebody else (eg. an agency operating on behalf of a client), you represent and warrant that you have that person’s consent to provide their information to me. </p>
					<p> <b>Restrict</b>: You may choose to restrict the collection or use of your personal information by contacting me using the details on this website. If you ask me to restrict or limit how I process your personal information, I will let you know how the restriction affects your use of my website or products and services. </p>
					<p> <b>Access and data portability</b>: You may request details of the personal information that I hold about you. You may request a copy of the personal information I hold about you. You may request to erase the personal information I hold about you at any time. You may also request that I transfer this personal information to another third party. </p>
					<p> <b>Correction</b>: If you believe that any information I hold about you is inaccurate, out of date, incomplete, irrelevant or misleading, please contact me using the details below, and I will take reasonable steps to rectify the issue. </p>
					<p> <b>Notification of data breaches</b>: I will comply with laws applicable to me in respect of any data breach. </p>
					<p> <b>Complaints</b>: If you believe that I have breached a relevant data protection law and wish to make a complaint, please contact me using the details below and provide me with full details of the alleged breach. I will promptly investigate your complaint and respond to you, in writing, setting out the outcome of my investigation and the steps I will take to deal with your complaint. You also have the right to contact a regulatory body or data protection authority in relation to your complaint. </p>

					<h2> Cookies </h2>
					<p> A cookie is a small piece of data that my website stores on your computer, and accesses each time you visit, so I can perform certain functions and understand how you use my site. I use first-party and third-party cookies to enable forms and website analytics. </p>

					<h2> About this policy </h2>
					<p> This privacy policy only covers FilippoBovo.com's own collecting and handling of data. I only work with partners and third-party providers whose privacy policies align with mine, however I cannot accept responsibility or liability for their respective privacy practices. </p>
					<p> My website may link to external sites that are not operated by me. Please be aware that I have no control over the content and policies of those sites, and cannot accept responsibility or liability for their respective privacy practices. </p>
					<p> At my discretion, I may update this policy to reflect current acceptable practices. I will take reasonable steps to let users know about significant changes via my website. Your continued use of this site after any changes to this policy will be regarded as acceptance of my practices around data and personal information. </p>
					<p> If you have any concerns or questions about how I handle your data and personal information, feel free to contact me. </p>
					<p> This policy is effective as of 12 June 2019. </p>
				</div>
			</div>
		</div>
	)
)

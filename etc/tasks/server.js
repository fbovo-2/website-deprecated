
import gulp                        from 'gulp'
import Browser                     from 'browser-sync'
import webpack                     from 'webpack'
import webpackDevMiddleware        from 'webpack-dev-middleware'
import webpackHotMiddleware        from 'webpack-hot-middleware'
import { config as webpackConfig } from './webpack'

const browser = Browser.create()
const bundler = webpack( webpackConfig )

export function server() 
{
	let config = {
		server:     [ '../dist', '../src/statics' ],
		open:       false,
		port:       3000,
		middleware: [
			webpackDevMiddleware( bundler, {
				watchOptions: {
					poll: true
				}
			} ),
			webpackHotMiddleware( bundler )
		],
	}

	browser.init( config )

	gulp.watch( 'src/**/*.{scss,js}', { 
		interval:   1000, 
		mode:       'poll', 
		usePolling: true 
	} ).on( 'change', () => browser.reload() )
}

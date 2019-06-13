
import path                           from 'path'
import webpack                        from 'webpack'
import process                        from 'process'
import { CleanWebpackPlugin }         from 'clean-webpack-plugin'
import CopyWebpackPlugin              from 'copy-webpack-plugin'
import HtmlWebpackPlugin              from 'html-webpack-plugin'
import HtmlWebpackHarddiskPlugin      from 'html-webpack-harddisk-plugin'
import MinifyWebpackPlugin            from 'babel-minify-webpack-plugin'
import OptimizeCSSAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin'

const isProduction = ( process.env.NODE_ENV === 'production' )

let config = {
	entry:   isProduction ? {
		main: [
			'./main.js',
			'./scss/mobile.scss',
			'./scss/desktop.scss'
		]
	} : {
		main: [
			'./main.js',
			'./scss/mobile.scss',
			'./scss/desktop.scss',
			'webpack/hot/dev-server',
			'webpack-hot-middleware/client'
		]
	},
	output:  {
		filename: './assets/js/[name].js',
		path:     path.resolve( __dirname, '../../dist' )
	},
	module: {
		rules: [
			{
				test:    /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader:  'babel-loader',
					options: {
						plugins: [
							[
								'@babel/plugin-transform-react-jsx', 
								{
									pragma:     "h",
									pragmaFrag: "\"span\""
								}
							]
						],
						presets: [ 
							[
								'@babel/preset-env',
								{
									'targets': {
										'node':     'current',
										'browsers': [ 'last 2 versions' ]
									}
								}
							]
						]
					}
				}
			},
			{
				test:    /\.(s*)css$/,
				exclude: /node_modules/,
				use:     [
					{
						loader:  'file-loader',
						options: {
							name: 'assets/css/[name].css'
						}
					},
					{
						loader:  'sass-loader',
						options: {
							includePaths: [ 
								path.resolve( __dirname, '../../src/vendor' ) 
							]
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx' ]
	},
	context: path.resolve( __dirname, '../../src' ),
	plugins: isProduction ? [ 
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': '"production"'
		} ),
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin( [
			{ 
				from: path.resolve( __dirname, '../../src/statics' ), 
				to:   path.resolve( __dirname, '../../dist' )
			}
		] ),
		new HtmlWebpackPlugin( {
			template:           path.resolve( __dirname, '../../src/views/index.js' ),
			templateParameters: { url: '' },
			inject:             false,
			alwaysWriteToDisk:  true
		} ),
		new HtmlWebpackPlugin( {
			template:           path.resolve( __dirname, '../../src/views/index.js' ),
			templateParameters: { url: '/privacy' },
			filename:           'privacy/index.html',
			inject:             false,
			alwaysWriteToDisk:  true
		} ),
		new HtmlWebpackHarddiskPlugin(),
	] : [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin( {
			template:           path.resolve( __dirname, '../../src/views/index.js' ),
			templateParameters: { url: '' },
			inject:             false,
			alwaysWriteToDisk:  false
		} ),
		new HtmlWebpackPlugin( {
			template:           path.resolve( __dirname, '../../src/views/index.js' ),
			templateParameters: { url: '/privacy' },
			filename:           'privacy/index.html',
			inject:             false,
			alwaysWriteToDisk:  false
		} ),
		new HtmlWebpackHarddiskPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		minimizer: [
			new MinifyWebpackPlugin( {} ),
			new OptimizeCSSAssetsWebpackPlugin( {
				cssProcessorPluginOptions: {
					preset: [ 'default', { discardComments: { removeAll: true } } ],
				}
			} )
		]
	},
	mode: isProduction ? 'production' : 'development'
}

/**
 * @return {Promise}
 */
function scripts() 
{
	return new Promise( resolve => webpack( config, ( err, stats ) => {
		if( err ) {
			console.log( 'Webpack', err )
		}

		console.log( stats.toString( { /* stats options */ } ) )

		resolve()
	} ) )
}

module.exports = { config, scripts }

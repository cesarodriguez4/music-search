 module.exports = {
 	 output: {
         filename: 'index.js',
     },
     module: {
         loaders: [{
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },
         {
            test: /\.css$/,
            loaders: [ 'style', 'css']
         },
         {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
         },   
         {
	        test: /\.scss$/,
	        loaders: [ 'style', 'css', 'sass' ]
         }]
     }
 }
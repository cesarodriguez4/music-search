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
         {test: /.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.+)?$/, 
            loaders: [ 'style', 'css', 'sass' ]}   
         ,{
	        test: /\.scss$/,
	        loaders: [ 'style', 'css', 'sass' ]
         }]
     }
 }
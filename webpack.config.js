module.exports={
  entry:'',
  output:{
    path:'',
    filename:'bundle.js'
  },
  devServer:{
    inline:true,
    contentBase:'',
    port:8001
  },
  moule:{
    rules:[
      {
        test:/\.jsx?/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test:/\.(gif|svg|jpg|png)$/,
      use:'url-loader'
    },
    {
      test:/\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: 'file-loader?name=[name].[ext]'
    }
      
    ]
  }
}

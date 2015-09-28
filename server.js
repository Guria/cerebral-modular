/* eslint no-console: 0 */
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';
const app = express();

app.use(express.static(__dirname + '/dist'));

if (isDeveloping) {
  const compiler = webpack(config);

  app.use(webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, ip, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info(`==> 🌎 Listening on port ${port}. Open up http://${ip}:${port}/ in your browser.`);
});

# k8s app store


```
npm install --save-dev webpack
npm install --global webpack
npm install
npm start # Development
```


```
npm install bootstrap --save
npm install uninett-bootstrap-theme --save
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxBold.woff http://mal.uninett.no/uninett-theme/fonts/colfaxBold.woff
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxLight.woff http://mal.uninett.no/uninett-theme/fonts/colfaxLight.woff
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxMedium.woff http://mal.uninett.no/uninett-theme/fonts/colfaxMedium.woff
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegular.woff http://mal.uninett.no/uninett-theme/fonts/colfaxRegular.woff
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxThin.woff http://mal.uninett.no/uninett-theme/fonts/colfaxThin.woff
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegularItalic.woff http://mal.uninett.no/uninett-theme/fonts/colfaxRegularItalic.woff

curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxBold.svg http://mal.uninett.no/uninett-theme/fonts/colfaxBold.svg
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxLight.svg http://mal.uninett.no/uninett-theme/fonts/colfaxLight.svg
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxMedium.svg http://mal.uninett.no/uninett-theme/fonts/colfaxMedium.svg
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegular.svg http://mal.uninett.no/uninett-theme/fonts/colfaxRegular.svg
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxThin.svg http://mal.uninett.no/uninett-theme/fonts/colfaxThin.svg
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegularItalic.svg http://mal.uninett.no/uninett-theme/fonts/colfaxRegularItalic.svg

curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxBold.ttf http://mal.uninett.no/uninett-theme/fonts/colfaxBold.ttf
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxLight.ttf http://mal.uninett.no/uninett-theme/fonts/colfaxLight.ttf
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxMedium.ttf http://mal.uninett.no/uninett-theme/fonts/colfaxMedium.ttf
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegular.ttf http://mal.uninett.no/uninett-theme/fonts/colfaxRegular.ttf
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxThin.ttf http://mal.uninett.no/uninett-theme/fonts/colfaxThin.ttf
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegularItalic.ttf http://mal.uninett.no/uninett-theme/fonts/colfaxRegularItalic.ttf

curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxBold.eot http://mal.uninett.no/uninett-theme/fonts/colfaxBold.eot
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxLight.eot http://mal.uninett.no/uninett-theme/fonts/colfaxLight.eot
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxMedium.eot http://mal.uninett.no/uninett-theme/fonts/colfaxMedium.eot
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegular.eot http://mal.uninett.no/uninett-theme/fonts/colfaxRegular.eot
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxThin.eot http://mal.uninett.no/uninett-theme/fonts/colfaxThin.eot
curl -o node_modules/uninett-bootstrap-theme/fonts/colfaxRegularItalic.eot http://mal.uninett.no/uninett-theme/fonts/colfaxRegularItalic.eot
```

I index.js

```
import css from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import theme from '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import uninett from '../node_modules/uninett-bootstrap-theme/css/uninett.css';
```

I webpack.config.js

```
module: {
  rules: [
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader',
      options: {
        limit: 10000
      }
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.jsx$/,
      exclude: (/node_modules/),
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }
  ]
},
```

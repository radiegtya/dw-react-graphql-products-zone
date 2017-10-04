import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createNetworkInterface, ApolloClient, ApolloProvider} from 'react-apollo';
import {BrowserRouter} from 'react-router-dom';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
  networkInterface: networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();

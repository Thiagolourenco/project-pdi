import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import * as Sentry from '@sentry/react-native';

import Routes from './src/pages/routes';
import {URL, TOKEN_GITHUB, SENTRY_DSN} from '@env';

const App = (): JSX.Element => {
  const client = new ApolloClient({
    uri: URL,
    headers: {
      authorization: `Bearer ${TOKEN_GITHUB}`,
    },
    cache: new InMemoryCache(),
  });

  Sentry.init({
    dsn: SENTRY_DSN,
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

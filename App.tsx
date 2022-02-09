import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import * as Sentry from '@sentry/react-native';
import env from 'react-native-config';

import Routes from './src/pages/routes';

const App = (): JSX.Element => {
  const client = new ApolloClient({
    uri: env.URL,
    headers: {
      authorization: `Bearer ${env.TOKEN_GITHUB}`,
    },
    cache: new InMemoryCache(),
  });

  Sentry.init({
    dsn: env.SENTRY_DSN,
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

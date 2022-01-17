import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import * as Sentry from '@sentry/react-native';

import Routes from './src/pages/routes';

const App = (): JSX.Element => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: 'Bearer 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',
    },
    cache: new InMemoryCache(),
  });

  Sentry.init({
    dsn: 'https://6c1e21e0fbde4fbcbdcd07f726116bb7@o313038.ingest.sentry.io/6152949',
  });
  Sentry.nativeCrash();

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

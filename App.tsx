import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import Routes from './src/pages/routes';

const App = (): JSX.Element => {
  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: 'Bearer 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',
    },
    cache: new InMemoryCache(),
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

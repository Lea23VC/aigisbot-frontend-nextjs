import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { RetryLink } from '@apollo/client/link/retry';

const retryLink = new RetryLink({
  delay: {
    initial: 100,
    max: Infinity,
    jitter: true,
  },
  attempts: {
    max: 100000,
    retryIf: (error, _operation) => !!error,
  },
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
});

const errorLink = onError(
  ({ graphQLErrors, networkError, forward, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  },
);

const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;

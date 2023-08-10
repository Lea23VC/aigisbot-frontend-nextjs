'use client';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
  from,
  ApolloLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

import { RetryLink } from '@apollo/client/link/retry';

import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
  const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
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

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),

    link:
      typeof window === 'undefined'
        ? authLink.concat(
            ApolloLink.from([
              new SSRMultipartLink({
                stripDefer: true,
              }),
              errorLink,
              httpLink,
            ]),
          )
        : authLink.concat(from([errorLink, httpLink])),
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}

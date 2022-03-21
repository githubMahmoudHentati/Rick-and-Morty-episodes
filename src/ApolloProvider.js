import React,{ Suspense }  from 'react';
import App from './App';
import { ApolloClient } from 'apollo-boost'
import {ApolloProvider} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import {store,persistor} from "./store/store";
import {Provider} from "react-redux";
import { ApolloLink } from "apollo-link";
import { Spin } from 'antd';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import { PersistGate } from 'redux-persist/integration/react'

// Create Link
const assessmentLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql'
});

const authAssessmentLink = setContext(() => {
    const token2 = localStorage.getItem('jwtToken')
    return {
        headers: {
            Authorization:  ''
        }
    };
});

const client = new ApolloClient({
    link: ApolloLink.split(
        operation => operation.getContext().clientName === 'fetchClient', // Routes the query to the proper client
        authAssessmentLink.concat(assessmentLink),

    ),
    cache: new InMemoryCache({
        addTypename: false
    }),
    defaultOptions: {
        query: {
            errorPolicy: 'all',
            // used for all queries
            fetchPolicy: 'cache-and-network'
        },
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            // this config applies on lazy queries as well
        }
    },
});

export default (
    <Suspense fallback={(<Spin className="Spin">
        <div></div>
    </Spin>)}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ApolloProvider client={client}>
                    <App/>
                </ApolloProvider>
            </PersistGate>
        </Provider>
    </Suspense>
);
import { GraphQLString } from 'graphql';

export const GREETING = {
    type: GraphQLString,
    resolve: () => 'Hello World'
};
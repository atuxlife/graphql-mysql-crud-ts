import { GraphQLID, GraphQLList } from 'graphql';
import { Users } from '../Entities/Users';
import { UserType } from "../typeDefs/User";

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    async resolve(){
        return await Users.find();
    }
};

export const GET_USER = {
    type: UserType,
    args: {
        id: {type: GraphQLID}
    },
    async resolve(_: any, args: any){
        return await Users.findOne(args.id);
    }
};
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "../../../../lib/mongodb";

export default NextAuth({
	/* Either use the MongoDB adapter, initiate a
	cached MongoDB connection in /lib/mongodb.js
	and pass the connection to the adapter
	*/
	adapter: MongoDBAdapter(clientPromise),

	/* Or use a self-made adapter such as the mine,
	 which only requires you to pass in the connection string
	 
	adapter: MongooseAdapter(process.env.MONGODB_URI),
	*/
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
});

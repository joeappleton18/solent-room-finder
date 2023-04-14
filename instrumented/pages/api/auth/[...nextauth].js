function cov_tnutkscqb() {
  var path =
    "/Users/joeappleton/Code/devops/solent-room-finder/src/pages/api/auth/[...nextauth].js";
  var hash = "8ae01cbaa35a8126f0e4d7085c20b50c928d5529";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/joeappleton/Code/devops/solent-room-finder/src/pages/api/auth/[...nextauth].js",
    statementMap: {
      0: {
        start: {
          line: 6,
          column: 27,
        },
        end: {
          line: 32,
          column: 1,
        },
      },
      1: {
        start: {
          line: 9,
          column: 6,
        },
        end: {
          line: 9,
          column: 32,
        },
      },
      2: {
        start: {
          line: 10,
          column: 6,
        },
        end: {
          line: 10,
          column: 32,
        },
      },
      3: {
        start: {
          line: 11,
          column: 6,
        },
        end: {
          line: 11,
          column: 21,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 4,
          },
          end: {
            line: 8,
            column: 5,
          },
        },
        loc: {
          start: {
            line: 8,
            column: 42,
          },
          end: {
            line: 12,
            column: 5,
          },
        },
        line: 8,
      },
    },
    branchMap: {},
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
    },
    f: {
      0: 0,
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8ae01cbaa35a8126f0e4d7085c20b50c928d5529",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_tnutkscqb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_tnutkscqb();
import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import clientPromise from "../../../../lib/mongodb";
export const authOptions =
  (cov_tnutkscqb().s[0]++,
  {
    callbacks: {
      async session({session, token, user}) {
        cov_tnutkscqb().f[0]++;
        cov_tnutkscqb().s[1]++;
        session.user.toke = token;
        cov_tnutkscqb().s[2]++;
        session.user.id = user.id; // Add role value to user object so it is passed along with session
        cov_tnutkscqb().s[3]++;
        return session;
      },
    },
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
export default NextAuth(authOptions);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNb25nb0RCQWRhcHRlciIsIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJjbGllbnRQcm9taXNlIiwiYXV0aE9wdGlvbnMiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwidG9rZSIsImlkIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiXSwic291cmNlcyI6WyJbLi4ubmV4dGF1dGhdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9uZ29EQkFkYXB0ZXJ9IGZyb20gXCJAbmV4dC1hdXRoL21vbmdvZGItYWRhcHRlclwiO1xuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi8uLi9saWIvbW9uZ29kYlwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sIHRva2VuLCB1c2VyfSkge1xuICAgICAgc2Vzc2lvbi51c2VyLnRva2UgPSB0b2tlbjtcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHVzZXIuaWQ7IC8vIEFkZCByb2xlIHZhbHVlIHRvIHVzZXIgb2JqZWN0IHNvIGl0IGlzIHBhc3NlZCBhbG9uZyB3aXRoIHNlc3Npb25cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG5cbiAgLyogRWl0aGVyIHVzZSB0aGUgTW9uZ29EQiBhZGFwdGVyLCBpbml0aWF0ZSBhXG4gICAgICAgIGNhY2hlZCBNb25nb0RCIGNvbm5lY3Rpb24gaW4gL2xpYi9tb25nb2RiLmpzXG4gICAgICAgIGFuZCBwYXNzIHRoZSBjb25uZWN0aW9uIHRvIHRoZSBhZGFwdGVyXG4gICAgICAgICovXG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuXG4gIC8qIE9yIHVzZSBhIHNlbGYtbWFkZSBhZGFwdGVyIHN1Y2ggYXMgdGhlIG1pbmUsXG4gICAgICAgICB3aGljaCBvbmx5IHJlcXVpcmVzIHlvdSB0byBwYXNzIGluIHRoZSBjb25uZWN0aW9uIHN0cmluZ1xuICAgICAgICAgXG4gICAgICAgIGFkYXB0ZXI6IE1vbmdvb3NlQWRhcHRlcihwcm9jZXNzLmVudi5NT05HT0RCX1VSSSksXG4gICAgICAgICovXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVFBLGNBQWMsUUFBTyw0QkFBNEI7QUFDekQsT0FBT0MsUUFBUSxNQUFNLFdBQVc7QUFDaEMsT0FBT0MsY0FBYyxNQUFNLDRCQUE0QjtBQUN2RCxPQUFPQyxhQUFhLE1BQU0seUJBQXlCO0FBRW5ELE9BQU8sTUFBTUMsV0FBVyw0QkFBRztFQUN6QkMsU0FBUyxFQUFFO0lBQ1QsTUFBTUMsT0FBTyxDQUFDO01BQUNBLE9BQU87TUFBRUMsS0FBSztNQUFFQztJQUFJLENBQUMsRUFBRTtNQUFBO01BQUE7TUFDcENGLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxJQUFJLEdBQUdGLEtBQUs7TUFBQztNQUMxQkQsT0FBTyxDQUFDRSxJQUFJLENBQUNFLEVBQUUsR0FBR0YsSUFBSSxDQUFDRSxFQUFFLENBQUMsQ0FBQztNQUFBO01BQzNCLE9BQU9KLE9BQU87SUFDaEI7RUFDRixDQUFDO0VBRUQ7QUFDRjtBQUNBO0FBQ0E7RUFDRUssT0FBTyxFQUFFWCxjQUFjLENBQUNHLGFBQWEsQ0FBQztFQUV0QztBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBQ0VTLFNBQVMsRUFBRSxDQUNUVixjQUFjLENBQUM7SUFDYlcsUUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsU0FBUztJQUMvQkMsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0c7RUFDNUIsQ0FBQyxDQUFDO0FBRU4sQ0FBQztBQUVELGVBQWVqQixRQUFRLENBQUNHLFdBQVcsQ0FBQyJ9

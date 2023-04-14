function cov_ghq5livp6() {
  var path =
    "/Users/joeappleton/Code/devops/solent-room-finder/src/mocks/server.ts";
  var hash = "c33a4b0eeebdebdbe4a0604d62239b413a710978";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/joeappleton/Code/devops/solent-room-finder/src/mocks/server.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 24,
        },
        end: {
          line: 8,
          column: 1,
        },
      },
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c33a4b0eeebdebdbe4a0604d62239b413a710978",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ghq5livp6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_ghq5livp6();
// src/mocks/handlers.js
import {rest} from "msw";
export const handlers =
  (cov_ghq5livp6().s[0]++,
  [
    // Handles a POST /login request
    rest.post("/login", null),
    // Handles a GET /user request
    rest.get("/user", null),
  ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyZXN0IiwiaGFuZGxlcnMiLCJwb3N0IiwiZ2V0Il0sInNvdXJjZXMiOlsic2VydmVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9tb2Nrcy9oYW5kbGVycy5qc1xuaW1wb3J0IHtyZXN0fSBmcm9tIFwibXN3XCI7XG5leHBvcnQgY29uc3QgaGFuZGxlcnMgPSBbXG4gIC8vIEhhbmRsZXMgYSBQT1NUIC9sb2dpbiByZXF1ZXN0XG4gIHJlc3QucG9zdChcIi9sb2dpblwiLCBudWxsKSxcbiAgLy8gSGFuZGxlcyBhIEdFVCAvdXNlciByZXF1ZXN0XG4gIHJlc3QuZ2V0KFwiL3VzZXJcIiwgbnVsbCksXG5dO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWjtBQUNBLFNBQVFBLElBQUksUUFBTyxLQUFLO0FBQ3hCLE9BQU8sTUFBTUMsUUFBUSw0QkFBRztBQUN0QjtBQUNBRCxJQUFJLENBQUNFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO0FBQ3pCO0FBQ0FGLElBQUksQ0FBQ0csR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FDeEIifQ==

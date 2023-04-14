function cov_2g8hf41mue() {
  var path =
    "/Users/joeappleton/Code/devops/solent-room-finder/src/hooks/useNextAuth.ts";
  var hash = "8471604a6918f7c2f6ca4252389a65b612e42601";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/joeappleton/Code/devops/solent-room-finder/src/hooks/useNextAuth.ts",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14,
        },
        end: {
          line: 3,
          column: 24,
        },
      },
      "1": {
        start: {
          line: 5,
          column: 0,
        },
        end: {
          line: 9,
          column: 1,
        },
      },
      "2": {
        start: {
          line: 8,
          column: 2,
        },
        end: {
          line: 8,
          column: 59,
        },
      },
      "3": {
        start: {
          line: 8,
          column: 19,
        },
        end: {
          line: 8,
          column: 57,
        },
      },
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 12,
          },
          end: {
            line: 8,
            column: 13,
          },
        },
        loc: {
          start: {
            line: 8,
            column: 19,
          },
          end: {
            line: 8,
            column: 57,
          },
        },
        line: 8,
      },
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 0,
          },
          end: {
            line: 9,
            column: 1,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 5,
              column: 0,
            },
            end: {
              line: 9,
              column: 1,
            },
          },
          {
            start: {
              line: 5,
              column: 0,
            },
            end: {
              line: 9,
              column: 1,
            },
          },
        ],
        line: 5,
      },
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
    },
    f: {
      "0": 0,
    },
    b: {
      "0": [0, 0],
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8471604a6918f7c2f6ca4252389a65b612e42601",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2g8hf41mue = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2g8hf41mue();
import {useSession} from "next-auth/react";
let session = (cov_2g8hf41mue().s[0]++, useSession);
cov_2g8hf41mue().s[1]++;
if (process.env.NEXT_PUBLIC_TESTING) {
  cov_2g8hf41mue().b[0][0]++;
  cov_2g8hf41mue().s[2]++;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  session = () => {
    cov_2g8hf41mue().f[0]++;
    cov_2g8hf41mue().s[3]++;
    return {
      data: {
        session: true,
        user: {
          id: 1,
        },
      },
    };
  };
} else {
  cov_2g8hf41mue().b[0][1]++;
}
export default session;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19URVNUSU5HIiwiZGF0YSIsInVzZXIiLCJpZCJdLCJzb3VyY2VzIjpbInVzZU5leHRBdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU2Vzc2lvbn0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5sZXQgc2Vzc2lvbiA9IHVzZVNlc3Npb247XG5cbmlmIChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URVNUSU5HKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy9AdHMtaWdub3JlXG4gIHNlc3Npb24gPSAoKSA9PiAoe2RhdGE6IHtzZXNzaW9uOiB0cnVlLCB1c2VyOiB7aWQ6IDF9fX0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXNzaW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFRQSxVQUFVLFFBQU8saUJBQWlCO0FBRTFDLElBQUlDLE9BQU8sNkJBQUdELFVBQVU7QUFBQztBQUV6QixJQUFJRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsbUJBQW1CLEVBQUU7RUFBQTtFQUFBO0VBQ25DO0VBQ0E7RUFDQUgsT0FBTyxHQUFHLE1BQU87SUFBQTtJQUFBO0lBQUE7TUFBQ0ksSUFBSSxFQUFFO1FBQUNKLE9BQU8sRUFBRSxJQUFJO1FBQUVLLElBQUksRUFBRTtVQUFDQyxFQUFFLEVBQUU7UUFBQztNQUFDO0lBQUMsQ0FBQztFQUFELENBQUU7QUFDMUQsQ0FBQztFQUFBO0FBQUE7QUFFRCxlQUFlTixPQUFPIn0=

function cov_fb8b65hoi() {
  var path =
    "/Users/joeappleton/Code/devops/solent-room-finder/src/pages/api/hello.js";
  var hash = "5181fa9714b526707d8d507f6b242d5b31f37bcc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/joeappleton/Code/devops/solent-room-finder/src/pages/api/hello.js",
    statementMap: {
      0: {
        start: {
          line: 5,
          column: 0,
        },
        end: {
          line: 7,
          column: 3,
        },
      },
      1: {
        start: {
          line: 10,
          column: 2,
        },
        end: {
          line: 10,
          column: 43,
        },
      },
      2: {
        start: {
          line: 11,
          column: 2,
        },
        end: {
          line: 11,
          column: 35,
        },
      },
      3: {
        start: {
          line: 12,
          column: 16,
        },
        end: {
          line: 14,
          column: 3,
        },
      },
      4: {
        start: {
          line: 15,
          column: 2,
        },
        end: {
          line: 15,
          column: 21,
        },
      },
    },
    fnMap: {
      0: {
        name: "handler",
        decl: {
          start: {
            line: 9,
            column: 30,
          },
          end: {
            line: 9,
            column: 37,
          },
        },
        loc: {
          start: {
            line: 9,
            column: 48,
          },
          end: {
            line: 16,
            column: 1,
          },
        },
        line: 9,
      },
    },
    branchMap: {},
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    },
    f: {
      0: 0,
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5181fa9714b526707d8d507f6b242d5b31f37bcc",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_fb8b65hoi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_fb8b65hoi();
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {v2 as cloudinary} from "cloudinary";
cov_fb8b65hoi().s[0]++;
cloudinary.config({
  secure: true,
});
export default async function handler(req, res) {
  cov_fb8b65hoi().f[0]++;
  cov_fb8b65hoi().s[1]++;
  res.status(200).json({
    name: "John Doe",
  });
  cov_fb8b65hoi().s[2]++;
  console.log(cloudinary.config());
  const image =
    (cov_fb8b65hoi().s[3]++,
    await cloudinary.api.resources_by_asset_ids(
      ["3a279d1c4cce0bc50c4162c96e60cd27"][0]
    ));
  cov_fb8b65hoi().s[4]++;
  console.log(image);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ2MiIsImNsb3VkaW5hcnkiLCJjb25maWciLCJzZWN1cmUiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJhcGkiLCJyZXNvdXJjZXNfYnlfYXNzZXRfaWRzIl0sInNvdXJjZXMiOlsiaGVsbG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuaW1wb3J0IHt2MiBhcyBjbG91ZGluYXJ5fSBmcm9tIFwiY2xvdWRpbmFyeVwiO1xuXG5jbG91ZGluYXJ5LmNvbmZpZyh7XG4gIHNlY3VyZTogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtuYW1lOiBcIkpvaG4gRG9lXCJ9KTtcbiAgY29uc29sZS5sb2coY2xvdWRpbmFyeS5jb25maWcoKSk7XG4gIGNvbnN0IGltYWdlID0gYXdhaXQgY2xvdWRpbmFyeS5hcGkucmVzb3VyY2VzX2J5X2Fzc2V0X2lkcyhcbiAgICBbXCIzYTI3OWQxYzRjY2UwYmM1MGM0MTYyYzk2ZTYwY2QyN1wiXVswXVxuICApO1xuICBjb25zb2xlLmxvZyhpbWFnZSk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlWTtJQUFBO01BQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUFBO0FBZlo7O0FBRUEsU0FBUUEsRUFBRSxJQUFJQyxVQUFVLFFBQU8sWUFBWTtBQUFDO0FBRTVDQSxVQUFVLENBQUNDLE1BQU0sQ0FBQztFQUNoQkMsTUFBTSxFQUFFO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsZUFBZSxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQUE7RUFBQTtFQUM5Q0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztJQUFDQyxJQUFJLEVBQUU7RUFBVSxDQUFDLENBQUM7RUFBQztFQUN6Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFVBQVUsQ0FBQ0MsTUFBTSxFQUFFLENBQUM7RUFDaEMsTUFBTVUsS0FBSyw0QkFBRyxNQUFNWCxVQUFVLENBQUNZLEdBQUcsQ0FBQ0Msc0JBQXNCLENBQ3ZELENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDeEM7RUFBQztFQUNGSixPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDO0FBQ3BCIn0=

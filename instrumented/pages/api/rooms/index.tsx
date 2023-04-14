function cov_1tsu3501jh() {
  var path =
    "/Users/joeappleton/Code/devops/solent-room-finder/src/pages/api/rooms/index.tsx";
  var hash = "c20be3fb3f00c4af084ee0c99fb481400f2d66ef";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/joeappleton/Code/devops/solent-room-finder/src/pages/api/rooms/index.tsx",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 19,
        },
        end: {
          line: 7,
          column: 22,
        },
      },
      "1": {
        start: {
          line: 8,
          column: 18,
        },
        end: {
          line: 8,
          column: 72,
        },
      },
      "2": {
        start: {
          line: 9,
          column: 2,
        },
        end: {
          line: 11,
          column: 3,
        },
      },
      "3": {
        start: {
          line: 10,
          column: 4,
        },
        end: {
          line: 10,
          column: 27,
        },
      },
      "4": {
        start: {
          line: 12,
          column: 2,
        },
        end: {
          line: 12,
          column: 20,
        },
      },
      "5": {
        start: {
          line: 14,
          column: 2,
        },
        end: {
          line: 30,
          column: 3,
        },
      },
      "6": {
        start: {
          line: 16,
          column: 6,
        },
        end: {
          line: 24,
          column: 7,
        },
      },
      "7": {
        start: {
          line: 17,
          column: 20,
        },
        end: {
          line: 19,
          column: 9,
        },
      },
      "8": {
        start: {
          line: 20,
          column: 8,
        },
        end: {
          line: 20,
          column: 57,
        },
      },
      "9": {
        start: {
          line: 22,
          column: 8,
        },
        end: {
          line: 22,
          column: 27,
        },
      },
      "10": {
        start: {
          line: 23,
          column: 8,
        },
        end: {
          line: 23,
          column: 47,
        },
      },
      "11": {
        start: {
          line: 25,
          column: 6,
        },
        end: {
          line: 25,
          column: 12,
        },
      },
      "12": {
        start: {
          line: 28,
          column: 6,
        },
        end: {
          line: 28,
          column: 45,
        },
      },
      "13": {
        start: {
          line: 29,
          column: 6,
        },
        end: {
          line: 29,
          column: 12,
        },
      },
    },
    fnMap: {
      "0": {
        name: "handler",
        decl: {
          start: {
            line: 6,
            column: 30,
          },
          end: {
            line: 6,
            column: 37,
          },
        },
        loc: {
          start: {
            line: 6,
            column: 48,
          },
          end: {
            line: 31,
            column: 1,
          },
        },
        line: 6,
      },
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 2,
          },
          end: {
            line: 11,
            column: 3,
          },
        },
        type: "if",
        locations: [
          {
            start: {
              line: 9,
              column: 2,
            },
            end: {
              line: 11,
              column: 3,
            },
          },
          {
            start: {
              line: 9,
              column: 2,
            },
            end: {
              line: 11,
              column: 3,
            },
          },
        ],
        line: 9,
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 6,
          },
          end: {
            line: 9,
            column: 50,
          },
        },
        type: "binary-expr",
        locations: [
          {
            start: {
              line: 9,
              column: 6,
            },
            end: {
              line: 9,
              column: 14,
            },
          },
          {
            start: {
              line: 9,
              column: 18,
            },
            end: {
              line: 9,
              column: 50,
            },
          },
        ],
        line: 9,
      },
      "2": {
        loc: {
          start: {
            line: 14,
            column: 2,
          },
          end: {
            line: 30,
            column: 3,
          },
        },
        type: "switch",
        locations: [
          {
            start: {
              line: 15,
              column: 4,
            },
            end: {
              line: 25,
              column: 12,
            },
          },
          {
            start: {
              line: 27,
              column: 4,
            },
            end: {
              line: 29,
              column: 12,
            },
          },
        ],
        line: 14,
      },
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
    },
    f: {
      "0": 0,
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c20be3fb3f00c4af084ee0c99fb481400f2d66ef",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1tsu3501jh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1tsu3501jh();
import {unstable_getServerSession} from "next-auth";
import dbConnect from "../../../../lib/dbConnect";
import Room from "../../../../models/Room";
import {authOptions} from "../auth/[...nextauth]";
export default async function handler(req, res) {
  cov_1tsu3501jh().f[0]++;
  const {method} = (cov_1tsu3501jh().s[0]++, req);
  const session =
    (cov_1tsu3501jh().s[1]++,
    await unstable_getServerSession(req, res, authOptions));
  cov_1tsu3501jh().s[2]++;
  if (
    (cov_1tsu3501jh().b[1][0]++, !session) &&
    (cov_1tsu3501jh().b[1][1]++, !process.env.NEXT_PUBLIC_TESTING)
  ) {
    cov_1tsu3501jh().b[0][0]++;
    cov_1tsu3501jh().s[3]++;
    return res.status(404);
  } else {
    cov_1tsu3501jh().b[0][1]++;
  }
  cov_1tsu3501jh().s[4]++;
  await dbConnect();
  cov_1tsu3501jh().s[5]++;
  switch (method) {
    case "POST":
      cov_1tsu3501jh().b[2][0]++;
      cov_1tsu3501jh().s[6]++;
      try {
        const pet =
          (cov_1tsu3501jh().s[7]++,
          await Room.create(req.body)); /* create a new model in the database */
        cov_1tsu3501jh().s[8]++;
        res.status(201).json({
          success: true,
          data: pet,
        });
      } catch (error) {
        cov_1tsu3501jh().s[9]++;
        console.log(error);
        cov_1tsu3501jh().s[10]++;
        res.status(400).json({
          success: false,
        });
      }
      cov_1tsu3501jh().s[11]++;
      break;
    default:
      cov_1tsu3501jh().b[2][1]++;
      cov_1tsu3501jh().s[12]++;
      res.status(400).json({
        success: false,
      });
      cov_1tsu3501jh().s[13]++;
      break;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1bnN0YWJsZV9nZXRTZXJ2ZXJTZXNzaW9uIiwiZGJDb25uZWN0IiwiUm9vbSIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVEVTVElORyIsInN0YXR1cyIsInBldCIsImNyZWF0ZSIsImJvZHkiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlcyI6WyJpbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1bnN0YWJsZV9nZXRTZXJ2ZXJTZXNzaW9ufSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvZGJDb25uZWN0XCI7XG5pbXBvcnQgUm9vbSBmcm9tIFwiLi4vLi4vLi4vLi4vbW9kZWxzL1Jvb21cIjtcbmltcG9ydCB7YXV0aE9wdGlvbnN9IGZyb20gXCIuLi9hdXRoL1suLi5uZXh0YXV0aF1cIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCB7bWV0aG9kfSA9IHJlcTtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHVuc3RhYmxlX2dldFNlcnZlclNlc3Npb24ocmVxLCByZXMsIGF1dGhPcHRpb25zKTtcbiAgaWYgKCFzZXNzaW9uICYmICFwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URVNUSU5HKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KTtcbiAgfVxuICBhd2FpdCBkYkNvbm5lY3QoKTtcblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBwZXQgPSBhd2FpdCBSb29tLmNyZWF0ZShcbiAgICAgICAgICByZXEuYm9keVxuICAgICAgICApOyAvKiBjcmVhdGUgYSBuZXcgbW9kZWwgaW4gdGhlIGRhdGFiYXNlICovXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHtzdWNjZXNzOiB0cnVlLCBkYXRhOiBwZXR9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlfSk7XG4gICAgICB9XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7c3VjY2VzczogZmFsc2V9KTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixTQUFRQSx5QkFBeUIsUUFBTyxXQUFXO0FBQ25ELE9BQU9DLFNBQVMsTUFBTSwyQkFBMkI7QUFDakQsT0FBT0MsSUFBSSxNQUFNLHlCQUF5QjtBQUMxQyxTQUFRQyxXQUFXLFFBQU8sdUJBQXVCO0FBRWpELGVBQWUsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUFBO0VBQzlDLE1BQU07SUFBQ0M7RUFBTSxDQUFDLDZCQUFHRixHQUFHO0VBQ3BCLE1BQU1HLE9BQU8sNkJBQUcsTUFBTVIseUJBQXlCLENBQUNLLEdBQUcsRUFBRUMsR0FBRyxFQUFFSCxXQUFXLENBQUM7RUFBQztFQUN2RSxJQUFJLDhCQUFDSyxPQUFPLGtDQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxtQkFBbUIsR0FBRTtJQUFBO0lBQUE7SUFDaEQsT0FBT0wsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDO0VBQ3hCLENBQUM7SUFBQTtFQUFBO0VBQUE7RUFDRCxNQUFNWCxTQUFTLEVBQUU7RUFBQztFQUVsQixRQUFRTSxNQUFNO0lBQ1osS0FBSyxNQUFNO01BQUE7TUFBQTtNQUNULElBQUk7UUFDRixNQUFNTSxHQUFHLDZCQUFHLE1BQU1YLElBQUksQ0FBQ1ksTUFBTSxDQUMzQlQsR0FBRyxDQUFDVSxJQUFJLENBQ1QsRUFBQyxDQUFDO1FBQUE7UUFDSFQsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQztVQUFDQyxPQUFPLEVBQUUsSUFBSTtVQUFFQyxJQUFJLEVBQUVMO1FBQUcsQ0FBQyxDQUFDO01BQ2xELENBQUMsQ0FBQyxPQUFPTSxLQUFLLEVBQUU7UUFBQTtRQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDO1FBQUM7UUFDbkJiLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSSxJQUFJLENBQUM7VUFBQ0MsT0FBTyxFQUFFO1FBQUssQ0FBQyxDQUFDO01BQ3hDO01BQUM7TUFDRDtJQUVGO01BQUE7TUFBQTtNQUNFWCxHQUFHLENBQUNNLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO1FBQUNDLE9BQU8sRUFBRTtNQUFLLENBQUMsQ0FBQztNQUFDO01BQ3ZDO0VBQU07QUFFWiJ9

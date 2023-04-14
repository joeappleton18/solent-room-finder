function cov_rm4fbgmw() {
  var path =
    "/Users/joeappleton/Code/devops/solent-room-finder/src/mocks/data.js";
  var hash = "f12ab09bf9aafc150ca7a21d58d0491de592d839";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/joeappleton/Code/devops/solent-room-finder/src/mocks/data.js",
    statementMap: {
      0: {
        start: {
          line: 1,
          column: 25,
        },
        end: {
          line: 18,
          column: 1,
        },
      },
      1: {
        start: {
          line: 20,
          column: 25,
        },
        end: {
          line: 33,
          column: 1,
        },
      },
      2: {
        start: {
          line: 35,
          column: 21,
        },
        end: {
          line: 72,
          column: 1,
        },
      },
      3: {
        start: {
          line: 74,
          column: 27,
        },
        end: {
          line: 78,
          column: 1,
        },
      },
      4: {
        start: {
          line: 76,
          column: 23,
        },
        end: {
          line: 76,
          column: 50,
        },
      },
      5: {
        start: {
          line: 77,
          column: 23,
        },
        end: {
          line: 77,
          column: 50,
        },
      },
    },
    fnMap: {
      0: {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 76,
            column: 15,
          },
          end: {
            line: 76,
            column: 16,
          },
        },
        loc: {
          start: {
            line: 76,
            column: 23,
          },
          end: {
            line: 76,
            column: 50,
          },
        },
        line: 76,
      },
      1: {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 77,
            column: 15,
          },
          end: {
            line: 77,
            column: 16,
          },
        },
        loc: {
          start: {
            line: 77,
            column: 23,
          },
          end: {
            line: 77,
            column: 50,
          },
        },
        line: 77,
      },
    },
    branchMap: {},
    s: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
    f: {
      0: 0,
      1: 0,
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f12ab09bf9aafc150ca7a21d58d0491de592d839",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_rm4fbgmw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_rm4fbgmw();
export const buildings =
  (cov_rm4fbgmw().s[0]++,
  [
    {
      name: "John Everett Millais",
      code: "JM",
    },
    {
      name: "Michael Andrews",
      code: "A",
    },
    {
      name: "Reginald Mitchell",
      code: "RM",
    },
    {
      name: "Sir Christopher Cockerell",
      code: "CC",
    },
  ]);
export const roomTypes =
  (cov_rm4fbgmw().s[1]++,
  [
    {
      name: "PC Lab",
      code: "pc",
    },
    {
      name: "Mac Lab",
      code: "mac",
    },
    {
      name: "Lecture Theatre",
      code: "lt",
    },
  ]);
export const rooms =
  (cov_rm4fbgmw().s[2]++,
  [
    {
      number: "208",
      building: "HC",
      capacity: 10,
      type: {
        code: "pc",
        name: "PC Lab",
      },
    },
    {
      number: "204",
      building: "HC",
      capacity: 25,
      type: {
        code: "mac",
        name: "Mac Lab",
      },
    },
    {
      number: "203",
      building: "HC",
      capacity: 15,
      type: {
        code: "pc",
        name: "PC Lab",
      },
    },
    {
      number: "206",
      building: "HC",
      capacity: 25,
      type: {
        code: "mac",
        name: "Mac Lab",
      },
    },
    {
      number: "202",
      building: "HC",
      capacity: 13,
      type: {
        code: "pc",
        name: "PC Lab",
      },
    },
    {
      number: "201",
      building: "HC",
      capacity: 25,
      type: {
        code: "mac",
        name: "Mac Lab",
      },
    },
  ]);
export const lotsOfRooms =
  (cov_rm4fbgmw().s[3]++,
  [
    ...rooms,
    ...rooms.map((r) => {
      cov_rm4fbgmw().f[0]++;
      cov_rm4fbgmw().s[4]++;
      return {
        ...r,
        ...{
          building: "RM",
        },
      };
    }),
    ...rooms.map((r) => {
      cov_rm4fbgmw().f[1]++;
      cov_rm4fbgmw().s[5]++;
      return {
        ...r,
        ...{
          building: "JM",
        },
      };
    }),
  ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJidWlsZGluZ3MiLCJuYW1lIiwiY29kZSIsInJvb21UeXBlcyIsInJvb21zIiwibnVtYmVyIiwiYnVpbGRpbmciLCJjYXBhY2l0eSIsInR5cGUiLCJsb3RzT2ZSb29tcyIsIm1hcCIsInIiXSwic291cmNlcyI6WyJkYXRhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBidWlsZGluZ3MgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkpvaG4gRXZlcmV0dCBNaWxsYWlzXCIsXG4gICAgY29kZTogXCJKTVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNaWNoYWVsIEFuZHJld3NcIixcbiAgICBjb2RlOiBcIkFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVnaW5hbGQgTWl0Y2hlbGxcIixcbiAgICBjb2RlOiBcIlJNXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlNpciBDaHJpc3RvcGhlciBDb2NrZXJlbGxcIixcbiAgICBjb2RlOiBcIkNDXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgcm9vbVR5cGVzID0gW1xuICB7XG4gICAgbmFtZTogXCJQQyBMYWJcIixcbiAgICBjb2RlOiBcInBjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIk1hYyBMYWJcIixcbiAgICBjb2RlOiBcIm1hY1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMZWN0dXJlIFRoZWF0cmVcIixcbiAgICBjb2RlOiBcImx0XCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgcm9vbXMgPSBbXG4gIHtcbiAgICBudW1iZXI6IFwiMjA4XCIsXG4gICAgYnVpbGRpbmc6IFwiSENcIixcbiAgICBjYXBhY2l0eTogMTAsXG4gICAgdHlwZToge2NvZGU6IFwicGNcIiwgbmFtZTogXCJQQyBMYWJcIn0sXG4gIH0sXG4gIHtcbiAgICBudW1iZXI6IFwiMjA0XCIsXG4gICAgYnVpbGRpbmc6IFwiSENcIixcbiAgICBjYXBhY2l0eTogMjUsXG4gICAgdHlwZToge2NvZGU6IFwibWFjXCIsIG5hbWU6IFwiTWFjIExhYlwifSxcbiAgfSxcbiAge1xuICAgIG51bWJlcjogXCIyMDNcIixcbiAgICBidWlsZGluZzogXCJIQ1wiLFxuICAgIGNhcGFjaXR5OiAxNSxcbiAgICB0eXBlOiB7Y29kZTogXCJwY1wiLCBuYW1lOiBcIlBDIExhYlwifSxcbiAgfSxcbiAge1xuICAgIG51bWJlcjogXCIyMDZcIixcbiAgICBidWlsZGluZzogXCJIQ1wiLFxuICAgIGNhcGFjaXR5OiAyNSxcbiAgICB0eXBlOiB7Y29kZTogXCJtYWNcIiwgbmFtZTogXCJNYWMgTGFiXCJ9LFxuICB9LFxuICB7XG4gICAgbnVtYmVyOiBcIjIwMlwiLFxuICAgIGJ1aWxkaW5nOiBcIkhDXCIsXG4gICAgY2FwYWNpdHk6IDEzLFxuICAgIHR5cGU6IHtjb2RlOiBcInBjXCIsIG5hbWU6IFwiUEMgTGFiXCJ9LFxuICB9LFxuICB7XG4gICAgbnVtYmVyOiBcIjIwMVwiLFxuICAgIGJ1aWxkaW5nOiBcIkhDXCIsXG4gICAgY2FwYWNpdHk6IDI1LFxuICAgIHR5cGU6IHtjb2RlOiBcIm1hY1wiLCBuYW1lOiBcIk1hYyBMYWJcIn0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbG90c09mUm9vbXMgPSBbXG4gIC4uLnJvb21zLFxuICAuLi5yb29tcy5tYXAoKHIpID0+ICh7Li4uciwgLi4ue2J1aWxkaW5nOiBcIlJNXCJ9fSkpLFxuICAuLi5yb29tcy5tYXAoKHIpID0+ICh7Li4uciwgLi4ue2J1aWxkaW5nOiBcIkpNXCJ9fSkpLFxuXTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUE7TUFBQTtJQUFBO0VBQUE7RUFBQTtBQUFBO0FBQUE7QUFmWixPQUFPLE1B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

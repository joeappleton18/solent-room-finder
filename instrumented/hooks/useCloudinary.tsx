function cov_hbdo6kn1t() {
  var path =
    "/Users/joeappleton/Code/devops/solent-room-finder/src/hooks/useCloudinary.tsx";
  var hash = "5a73d52662dc4bf0e05b5aa57a9d44b2c8c63199";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/joeappleton/Code/devops/solent-room-finder/src/hooks/useCloudinary.tsx",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 16,
        },
        end: {
          line: 6,
          column: 4,
        },
      },
      "1": {
        start: {
          line: 8,
          column: 2,
        },
        end: {
          line: 8,
          column: 29,
        },
      },
    },
    fnMap: {
      "0": {
        name: "useCloudinary",
        decl: {
          start: {
            line: 3,
            column: 24,
          },
          end: {
            line: 3,
            column: 37,
          },
        },
        loc: {
          start: {
            line: 3,
            column: 40,
          },
          end: {
            line: 9,
            column: 1,
          },
        },
        line: 3,
      },
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
    },
    f: {
      "0": 0,
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5a73d52662dc4bf0e05b5aa57a9d44b2c8c63199",
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_hbdo6kn1t = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_hbdo6kn1t();
import {Cloudinary} from "@cloudinary/url-gen";
export default function useCloudinary() {
  cov_hbdo6kn1t().f[0]++;
  const cloud =
    (cov_hbdo6kn1t().s[0]++,
    new Cloudinary({
      cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
      },
    }));
  cov_hbdo6kn1t().s[1]++;
  return {
    Cloudinary: cloud,
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDbG91ZGluYXJ5IiwidXNlQ2xvdWRpbmFyeSIsImNsb3VkIiwiY2xvdWROYW1lIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NMT1VESU5BUllfQ0xPVURfTkFNRSJdLCJzb3VyY2VzIjpbInVzZUNsb3VkaW5hcnkudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2xvdWRpbmFyeX0gZnJvbSBcIkBjbG91ZGluYXJ5L3VybC1nZW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2xvdWRpbmFyeSgpIHtcbiAgY29uc3QgY2xvdWQgPSBuZXcgQ2xvdWRpbmFyeSh7XG4gICAgY2xvdWQ6IHtjbG91ZE5hbWU6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMT1VESU5BUllfQ0xPVURfTkFNRX0sXG4gIH0pO1xuXG4gIHJldHVybiB7Q2xvdWRpbmFyeTogY2xvdWR9O1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQTtNQUFBO0lBQUE7RUFBQTtFQUFBO0FBQUE7QUFBQTtBQWZaLFNBQVFBLFVBQVUsUUFBTyxxQkFBcUI7QUFFOUMsZUFBZSxTQUFTQyxhQUFhLEdBQUc7RUFBQTtFQUN0QyxNQUFNQyxLQUFLLDRCQUFHLElBQUlGLFVBQVUsQ0FBQztJQUMzQkUsS0FBSyxFQUFFO01BQUNDLFNBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDO0lBQWlDO0VBQ2xFLENBQUMsQ0FBQztFQUFDO0VBRUgsT0FBTztJQUFDTixVQUFVLEVBQUVFO0VBQUssQ0FBQztBQUM1QiJ9

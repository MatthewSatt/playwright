// playwright.config.js
// @ts-check
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    // All requests we send go to this API endpoint.
    baseURL: "http://uitestingplayground.com",
    //   extraHTTPHeaders: {
    //     // We set this header per GitHub guidelines.
    //     'Accept': 'application/vnd.github.v3+json',
    //     // Add authorization token to all requests.
    //     // Assuming personal access token available in the environment.
    //     'Authorization': `token ${process.env.API_TOKEN}`,
    //   },
  },
  globalSetup: require.resolve("./global-setup.js"),
};
module.exports = config;

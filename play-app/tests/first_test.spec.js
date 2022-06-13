/*
run tests = npx playwright test

change browser = npx playwright test --browser=firefox

all browsers = npx playwright test --browser=all

headed mode = npx playwright test --headed

debug = PWDEBUG=console npm run test

show trace file = npx playwright show-trace "name of file"


test() = normal test set up

test.skip() = skips a test

test.only() = only runs this current test

test.describe() groups tests together

*/

const { test, expect } = require("@playwright/test");

test("checks name", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const name = await page.innerText(".navbar__title");
  expect(name).toBe("Playwright");
});

test("test scrollbar", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/scrollbars");
  await page.click("#hidingButton");
});

test("focus this test", async ({ page, context }) => {
  await context.tracing.start({ screenshots: true, snapshots: true });
  await page.goto("/scrollbars"); // (/scrollbars possible because of the config file)
  await page.click("#hidingButton");
//   await context.tracing.stop({ path: "trace.zip" });
});

test.skip("skip this test", async ({ page }) => {
  // This test is not run
});

//logging in + typing

test.use({ storageState: "mood.json" });
test("mood login auth", async ({ page }) => {
    await page.goto("http://appmood.herokuapp.com/moodlists");
    const text = await page.innerText("#root > div.moodlists > h1")
    expect(text).toBe("Matthew5's Moodlists");
})

 // describes allow you to group multiple tests together
test.describe("Dynamic Scenario", () => {
    test("Goes to page", async ({ page }) => {
        await page.goto("/dyanmicid");
    })
    test("Does the same thing", async ({ page }) => {
        await page.goto("dynamicid");
    })
})

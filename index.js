import screenshot from "./src/screenshot.mjs";
import cron from "node-cron";

//
cron.schedule("* * * * *", async () => {
  for (let index = 0; index < 5; index++) {
    console.log("cron started", index + 1);
    await screenshot("./bucket", "screenshot");
    console.log("cron end");
  }
});

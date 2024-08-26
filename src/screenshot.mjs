import puppeteer from "puppeteer";

const screenshot = async (path, filename) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Masukkan URL yang ingin di-screenshot
  await page.goto("https://www.instagram.com/aulia.tazz/", {
    waitUntil: "networkidle2",
  });

  await page.waitForNetworkIdle();

  // Screenshot dan simpan ke file
  await page.screenshot({ path: "screenshot.png", fullPage: true });

  await browser.close();
  console.log(
    "Screenshot berhasil diambil dan disimpan sebagai screenshot.png",
  );
};

export default screenshot;

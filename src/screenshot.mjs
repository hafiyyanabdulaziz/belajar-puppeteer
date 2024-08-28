import puppeteer from "puppeteer";

const screenshot = async (path, filename) => {
  const timestamp = Date.now();
  const location = `${path}/${filename}_${timestamp}.png`

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Masukkan URL yang ingin di-screenshot
  await page.goto("https://microsoft.com", {
    waitUntil: "networkidle2",
  });

  await page.waitForNetworkIdle();

  // Screenshot dan simpan ke file
  await page.screenshot({ path:location, fullPage: true });

  await browser.close();
  console.log(
    `Screenshot berhasil diambil dan disimpan di ${location}`
  );
};

export default screenshot;

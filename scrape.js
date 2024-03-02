const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.footlocker.ca/en/category/shoes/nike/air-force-1.html";

async function scrapeWebsite() {
  try {
    const response = await axios.get(url);
    const html = response.data;

    const $ = cheerio.load(html);

    $(".product-tile").each((index, element) => {
      const productName = $(element).find(".product-tile-title").text().trim();
      const productPrice = $(element).find(".product-pricing").text().trim();

      console.log("Product:", productName);
      console.log("Price:", productPrice);
      console.log("-".repeat(50));
    });
  } catch (error) {
    console.error("Error:", error.message);
  }
}

scrapeWebsite();

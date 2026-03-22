import { getBrochureLinks } from "./sales-brochure-generator";

async function main() {
    try {
        const brochureLinks = await getBrochureLinks("https://cars.tatamotors.com/");
        console.log("Brochure Links:", brochureLinks);
    } catch (err) {
        console.error("Error getting brochure links:", err);
    }
}

main();

/*
Eg: output
Brochure Links: {
  "links": [
    {
      "type": "about page",
      "url": "https://cars.tatamotors.com/organisation/about-us.html"
    },
    {
      "type": "about page",
      "url": "https://cars.tatamotors.com/organisation.html"
    },
    {
      "type": "company history page",
      "url": "https://cars.tatamotors.com/organisation/our-history.html"
    },
    {
      "type": "leadership page",
      "url": "https://cars.tatamotors.com/organisation/our-leadership.html"
    },
    {
      "type": "innovation page",
      "url": "https://cars.tatamotors.com/organisation/innovation.html"
    },
    {
      "type": "corporate responsibility page",
      "url": "https://www.tatamotors.com/corporate-responsibility"
    },
    {
      "type": "careers page",
      "url": "https://www.tatamotors.com/careers"
    }
  ]
}
*/

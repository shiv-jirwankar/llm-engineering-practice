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
Brochure Links: The links likely relevant for inclusion in a brochure about Tata Motors covering company overview, culture, customers, and careers are:

1. About Tata Motors and Company Information
- https://cars.tatamotors.com/organisation/about-us.html
- https://cars.tatamotors.com/organisation.html
- https://cars.tatamotors.com/organisation/our-history.html
- https://cars.tatamotors.com/organisation/our-leadership.html
- https://cars.tatamotors.com/brand-story.html
- https://cars.tatamotors.com/organisation/innovation.html

2. Careers and Job Opportunities
- https://www.tatamotors.com/careers

3. Corporate Social Responsibility and Company Culture
- https://www.tatamotors.com/corporate-responsibility

4. Investor Information (Useful for prospective investors)
- https://cars.tatamotors.com/investors/overview.html

5. News and Events (For latest company updates)
- https://cars.tatamotors.com/news-and-events.html

These links contain comprehensive information about the company’s background, leadership, innovation, career opportunities, CSR initiatives, investors, and latest news which are essential for a well-rounded brochure.
*/

QUEUEWISE WEBSITE — QUICK START

Files:
- index.html: website content and layout
- style.css: responsive visual design
- script.js: interactive queue estimator and recommendation rules
- sitemap.xml and robots.txt: update domain after deployment

Preview: extract the ZIP and open index.html in a browser.

Deploy: upload all files to the root of a new GitHub repository named queuewise, import that repository into Vercel, and deploy as a static site (no framework required). After deployment, replace YOUR-DEPLOYED-DOMAIN in sitemap.xml and robots.txt with the actual deployed domain, commit changes, and redeploy.

IMPORTANT PRODUCT LIMITATION: This is a front-end concept prototype. It uses numbers entered by the visitor and simple rule-based logic to estimate waiting time and suggest actions. It is not connected to a real camera, live canteen data, AI model, or backend database. Do not present demo metrics as real measurements.

Future version ideas: capture queue counts using staff check-ins or anonymous manual counts; store historical data in a database; compare peak periods over time; validate estimates against real wait times; use camera analytics only with appropriate campus permission and privacy safeguards.

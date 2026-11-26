Jayaswal Lab — static website
=============================

Plain HTML, CSS and JavaScript. No build step, no server-side code, no database.
It will run on any web host, including university shared hosting, GitHub Pages,
Netlify or a departmental Apache or Nginx server.

TO PUT IT ONLINE
----------------
Upload the whole contents of this folder (keeping the assets/ subfolder where it
is) to your web root — on most university hosts that is public_html/ or
www/. Nothing else is needed. index.html is the home page.

FILES
-----
  index.html          Home
  research.html       Research areas
  projects.html       Ongoing and completed projects
  members.html        Lab members
  publications.html   Papers, chapters, conferences, patent
  pi.html             Principal investigator profile
  contact.html        Contact and directions
  assets/style.css    All styling, including the colour tokens
  assets/main.js      Publication filter and copy buttons

EDITING
-------
Colours live at the top of assets/style.css in the :root block — change --navy,
--blue and --blue-bright to adjust the palette everywhere at once. A dark-mode
palette follows it for visitors whose device is set to dark.

To add a lab member, open members.html and copy one of the three template
cards; the file has a comment above them showing which three fields to fill in.
Remove the class "person--slot" so the dashed border becomes solid.

To add a publication, copy any <li class="pub"> block in publications.html and
edit it. Keep the data-year and data-text attributes in step with the content,
since the search and year filter read them.

Photographs: drop image files into assets/ and replace the initials in an
avatar with <img src="assets/yourfile.jpg" alt="">.

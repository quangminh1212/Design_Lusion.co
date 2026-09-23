# Lusion Studio website recreation

A self-hosted recreation of the public Lusion studio website, captured on 23 September 2026. The repository contains the Home, About, Projects archive, and all 19 project detail routes. The site HTML, compiled JavaScript, CSS, fonts, images, 3D models, audio, and project videos are served from this repository.

The local server serves repository files directly and makes no runtime requests to lusion.co or lusion.dev. It does not proxy or embed the original site. Normal outbound links, mail links, and the original Play Reel integration remain part of the page.

## Run locally

Requires Node.js 18 or newer. No package installation is needed.

    npm start

Open http://127.0.0.1:4173. The server supports direct loading of nested pages and byte-range requests for local MP4 files.

## Known media limitation

The original Play Reel button uses Vimeo video 761102167, titled "Lusion Reel 2023". Vimeo metadata reports a duration of 107 seconds, but its player returned HTTP 401 and its config endpoint returned HTTP 403 during this audit. The two local files at assets/textures/reel/ are 11.5-second looping background textures; they are not copies of the full Vimeo reel. The Play Reel overlay therefore still depends on Vimeo and did not open in the audited environment. All other observed site assets are local.

## Verification

- All 22 routes reached the site's ready state in desktop Chrome and an iPhone-sized 390 x 844 viewport, including runs with all external HTTPS blocked.
- Mobile menu navigation to Projects worked with external HTTPS blocked.
- Local routes returned successfully, and observed local asset requests returned HTTP 200 or 206 with no 404s.
- 576 asset paths were compared with current live responses by SHA-256; all matched the corresponding repository files.
- All 22 HTML pages matched after normalizing local URL rewrites and analytics snippets. The CSS matched byte for byte. The JavaScript matched byte for byte after removing the original CDN and host-redirect rules.
- The local browser crawl made no requests to lusion.co or lusion.dev. Vimeo was the only external runtime origin observed.

## Pages

- / - Home
- /about - About Us
- /projects - Project archive
- /projects/atlas_motion
- /projects/choo_choo_world
- /projects/ddd_2024
- /projects/devin_ai
- /projects/everswap
- /projects/infinite_passerella
- /projects/lusion_labs
- /projects/maxmara_bearings_gifts
- /projects/my_little_story_book
- /projects/of_the_oak
- /projects/oryzo_ai
- /projects/porsche_dream_machine
- /projects/soda_experience
- /projects/spaace
- /projects/spatial_fusion
- /projects/synthetic_human
- /projects/the_turn_of_the_screw
- /projects/worldcoin
- /projects/zero_tech

## Attribution

This is an independent, non-affiliated recreation for local inspection. Lusion's name, site design, and project media remain the property of their respective owners. Original public reference: https://lusion.co/.

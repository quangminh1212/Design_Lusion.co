# Lusion Studio website recreation

A self-hosted recreation of the public Lusion studio website, captured on 23 September 2026. The repository contains the Home, About, Projects archive, and all 19 project detail routes. The site HTML, compiled JavaScript, CSS, fonts, images, 3D models, audio, and project videos are served from this repository.

The local server serves repository files directly and does not proxy or embed the original site. Page assets load from this repository. Links to outside sites remain navigation links. Vimeo video playback and the newsletter subscription are disabled in this local copy so those actions do not send runtime requests outside the repository.

## Run locally

Requires Node.js 18 or newer. No package installation is needed.

    npm start

Open http://127.0.0.1:4173. The server supports direct loading of nested pages and byte-range requests for local MP4 files.

## Known media limitation

The original Play Reel is Vimeo video 761102167, titled "Lusion Reel 2023" (107 seconds). The Porsche: Dream Machine Watch Video link is Vimeo video 783015830 (115 seconds). Neither video has a public download available from its Vimeo page. The repository's reel textures and Porsche project clips are short background loops, not copies of those complete films, so the local copy does not substitute them. Selecting either video shows an offline notice and makes no Vimeo request. The newsletter form displays a local-only notice and does not contact Mailchimp.

The web manifest's Android icons are local resized copies of the repository's Apple touch icon.

## Verification

- All 22 routes return HTTP 200 and include the local-only guard and app bundle.
- A scan of all 22 HTML pages found 296 resource attributes, with no external HTML or CSS asset URLs.
- Desktop Chrome loaded the home and Porsche routes using only `127.0.0.1:4173`; observed requests returned HTTP 200 or 206 with no failures.
- Clicking the Reel and Porsche video links shows a local notice without creating a Vimeo iframe or request. Submitting the newsletter form shows a local notice without contacting Mailchimp.
- 576 asset paths were compared with current live responses by SHA-256; all matched the corresponding repository files.
- All 22 HTML pages matched after normalizing local URL rewrites and analytics snippets. The CSS matched byte for byte. The JavaScript matched byte for byte after removing the original CDN and host-redirect rules.
- The local browser crawl made no requests to lusion.co, lusion.dev, Vimeo, or Mailchimp.

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

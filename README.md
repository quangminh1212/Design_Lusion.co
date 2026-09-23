# Lusion Studio website recreation

A local recreation of the public Lusion studio website, captured on 23 September 2026. It includes the home page, About, Projects, and all 19 project detail pages. The site UI, type, images, 3D models, audio, and project videos are stored in this repository and served locally; the app does not proxy or embed `lusion.co`.

The original “Play Reel” interaction uses Vimeo's player, so that specific overlay requires Vimeo. The rest of the website assets load from this repository.

## Run locally

Requires Node.js 18 or newer. No package installation is needed.

```sh
npm start
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). The server supports direct loading of nested pages and byte-range requests for local video files.

## Pages

- `/` — Home
- `/about` — About Us
- `/projects` — Project archive
- `/projects/atlas_motion`
- `/projects/choo_choo_world`
- `/projects/ddd_2024`
- `/projects/devin_ai`
- `/projects/everswap`
- `/projects/infinite_passerella`
- `/projects/lusion_labs`
- `/projects/maxmara_bearings_gifts`
- `/projects/my_little_story_book`
- `/projects/of_the_oak`
- `/projects/oryzo_ai`
- `/projects/porsche_dream_machine`
- `/projects/soda_experience`
- `/projects/spaace`
- `/projects/spatial_fusion`
- `/projects/synthetic_human`
- `/projects/the_turn_of_the_screw`
- `/projects/worldcoin`
- `/projects/zero_tech`

## Attribution

This is an independent, non-affiliated recreation for local inspection. Lusion's name, site design, and project media remain the property of their respective owners. Original public reference: [lusion.co](https://lusion.co/).

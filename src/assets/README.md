# Branch Assets Directory Guide

Organized image and media directories for each City Operations branch.

## Directory Structure

```
src/assets/
├── ets/           # Edmonton Transit Service photos, award assets, maps, and vehicle wraps
├── fleet/         # Fleet & Facility Services municipal building photos, fleet shops, EV trucks
├── parks-roads/   # Parks & Roads Services parks, roadway operations, forestry, snow control
└── waste/         # Waste Management Services curbside collection, EWMC, organics & recycling
```

## Recommended Image Guidelines

- **Branch Manager Portrait:** ~400x400px (1:1 aspect ratio), high resolution JPEG or PNG.
- **Hero & Panoramic Banner:** 1920x800px or 1920x1080px (16:9), optimized JPEG.
- **Breakout & Callout Highlights:** 1200x800px (3:2) or 800x800px (1:1).
- **Format:** JPG, PNG, WebP, or SVG.

Assets can be imported directly in TypeScript (e.g. `import myPhoto from '../assets/fleet/my-photo.jpg'`) or placed in `public/assets/<branch>/` for direct absolute URL referencing.

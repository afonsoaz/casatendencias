# Plan: Brand logo carousel on the homepage

Add an elegant, continuously auto-scrolling strip of partner brand logos, visible right below the hero (first photo) on the main page.

## What will appear

A new slim section immediately after the hero, before the "Casa & Tendências" statement section:

- Small eyebrow label: "Trabalhamos com marcas de confiança" (pt-PT).
- Seven brand logos in an infinite loop that glides slowly to the left, pausing when the visitor hovers over it: Evo, Harlequim, Molaflex, Piubelle, Yankee Candle, Clayre & Eef, Bizzotto.
- Premium look consistent with the site: logos at uniform height (~40px) with soft opacity on the cream background, generous spacing, no borders or boxes.
- On mobile the same strip runs, just with slightly smaller logos.

## How the logos are obtained and prepared

1. Search the web for each brand's official logo (brand sites, official press/brand resources) and download the best-quality file available.
2. Refine each one so the strip looks cohesive: clean white/transparent background, consistent height, no stray artifacts. Where a downloaded file needs cleanup, use AI image editing; never redraw or invent logos.
3. Save the finished logos as CDN assets in the project (one pointer file per logo) so they load fast worldwide.

## Implementation details

- New section in `src/routes/index.tsx` between the hero and statement sections, using a `BRANDS` list (name + logo URL) defined in `src/lib/brand.ts`.
- Continuous scroll done with a lightweight CSS keyframe marquee (logos list duplicated once for a seamless loop) added to `src/styles.css` using the existing design tokens; no new libraries.
- The animation pauses on hover and is disabled for visitors with reduced-motion preferences (accessibility).
- Each logo image gets a proper alt text (e.g. "Yankee Candle").

## Verification

- Check the build log is clean after the edits.
- Drive the preview with Playwright at desktop and mobile widths: confirm the strip renders below the hero, all 7 logos load, and the motion works.
- Confirm the rest of the homepage is unchanged.

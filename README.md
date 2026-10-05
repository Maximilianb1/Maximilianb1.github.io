# Maximilian Bershtman - personal website

A lightweight, responsive professional website built around Maximilian's academic and research journey from 2021. It is plain HTML, CSS, and JavaScript, with no build step or external font dependency.

**Live website:** https://maximilianb1.github.io/

**Repository:** https://github.com/Maximilianb1/Maximilianb1.github.io

## Pages

- `index.html`: introduction, CV download, year-by-year journey, and personal interests.
- `research.html`: publications, research projects, paper PDF, and public code.
- `experience.html`: professional research roles and earlier systems experience.
- `studies.html`: degree information, B.Sc. final average, and complete expandable course lists without individual grades.

## Preview locally

Open `index.html` in a browser, or run a local static server from this folder:

```powershell
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

GitHub Pages is configured to publish this site with GitHub Actions. The included workflow deploys the repository root on each push to `main`. Edit files locally and push to `main`, or edit and commit them directly on GitHub, to publish an update automatically. Deployment progress appears in the repository's Actions tab. A custom domain can be connected later.

## Updating the site

- Edit the relevant HTML page to update biography, research, experience, studies, or links.
- Adjust the visual system in `styles.css`.
- Keep the paper and CV PDFs in `assets/` current.
- Update the manuscript's review status once it changes; add an arXiv link only after an identifier exists.
- Add new papers and projects to `research.html`, and link important milestones from the homepage timeline.

The supplied CV is available for download. Academic transcripts are not included. Course names and the B.Sc. final average are transcribed into the Studies page, without individual course grades or the transcript's ID number. The M.Sc. list distinguishes registered courses from completed coursework according to the supplied transcript.

The neural network illustration is an original SVG concept, rather than the architecture of a particular model. Its highlighted internal units represent the discovery of hidden model capabilities. The header and favicon use the same original MB monogram.

Course disclosures use native HTML `details` and `summary` elements, following [MDN's documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details), so they remain usable without JavaScript.

## Responsive layout

The site automatically adapts to the browser width and height. There is no manual view selector or saved layout preference. The homepage places the name, introduction, action buttons, neural-network artwork, and Curious about tags together in the opening screen. On large desktop screens, its layout expands to 1,680 pixels with a proportionally larger introduction and illustration, while paragraphs retain readable line lengths. A compact framing of the same SVG network keeps the illustration readable on phones. Smaller phone screens place it beside the name, while taller phones use a larger image below the name.

On phones, the opening fills the visible screen through the Curious about band. The introduction distributes spare space between its content rows, avoiding large empty gaps above and below the content. Dynamic viewport units account for the mobile browser's expanding and collapsing controls.

The site respects reduced-motion settings and supports keyboard navigation. Larger accessibility text settings and unusually short browser windows can require scrolling to preserve readable text.

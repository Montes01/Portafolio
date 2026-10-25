# Portfolio

Static portfolio — no build step, no dependencies, no framework. Native ES
modules and web components only.

## Structure

```
index.html                  page shell: sections, nav, data-bind hooks
src/
  app.js                    entry point — wires data → page
  data.js                   ALL your content
  core/
    base-element.js         base class for the custom elements
    helpers.js              escaping + small markup helpers
    bindings.js             data-bind handling, list → component mapping
    theme.js                light/dark toggle
    reveal.js               fade sections in on scroll
  components/
    index.js                registry: registers elements, maps data keys
    project-card.js         <portfolio-project>
    job-item.js             <portfolio-job>
    skill-group.js          <portfolio-skill-group>
    stat-item.js            <portfolio-stat>
    quote-card.js           <portfolio-quote>
  styles/
    main.css                entry point, imports the rest
    tokens.css              colours, radii, easing
    base.css                reset, typography, helpers, reveal
    layout.css              header, hero, section shells, footer
    components.css          buttons, cards, timeline, quotes, contact
    responsive.css          breakpoints + print
```

## Running it

Modules can't be loaded from `file://`, so use a local server:

```powershell
python -m http.server 5173
# open http://localhost:5173
```

Deploying is unchanged — any static host serves the ES modules fine.

## Editing content

Everything lives in `src/data.js`. Any block marked `PLACEHOLDER` is mock text.

- `profile` — name, role, location, email, socials
- `aboutLead` / `about` — big inline lead and array of paragraphs
- `stats` — small numbers next to the about text (`[]` hides them)
- `skills` — grouped chips
- `projects` — first one with `featured: true` gets the wide card
- `experience` — timeline entries
- `testimonials` — quotes (`[]` hides the whole section)

If `email` is empty, links using it fall back to your first real social link
(LinkedIn).

## How rendering works

`src/app.js` imports the data, calls `bindData()`, and every element carrying a
`data-bind="key"` gets filled. Lists are delegated to components:

```js
// bindings.js
const Component = LIST_COMPONENTS[key];      // "projects" → ProjectCard
items.forEach((item) => node.append(Component.create(item)));
```

One custom element per content type owns its markup. Add a component:

1. Create `src/components/thing.js` extending `PortfolioElement`, with a
   `static tag` and a `template(data)` returning HTML (use `esc()`).
2. Register it in the `components` array in `src/components/index.js`.
3. Map a `data.js` key to it in `LIST_COMPONENTS`.

No other file needs to change. Elements render in the light DOM, so the
stylesheet rules apply as usual.

## Changing the look

Colours, radius and spacing are CSS variables at the top of
`src/styles/tokens.css`. The accent colour is `--accent`. Light and dark themes
are defined separately; the toggle respects the OS setting until the visitor
picks one.

The page background is a subtle 135° gradient (top-left → bottom-right) driven
by `--bg-grad-a` / `--bg-grad-b`. In the dark theme it runs black → grey; in the
light theme white → warm grey.

/* ------------------------------------------------------------------
   Component registry — the single place where content keys meet
   custom elements. Add a component here and both the registration and
   the `data-bind` mapping pick it up.
   ------------------------------------------------------------------ */

import { JobItem } from "./job-item.js";
import { ProjectCard } from "./project-card.js";
import { QuoteCard } from "./quote-card.js";
import { SkillGroup } from "./skill-group.js";
import { StatItem } from "./stat-item.js";

const components = [ProjectCard, JobItem, SkillGroup, StatItem, QuoteCard];

components.forEach((Component) => {
  if (!customElements.get(Component.tag)) {
    customElements.define(Component.tag, Component);
  }
});

/** data.js key → component class */
export const LIST_COMPONENTS = {
  projects: ProjectCard,
  experience: JobItem,
  skills: SkillGroup,
  stats: StatItem,
  testimonials: QuoteCard,
};

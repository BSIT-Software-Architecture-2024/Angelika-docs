import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  base: "/Angelika-docs",
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Contributions",
          autogenerate: { directory: "contributions" },
        },
        {
          label: "Learnings",
          autogenerate: { directory: "learnings" },
        },
        {
          label: "Projects",
          autogenerate: { directory: "projects" },
        },
        {
          label: "Role",
          autogenerate: { directory: "role" },
        },
      ],
    }),
  ],
});

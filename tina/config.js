import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "70b4dda9-e0ba-4302-8a15-5a6ac8d827a6", // Get this from tina.io
  token: "41786e8c119280501b485972978242d45457535b", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  schema: {
    collections: [
      {
        name: "nouvelles",
        label: "Nouvelles",
        path: "content/nouvelles",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Corps de texte",
            isBody: true,
          },
        ],
      },

      // page inscription
      {
        name: "pages",
        label: "Pages",
        format: "md",
        path: "content",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Corps de texte",
            isBody: true,
          },
        ],
      }
    ],
  },
});

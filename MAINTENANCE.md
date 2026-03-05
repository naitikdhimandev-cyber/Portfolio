# Portfolio Maintenance Guide

This guide explains how to update your portfolio's content, images, and detailed reports.

## 1. Updating Textual Content

Most of your content is stored in **JSON files** inside `src/data/`. Editing these files will automatically update the website.

| Content Area | Data File | Key Fields to Edit |
| :--- | :--- | :--- |
| **Projects** | `src/data/projects.json` | `title`, `description`, `tags`, `github`, `demo` |
| **Hackathons** | `src/data/hackathons.json` | `event`, `position`, `description`, `tags` |
| **Experience** | `src/data/experience.json` | `role`, `company`, `period`, `description` |
| **Certifications** | `src/data/experience.json` | `name`, `issuer`, `date` |

### How to add a new item:
1. Open the relevant `.json` file.
2. Copy an existing object (the stuff between `{ }`).
3. Paste it as a new entry (ensure there is a comma between objects).
4. Update the `id` to be unique (e.g., `project-new`, `exp-5`).

---

## 2. Managing Images

For images to load correctly in your detail pages, follow these steps:

### Where to upload:
Put your images in a folder named `assets/images/` inside the `public/` directory.

### How to reference them:
In your JSON files, use the path relative to the `public` folder:
```json
"image": "/assets/images/my-new-certificate.png",
"gallery": [
    "/assets/images/event-photo1.jpg",
    "/assets/images/event-photo2.jpg"
]
```

> [!TIP]
> Using the `public` folder is better for "dynamic" content like gallery images because it doesn't require complex code imports.

---

## 3. Detailed Reports (Markdown)

The long-form text you see on the detail pages (like "Return to Base" or project logs) comes from Markdown files.

### Where they live:
All reports are in `public/markdown/`.

### How to update:
1. Create a new `.md` file in `public/markdown/` (e.g., `my-internship.md`).
2. Write your content using standard Markdown (use `#` for headers, `**` for bold, etc.).
3. In your JSON file (`experience.json` or `projects.json`), link the file by its name:
   ```json
   "markdown": "my-internship.md"
   ```

---

## 4. General UI Updates

If you want to change parts of the Home screen that aren't in JSON (like the "About" text):

- **Hero Text**: Edit `src/components/Hero.jsx`.
- **About Me**: Edit `src/components/About.jsx`.
- **Contact Details**: Edit `src/components/Contact.jsx`.

---

## 5. Deployment

After making changes locally, run:
```bash
npm run build
```
This prepares the optimized files in the `dist/` folder for your hosting provider (e.g., GitHub Pages).

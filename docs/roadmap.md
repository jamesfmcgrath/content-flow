# Content Flow Roadmap

This roadmap outlines the development plan for **Content Flow**, a full‑stack learning project built with Next.js, TypeScript, Tailwind CSS v4, Vercel Postgres, WordPress REST API, and the OpenAI API.

The roadmap is intentionally phased to keep the project **manageable**, **incremental**, and aligned with a strong learning progression.

---

# ✅ Phase 1 — Foundation & UI (Current Phase)

### Goals
- Establish the basic UI flow.
- Create the layout and form for inputting an idea.
- Display a simple preview of what the user entered.

### Tasks
- [ ] Create clean layout in `app/layout.tsx`
- [ ] Build idea input form in `app/page.tsx`
- [ ] Add local state to show the idea preview
- [ ] Add loading/disabled state for future API calls
- [ ] Add minimal Tailwind styling

### Deliverables
- Functional UI prototype  
- Clear pathway for adding API integration

---

# 🚀 Phase 2 — OpenAI Integration

### Goals
- Connect to the OpenAI Responses API.
- Generate platform-specific content from a single input idea.
- Return structured JSON (no streaming yet).

### Tasks
- [ ] Implement `app/api/generate/route.ts`
- [ ] Create prompt template file
- [ ] Return JSON shaped as:

  ```ts
  interface GeneratedContent {
    linkedin: string;
    bluesky: string;
    blogTitle: string;
    blogBody: string;
    metaDescription: string;
    thumbnailPrompt: string;
  }
  ```

- [ ] Add error handling (toast + inline fallback)
- [ ] Display results in the UI with copy buttons
- [ ] Add API loading state

### Deliverables
- Working text generation across all platforms  
- Stable API endpoint returning strict JSON  

---

# 🗄 Phase 3 — Database (Vercel Postgres)

### Goals
- Persist generated content.
- Build a simple history view.

### Schema

| column              | type     |
|---------------------|----------|
| id                  | uuid     |
| userId              | uuid     |
| idea                | text     |
| linkedin            | text     |
| bluesky             | text     |
| blogTitle           | text     |
| blogBody            | text     |
| metaDescription     | text     |
| thumbnailPrompt     | text     |
| wordpressDraftUrl   | text     |
| created_at          | timestamp |

### Tasks
- [ ] Set up Vercel Postgres bindings
- [ ] Create SQL migration or bootstrap script
- [ ] Add server action or API handler to save generated content
- [ ] Add a history page to list content entries
- [ ] Enable filtering and sorting (optional)

### Deliverables
- Complete content history  
- Stable persistence layer  

---

# 🌐 Phase 4 — WordPress Draft Publishing

### Goals
- Push blog drafts directly from Content Flow to WordPress.

### Tasks
- [ ] Add WordPress connection settings
- [ ] Use Application Passwords authentication
- [ ] Push draft posts using REST API:
  - title
  - content
  - excerpt
  - status: "draft"
- [ ] Store returned draft URL in database record
- [ ] Add UI to show “View WordPress Draft” link

### Deliverables
- Automated WordPress draft creation  
- End‑to‑end publishing workflow  

---

# 🔐 Phase 5 — Authentication (NextAuth)

### Goals
- Allow multi‑user functionality.
- Store user‑specific WordPress credentials.
- Ensure content is tied to the logged‑in user.

### Tasks
- [ ] Add NextAuth (GitHub or email provider)
- [ ] Add `userId` column to DB schema
- [ ] Protect history and generation routes
- [ ] Create settings page for WP credentials

### Deliverables
- Multi‑user support  
- Secure private content history  
- Per‑user publishing settings  

---

# ✨ Phase 6 — Advanced UX (Optional Enhancements)

### Goals
Improve user experience with richer interactions and streaming.

### Possible Enhancements
- [ ] OpenAI streaming output
- [ ] Partial rendering as outputs complete
- [ ] Live typing effect
- [ ] Rich previews for LinkedIn/Bluesky
- [ ] Thumbnail image generation (optional)
- [ ] Saved prompt templates / multiple content styles
- [ ] Scheduled publishing

### Deliverables
- Premium, polished UX  
- More automation for real‑world use  

---

# 🧭 Future Ideas (Backlog)

- Chrome extension that triggers Content Flow on any webpage  
- CLI tool: `npx content-flow "idea"`  
- Team version with shared templates  
- Integrations with:
  - Mastodon
  - Medium
  - Ghost CMS
  - email newsletters  

---

# 📌 Notes

This roadmap is intentionally flexible.  
At each phase, the developer should:

- Push working code to GitHub
- Review decisions with DevTools or Claude
- Focus on clarity and understanding over speed

Content Flow is both a *tool* and a *learning project*.  
The priority is **steady, confident progress**.


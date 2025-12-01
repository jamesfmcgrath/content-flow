# Content Flow

Content Flow is a full-stack learning project designed to automate a complete content workflow from a single **idea**.  
It acts as a practical tool for daily publishing while helping the developer deepen modern engineering skills with:

- **Next.js 16 (App Router)**
- **React 19 + TypeScript**
- **Tailwind CSS v4**
- **OpenAI API**
- **WordPress REST API**
- **Vercel Postgres**
- **NextAuth (later phase)**

The goal is to build a tool that is **useful**, **maintainable**, and **easy to extend**, while learning each part of the modern Next.js ecosystem.

---

## 🚀 Current Features

- Basic UI with idea input (Phase 1)
- Project scaffolding with Tailwind, TypeScript, and App Router
- Development workflow set up for AI-assisted coding via Copilot + Claude

---

## 🗺 Project Roadmap

Content Flow is built in phases:

### **Phase 1 — UI Foundation**
- Idea input form  
- Display preview  
- Project layout  

### **Phase 2 — OpenAI Integration**
- `/api/generate` endpoint  
- JSON-based content generation  
- No streaming yet  

### **Phase 3 — Database Integration**
- Store generated content using **Vercel Postgres**  
- View content history  

### **Phase 4 — WordPress Publishing**
- Push drafts to WordPress via REST API  
- Store returned draft URLs  

### **Phase 5 — Authentication**
- Add NextAuth for multi-user support  

### **Phase 6 (Optional) — Advanced UX**
- Streaming OpenAI output  
- Multi-step UI  
- Rich previews  

For full details, see:  
`docs/roadmap.md`

---

## 🧠 AI Development Assistants

This project uses two AI tools:

### **GitHub Copilot Agents**
Configuration lives in:

```
.github/copilot-instructions.md
```

It defines guardrails, conventions, and coding preferences.

### **Claude Sonnet 4.5**
Guided through:

```
docs/claude-brief.md
```

Claude acts as a senior engineering partner, explaining reasoning and helping with architectural clarity.

---

## 🛠 Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Then open:

**http://localhost:3000**

You can start editing the UI by modifying:

```
app/page.tsx
```

The app will auto-refresh as you make changes.

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```bash
OPENAI_API_KEY=
WORDPRESS_URL=
WORDPRESS_APP_PASSWORD=
POSTGRES_URL=
```

All environment variables are required for later phases, but only `OPENAI_API_KEY` is needed during Phase 2.

---

## 📁 Project Structure

```
app/
  layout.tsx
  page.tsx
  api/
    generate/route.ts
docs/
  roadmap.md
  copilot-instructions.md
  claude-brief.md
public/
```

---

## 📚 Learning Resources

- **Next.js Docs** — https://nextjs.org/docs  
- **React Docs** — https://react.dev  
- **Tailwind CSS v4 Docs** — https://tailwindcss.com  
- **Vercel Postgres** — https://vercel.com/docs/storage/vercel-postgres  
- **WordPress REST API** — https://developer.wordpress.org/rest-api/

---

## ☁️ Deployment

This project will be deployed to **Vercel**.

Read more:  
https://nextjs.org/docs/app/building-your-application/deploying

---

## 📄 License

MIT License (optional — update if you prefer otherwise)

---

## 🙌 Contributing

This is a personal learning project, but improvements and suggestions are welcome.


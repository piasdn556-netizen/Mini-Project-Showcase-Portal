# Mini Project Showcase Portal

Deployment repository for the Mini Project Showcase Portal.

The project source is stored as compressed text bundle parts so Vercel can reconstruct the full Next.js project during installation. The deployment configuration extracts the source, installs dependencies, and runs the Next.js build automatically.

## Local run from this repository

```bash
node extract.cjs
npm install
npm run dev
```

The Vercel deployment uses a demo SQLite snapshot on `/tmp`. This keeps the hackathon demo functional, but database changes and newly uploaded screenshots are ephemeral across serverless cold starts or redeployments.

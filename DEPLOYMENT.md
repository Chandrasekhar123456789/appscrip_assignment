# Deployment Guide (Vercel preferred)

1. Create a public GitHub repository named `Appscrip-task-chandra-sekhar`.
2. Initialize local git and push **before** installing dependencies:
   ```
   git init
   git branch -M main
   git add .
   git commit -m "Initial clean commit - Appscrip final"
   git remote add origin https://github.com/<your-username>/Appscrip-task-chandra-sekhar.git
   git push -u origin main
   ```
3. After push succeeds:
   ```
   npm install
   npm run dev
   ```
4. Deploy to Vercel:
   - Go to https://vercel.com/new
   - Import GitHub repository
   - Vercel will detect Next.js and set build command `npm run build`
   - Deploy
5. (Optional) Netlify: Use Next.js adapter or export static (not recommended for SSR)

# 🚀 Deploy Your Portfolio to GitHub Pages

## ✅ Your Portfolio is Ready to Deploy!

Follow these simple steps to deploy your portfolio to GitHub Pages for FREE!

---

## 📋 Prerequisites

- ✅ GitHub account (create one at https://github.com)
- ✅ Git installed on your computer
- ✅ Your portfolio project (already done!)

---

## 🎯 Step-by-Step Deployment Guide

### Step 1: Install Git (If Not Installed)

Download and install Git from: https://git-scm.com/download/win

### Step 2: Create GitHub Repository

1. Go to https://github.com
2. Click the **"+"** icon (top-right)
3. Click **"New repository"**
4. Repository name: `portfolio` (or any name you like)
5. Description: "My Personal Portfolio"
6. Choose **Public**
7. **DON'T** check "Initialize with README"
8. Click **"Create repository"**

### Step 3: Update Configuration

Open `personal-portfolio/package.json` and update this line:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/portfolio"
```

Replace:
- `YOUR-GITHUB-USERNAME` with your actual GitHub username
- `portfolio` with your repository name (if different)

**Example:**
```json
"homepage": "https://estifanos.github.io/portfolio"
```

### Step 4: Update Vite Config (If Using Custom Repo Name)

Open `personal-portfolio/vite.config.js` and update:

```javascript
base: '/portfolio/', // Change 'portfolio' to your repo name
```

**Note:** If your repo name is `portfolio`, use `/portfolio/`

### Step 5: Install Deployment Package

Open Command Prompt in the `personal-portfolio` folder:

```bash
cd C:\Estifosman-main\personal-portfolio
npm install
```

This will install `gh-pages` package for deployment.

### Step 6: Initialize Git Repository

In the `personal-portfolio` folder:

```bash
git init
git add .
git commit -m "Initial commit - My portfolio"
```

### Step 7: Connect to GitHub

Replace `YOUR-USERNAME` and `YOUR-REPO-NAME`:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/estifanos/portfolio.git
git branch -M main
git push -u origin main
```

### Step 8: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your portfolio
2. Create a `gh-pages` branch
3. Deploy to GitHub Pages
4. Your site will be live in 1-2 minutes!

### Step 9: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub
2. Click **"Settings"**
3. Scroll down to **"Pages"** (left sidebar)
4. Under "Source", select **"gh-pages"** branch
5. Click **"Save"**
6. Wait 1-2 minutes

### Step 10: Visit Your Live Portfolio! 🎉

Your portfolio will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
```

**Example:**
```
https://estifanos.github.io/portfolio
```

---

## 🔄 Update Your Portfolio Later

When you make changes:

```bash
# 1. Save your changes
git add .
git commit -m "Updated portfolio"
git push

# 2. Deploy updates
npm run deploy
```

Your changes will be live in 1-2 minutes!

---

## 📝 Quick Commands Reference

```bash
# Navigate to project
cd C:\Estifosman-main\personal-portfolio

# Install dependencies (first time)
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Update and redeploy
git add .
git commit -m "Your message"
git push
npm run deploy
```

---

## 🎨 Custom Domain (Optional)

Want to use your own domain like `www.estifanos.com`?

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. Create a file named `CNAME` in `public` folder
3. Add your domain: `www.yourdomain.com`
4. Configure DNS settings (see GitHub docs)
5. Redeploy: `npm run deploy`

---

## 🔧 Troubleshooting

### Issue: "gh-pages not found"
**Solution:**
```bash
npm install gh-pages --save-dev
```

### Issue: "Permission denied"
**Solution:** Make sure you're logged into GitHub:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Issue: "404 Page Not Found"
**Solution:** Check `vite.config.js` base path matches your repo name:
```javascript
base: '/your-repo-name/',
```

### Issue: Blank page after deployment
**Solution:** Update `base` in `vite.config.js`:
```javascript
base: '/portfolio/', // Must match repo name
```

### Issue: Images not loading
**Solution:** Make sure images are in `public` folder and use absolute paths:
```javascript
src="/image.jpg" // Not "./image.jpg"
```

---

## 📊 Deployment Checklist

Before deploying, make sure:

- [ ] Updated `homepage` in `package.json`
- [ ] Updated `base` in `vite.config.js`
- [ ] Installed dependencies (`npm install`)
- [ ] Created GitHub repository
- [ ] Initialized Git (`git init`)
- [ ] Committed changes (`git commit`)
- [ ] Connected to GitHub (`git remote add origin`)
- [ ] Pushed to GitHub (`git push`)
- [ ] Deployed (`npm run deploy`)
- [ ] Enabled GitHub Pages in settings

---

## 🎉 Success!

Your portfolio is now live on the internet! 🌐

Share your link:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
```

---

## 💡 Pro Tips

1. **Custom Domain:** Use your own domain for free with GitHub Pages
2. **HTTPS:** GitHub Pages provides free HTTPS automatically
3. **Updates:** Just run `npm run deploy` to update your live site
4. **Analytics:** Add Google Analytics to track visitors
5. **SEO:** Your portfolio is automatically indexed by Google

---

## 📚 Additional Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 🆘 Need Help?

If you encounter issues:

1. Check the error message carefully
2. Make sure all commands ran successfully
3. Verify your GitHub username and repo name
4. Check that `gh-pages` branch exists on GitHub
5. Wait 2-3 minutes after deployment

---

**Ready to deploy? Follow the steps above!** 🚀

Your portfolio will be live on the internet in less than 10 minutes! 🎉

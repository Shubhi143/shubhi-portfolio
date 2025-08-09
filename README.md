# shubhi-portfolio

Auto-updating SDET portfolio for Shubhi Gupta. Deploy to Vercel and connect this GitHub repo for automatic deployments.

## How to deploy
1. Create a new GitHub repository named `shubhi-portfolio` and push these files.
2. In Vercel, "Import Project" -> Connect your GitHub -> select `shubhi-portfolio` -> Deploy.
3. In GitHub, go to Settings -> Secrets -> Actions and add `CRON_REPO_SCHEDULE` if you want a custom schedule (optional).

Vercel will build and deploy automatically on push. The GitHub Action in `.github/workflows/update-data.yml` will also run daily and on push to refresh `data/data.json` with latest GitHub repos and LinkedIn public info.
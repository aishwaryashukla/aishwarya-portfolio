# Hostinger Deployment Guide

Following these steps will deploy the latest changes from your GitHub repository to your Hostinger VPS and restart the Docker container.

### 1. Update Code from GitHub

Navigate to your project directory on the Hostinger VPS and pull the latest changes:

```bash
cd ~/aishwarya-portfolio
git pull origin main
```

### 2. Verify Environment Variables

Ensure your `.env` file exists and contains your API key. If you need to update it:

```bash
nano .env
```

Ensure it contains:

```text
BREVO_API_KEY=xkeysib-d727cce...
```

### 3. Build and Deploy with Docker Compose

Run this command to rebuild the production image (reflecting your new changes) and start the container in the background:

```bash
docker compose up -d --build
```

### 4. Useful Maintenance Commands

**Check logs:**

```bash
docker compose logs -f
```

**Stop the application:**

```bash
docker compose down
```

**Check running containers:**

```bash
docker ps
```

---
**Note:** After deployment, your changes will be instantly visible at [https://aishwaryashukla.info](https://aishwaryashukla.info) through your Nginx Proxy Manager setup.

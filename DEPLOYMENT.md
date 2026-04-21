# GCP Deployment Guide - GreetingApp

This project is fully prepared for deployment to **Google Cloud Run** or **App Engine**.

## Option 0: Cloud Shell (Easiest - No local installation needed)
1. Go to [https://shell.cloud.google.com/](https://shell.cloud.google.com/).
2. Once the terminal opens, run these commands:
```bash
git clone https://github.com/Rithika02/greetingapp.git
cd greetingapp
gcloud run deploy greeting-app --source . --region us-central1 --allow-unauthenticated
```

## Option 1: Automated Deployment (Cloud Build)
1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the **Cloud Build**, **Cloud Run**, and **Artifact Registry** APIs.
3. Connect your GitHub repository (`greetingapp`) to Cloud Build.
4. Create a **Trigger** in Cloud Build:
   - Name: `deploy-on-push`
   - Event: Push to a branch
   - Configuration: `Cloud Build configuration file (yaml or json)`
   - Location: `/cloudbuild.yaml`
5. Every time you push to GitHub, GCP will automatically build and deploy your app.

## Option 2: Manual Deployment (gcloud CLI)
Run this command from the `GreetingApp` directory:
```bash
gcloud run deploy greeting-app --source . --region us-central1 --allow-unauthenticated
```

## Option 3: Static Hosting (Cloud Storage)
Since this is a static site, you can also upload the `public` folder to a Cloud Storage bucket and enable "Static Website Hosting".

### Project Details
- **Project ID**: `amd-first-494006`
- **Project Number**: `1035333686490`

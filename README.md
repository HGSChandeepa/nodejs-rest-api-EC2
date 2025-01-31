# Node.js REST API Deployment on AWS EC2 with GitHub Actions CI/CD Pipeline Notes

This repository demonstrates a streamlined approach to deploying a Node.js REST API on an AWS EC2 instance using GitHub Actions for continuous integration and continuous deployment (CI/CD).

## Overview

In this project, we utilize GitHub Actions workflows to automate the CI/CD pipeline for deploying changes to our Node.js application on an EC2 instance. The workflow consists of:

- **Continuous Integration (CI):** Automatically building and testing the application on each push to the `main` branch.
- **Continuous Deployment (CD):** Automatically deploying changes to the EC2 instance upon successful completion of CI.

## Setup Instructions

Follow these steps to set up the deployment pipeline for your Node.js REST API on AWS EC2:

1. **Create an EC2 Instance:**
   - Create a new EC2 instance in your AWS account or use an existing one.
   - Generate or use an existing SSH key pair for accessing the instance.

2. **Git Repository Setup:**
   - Create a new Git repository and push your Node.js code to it.

3. **GitHub Actions Setup:**
   - Navigate to your repository settings on GitHub and select Actions.
   - Add a self-hosted runner and follow the setup instructions.

4. **Environment Setup for GitHub Actions:**
   - Create a `.env` file with your environment variables and add them as secrets in your GitHub repository settings.

5. **CI/CD Workflows:**
   - Define CI/CD workflows in the `.github/workflows` directory.
   - Customize workflows to suit your project requirements.

6. **Environment Setup in EC2 Instance:**
   - Install Node.js and Nginx on your EC2 instance.
   - Configure Nginx as a reverse proxy for your Node.js application.
   - Install PM2 to manage your Node.js process.

## Workflow Explanation

- **CI Process:** On each push to the `main` branch, the workflow executes CI tasks such as checking out code, setting up the Node.js environment, installing dependencies, and running tests (if applicable).
- **CD Process:** Upon successful CI, the workflow triggers CD tasks including SSH into the EC2 instance, pulling the latest changes, restarting the Node.js application, and verifying deployment.

## Directory Structure

- `src/`: Contains the source code for the Node.js application.
- `.github/workflows/`: Contains CI/CD workflow configuration files.
- `.env`: Stores environment variables for the application.
- `server.js`: Entry point for the Node.js application.
- `package.json`: Dependency configuration for npm.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/HGSChandeepa/nodejs-rest-api-EC2
   ```

2. Customize the Node.js application code in the `server.js` file according to your requirements.

3. Push changes to the `main` branch. GitHub Actions will automatically trigger the CI/CD pipeline.

## Contributions

Contributions to improve this CI/CD setup or add additional features are welcome! Feel free to submit pull requests or open issues.

## License

This project is licensed under the [MIT License](LICENSE).

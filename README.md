# IT Crowd - React + TS + Tailwind Vite Starter

## 🚀 Project Setup

### Development and Production Builds

As a first step, install the project dependencies:

```
npm install
```

To start the project in development mode, execute the following command:

```
npm run dev
```

To build for production, run:

```
npm run build
```

This command will generate optimized and minified production-ready code.

If you want to test the production build locally you can do so running

```
npm run build
npm run start
```

### 🧹 Linting and Formatting

This project is using [ESLint](https://eslint.org/) rules for linting and [Prettier](https://prettier.io/) for code formatting. These tools are common standards for front-end development.

If you want to manually trigger project-wide linting from the command line, you can execute the following command:

```
npm run lint
```

Likewise, for code formatting, you can execute:

```
npm run format
```

If you are working with [Visual Studio Code](https://code.visualstudio.com/) please install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and the [Prettier Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).
This extensions will read the configuration files for this tools and display warnings and errors in your code.
To install both in one go search for "@recommended" in the Extensions search-box and install all the recommended ones under the `Workspace Recommendations` section. <br/>

> ⚠️ Please ensure that your ESLint and Prettier configurations are set up correctly before starting to work on the codebase. If you encounter any difficulties, don't hesitate to seek assistance from a team member. This is important to avoid unintended changes being committed to the codebase.

## ✅ Pre-commit and pre-push hooks with Husky

Husky is utilized in the project to enforce pre-commit and pre-push hooks, which are instrumental in maintaining code integrity and preventing build failures.

- Pre-Commit Script:
  Triggers code checks and validations before each commit, ensuring that only clean and compliant code is committed.
  At this stage, code will be linted with ESLint and auto-formatted with Prettier.
- Pre-Push Script:
  Executes additional checks and tests before pushing code to the repository, minimizing the risk of pushing flawed code that could disrupt the build or compromise the repository's integrity. This script runs before your git push to build the application locally and prevent future build failures in different environments.

> ⚠️ Both scripts notice if something is wrong. In any problems arise you should fix the problem and run git commit/git push commands again. When your corrections have passed the commit and push are completed.

## 🙋 Need Assistance?

If you encounter any issues with the instructions mentioned above, don't hesitate to reach out to the developer who set up the application. He or she will be able to provide the necessary assistance to help resolve any problems you may face. Rest assured that they are well-equipped to assist you and help overcome any obstacles you may encounter.

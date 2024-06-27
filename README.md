# Welcome to the ✨ DevFest'24 Frontend Boilerplate ✨

This is a [Next.js](https://nextjs.org/) + [Typescript](https://www.typescriptlang.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It contains a boilerplate project set up with Next.js, TypeScript, ESLint, Prettier, Husky, LintStaged, and SCSS for styling. It's designed to kickstart new projects quickly and efficiently.

## Getting Started

To get started with this boilerplate, follow these steps:

1. **Create your repository and clone it onto your local machine**

```javascript
git clone <your-repo-url>
cd <your-repo-name>
code .
```

2. **Afterwards, set the URL of the boilerplate as the upstream repository by running the following command;**

```javascript
git remote add upstream https://github.com/GDG-W/devfest-boilerplate.git
```

3. **Fetch and pull the boilerplate code onto your project**

```javascript
git fetch upstream
git pull upstream main
```

4. **Install all dependencies**

```javascript
npm install
```

5. **Ensure that you're pushing your commits to the ``origin`` and not the ``upstream`` repository/branch by doing either of the following;**

a. **Removing the upstream branch**

Remove the upstream branch by running the following command;

```javascript
git remote remove upstream
```

b. Setting a default push repository

Run ``git remote -v`` to see the list of remote branches on your project. You should see something like below;

```javascript
origin  <your-repo-url>(fetch)
origin  <your-repo-url>(push)
upstream        https://github.com/GDG-W/devfest-boilerplate.git (fetch)
upstream        https://github.com/GDG-W/devfest-boilerplate.git (push)
```

To set your default push repository as origin, run the following command;

```javascript
git config --global push.default current
```

Now, all of your commits and pushes are directed to your branch/repository.

### OR

1. **Clone the boilerplate repository**

```javascript
git clone https://github.com/GDG-W/devfest-boilerplate.git
cd devfest-boilerplate
code .
```

2. **Replace git origin with your repository origin**
Replace the boilerplate URL with your repository URL as origin by running the following commands;

```javascript
git remote -v
git remote remove origin
git remote add origin <your-repo-url>
```

3. **Test**
Run ``git remote -v`` to confirm that your remote origin has been accurately replaced.

4. **Install dependencies**
Navigate to the project directory and install the required dependencies.

```javascript
npm install
```

5. **Start the project**
The application will start running on `http://localhost:3000`.

5. **Proceed with committing and pushing changes to your branch/repo.**


## Configuration

The project comes pre-configured with:

- [**Next.js**](https://nextjs.org/) - A React framework for building web applications.
- [**TypeScript**](https://www.typescriptlang.org/) - Static type-checking for JavaScript.
- [**SCSS**](https://sass-lang.com/) - CSS preprocessor for styling.
- [**ESLint**](https://eslint.org/) - Configured to find and fix common problems in the code and enforce best practices.
- [**Prettier**](https://prettier.io/) - Integrated with ESLint for consistent code formatting.
- [**Husky**](https://typicode.github.io/husky/) & [**LintStaged**](https://www.npmjs.com/package/lint-staged): Automatically lint and format staged files before committing.
- [**Axios**](https://axios-http.com/) - A promise-based HTTP client for making requests.
- [**TanStack Query**](https://tanstack.com/query/latest)- Powerful data-fetching and state management for React applications.
- [**next/third-party**](https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries) - Integrations and configurations for using third-party packages with Next.js.

## SEO

This boilerplate exploits Next.js SEO abilities to optimize SEO throught the project.

In `/src/app/layout.tsx`, which is the RootLayout thst wraps over the entire project (See here: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required), you will find the metadata object instantiated. This metadata is available project-wide. However, to implement page-specific SEO, it is important to instantiate a metadata object on every page.

If in `/src/app/layout.tsx`, you have:

```javascript
export const metadata = {
  title: 'DevFest Lagos',
  description: 'DevFest Lagos is a...',
  openGraph: {
    title: 'DevFest Lagos',
    description: 'DevFest Lagos is a...',
  },
};
```

In another page, (e.g. `/src/app/test/page.tsx`), you can implement page specific SEO like by creating a new metadata object to override properties that which exists at the root and add new properties:

```javascript
export const metadata = {
  title: 'DevFest Lagos | Coming Soon',
  description: 'DevFest Lagos comes up on...',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
};
```

or by

## Google Analytics

This boilerplate is configured to use Google Analytics to collect usage data using Next.js third party libraries.

See: https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics

All you have to do is;

1. **Add the measurement ID to `.env` file**

At the .env file, replace the `YOUR_TRACKING_ID_HERE` value with your measurement ID and you're good to go! The existing configuration tracks pageviews, sessions and user visits.

2. **Tracking specific events**

To track specific events like users clicking on a CTA or subscribing to DevFest updates, see example in `src/app/test/page.tsx` or see https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#sending-events-1.

Feel free to delete the folder and page after you have gotten the hang of the implementation.

## Contributing

Contributions are welcome. Please feel free to submit a pull request.

# Webpack Starter

This repository is a boilerplate project setup for modern web development using Webpack. It includes configurations for Babel, ESLint, Prettier, and SCSS, providing a solid foundation for building scalable and maintainable web applications.

# Features

- [Webpack]: Module bundler for JavaScript, CSS, and other assets.
- [Babel]: JavaScript compiler to use the latest JavaScript features.
- [ESLint]: Linter for identifying and fixing problems in JavaScript code.
- [Prettier]: Code formatter to ensure consistent code style.
- [SCSS]: CSS preprocessor for writing more maintainable and scalable styles.
- [Dotenv]: Environment variable management for different environments (development, production).
- [Live Server]: Development server with live reloading.

## Project Structure

```bash
.
├── .babelrc                   # Babel configuration file
├── .env                       # Environment variables file
├── .env.development           # Development-specific environment variables
├── .env.production            # Production-specific environment variables
├── .eslintrc                  # ESLint configuration file
├── .gitignore                 # Git ignore rules
├── .prettierrc                # Prettier configuration file
├── .vscode/                   # VSCode workspace settings
│   └── settings.json          # VSCode settings file
├── eslint.config.mjs          # ESLint module configuration
├── index.html                 # Main HTML file
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
├── src/                       # Source files
│   ├── css/                   # Stylesheets (SCSS)
│   │   ├── _base.scss         # Base styles
│   │   ├── _reset.scss        # CSS reset styles
│   │   ├── _utilities.scss    # Utility styles
│   │   ├── _variables.scss    # SCSS variables
│   │   └── style.scss         # Main stylesheet
│   └── js/                    # JavaScript files
│       └── index.js           # Main JavaScript file
└── webpack.config.js          # Webpack configuration file
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd <project-directory>
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

### Development

To start the development server, run:

```sh
npm start
```

This will start a local server and open the project in your default web browser.

### Building

To build the project for production, run:

```sh
npm run build
```

The built files will be output to the `dist` directory.

### Linting

To lint the project files, run:

```sh
npm run lint
```

### Formatting

To format the project files, run:

```sh
npm run format
```

## Project Configuration

### Babel

Babel is configured in the [`.babelrc`](.babelrc) file.

### Environment Variables

Environment variables are managed using `.env` files:

- [`.env`](.env)
- [`.env.development`](.env.development)
- [`.env.production`](.env.production)

### ESLint

ESLint is configured in the [`.eslintrc`](.eslintrc) file.

### Prettier

Prettier is configured in the [`.prettierrc`](.prettierrc) file.

### VS Code Settings

VS Code settings are configured in the [`.vscode/settings.json`](.vscode/settings.json) file.

## License

This project is licensed under the MIT License.

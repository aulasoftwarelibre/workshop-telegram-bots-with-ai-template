# Workshop: Build a Telegram Bot for a Hair Salon with AI

Welcome to the **Workshop Telegram Bots with AI Template**! This repository is a template designed for building a Telegram bot using AI through the Vercel SDK. The bot is tailored for a hair salon appointment booking system.

## Getting Started

### Use This Template

To create your own repository from this template:

1. Click on the **Use this template** button on the repository's GitHub page.
2. Select your account or organization and give your new repository a name.
3. Click **Create repository from template**.

### Set Up the Development Environment

You can set up your development environment using GitHub Codespaces or locally with Docker and VSCode.

#### Option 1: Using GitHub Codespaces

1. Open your newly created repository on GitHub.
2. Click on the **Code** button and then **Open with Codespaces**.
3. Create a new Codespace to launch the development environment.

The devcontainer will automatically install dependencies and set up the environment for you.

#### Option 2: Running Locally

To run the project locally, ensure you have Docker and Visual Studio Code (VSCode) with the Dev Containers extension installed.

1. Clone your repository:
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name

2.	Open the project in VSCode and choose Reopen in Container when prompted.
3.	Docker will automatically build the container and install the dependencies.

### Environment Setup

You need to create a .env file with the necessary environment variables. Copy the provided .env.example file and fill in the values.

    cp .env.example .env

Update the .env file with your Telegram Bot Token, Postgres Database URL, OpenAI API Key, and AI Model information.

Example .env:

    BOT_TOKEN=your-telegram-bot-token
    DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
    OPENAI_API_KEY=your-openai-api-key
    MODEL=ollama:qwen-2_5
    MODEL_EMBEDDING=ollama:nomic-embed-text

### Database Setup

Before running the bot, you’ll need to set up the PostgreSQL database and apply migrations.

1.	Generate the database schema:

    pnpm run db:generate


2.	Run the database migrations:

    pnpm run db:migrate


3.	Optionally, you can use the drizzle studio to visualize the database schema:

    pnpm run db:studio



## Running the Bot

To start the bot in development mode, use the following command:

    pnpm run dev

This will watch for changes in the source code and restart the bot automatically.

Project Structure

Contributing

Feel free to fork this repository and make your own changes. Contributions are welcome!

License

This project is licensed under the EPL-2.0 License. See the LICENSE file for more details.

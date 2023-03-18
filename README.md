# Game Stats

A small [Next.js](https://nextjs.org/) service which calls the [Riot Games APIs](https://developer.riotgames.com/apis)
to display certain game statistics of a player.

## Getting started

1. Install dependencies
    ```bash
    npm install
    ```
2. Create a [Riot Games Account](https://developer.riotgames.com/docs/portal#_getting-started)
3. Generate an API key
4. Create a `.env.local` file based on [.env.local.template](.env.local.template) 
   ```bash
   cp .env.local.template .env.local
   ```
5. Copy your API key into the `RIOT_GAMES_API_KEY` variable
6. Run the server locally in development mode
   ```
   npm run dev
   ```
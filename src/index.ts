import { Client, Collection, GatewayIntentBits, Partials } from "discord.js";
import { CustomClient } from "./types";
import { startClient } from "./handlers/starter";
import * as path from "path";
import { fileURLToPath } from "url";

const client = new Client({
  intents: Object.values(GatewayIntentBits) as GatewayIntentBits[],
  partials: [
    Partials.User,
    Partials.Message,
    Partials.Reaction,
    Partials.GuildMember,
  ],
}) as CustomClient;

client.commands = new Collection();

export const getClient = () => client;

export const getConfig = async (name: string) => {
  try {
    const configPath = path.resolve(
      process.cwd(),
      "src",
      "configs",
      `${name}.js` || `${name}.ts`
    );
    const configData = await import(`file://${configPath}`);
    return configData.default || configData;
  } catch (error) {
    console.error(`Failed to load config '${name}':`, error);
    throw error;
  }
};

startClient();

//Echelon

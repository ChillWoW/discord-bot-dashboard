import { getClient, getConfig } from "..";
import connectToDatabase from "../database/connect";
import commandLoader from "./commands";
import eventLoader from "./events";

async function loadAll(client: any, name: string) {
  console.log("Requesting startup of functions...");
  commandLoader(client);
  eventLoader(client);
  await connectToDatabase();

  console.log("Startup of functions completed successfully!");
  console.log(`${name} has been started!`);
}

export async function startClient() {
  const client = getClient();
  const config = await getConfig("client");
  if (!client) {
    throw new Error("Client not initialized");
  }

  try {
    console.log("Requesting bot startup...");
    await client.login(config.token);

    await loadAll(client, config.name);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

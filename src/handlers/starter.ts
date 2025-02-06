import { getClient, getConfig } from "..";

export async function startClient() {
  const client = getClient();
  const config = await getConfig("client");
  if (!client) {
    throw new Error("Client not initialized");
  }

  try {
    console.log(config.token);
    await client.login(config.token);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

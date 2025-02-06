import { readdirSync } from "fs";
import * as path from "path";
import { CustomClient } from "../types";

const commandLoader = async (client: any) => {
  let commandsArray = [] as any;
  const commandPath = path.join(__dirname, "../commands");

  /*const existingCommands = await client.application.commands.fetch();
    for (const command of existingCommands.values()) {
        await client.application.commands.delete(command.id);
    }*/

  readdirSync(commandPath).forEach(async (dir) => {
    const commands = readdirSync(`${commandPath}/${dir}`).filter(
      (file) => file.endsWith(".js") || file.endsWith(".ts")
    );
    for (const file of commands) {
      const command = require(`${commandPath}/${dir}/${file}`).default;
      client.commands.set(command.data.name, command);
      commandsArray.push(command.data.toJSON());
    }
  });

  client.commands.forEach((command: any) => {
    if (!commandsArray.some((cmd: any) => cmd.name === command.data.name)) {
      commandsArray.push(command.data.toJSON());
    }
  });

  await client.application.commands.set(commandsArray);

  return;
};

export default commandLoader;

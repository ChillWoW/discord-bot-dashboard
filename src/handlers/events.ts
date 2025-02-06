import { readdirSync } from "fs";
import * as path from "path";
import { CustomClient } from "../types";

const eventLoader = async (client: CustomClient) => {
  const eventPath = path.join(__dirname, "../events");

  readdirSync(eventPath).forEach((dir) => {
    const events = readdirSync(`${eventPath}/${dir}`).filter(
      (file) => file.endsWith(".js") || file.endsWith(".ts")
    );

    for (const file of events) {
      const { event } = require(`${eventPath}/${dir}/${file}`);

      if (event) {
        if (event.once) {
          client.once(event.name, (...args: any) => event.run(...args, client));
        } else {
          client.on(event.name, (...args: any) => event.run(...args, client));
        }
      }
    }
  });
};

export default eventLoader;

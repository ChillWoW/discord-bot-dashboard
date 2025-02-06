import {
  ChatInputCommandInteraction,
  Client,
  Collection,
  SlashCommandBuilder,
} from "discord.js";

export interface Command {
  data: SlashCommandBuilder | any;
  execute: (
    interaction: ChatInputCommandInteraction,
    client: CustomClient
  ) => Promise<void>;
}

export interface EventProps {
  name: string;
  once?: boolean;
  run: any;
}

export interface CustomClient extends Client {
  commands: Collection<string, Command>;
}

import {
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  PermissionFlagsBits,
} from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Testi (ping pong)")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  run: async (interaction: ChatInputCommandInteraction) => {
    interaction.reply("Pong!");
  },
};

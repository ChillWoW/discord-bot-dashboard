import { ChatInputCommandInteraction } from "discord.js";
import { EventProps } from "../../types";
import { getConfig } from "../../index";

export const event: EventProps = {
  name: "interactionCreate",
  run: async (interaction: ChatInputCommandInteraction, client: any) => {
    if (!interaction.isChatInputCommand()) return;

    const config = await getConfig("client");
    const { user } = interaction;

    const command = client.commands.get(interaction.commandName);

    if (!command)
      return interaction.reply({
        content: `Virheellinen komento`,
        ephemeral: true,
      });

    if (command?.dev) {
      if (user.id !== config.ownerId)
        return interaction.reply({
          content: `Only DEV komento`,
          ephemeral: true,
        });
    }

    if (interaction.guild === null)
      return interaction.reply({
        content: `Komentoja ei voi suorittaa yksityisviesteissä`,
        ephemeral: true,
      });

    try {
      command.run(interaction, client);
    } catch (e) {
      console.log(e);
    }
  },
};

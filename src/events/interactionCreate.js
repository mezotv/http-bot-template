module.exports = async (client, interaction) => {
    interaction.deferReply()
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
      command.execute(interaction, client);
    } catch (err) {
      if (err) console.error(err);
      return interaction.editReply({
        content: 'An error occurred while executing that command.',
        ephemeral: true,
      });
    }
  };
  
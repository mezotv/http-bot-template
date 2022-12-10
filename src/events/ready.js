const { readdirSync } = require('fs');
const { ChalkAdvanced } = require('chalk-advanced');

module.exports = async (client) => {
  const commandFiles = readdirSync('./src/commands/')
    .filter((file) => file.endsWith('.js'));

  const commands = [];

  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    commands.push(command);
    client.commands.set(command.name, command);
  }

  if (process.env.STATUS === 'PRODUCTION') {
    client.setAppCommands(commands)
      .catch(console.log);
  } else {
    client.setGuildCommands(commands, process.env.GUILD_ID)
      .catch(console.log);

    console.log(
      `${ChalkAdvanced.white('Crypto Helper')} ${ChalkAdvanced.gray(
        '>',
      )} ${ChalkAdvanced.green('Successfully registered commands locally')}`,
    );
  }
};

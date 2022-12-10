const { Embed } = require("interactions.js");

module.exports = {
  name: "template",
  description: "Just a template command!",
  async execute(interaction, client) {
    const templateembed = new Embed()
      .setColor("#5865f4")
      .setTitle(
        "HTTP Bot Template"
      )
      .setDescription("Template to get you started with your first http bot in just a few minutes!")
      .setFooter("HTTP Bot made by Dominik#5555");
    return interaction.editReply({
      embeds: [templateembed],
    });
  },
};

module.exports = {
  name: "pyramid",
  description: "Create a pyramid with the * character",
  options: [
    {
      name: "height",
      type: 4,
      description: "How tall to generate the pyramid (defaults to 5).",
      required: false,
    },
  ],
  async execute(interaction) {
    const int = interaction.options.getInteger("height", false) || 5;

    if (int <= 2 || int > 20) {
      return interaction.reply({
        content: "Your pyramid size should be under 15 and greater than 2!",
        ephemeral: true,
      });
    }

    function pyramid(size = 5) {
      const a = new Array(size)
        .fill("*")
        .map((r, i) => r.repeat(i + 1).padStart(size));
      return a
        .map(
          (r, i) =>
            r + a.map((r) => r.split("").reverse().join("").substring(1))[i]
        )
        .join("\n");
    }

    const generation = pyramid();

    interaction.reply({
      content: `\`\`\`\n${generation}\n\`\`\``,
      ephemeral: true,
    });
  },
};

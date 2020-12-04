module.exports = {
  name: "kaldır",
  description: "Şarkıyı kuyruktan kaldır",
  async execute(message, args) {
    if (!args.length) return message.reply("Kullanım: / <Kuyruk Numarası> öğesini kaldırın");
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send("There is no queue.").catch(console.error);

    const song = serverQueue.songs.splice(args[0] - 1, 1);
    serverQueue.textChannel.send(`${message.author} ❌ silindi**${song[0].title}** sıradan.`);
  }
};

const randomPuppy = require('random-puppy');

module.exports = {
	name: 'cat',
	aliases: ['meow'],
	description: 'Random images of cats',
	category: 'fun',
	enabled: true,
	execute(Yuki, message, args) {
		randomPuppy(this.name)
			.then((url) => {
				message.channel.send(new Yuki.MessageEmbed()
					.setColor(Yuki.util.hexColor.default)
					.setImage(url)
				);
			})
			.catch((error) => {
				message.channel.send(new Yuki.MessageEmbed()
					.setColor(Yuki.util.hexColor.error)
					.setDescription(Yuki.util.sendCode(`Error: ${error.message}`, { code: 'js' }))
				);
			});
	}
};
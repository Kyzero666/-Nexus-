
const Discord = require('discord.js');
const nexus = new Discord.Client();
const prefix = '$';
let cooldown = new Set();
let cdsec = 1;


nexus.on('ready', function() {
    console.log('nexus started.');
});
nexus.on('message', function(message) {
  if(message.author.equals(nexus.user)) return;

      if (!message.content.startsWith(prefix)) return;
      if(cooldown.has(message.author.id)){
        message.delete();
        return message.reply('Sorry. You have to wait for tomorrow.')
      }
      if(!message.member.hasPermission('ADMINISTRATOR')){
          cooldown.add(message.member.id);
        }
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, cdsec * 86400000)

      var caseargs = message.content.substring(prefix.length).split(' ');
      var daily = [
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'No Rewards',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 100 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 500 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 1,000 SPINA!',
        'You just got 10,000 SPINA!',
        'You just got 10,000 SPINA!',
        'You just got 10,000 SPINA!',
        'You just got 10,000 SPINA!',
        'You just got 10,000 SPINA!',
        'You just got 10,000 SPINA!',
        'You just got 50,000 SPINA!',
        'You just got 50,000 SPINA!',
        'You just got 100,000 SPINA!',
        'You just got 100,000 SPINA!',
        'You just got 150,000 SPINA!',
        'You just got 150,000 SPINA!',
        'You just got 200,000 SPINA!',
        '```js','JACKPOT!: 1,000,000 SPINA!```'
      ];
      switch (caseargs[0].toUpperCase()) {
        case 'DAILY':
            if(message.reply(daily[Math.floor(Math.random() * daily.length)]));
            break;
        default:
            message.channel.send('Invalid commands').then(message => {message.delete(5000)});
            break;
          }
  });

nexus.login(process.env.NEXUS_TOKEN);


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
        message.reply('Sorry, you already claimed your daily gift.')
        return message.reply('Reset time will be 00:00/12:00AM +8 GMT').then(message => {message.delete(10000)});
      }
      if(!message.member.hasPermission('ADMINISTRATOR')){
          cooldown.add(message.member.id);
        }
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, cdsec * 86300000)

        var daily = [
          'No Rewards',                        //001 = 0.01%
          'No Rewards',                        //002
          'No Rewards',                        //003
          'No Rewards',                        //004
          'No Rewards',                        //005
          'No Rewards',                        //006
          'No Rewards',                        //007
          'No Rewards',                        //008
          'No Rewards',                        //009
          'No Rewards',                        //010 = 0.10%
          'No Rewards',                        //011
          'No Rewards',                        //012
          'No Rewards',                        //013
          'No Rewards',                        //014
          'No Rewards',                        //015
          'No Rewards',                        //016
          'No Rewards',                        //017
          'No Rewards',                        //018
          'No Rewards',                        //019
          'No Rewards',                        //020 = 10%
          'No Rewards',                        //021
          'No Rewards',                        //022
          'No Rewards',                        //023
          'No Rewards',                        //024
          'No Rewards',                        //025
          'No Rewards',                        //026
          'No Rewards',                        //027
          'No Rewards',                        //028
          'No Rewards',                        //029
          'No Rewards',                        //030 = 20%
          'No Rewards',                        //031
          'No Rewards',                        //032
          'No Rewards',                        //033
          'No Rewards',                        //034
          'No Rewards',                        //035
          'No Rewards',                        //036
          'No Rewards',                        //037
          'No Rewards',                        //038
          'No Rewards',                        //039
          'No Rewards',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 100 SPINA!',           //001 = 0.01%
          'You just WON 100 SPINA!',           //002
          'You just WON 100 SPINA!',           //003
          'You just WON 100 SPINA!',           //004
          'You just WON 100 SPINA!',           //005
          'You just WON 100 SPINA!',           //006
          'You just WON 100 SPINA!',           //007
          'You just WON 100 SPINA!',           //008
          'You just WON 100 SPINA!',           //009
          'You just WON 100 SPINA!',           //010 = 0.10%
          'You just WON 100 SPINA!',           //011
          'You just WON 100 SPINA!',           //012
          'You just WON 100 SPINA!',           //013
          'You just WON 100 SPINA!',           //014
          'You just WON 100 SPINA!',           //015
          'You just WON 100 SPINA!',           //016
          'You just WON 100 SPINA!',           //017
          'You just WON 100 SPINA!',           //018
          'You just WON 100 SPINA!',           //019
          'You just WON 100 SPINA!',           //020 = 10%
          'You just WON 100 SPINA!',           //021
          'You just WON 100 SPINA!',           //022
          'You just WON 100 SPINA!',           //023
          'You just WON 100 SPINA!',           //024
          'You just WON 100 SPINA!',           //025
          'You just WON 100 SPINA!',           //026
          'You just WON 100 SPINA!',           //027
          'You just WON 100 SPINA!',           //028
          'You just WON 100 SPINA!',           //029
          'You just WON 100 SPINA!',           //030 = 20%
          'You just WON 100 SPINA!',           //031
          'You just WON 100 SPINA!',           //032
          'You just WON 100 SPINA!',           //033
          'You just WON 100 SPINA!',           //034
          'You just WON 100 SPINA!',           //035
          'You just WON 100 SPINA!',           //036 = 26%
          //'You just WON 100 SPINA!',           //037
          //'You just WON 100 SPINA!',           //038
          //'You just WON 100 SPINA!',           //039
          //'You just WON 100 SPINA!',           //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 500 SPINA!',                        //001 = 0.01%
          'You just WON 500 SPINA!',                        //002
          'You just WON 500 SPINA!',                        //003
          'You just WON 500 SPINA!',                        //004
          'You just WON 500 SPINA!',                        //005
          'You just WON 500 SPINA!',                        //006
          'You just WON 500 SPINA!',                        //007
          'You just WON 500 SPINA!',                        //008
          'You just WON 500 SPINA!',                        //009
          'You just WON 500 SPINA!',                        //010 = 0.10%
          'You just WON 500 SPINA!',                        //011
          'You just WON 500 SPINA!',                        //012
          'You just WON 500 SPINA!',                        //013
          'You just WON 500 SPINA!',                        //014
          'You just WON 500 SPINA!',                        //015
          'You just WON 500 SPINA!',                        //016
          'You just WON 500 SPINA!',                        //017
          'You just WON 500 SPINA!',                        //018
          'You just WON 500 SPINA!',                        //019
          'You just WON 500 SPINA!',                        //020 = 10%
          'You just WON 500 SPINA!',                        //021
          'You just WON 500 SPINA!',                        //022
          'You just WON 500 SPINA!',                        //023
          'You just WON 500 SPINA!',                        //024
          'You just WON 500 SPINA!',                        //025
          'You just WON 500 SPINA!',                        //026
          'You just WON 500 SPINA!',                        //027
          'You just WON 500 SPINA!',                        //028
          'You just WON 500 SPINA!',                        //029
          'You just WON 500 SPINA!',                        //030 = 20%
          'You just WON 500 SPINA!',                        //031
          'You just WON 500 SPINA!',                        //032 = 22%
          //'You just WON 500 SPINA!',                        //033
          //'You just WON 500 SPINA!',                        //034
          //'You just WON 500 SPINA!',                        //035
          //'You just WON 500 SPINA!',                        //036
          //'You just WON 500 SPINA!',                        //037
          //'You just WON 500 SPINA!',                        //038
          //'You just WON 500 SPINA!',                        //039
          //'You just WON 500 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 1,000 SPINA!',                        //001 = 0.01%
          'You just WON 1,000 SPINA!',                        //002
          'You just WON 1,000 SPINA!',                        //003
          'You just WON 1,000 SPINA!',                        //004
          'You just WON 1,000 SPINA!',                        //005
          'You just WON 1,000 SPINA!',                        //006
          'You just WON 1,000 SPINA!',                        //007
          'You just WON 1,000 SPINA!',                        //008
          'You just WON 1,000 SPINA!',                        //009
          'You just WON 1,000 SPINA!',                        //010 = 0.10%
          'You just WON 1,000 SPINA!',                        //011
          'You just WON 1,000 SPINA!',                        //012
          'You just WON 1,000 SPINA!',                        //013
          'You just WON 1,000 SPINA!',                        //014
          'You just WON 1,000 SPINA!',                        //015
          'You just WON 1,000 SPINA!',                        //016
          'You just WON 1,000 SPINA!',                        //017
          'You just WON 1,000 SPINA!',                        //018
          'You just WON 1,000 SPINA!',                        //019
          'You just WON 1,000 SPINA!',                        //020 = 10%
          'You just WON 1,000 SPINA!',                        //021
          'You just WON 1,000 SPINA!',                        //022
          'You just WON 1,000 SPINA!',                        //023
          'You just WON 1,000 SPINA!',                        //024
          'You just WON 1,000 SPINA!',                        //025
          'You just WON 1,000 SPINA!',                        //026
          'You just WON 1,000 SPINA!',                        //027
          'You just WON 1,000 SPINA!',                        //028 = 18%
          //'You just WON 1,000 SPINA!',                        //029
          //'You just WON 1,000 SPINA!',                        //030 = 20%
          //'You just WON 1,000 SPINA!',                        //031
          //'You just WON 1,000 SPINA!',                        //032
          //'You just WON 1,000 SPINA!',                        //033
          //'You just WON 1,000 SPINA!',                        //034
          //'You just WON 1,000 SPINA!',                        //035
          //'You just WON 1,000 SPINA!',                        //036
          //'You just WON 1,000 SPINA!',                        //037
          //'You just WON 1,000 SPINA!',                        //038
          //'You just WON 1,000 SPINA!',                        //039
          //'You just WON 1,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 5,000 SPINA!',                        //001 = 0.01%
          'You just WON 5,000 SPINA!',                        //002
          'You just WON 5,000 SPINA!',                        //003
          'You just WON 5,000 SPINA!',                        //004
          'You just WON 5,000 SPINA!',                        //005
          'You just WON 5,000 SPINA!',                        //006
          'You just WON 5,000 SPINA!',                        //007
          'You just WON 5,000 SPINA!',                        //008
          'You just WON 5,000 SPINA!',                        //009
          'You just WON 5,000 SPINA!',                        //010 = 0.10%
          'You just WON 5,000 SPINA!',                        //011
          'You just WON 5,000 SPINA!',                        //012
          'You just WON 5,000 SPINA!',                        //013
          'You just WON 5,000 SPINA!',                        //014
          'You just WON 5,000 SPINA!',                        //015
          'You just WON 5,000 SPINA!',                        //016
          'You just WON 5,000 SPINA!',                        //017
          'You just WON 5,000 SPINA!',                        //018
          'You just WON 5,000 SPINA!',                        //019
          'You just WON 5,000 SPINA!',                        //020 = 10%
          'You just WON 5,000 SPINA!',                        //021
          'You just WON 5,000 SPINA!',                        //022
          'You just WON 5,000 SPINA!',                        //023
          'You just WON 5,000 SPINA!',                        //024 = 14%
          //'You just WON 5,000 SPINA!',                        //025
          //'You just WON 5,000 SPINA!',                        //026
          //'You just WON 5,000 SPINA!',                        //027
          //'You just WON 5,000 SPINA!',                        //028
          //'You just WON 5,000 SPINA!',                        //029
          //'You just WON 5,000 SPINA!',                        //030 = 20%
          //'You just WON 5,000 SPINA!',                        //031
          //'You just WON 5,000 SPINA!',                        //032
          //'You just WON 5,000 SPINA!',                        //033
          //'You just WON 5,000 SPINA!',                        //034
          //'You just WON 5,000 SPINA!',                        //035
          //'You just WON 5,000 SPINA!',                        //036
          //'You just WON 5,000 SPINA!',                        //037
          //'You just WON 5,000 SPINA!',                        //038
          //'You just WON 5,000 SPINA!',                        //039
          //'You just WON 5,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 10,000 SPINA!',                        //001 = 0.01%
          'You just WON 10,000 SPINA!',                        //002
          'You just WON 10,000 SPINA!',                        //003
          'You just WON 10,000 SPINA!',                        //004
          'You just WON 10,000 SPINA!',                        //005
          'You just WON 10,000 SPINA!',                        //006
          'You just WON 10,000 SPINA!',                        //007
          'You just WON 10,000 SPINA!',                        //008
          'You just WON 10,000 SPINA!',                        //009
          'You just WON 10,000 SPINA!',                        //010 = 0.10%
          'You just WON 10,000 SPINA!',                        //011
          'You just WON 10,000 SPINA!',                        //012
          'You just WON 10,000 SPINA!',                        //013
          'You just WON 10,000 SPINA!',                        //014
          'You just WON 10,000 SPINA!',                        //015
          'You just WON 10,000 SPINA!',                        //016
          'You just WON 10,000 SPINA!',                        //017
          'You just WON 10,000 SPINA!',                        //018
          'You just WON 10,000 SPINA!',                        //019
          'You just WON 10,000 SPINA!',                        //020 = 10%
          //'You just WON 10,000 SPINA!',                        //021
          //'You just WON 10,000 SPINA!',                        //022
          //'You just WON 10,000 SPINA!',                        //023
          //'You just WON 10,000 SPINA!',                        //024
          //'You just WON 10,000 SPINA!',                        //025
          //'You just WON 10,000 SPINA!',                        //026
          //'You just WON 10,000 SPINA!',                        //027
          //'You just WON 10,000 SPINA!',                        //028
          //'You just WON 10,000 SPINA!',                        //029
          //'You just WON 10,000 SPINA!',                        //030 = 20%
          //'You just WON 10,000 SPINA!',                        //031
          //'You just WON 10,000 SPINA!',                        //032
          //'You just WON 10,000 SPINA!',                        //033
          //'You just WON 10,000 SPINA!',                        //034
          //'You just WON 10,000 SPINA!',                        //035
          //'You just WON 10,000 SPINA!',                        //036
          //'You just WON 10,000 SPINA!',                        //037
          //'You just WON 10,000 SPINA!',                        //038
          //'You just WON 10,000 SPINA!',                        //039
          //'You just WON 10,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 50,000 SPINA!',                        //001 = 0.01%
          'You just WON 50,000 SPINA!',                        //002
          'You just WON 50,000 SPINA!',                        //003
          'You just WON 50,000 SPINA!',                        //004
          'You just WON 50,000 SPINA!',                        //005
          'You just WON 50,000 SPINA!',                        //006
          'You just WON 50,000 SPINA!',                        //007
          'You just WON 50,000 SPINA!',                        //008
          'You just WON 50,000 SPINA!',                        //009
          'You just WON 50,000 SPINA!',                        //010 = 0.10%
          'You just WON 50,000 SPINA!',                        //011
          'You just WON 50,000 SPINA!',                        //012
          'You just WON 50,000 SPINA!',                        //013
          'You just WON 50,000 SPINA!',                        //014 = 4%
          //'You just WON 50,000 SPINA!',                        //015
          //'You just WON 50,000 SPINA!',                        //016
          //'You just WON 50,000 SPINA!',                        //017
          //'You just WON 50,000 SPINA!',                        //018
          //'You just WON 50,000 SPINA!',                        //019
          //'You just WON 50,000 SPINA!',                        //020 = 10%
          //'You just WON 50,000 SPINA!',                        //021
          //'You just WON 50,000 SPINA!',                        //022
          //'You just WON 50,000 SPINA!',                        //023
          //'You just WON 50,000 SPINA!',                        //024
          //'You just WON 50,000 SPINA!',                        //025
          //'You just WON 50,000 SPINA!',                        //026
          //'You just WON 50,000 SPINA!',                        //027
          //'You just WON 50,000 SPINA!',                        //028
          //'You just WON 50,000 SPINA!',                        //029
          //'You just WON 50,000 SPINA!',                        //030 = 20%
          //'You just WON 50,000 SPINA!',                        //031
          //'You just WON 50,000 SPINA!',                        //032
          //'You just WON 50,000 SPINA!',                        //033
          //'You just WON 50,000 SPINA!',                        //034
          //'You just WON 50,000 SPINA!',                        //035
          //'You just WON 50,000 SPINA!',                        //036
          //'You just WON 50,000 SPINA!',                        //037
          //'You just WON 50,000 SPINA!',                        //038
          //'You just WON 50,000 SPINA!',                        //039
          //'You just WON 50,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 100,000 SPINA!',                        //001 = 0.01%
          'You just WON 100,000 SPINA!',                        //002
          'You just WON 100,000 SPINA!',                        //003
          'You just WON 100,000 SPINA!',                        //004
          'You just WON 100,000 SPINA!',                        //005
          'You just WON 100,000 SPINA!',                        //006
          'You just WON 100,000 SPINA!',                        //007
          'You just WON 100,000 SPINA!',                        //008
          'You just WON 100,000 SPINA!',                        //009
          'You just WON 100,000 SPINA!',                        //010 = 0.10%
          'You just WON 100,000 SPINA!',                        //011 = 1%
          //'You just WON 100,000 SPINA!',                        //012
          //'You just WON 100,000 SPINA!',                        //013
          //'You just WON 100,000 SPINA!',                        //014
          //'You just WON 100,000 SPINA!',                        //015
          //'You just WON 100,000 SPINA!',                        //016
          //'You just WON 100,000 SPINA!',                        //017
          //'You just WON 100,000 SPINA!',                        //018
          //'You just WON 100,000 SPINA!',                        //019
          //'You just WON 100,000 SPINA!',                        //020 = 10%
          //'You just WON 100,000 SPINA!',                        //021
          //'You just WON 100,000 SPINA!',                        //022
          //'You just WON 100,000 SPINA!',                        //023
          //'You just WON 100,000 SPINA!',                        //024
          //'You just WON 100,000 SPINA!',                        //025
          //'You just WON 100,000 SPINA!',                        //026
          //'You just WON 100,000 SPINA!',                        //027
          //'You just WON 100,000 SPINA!',                        //028
          //'You just WON 100,000 SPINA!',                        //029
          //'You just WON 100,000 SPINA!',                        //030 = 20%
          //'You just WON 100,000 SPINA!',                        //031
          //'You just WON 100,000 SPINA!',                        //032
          //'You just WON 100,000 SPINA!',                        //033
          //'You just WON 100,000 SPINA!',                        //034
          //'You just WON 100,000 SPINA!',                        //035
          //'You just WON 100,000 SPINA!',                        //036
          //'You just WON 100,000 SPINA!',                        //037
          //'You just WON 100,000 SPINA!',                        //038
          //'You just WON 100,000 SPINA!',                        //039
          //'You just WON 100,000 SPINA!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 10 VITA III!',                        //001 = 0.01%
          'You just WON 10 VITA III!',                        //002
          'You just WON 10 VITA III!',                        //003
          'You just WON 10 VITA III!',                        //004
          'You just WON 10 VITA III!',                        //005
          'You just WON 10 VITA III!',                        //006
          'You just WON 10 VITA III!',                        //007
          'You just WON 10 VITA III!',                        //008
          'You just WON 10 VITA III!',                        //009
          'You just WON 10 VITA III!',                        //010 = 0.10%
          'You just WON 10 VITA III!',                        //011
          'You just WON 10 VITA III!',                        //012
          'You just WON 10 VITA III!',                        //013
          'You just WON 10 VITA III!',                        //014
          'You just WON 10 VITA III!',                        //015
          'You just WON 10 VITA III!',                        //016
          'You just WON 10 VITA III!',                        //017
          'You just WON 10 VITA III!',                        //018
          'You just WON 10 VITA III!',                        //019
          'You just WON 10 VITA III!',                        //020 = 10%
          'You just WON 10 VITA III!',                        //021
          'You just WON 10 VITA III!',                        //022
          'You just WON 10 VITA III!',                        //023
          'You just WON 10 VITA III!',                        //024
          'You just WON 10 VITA III!',                        //025
          'You just WON 10 VITA III!',                        //026
          'You just WON 10 VITA III!',                        //027
          'You just WON 10 VITA III!',                        //028 = 18%
          //'You just WON 10 VITA III!',                        //029
          //'You just WON 10 VITA III!',                        //030 = 20%
          //'You just WON 10 VITA III!',                        //031
          //'You just WON 10 VITA III!',                        //032
          //'You just WON 10 VITA III!',                        //033
          //'You just WON 10 VITA III!',                        //034
          //'You just WON 10 VITA III!',                        //035
          //'You just WON 10 VITA III!',                        //036
          //'You just WON 10 VITA III!',                        //037
          //'You just WON 10 VITA III!',                        //038
          //'You just WON 10 VITA III!',                        //039
          //'You just WON 10 VITA III!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 10 MAGI ADD III!',                        //001 = 0.01%
          'You just WON 10 MAGI ADD III!',                        //002
          'You just WON 10 MAGI ADD III!',                        //003
          'You just WON 10 MAGI ADD III!',                        //004
          'You just WON 10 MAGI ADD III!',                        //005
          'You just WON 10 MAGI ADD III!',                        //006
          'You just WON 10 MAGI ADD III!',                        //007
          'You just WON 10 MAGI ADD III!',                        //008
          'You just WON 10 MAGI ADD III!',                        //009
          'You just WON 10 MAGI ADD III!',                        //010 = 0.10%
          'You just WON 10 MAGI ADD III!',                        //011
          'You just WON 10 MAGI ADD III!',                        //012
          'You just WON 10 MAGI ADD III!',                        //013
          'You just WON 10 MAGI ADD III!',                        //014
          'You just WON 10 MAGI ADD III!',                        //015
          'You just WON 10 MAGI ADD III!',                        //016
          'You just WON 10 MAGI ADD III!',                        //017
          'You just WON 10 MAGI ADD III!',                        //018
          'You just WON 10 MAGI ADD III!',                        //019
          'You just WON 10 MAGI ADD III!',                        //020 = 10%
          'You just WON 10 MAGI ADD III!',                        //021
          'You just WON 10 MAGI ADD III!',                        //022
          'You just WON 10 MAGI ADD III!',                        //023
          'You just WON 10 MAGI ADD III!',                        //024
          'You just WON 10 MAGI ADD III!',                        //025
          'You just WON 10 MAGI ADD III!',                        //026
          'You just WON 10 MAGI ADD III!',                        //027
          'You just WON 10 MAGI ADD III!',                        //028 18%
          //'You just WON 10 MAGI ADD III!',                        //029
          //'You just WON 10 MAGI ADD III!',                        //030 = 20%
          //'You just WON 10 MAGI ADD III!',                        //031
          //'You just WON 10 MAGI ADD III!',                        //032
          //'You just WON 10 MAGI ADD III!',                        //033
          //'You just WON 10 MAGI ADD III!',                        //034
          //'You just WON 10 MAGI ADD III!',                        //035
          //'You just WON 10 MAGI ADD III!',                        //036
          //'You just WON 10 MAGI ADD III!',                        //037
          //'You just WON 10 MAGI ADD III!',                        //038
          //'You just WON 10 MAGI ADD III!',                        //039
          //'You just WON 10 MAGI ADD III!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 99 ENERGY BOTTLE!',                        //001 = 0.01%
          'You just WON 99 ENERGY BOTTLE!',                        //002
          'You just WON 99 ENERGY BOTTLE!',                        //003
          'You just WON 99 ENERGY BOTTLE!',                        //004
          'You just WON 99 ENERGY BOTTLE!',                        //005
          'You just WON 99 ENERGY BOTTLE!',                        //006
          'You just WON 99 ENERGY BOTTLE!',                        //007
          'You just WON 99 ENERGY BOTTLE!',                        //008
          'You just WON 99 ENERGY BOTTLE!',                        //009
          'You just WON 99 ENERGY BOTTLE!',                        //010 = 0.10%
          'You just WON 99 ENERGY BOTTLE!',                        //011
          'You just WON 99 ENERGY BOTTLE!',                        //012
          'You just WON 99 ENERGY BOTTLE!',                        //013
          'You just WON 99 ENERGY BOTTLE!',                        //014
          'You just WON 99 ENERGY BOTTLE!',                        //015
          'You just WON 99 ENERGY BOTTLE!',                        //016
          'You just WON 99 ENERGY BOTTLE!',                        //017
          'You just WON 99 ENERGY BOTTLE!',                        //018
          'You just WON 99 ENERGY BOTTLE!',                        //019
          'You just WON 99 ENERGY BOTTLE!',                        //020 = 10%
          'You just WON 99 ENERGY BOTTLE!',                        //021
          'You just WON 99 ENERGY BOTTLE!',                        //022 = 12%
          //'You just WON 99 ENERGY BOTTLE!',                        //023
          //'You just WON 99 ENERGY BOTTLE!',                        //024
          //'You just WON 99 ENERGY BOTTLE!',                        //025
          //'You just WON 99 ENERGY BOTTLE!',                        //026
          //'You just WON 99 ENERGY BOTTLE!',                        //027
          //'You just WON 99 ENERGY BOTTLE!',                        //028
          //'You just WON 99 ENERGY BOTTLE!',                        //029
          //'You just WON 99 ENERGY BOTTLE!',                        //030 = 20%
          //'You just WON 99 ENERGY BOTTLE!',                        //031
          //'You just WON 99 ENERGY BOTTLE!',                        //032
          //'You just WON 99 ENERGY BOTTLE!',                        //033
          //'You just WON 99 ENERGY BOTTLE!',                        //034
          //'You just WON 99 ENERGY BOTTLE!',                        //035
          //'You just WON 99 ENERGY BOTTLE!',                        //036
          //'You just WON 99 ENERGY BOTTLE!',                        //037
          //'You just WON 99 ENERGY BOTTLE!',                        //038
          //'You just WON 99 ENERGY BOTTLE!',                        //039
          //'You just WON 99 ENERGY BOTTLE!',                        //040 = 30%

          'You just WON 99 FLOWER NECTAR!',                        //001 = 0.01%
          'You just WON 99 FLOWER NECTAR!',                        //002
          'You just WON 99 FLOWER NECTAR!',                        //003
          'You just WON 99 FLOWER NECTAR!',                        //004
          'You just WON 99 FLOWER NECTAR!',                        //005
          'You just WON 99 FLOWER NECTAR!',                        //006
          'You just WON 99 FLOWER NECTAR!',                        //007
          'You just WON 99 FLOWER NECTAR!',                        //008
          'You just WON 99 FLOWER NECTAR!',                        //009
          'You just WON 99 FLOWER NECTAR!',                        //010 = 0.10%
          'You just WON 99 FLOWER NECTAR!',                        //011
          'You just WON 99 FLOWER NECTAR!',                        //012
          'You just WON 99 FLOWER NECTAR!',                        //013
          'You just WON 99 FLOWER NECTAR!',                        //014
          'You just WON 99 FLOWER NECTAR!',                        //015
          'You just WON 99 FLOWER NECTAR!',                        //016
          'You just WON 99 FLOWER NECTAR!',                        //017
          'You just WON 99 FLOWER NECTAR!',                        //018
          'You just WON 99 FLOWER NECTAR!',                        //019
          'You just WON 99 FLOWER NECTAR!',                        //020 = 10%
          'You just WON 99 FLOWER NECTAR!',                        //021
          'You just WON 99 FLOWER NECTAR!',                        //022
          'You just WON 99 FLOWER NECTAR!',                        //023
          'You just WON 99 FLOWER NECTAR!',                        //024
          'You just WON 99 FLOWER NECTAR!',                        //025 15%
          //'You just WON 99 FLOWER NECTAR!',                        //026
          //'You just WON 99 FLOWER NECTAR!',                        //027
          //'You just WON 99 FLOWER NECTAR!',                        //028
          //'You just WON 99 FLOWER NECTAR!',                        //029
          //'You just WON 99 FLOWER NECTAR!',                        //030 = 20%
          //'You just WON 99 FLOWER NECTAR!',                        //031
          //'You just WON 99 FLOWER NECTAR!',                        //032
          //'You just WON 99 FLOWER NECTAR!',                        //033
          //'You just WON 99 FLOWER NECTAR!',                        //034
          //'You just WON 99 FLOWER NECTAR!',                        //035
          //'You just WON 99 FLOWER NECTAR!',                        //036
          //'You just WON 99 FLOWER NECTAR!',                        //037
          //'You just WON 99 FLOWER NECTAR!',                        //038
          //'You just WON 99 FLOWER NECTAR!',                        //039
          //'You just WON 99 FLOWER NECTAR!',                        //040 = 30%

          'You just WON 99 NIGHTMARE CRYSTAL!',                        //001 = 0.01%
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //002
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //003
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //004
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //005
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //006
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //007
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //008
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //009
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //010 = 0.10%
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //011
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //012
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //013
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //014
          'You just WON 99 NIGHTMARE CRYSTAL!',                        //015 = 5%
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //016
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //017
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //018
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //019
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //020 = 10%
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //021
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //022
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //023
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //024
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //025
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //026
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //027
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //028
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //029
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //030 = 20%
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //031
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //032
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //033
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //034
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //035
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //036
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //037
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //038
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //039
          //'You just WON 99 NIGHTMARE CRYSTAL!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 1 ANTI-DEGRADATION!',                        //001 = 0.01%
          'You just WON 1 ANTI-DEGRADATION!',                        //002
          'You just WON 1 ANTI-DEGRADATION!',                        //003
          'You just WON 1 ANTI-DEGRADATION!',                        //004
          'You just WON 1 ANTI-DEGRADATION!',                        //005
          'You just WON 1 ANTI-DEGRADATION!',                        //006
          'You just WON 1 ANTI-DEGRADATION!',                        //007
          'You just WON 1 ANTI-DEGRADATION!',                        //008
          'You just WON 1 ANTI-DEGRADATION!',                        //009
          'You just WON 1 ANTI-DEGRADATION!',                        //010 = 0.10%
          'You just WON 1 ANTI-DEGRADATION!',                        //011
          'You just WON 1 ANTI-DEGRADATION!',                        //012
          'You just WON 1 ANTI-DEGRADATION!',                        //013
          'You just WON 1 ANTI-DEGRADATION!',                        //014
          'You just WON 1 ANTI-DEGRADATION!',                        //015
          'You just WON 1 ANTI-DEGRADATION!',                        //016
          'You just WON 1 ANTI-DEGRADATION!',                        //017
          'You just WON 1 ANTI-DEGRADATION!',                        //018
          'You just WON 1 ANTI-DEGRADATION!',                        //019
          'You just WON 1 ANTI-DEGRADATION!',                        //020 = 10%
          //'You just WON 1 ANTI-DEGRADATION!',                        //021
          //'You just WON 1 ANTI-DEGRADATION!',                        //022
          //'You just WON 1 ANTI-DEGRADATION!',                        //023
          //'You just WON 1 ANTI-DEGRADATION!',                        //024
          //'You just WON 1 ANTI-DEGRADATION!',                        //025
          //'You just WON 1 ANTI-DEGRADATION!',                        //026
          //'You just WON 1 ANTI-DEGRADATION!',                        //027
          //'You just WON 1 ANTI-DEGRADATION!',                        //028
          //'You just WON 1 ANTI-DEGRADATION!',                        //029
          //'You just WON 1 ANTI-DEGRADATION!',                        //030 = 20%
          //'You just WON 1 ANTI-DEGRADATION!',                        //031
          //'You just WON 1 ANTI-DEGRADATION!',                        //032
          //'You just WON 1 ANTI-DEGRADATION!',                        //033
          //'You just WON 1 ANTI-DEGRADATION!',                        //034
          //'You just WON 1 ANTI-DEGRADATION!',                        //035
          //'You just WON 1 ANTI-DEGRADATION!',                        //036
          //'You just WON 1 ANTI-DEGRADATION!',                        //037
          //'You just WON 1 ANTI-DEGRADATION!',                        //038
          //'You just WON 1 ANTI-DEGRADATION!',                        //039
          //'You just WON 1 ANTI-DEGRADATION!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 1 ORICHALCUM!',                        //001 = 0.01%
          'You just WON 1 ORICHALCUM!',                        //002
          'You just WON 1 ORICHALCUM!',                        //003
          'You just WON 1 ORICHALCUM!',                        //004
          'You just WON 1 ORICHALCUM!',                        //005
          'You just WON 1 ORICHALCUM!',                        //006
          'You just WON 1 ORICHALCUM!',                        //007
          'You just WON 1 ORICHALCUM!',                        //008
          'You just WON 1 ORICHALCUM!',                        //009
          'You just WON 1 ORICHALCUM!',                        //010 = 0.10%
          'You just WON 1 ORICHALCUM!',                        //011
          'You just WON 1 ORICHALCUM!',                        //012
          'You just WON 1 ORICHALCUM!',                        //013
          'You just WON 1 ORICHALCUM!',                        //014
          'You just WON 1 ORICHALCUM!',                        //015 = 5%
          //'You just WON 1 ORICHALCUM!',                        //016
          //'You just WON 1 ORICHALCUM!',                        //017
          //'You just WON 1 ORICHALCUM!',                        //018
          //'You just WON 1 ORICHALCUM!',                        //019
          //'You just WON 1 ORICHALCUM!',                        //020 = 10%
          //'You just WON 1 ORICHALCUM!',                        //021
          //'You just WON 1 ORICHALCUM!',                        //022
          //'You just WON 1 ORICHALCUM!',                        //023
          //'You just WON 1 ORICHALCUM!',                        //024
          //'You just WON 1 ORICHALCUM!',                        //025
          //'You just WON 1 ORICHALCUM!',                        //026
          //'You just WON 1 ORICHALCUM!',                        //027
          //'You just WON 1 ORICHALCUM!',                        //028
          //'You just WON 1 ORICHALCUM!',                        //029
          //'You just WON 1 ORICHALCUM!',                        //030 = 20%
          //'You just WON 1 ORICHALCUM!',                        //031
          //'You just WON 1 ORICHALCUM!',                        //032
          //'You just WON 1 ORICHALCUM!',                        //033
          //'You just WON 1 ORICHALCUM!',                        //034
          //'You just WON 1 ORICHALCUM!',                        //035
          //'You just WON 1 ORICHALCUM!',                        //036
          //'You just WON 1 ORICHALCUM!',                        //037
          //'You just WON 1 ORICHALCUM!',                        //038
          //'You just WON 1 ORICHALCUM!',                        //039
          //'You just WON 1 ORICHALCUM!',                        //040 = 30%
  ///////////////////////////////////////////////////////////////////////////////
          'You just WON 10 DAMASCUS ORE!',                        //001 = 0.01%
          'You just WON 10 DAMASCUS ORE!',                        //002
          'You just WON 10 DAMASCUS ORE!',                        //003
          'You just WON 10 DAMASCUS ORE!',                        //004
          'You just WON 10 DAMASCUS ORE!',                        //005
          'You just WON 10 DAMASCUS ORE!',                        //006
          'You just WON 10 DAMASCUS ORE!',                        //007
          'You just WON 10 DAMASCUS ORE!',                        //008
          'You just WON 10 DAMASCUS ORE!',                        //009
          'You just WON 10 DAMASCUS ORE!',                        //010 = 0.10%
          'You just WON 10 DAMASCUS ORE!',                        //011
          'You just WON 10 DAMASCUS ORE!',                        //012
          'You just WON 10 DAMASCUS ORE!',                        //013
          'You just WON 10 DAMASCUS ORE!',                        //014
          'You just WON 10 DAMASCUS ORE!',                        //015 = 5%
          //'You just WON 10 DAMASCUS ORE!',                        //016
          //'You just WON 10 DAMASCUS ORE!',                        //017
          //'You just WON 10 DAMASCUS ORE!',                        //018
          //'You just WON 10 DAMASCUS ORE!',                        //019
          //'You just WON 10 DAMASCUS ORE!',                        //020 = 10%
          //'You just WON 10 DAMASCUS ORE!',                        //021
          //'You just WON 10 DAMASCUS ORE!',                        //022
          //'You just WON 10 DAMASCUS ORE!',                        //023
          //'You just WON 10 DAMASCUS ORE!',                        //024
          //'You just WON 10 DAMASCUS ORE!',                        //025
          //'You just WON 10 DAMASCUS ORE!',                        //026
          //'You just WON 10 DAMASCUS ORE!',                        //027
          //'You just WON 10 DAMASCUS ORE!',                        //028
          //'You just WON 10 DAMASCUS ORE!',                        //029
          //'You just WON 10 DAMASCUS ORE!',                        //030 = 20%
          //'You just WON 10 DAMASCUS ORE!',                        //031
          //'You just WON 10 DAMASCUS ORE!',                        //032
          //'You just WON 10 DAMASCUS ORE!',                        //033
          //'You just WON 10 DAMASCUS ORE!',                        //034
          //'You just WON 10 DAMASCUS ORE!',                        //035
          //'You just WON 10 DAMASCUS ORE!',                        //036
          //'You just WON 10 DAMASCUS ORE!',                        //037
          //'You just WON 10 DAMASCUS ORE!',                        //038
          //'You just WON 10 DAMASCUS ORE!',                        //039
          //'You just WON 10 DAMASCUS ORE!',                        //040 = 30%

          '```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```',   //001
          '```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```',   //002
          '```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```',   //003
          '```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```',   //004
          '```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```',   //005 = 0.05%
          //'```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```'   //006
          //'```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```'   //007
          //'```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```'   //008
          //'```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```'   //009
          //'```JACKPOT!: ANY 1 ARMOR/ADDITIONAL DYE!```'   //010 = 0.10%

          '```SPECIAL JACKPOT!: 1 CRYSTA!```'   //001 = 0.01%
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //002
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //003
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //004
          //'```SPECIAL JACKPOT!: 1 CRYSTA!```'  //005 0.05%

        ];

          var msg = message.content.split(' ')[0].toUpperCase()
          let sender = message.author;
          let cont = message.content.slice(prefix.length).split(' ');
          let args = message.content.split(' ').slice(1);

          if (msg === prefix + 'DAILY') {
              message.reply ({embed:{
                title: 'Daily Rewards',
                color: 0xFF0000,
                description: '*Time will reset every 24 hours 8+ GMT*',
                fields: [
                  {
                  name: (daily[Math.floor(Math.random() * daily.length)]),
                  value: '*Try again tomorrow.*',
                  inline: false
                },
              ],
                timestamp: new Date(),
                footer: {
                  text: 'Valid for 1 day only.',
                  icon_url: 'https://cdn.discordapp.com/app-icons/438028446900289537/c7036f46ab5af833547a4cd3b48190df.png'
                }
              }})
          }

  });

nexus.login(process.env.NEXUS_TOKEN);

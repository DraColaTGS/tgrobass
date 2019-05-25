const Discord  = require('discord.js');
const client     = new Discord.Client();
const prefix   = "=";
const category = "category-id";
const devs     = ["your-id", "test"];
const fs = require('fs');
const ms = require("ms");
let mtickets   = true;
let tchannels  = [];
let current    = 0;



client.on('ready', function(){
    var ms = 60000 ;
    var setGame = ['=help','تجربه '];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/barontube`);
    }, ms);
    console.log(` ????????? |> Name: ${client.user.username}`);
 console.log(` ????????? |> Servers: ${client.guilds.size}`);
 console.log(` ???????????????????? |> Members: ${client.users.size}`);
 console.log(` ????????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Channels: ${client.channels.size}`);
 console.log(` ???????????????????? |> Id: ${client.user.id}`);
 console.log(` ???????????????????`);
 console.log(` ???????????????????`);
});



client.on('message', message => {
const prefix   = "=";
if (message.content.startsWith(prefix + 'help')) {
    let pages = [
    `=-=-=-=-=-= 🌍 Public Commands - اوامر عامة 🌍 =-=-=-=-=-=
    ***
	❖ ${prefix}server :writing_hand: لاظهار معلومات السيرفر 
    ❖ ${prefix}user :writing_hand: لاظهار معلوماتك الشخصيه 
    ❖ ${prefix}avatar :writing_hand: لعرض افتار اي شخص 
    ❖ ${prefix}avaserver :writing_hand: لعرض افتار السيرفر
	❖ ${prefix}link :writing_hand: لينك السيرفر 
	❖ ${prefix}dt :writing_hand: لعرض التاريخ و الوقت 
	❖ ${prefix}invites :writing_hand: لعرض عدد دعواتك 
	❖ ${prefix}new :writing_hand: لفتح تكيت 
	❖ ${prefix}close :writing_hand: لغلق التيكت 
	❖ ${prefix}link :writing_hand: للاعطاءك لينك السيرفر 
	***
	<!LG ÐrĀčuĿĀ#6764>
     ===========================================================
      React With ▶ To See Admins Commands`,
    `=-=-=-=-=-= 🔧  Admin Commands - اوامر ادارية 🔧 =-=-=-=-=-=
    ***
	✴ ${prefix}kick :writing_hand: لاعطاء كيك للعضو بي سبب
    ✴ ${prefix}ban :writing_hand: لاعطاء للعضو بان 
    ✴ ${prefix}clear :writing_hand: لمسح الشات مع التحديد عدد الرسائل
    ✴ ${prefix}mutech :writing_hand: لقفل الشات
    ✴ ${prefix}unmutech :writing_hand: لفتح الشات 
	✴ ${prefix}hch :writing_hand: لاخفاء الشات 
    ✴ ${prefix}sch :writing_hand: لاظهار الشات
	✴ ${prefix}role :writing_hand: لعطاء رتبه لشخص او للكل
	✴ ${prefix}removerole :writing_hand: لي سحب رتبه من شخص او للكل 
	✴ ${prefix}move :writing_hand: لسحب العضو الي الروم الصوتي
    ✴ ${prefix}mtickets enable :writing_hand: لتشغيل نظام التكت لللاعضاء
	✴ ${prefix}mtickets disable :writing_hand: لي ايقاف نظام التكت لللاعضاء
	✴ ${prefix}antibots on :writing_hand: لتفعيل الحمايه 
	✴ ${prefix}antibots off :writing_hand: لي ايقاف الحمايه 
	✴ ${prefix}ccolors :writing_hand: لانشاء 138 لون
	✴ ${prefix}bc :writing_hand: لارسال برود كاسيت للكل 
	✴ ${prefix}obc :writing_hand: لارسال برود كاسيت للاون لاين فقت 
	✴ ${prefix}rolebc :writing_hand: لارسال برود كاسيت لرتبه معينه 
	rolebc الرساله @<Name role > 
	***
	<!LG ÐrĀčuĿĀ#6764>
	===========================================================
      React With ▶ To See Games Commands`,
    `=-=-=-=-=-= 🎯  Games Commands - اوامر الالعاب 🎯 =-=-=-=-=-=
    ***
   💠 ${prefix}صراحه :writing_hand: لعبه صراحه
   💠 ${prefix}لو خيروك :writing_hand: لعبه لو خيروك
   💠 ${prefix}كت تويت :writing_hand: لعبه كت تويت 
   💠 ${prefix}فورت نايت :writing_hand: اسئله فورت نايت وا ببجي
   💠 ${prefix}مريم :writing_hand: لعبه مريم 
   💠 ${prefix}عقاب :writing_hand: لعبه عقاب
   💠 ${prefix}rps :writing_hand: لعبه حجره ورقا مقص 
    ***
	<!LG ÐrĀčuĿĀ#6764>
	===========================================================
      React With ▶ To See Music Commands`,
    `=-=-=-=-=-= 🎯  Music Commands - اوامر الموسيقى 🎯 =-=-=-=-=-=
    :cd: ${prefix}
    :cd: ${prefix}
    :cd: ${prefix}
    :cd: ${prefix}
    :cd: ${prefix}
    :cd: ${prefix}
    Soon And I Will Translate The Command To Englih`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.channel.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));//require antihack.json file
client.on('message', message => {
    if(message.content.startsWith(prefix + "toggleAntihack")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!antihack[message.guild.id]) antihack[message.guild.id] = {
          onoff: 'Off'
        }
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**âœ… The AntiHack Is __OFF____ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**â›” The AntiHack Is __ً‌ON__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
        //antihack with ON , OFF ! RARE CODE
        //LIKE PLUSBOT !
 
  let banse = new Set();
  let bane = JSON.parse(fs.readFileSync('./data1.json' , 'utf8'));//require data1.json
  client.on('guildBanAdd', function(guild) {
    guild.fetchAuditLogs().then(logs => {
      const ser = logs.entries.first().executor;
      if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
        bans: 2
      }
      if(antihack[guild.guild.id].onoff === 'Off') return;
      let boner = bane[ser.id+guild.id]
  banse.add(ser.id)
  boner.bans = Math.floor(boner.bans+1)
 
 
  setTimeout(() => {
    boner.bans = 2
    banse.delete(ser.id)
  },8000)
 
  if(boner.bans > 2) {
    let roles = guild.members.get(ser.id).roles.array()
  guild.members.get(ser.id).removeRoles(roles)
  }
 
      })
      fs.writeFile('./data1.json', JSON.stringify(bane), (err) => {
  if (err) console.error(err);
  })
 
  })
  client.on('guildMemberRemove', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `MEMBER_KICK`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {  
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
    const data = require("./data.json");
  });
  client.on('roleDelete', (u) => {
      u.guild.fetchAuditLogs().then( s => {
          var ss = s.entries.first();
          if (ss.action == `ROLE_DELETE`) {
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = {
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
 
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
 
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {   
                  r.edit({
                      permissions : []  
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) {
                  data[ss.executor.id].time = 0
              }
          },60000)
      };
      });
    const data = require("./data.json");
  });
  client.on('channelDelete', (u) => {  
      u.guild.fetchAuditLogs().then( s => { 
          var ss = s.entries.first();
          if (ss.action == `CHANNEL_DELETE`) { 
          if (!data[ss.executor.id]) {
              data[ss.executor.id] = { 
              time : 1
            };
            if(antihack[u.guild.id].onoff === 'Off') return;
        } else {
            data[ss.executor.id].time+=1
        };
        if(antihack[u.guild.id].onoff === 'Off') return;
  data[ss.executor.id].time = 0
  u.guild.members.get(ss.executor.id).roles.forEach(r => {
                  r.edit({
                      permissions : []
                  });
                  data[ss.executor.id].time = 0
              });
          setTimeout(function(){
              if (data[ss.executor.id].time <= 3) { //Toxic Codes
                  data[ss.executor.id].time = 0
              }
          })
      };
      });
    const data = require("./data.json");
  })
  let antibots = JSON.parse(fs.readFileSync('./antibots.json' , 'utf8'));//require antihack.json file
  client.on('message', message => {
    if(message.content.startsWith(prefix + "antibots on")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`' );
antibots[message.guild.id] = {
onoff: 'On',
}
message.channel.send(`**âœ… The AntiBots Is __ON__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 

    if(message.content.startsWith(prefix + "antibots off")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Sorry But You Dont Have Permission** `ADMINISTRATOR`' );
antibots[message.guild.id] = {
onoff: 'Off',
}
message.channel.send(`**â›” The AntiBots Is __OFF__ !**`)
          fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        })
 
client.on("guildMemberAdd", member => {
  if(!antibots[member.guild.id]) antibots[member.guild.id] = {
onoff: 'Off'
}
  if(antibots[member.guild.id].onoff === 'Off') return;
if(member.user.bot) return member.kick()
})
 
fs.writeFile("./antibots.json", JSON.stringify(antibots), (err) => {
if (err) console.error(err)
.catch(err => {
console.error(err);
});
})

//////كود منع التخريب

var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 3 , delay: 5000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 3, delay: 5000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 3, delay: 5000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 3, delay: 5000},
    {type: "GUILD_ROLE_CREATE", logType: "ROLE_CREATE", limit: 3, delay: 5000},
    {type: "GUILD_ROLE_DELETE", logType: "ROLE_DELETE", limit: 3, delay: 5000},
  ]
}
client.on("error", (e) => console.error(e));
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(index)) uses += 1;
          });
          setTimeout(() => {
            client.captures[index] = index
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});


client.on("reachLimit", (limit)=> {
    let log = limit.guild.channels.find( channel => channel.name === "log");
    log.send(`<@${limit.user.id}>`+"\ntried to hack (!)");
    limit.guild.owner.send(limit.user.username+"\ntried to hack (!)")
    limit.member.roles.map(role => {
      limit.member.removeRole(role.id)
      .catch(log.send)
    });
  });

client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("=link")) { 
        message.channel.createInvite({
        thing: true,
        maxUses: 1,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription(" *** تم أرسال الرابط برسالة خاصة *** ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)
 
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
       
    .setDescription(" *** مدة الرابط : ساعه  عدد استخدامات الرابط : 1 *** ")
      message.author.sendEmbed(Embed11)
    }
});

client.on('ready',async () => console.log(`   - " ${client.user.username} " , Tickety is ready to work.`));
client.on('message',async message => {
    if(message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(" ");
    let author = message.author.id;
    if(args[0].toLowerCase() === `${prefix}help`) {
            let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setColor("#36393e")
            .addField(`⇏ -new                     → لفتح تكت`)
            .addField(`⇏ -close                   → لغلق تكت`)
            .addField(`⇏ -mtickets enable/disable → لتعطيل وتفعيل تكت `)
            .addField(`⇏ cleartickets             →  لمسح جميع تكتات`)
            .addField(``)
            await message.channel.send(`:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`);
            await message.channel.send(embed);
    } else if(args[0].toLowerCase() === `${prefix}new`) {
        if(mtickets === false) return message.channel.send(`:tools: , **تم ايقاف هذه الخاصية من قبل احد ادارة السيرفر**`);
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`:tools: , **البوت لا يملك صلاحيات لصنع الروم**`);
        console.log(current);
        let openReason = "";
        current++;
        message.guild.createChannel(`ticket-${current}`, 'text').then(c => {
        tchannels.push(c.id);
        c.setParent(category);
        message.channel.send(`**:tickets: تم عمل التكت.**`);
        c.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false,
            SEND_MESSAGES: false
        });
        c.overwritePermissions(message.author.id, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
        });
       
        if(args[1]) openReason = `\nسبب فتح التكت , " **${args.slice(1).join(" ")}** "`;
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393e")
        .setDescription(`**انتظر قليلا الى حين رد الادارة عليك**${openReason}`);
        c.send(`${message.author}`);
        c.send(embed);
    });
    } else if(args[0].toLowerCase() === `${prefix}mtickets`) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:tools: , **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
        if(args[1] && args[1].toLowerCase() === "enable") {
            mtickets = true;
            message.channel.send(`:white_check_mark: , **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
        } else if(args[1] && args[1].toLowerCase() === "disable") {
            mtickets = false;
            message.channel.send(`:white_check_mark: , **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
        } else if(!args[1]) {
            if(mtickets === true) {
            mtickets = false;
            message.channel.send(`:white_check_mark: , **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
            } else if(mtickets === false) {
            mtickets = true;
            message.channel.send(`:white_check_mark: , **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
            }
        }
    } else if(args[0].toLowerCase() === `${prefix}close`) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:tools:, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
        if(!message.channel.name.startsWith('ticket-') && !tchannels.includes(message.channel.id)) return message.channel.send(`:tools:, **هذا الروم ليس من رومات التكت.**`);
       
        message.channel.send(`:white_check_mark:, **سيتم اغلاق الروم في 3 ثواني من الاَن.**`);
        tchannels.splice( tchannels.indexOf(message.channel.id), 1 );
        setTimeout(() => message.channel.delete(), 3000);
    } else if(args[0].toLowerCase() === `${prefix}restart`) {
        if(!devs.includes(message.author.id)) return message.channel.send(`:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`);
        message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
        client.destroy();
    } else if(args[0].toLowerCase() === `${prefix}deletetickets`) {
        let iq = 0;
        for(let q = 0; q < tchannels.length; q++) {
            let c = message.guild.channels.get(tchannels[q]);
            if(c) {
                c.delete();
                tchannels.splice( tchannels[q], 1 );
                iq++;
            }
            if(q === tchannels.length - 1 || q === tchannels.lengh + 1) {
                message.channel.send(`:white_check_mark:, **تم مسح \`${iq}\` من التكتات.**`);
            }
        }
    }
}); 

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | Name :  ',`${member}`)
        .addField('📢 | نورت السيرفر' , `WelCome To Server, ${member}`)
        .addField('🆔 | ID :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("GoodLuck! :revolving_hearts: ",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' Server:', `${member.guild.name}`,true)
                                       
     .setFooter(`LionDev`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
	
client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ?:skin-tone-1: :raised_hands: `)
        .setDescription(`مع السلامه تشرفنا بك ?:skin-tone-1: :heart_eyes:  `)
        .addField(':busts_in_silhouette:    تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
   
    var channel =member.guild.channels.find('leves', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })

	client.on('message', function(msg) {
    var prefix = "="
	if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)

      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed:embed});
    }
  });

client.on('message', message => {
  var prefix = "="
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'user')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
 
let d = z.createdAt;          
let n = d.toLocaleString();  
let x;                      
let y;                        
 
if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |:surfer: .";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(':levitate: | اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField(':key: | ايدي:', "**"+ `${z.id}` +"**",true)
.addField(':lifter: | Playing:','**'+y+'**' , true)
.addField(':busts_in_silhouette: | نوع حسابك:',"**"+ w + "**",true)    
.addField(':bulb: | التاق حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | :floppy_disk:  **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| :gift_heart:    :**", message.member.joinedAt.toLocaleString())    
 
.addField('**:watch:  | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | :sunglasses:   :**", message.author.lastMessage)            
 
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
 
message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ? **').catch(console.error);
 
}
 
});

client.on('message', message => {
    if (message.content.startsWith("=avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
const prefix = '='
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "avaserver"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} **The number of your  ${inviteCount} invitations** .`);
});
  }
});


client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
           
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 
 
                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png")
                .setTitle( "『التاريخ  والوقت』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('الامارات',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('مكه المكرمه',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』")
                .addField('مصر',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』")
               
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")
 
                 message.channel.sendEmbed(Date15);
        }
    });

client.on("message", message => {   // Me Codes
  var prefix = "=";
              if (message.content.startsWith(prefix + "obc")) {    // Me Codes
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;   // Me Codes
    let args = message.content.split(" ").slice(1);  // Me Codes
    var argresult = args.join(' ');
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {  // Me Codes
   m.send(`${argresult}\n ${m}`);   // Me Codes
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` :mailbox:  عدد المستلمين `);
   message.delete();
  };    
  });

client.on('message', message => {
  var prefix = "=";
                   if(!message.channel.guild) return;
                if(message.content.startsWith(prefix + 'bc')) {
                if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
                if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
                let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
                let BcList = new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setAuthor(`محتوى الرساله ${args}`)
                .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
                if (!args) return message.reply('**يجب عليك كتابة كلمة او ��ملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
                msg.react('📝')
                .then(() => msg.react('✏'))
                .then(() =>msg.react('📝'))
                 
                let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
                let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
                 
                let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
                let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
                 
                EmbedBc.on("collect", r => {
                message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                var bc = new
                Discord.RichEmbed()
                .setColor('RANDOM')
                .setDescription(`Message : ${args}`)
                .setAuthor(`Server : ${message.guild.name}`)
                .setFooter(`Sender : ${message.author.username}`)
                .setThumbnail(message.author.avatarURL)
                m.send({ embed: bc })
                msg.delete();
                })
                })
                NormalBc.on("collect", r => {
                  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
                message.guild.members.forEach(m => {
                m.send(args);
                msg.delete();
                })
                })
                })
                }
                });
				
				client.on('message' , message => {
const prefix   = "=";
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "rolebc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + 
             "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو**`)
        }
    }); 
	
	client.on('message', message => {
const prefix   = "=";
       if(message.content === prefix + "mutech") {
                           if(!message.channel.guild) return message.reply(' This command only for servers');	

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("** Has Been Locked Channel ! ** ✅ ")
              });
                }
if(message.content === prefix + "unmutech") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**Opened The Channel ! ✅**")
              });
    }
       
});

client.on('message', message => {
  var prefix = "="
      if(message.content === prefix + "hch") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('** Channel Hided Successfully ! ** :white_check_mark:  ')
 }
});

client.on('message', message => {
  var prefix = "="
      if(message.content === prefix + "sch") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Has Been Shown Channel ! ** :white_check_mark: ')
 }
});

client.on('message', message => {  
   var prefix = "=";
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('? | This Command For Servers Only!');
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('? | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('? | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**?? || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });
  
  client.on('message', async message =>{
  var prefix = "="
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_ROLES')) return
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      } 
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
  
    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> *** تم اعطائه ميوت ومدة الميوت *** : **${ms(ms(mutetime))}** `);
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
  
  

  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', message => {
const prefix   = "=";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``${prefix}move [USER] لاستخدام خصيه السحب اكتب``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setDescription("**<@${usermentioned}>**``تم سحب العضو الي الروم الصوتي الخاص بك``")
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``منشان اقدر اسحبه``"+ message.mentions.members.first() +"``يجب ان يكون العضو في روم صوتي``")
}
} else {
 message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
}
} else {
message.react("``انا لا امتلك رتبه لاسحب الاعضاء``")
}
 }
});

client.on('message', message => {
const prefix   = "=";
 if (message.content.toLowerCase() === prefix + "move all") {
     message.delete(4000)
 if(!message.channel.guild) return;
 if (!message.member.hasPermission("MOVE_MEMBERS")) return;
 if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
if (message.member.voiceChannel == null) return;
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send('\`Moved All Voice Members To Your Channel\`').then(m => m.delete(4000))
 }
   });

client.on('message', message => {
  var prefix = "="
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);	

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

}
});
  
  client.on('message', message => {
  var prefix = "="
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on("message", message => {
    var prefix = "=";
    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__You Dont Have Permissions__**');
    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
        if( !args[0] ) return message.reply( '**:x: Mention User**' );
        if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Remove it From The User**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: Mention Role To Remove it From The User**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: Success Removed Role [ '+role1.name+' ] From [ '+args[0]+' ]**');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ]  From All**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Bots**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: Succes Removed Rank [ '+role1.name+' ] From All Humans**');
        }  
    } else {
        if( !args[0] ) return message.reply( '**:x: Mention User**' );
        if( !args[1] ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: Write Name Of Role To Give It To User**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark:Success Gived Rank [ '+role1.name+' ] To [ '+args[0]+' ]**');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: Success Gived All Rank [ '+role1.name+' ]**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: Success Gived All Bots Rank [ '+role1.name+' ] **');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: Success Gived All Humans Rank [ '+role1.name+' ]**');
        }
    }
});

client.on('message', message => {
                    var prefix = '='
                    if(message.content === prefix + 'ccolors') {
                                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**');
                         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
                      message.guild.createRole({
                                  name: "1",
                                    color: "#FFB6C1",
                                    permissions: []
                     })
                           message.guild.createRole({
                                  name: "2",
                                    color: "#FFC0CB",
                                    permissions: []
                     })
                                message.guild.createRole({
                                  name: "3",
                                    color: "#FF69B4",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "4",
                                    color: "#FF1493",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "5",
                                    color: "#DB7093",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "6",
                                    color: "#C71585",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "7",
                                    color: "#E6E6FA",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "8",
                                    color: "#D8BFD8",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "8",
                                    color: "#DDA0DD",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "9",
                                    color: "#DA70D6",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "10",
                                    color: "#EE82EE",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "11",
                                    color: "#FF00FF",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "12",
                                    color: "#BA55D3",
                                    permissions: []
                     })
                                     message.guild.createRole({
                                  name: "13",
                                    color: "#9932CC",
                                    permissions: []
                     })
                                          message.guild.createRole({
                                  name: "14",
                                    color: "#9400D3",
                                    permissions: []
                     })
                                          message.guild.createRole({
                                  name: "15",
                                    color: "#8A2BE2",
                                    permissions: []
                     })
                                               message.guild.createRole({
                                  name: "16",
                                    color: "#8B008B",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "17",
                                    color: "#800080",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "18",
                                    color: "#9370DB",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "19",
                                    color: "#7B68EE",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "20",
                                    color: "#6A5ACD",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "21",
                                    color: "#483D8B",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "22",
                                    color: "#663399",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "23",
                                    color: "#4B0082",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "24",
                                    color: "#FFA07A",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "25",
                                    color: "#FA8072",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "26",
                                    color: "#E9967A",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "27",
                                    color: "#F08080",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "28",
                                    color: "#CD5C5C",
                                    permissions: []
                     })
                                                    message.guild.createRole({
                                  name: "29",
                                    color: "#DC143C",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "30",
                                    color: "    #FF0000",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "31",
                                    color: "#B22222",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "32",
                                    color: "#8B0000",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "33",
                                    color: "#FFA500",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "34",
                                    color: "#FF8C00",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "35",
                                    color: "#FF7F50",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "36",
                                    color: "#FF6347",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "37",
                                    color: "#FF4500",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "38",
                                    color: "#FFD700",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "39",
                                    color: "#FFFFE0",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "40",
                                    color: "#FFFACD",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "41",
                                    color: "#FAFAD2",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "42",
                                    color: "    #FFEFD5",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "43",
                                    color: "#FFE4B5",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "44",
                                    color: "#FFDAB9",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "45",
                                    color: "#EEE8AA",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "46",
                                    color: "#F0E68C",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "47",
                                    color: "#BDB76B",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "48",
                                    color: "#ADFF2F",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "49",
                                    color: "#7FFF00",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "50",
                                    color: "#7CFC00",
                                    permissions: []
                     })
                                                         message.guild.createRole({
                                  name: "51",
                                    color: "#00FF00",
                                    permissions: []
                     })  
                     
                                                         message.guild.createRole({
                                  name: "52",
                                    color: "#32CD32",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "53",
                                    color: "#98FB98",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "54",
                                    color: "#90EE90",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "55",
                                    color: "#00FA9A",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "56",
                                    color: "#00FF7F",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "57",
                                    color: "#3CB371",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "58",
                                    color: "#2E8B57",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "59",
                                    color: "#2E8B57",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "60",
                                    color: "#008000",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "61",
                                    color: "#006400",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "62",
                                    color: "#9ACD32",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "63",
                                    color: "#6B8E23",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "64",
                                    color: "#556B2F",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "65",
                                    color: "#66CDAA",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "66",
                                    color: "#8FBC8F",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "67",
                                    color: "#20B2AA",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "68",
                                    color: "#008B8B",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "69",
                                    color: "#008080",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "70",
                                    color: "#00FFFF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "71",
                                    color: "#E0FFFF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "72",
                                    color: "#AFEEEE",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "73",
                                    color: "#7FFFD4",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "74",
                                    color: "#40E0D0",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "75",
                                    color: "#48D1CC",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "76",
                                    color: "#00CED1",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "77",
                                    color: "#5F9EA0",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "78",
                                    color: "#4682B4",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "79",
                                    color: "#B0C4DE",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "80",
                                    color: "#ADD8E6",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "81",
                                    color: "#B0E0E6",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "82",
                                    color: "#87CEFA",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "83",
                                    color: "#87CEEB",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "84",
                                    color: "#6495ED",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "85",
                                    color: "#00BFFF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "86",
                                    color: "#1E90FF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "87",
                                    color: "#4169E1",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "88",
                                    color: "#0000FF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "89",
                                    color: "#0000CD",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "90",
                                    color: "#00008B",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "91",
                                    color: "#000080",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "92",
                                    color: "#191970",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "93",
                                    color: "#FFF8DC",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "94",
                                    color: "#FFEBCD",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "95",
                                    color: "#FFE4C4",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "96",
                                    color: "#FFDEAD",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "97",
                                    color: "#F5DEB3",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "98",
                                    color: "#DEB887",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "99",
                                    color: "#D2B48C",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "100",
                                    color: "#BC8F8F",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "101",
                                    color: "#F4A460",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "102",
                                    color: "#DAA520",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "103",
                                    color: "#B8860B",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "104",
                                    color: "#CD853F",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "105",
                                    color: "#D2691E",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "106",
                                    color: "#808000",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "107",
                                    color: "#8B4513",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "108",
                                    color: "#A0522D",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "109",
                                    color: "#A52A2A",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "110",
                                    color: "#800000",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "111",
                                    color: "#FFFFFF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "112",
                                    color: "#FFFAFA",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "113",
                                    color: "#F0FFF0",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "114",
                                    color: "#F5FFFA",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "115",
                                    color: "#F0FFFF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "116",
                                    color: "#F0F8FF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "117",
                                    color: "#F8F8FF",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "118",
                                    color: "#F5F5F5",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "119",
                                    color: "#FFF5EE",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "120",
                                    color: "#F5F5DC",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "121",
                                    color: "#FDF5E6",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "122",
                                    color: "#FFFAF0",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "123",
                                    color: "#FFFFF0",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "124",
                                    color: "#FAEBD7",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "125",
                                    color: "#FAF0E6",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "126",
                                    color: "#FFF0F5",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "127",
                                    color: "#FFE4E1",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "128",
                                    color: "#DCDCDC",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "129",
                                    color: "#D3D3D3",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "130",
                                    color: "#C0C0C0",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "131",
                                    color: "#A9A9A9",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "132",
                                    color: "#696969",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "133",
                                    color: "#808080",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "134",
                                    color: "#778899",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "135",
                                    color: "#708090",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "136",
                                    color: "#2F4F4F",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "137",
                                    color: "#000000",
                                    permissions: []
                     })    
                                                         message.guild.createRole({
                                  name: "138",
                                    color: "#050303",
                                    permissions: []
                     })    
                     
                          message.channel.sendMessage({embed: new Discord.RichEmbed()
                     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
                    }
   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '1');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                    const prefix   = "=";   
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '2');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '3');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '4');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '5');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '6');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '7');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '8');
                       
                        role.delete()
                        }
                   
                    });
                   
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '9');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '10');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '11');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '12');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '13');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '14');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '15');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '16');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '17');
                       
                        role.delete()
                        }
                   
                    });
 
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '18');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '19');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '20');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '21');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '22');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '23');
                       
                        role.delete()
                        }
                   
                    });
 
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '24');
                       
                        role.delete()
                        }
                   
                    });
 
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '25');
                       
                        role.delete()
                        }
                   
                    });
 
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '26');
                       
                        role.delete()
                        }
                   
                    });
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '27');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '28');
                       
                        role.delete()
                        }
                   
                    });
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '29');
                       
                        role.delete()
                        }
                   
                    });
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '30');
                       
                        role.delete()
                        }
                   
                    });
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '31');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '32');
                       
                        role.delete()
                        }
                   
                    });
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '33');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '34');
                       
                        role.delete()
                        }
                   
                    });
 
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '35');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '36');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '37');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '38');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '39');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '40');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '41');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '42');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '43');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '44');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '45');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '46');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '47');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '48');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '49');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '50');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '51');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '52');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '53');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '54');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '55');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '56');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '57');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '58');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '59');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '60');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '61');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '62');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '63');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '64');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '65');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '66');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '67');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '68');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '69');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '70');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '71');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '72');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '73');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '74');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '75');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '76');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '77');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '78');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '79');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '80');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '81');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '82');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '83');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '84');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '85');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '86');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '87');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '88');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '89');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '90');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '91');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '92');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '93');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '94');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '95');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '96');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '97');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '98');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '99');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '100');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '101');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '102');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '103');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '104');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '105');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '106');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '107');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '108');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '109');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '110');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '111');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '112');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '113');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '114');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '115');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '116');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '117');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '118');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '119');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '120');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '121');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '122');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '123');
                       
                        role.delete()
                        }
                   
                    });
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '124');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '125');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '126');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '127');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '128');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '129');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '130');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '131');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '132');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '133');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '134');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '135');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '136');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("-deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '137');
                       
                        role.delete()
                        }
                   
                    });
 
                    client.on('message', async message => {
                       
                            let args = message.content.split(' ').slice(1);
                    if (message.content.startsWith("deletecolors")) {
                        if(!message.member.hasPermission('ADMINISTRATOR')) return
                        let role = message.guild.roles.find('name', '138');
                       
                        role.delete()
                        }
                   
                    });

client.on('messageDelete', message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = message.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    let messageDelete = new Discord.RichEmbed()
    .setTitle('**[MESSAGE DELETE]**')
    .setColor('RED')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL)
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return;
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete);
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName);
        }
        if(oldRole.hexColor !== newRole.hexColor) {
            if(oldRole.hexColor === '#000000') {
                var oldColor = '`Default`';
            }else {
                var oldColor = oldRole.hexColor;
            }
            if(newRole.hexColor === '#000000') {
                var newColor = '`Default`';
            }else {
                var newColor = newRole.hexColor;
            }
            let roleUpdateColor = new Discord.RichEmbed()
            .setTitle('**[ROLE COLOR UPDATE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) {
            let roleUpdate = new Discord.RichEmbed()
            .setTitle('**[UPDATE ROLE PERMISSIONS]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate)
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => {
 
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelCreate = new Discord.RichEmbed()
        .setTitle('**[CHANNEL CREATE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
});
client.on('channelDelete', channel => {
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') {
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') {
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') {
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete);
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
 
    oldChannel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newName);
        }
        if(oldChannel.topic !== newChannel.topic) {
            let newTopic = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildUpdate', (oldGuild, newGuild) => {
 
    if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldGuild.channels.find(c => c.id === guildSettings[oldGuild.id].logChannel);
    if(!logChannel) return;
 
    oldGuild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(oldGuild.name !== newGuild.name) {
            let guildName = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD NAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(newGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildName)
        }
        if(oldGuild.region !== newGuild.region) {
            let guildRegion = new Discord.RichEmbed()
            .setTitle('**[CHANGE GUILD REGION]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(guildRegion);
        }
        if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
            if(oldGuild.verificationLevel === 0) {
                var oldVerLvl = 'Very Easy';
            }else
            if(oldGuild.verificationLevel === 1) {
                var oldVerLvl = 'Easy';
            }else
            if(oldGuild.verificationLevel === 2) {
                var oldVerLvl = 'Medium';
            }else
            if(oldGuild.verificationLevel === 3) {
                var oldVerLvl = 'Hard';
            }else
            if(oldGuild.verificationLevel === 4) {
                var oldVerLvl = 'Very Hard';
            }
 
            if(newGuild.verificationLevel === 0) {
                var newVerLvl = 'Very Easy';
            }else
            if(newGuild.verificationLevel === 1) {
                var newVerLvl = 'Easy';
            }else
            if(newGuild.verificationLevel === 2) {
                var newVerLvl = 'Medium';
            }else
            if(newGuild.verificationLevel === 3) {
                var newVerLvl = 'Hard';
            }else
            if(newGuild.verificationLevel === 4) {
                var newVerLvl = 'Very Hard';
            }
 
            let verLog = new Discord.RichEmbed()
            .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldGuild.name, oldGuild.iconURL)
 
            logChannel.send(verLog);
        }
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv);
        }
    })
// Join Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
        let voiceJoin = new Discord.RichEmbed()
        .setTitle('**[JOIN VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceJoin);
    }
// Leave Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[LEAVE VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    }
});
 
const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.",
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.",
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.",
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.",
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.",
  "**لو خيروك بين الحقد أو المسامحة**.",
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.",
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.",
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.",
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.",
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.",
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.",
  "**لو خيروك بين المال أو الجمال**.",
  "**لو خيروك بين المال أو الذكاء**.",
  "**لو خيروك بين المال أو الصحة**.",
  "**لو خيروك بين الجمال أو الذكاء**.",
  "**لو خيروك بين الذكاء أو الصحة**.",
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("=لو خيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on("message", function(message) {
    var prefix = "=";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","??",true)
    .addField("Paper","??",true)
    .addField("Scissors","??",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react('??')
        msg.react("??")
        msg.react("??")
.then(() => msg.react('??'))
.then(() =>msg.react('??'))
.then(() => msg.react('??'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '??' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
       
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})
 
    })
}
});


const cuttweet = [
     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
     'كت تويت | الحرية لـ ... ؟',
     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
     'كت تويت ‏| كلمة للصُداع؟',
     'كت تويت ‏| ما الشيء الذي يُفارقك؟',
     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'كت تويت | بعد 10 سنين ايش بتكون ؟',
     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     '‏كت تويت | وش يفسد الصداقة؟',
     '‏كت تويت | شخص لاترفض له طلبا ؟',
     '‏كت تويت | كم مره خسرت شخص تحبه؟.',
     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
     '‏كت تويت |أقوى كذبة مشت عليك ؟',
     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
     '‏كت تويت | مطلبك الوحيد الحين ؟',
     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]
 
 client.on('message', message => {
   if (message.content.startsWith("=كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه كت تويت' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

 
const pubg = [
     'Fortnite | ما هو اقوي سلاح برائيك ؟',
     'Fortnite | ما هي افضل منطقة تنزل بها برايك ؟',
     'Fortnite | كم عدد فوزاتك ؟',
     'Fortnite | كم هو عدد اكثر قتلات لك ؟ ',
     'Fortnite | كم عدد اصدقائك ؟ ',
     'Fortnite | كم عدد سكناتك ؟ ',
     'Fortnite | من هو افضل لاعب اجنبي حسب رايك ؟ ',
     'Fortnite | من هو افضل لاعب عربي حسب رايك ؟ ',
     'Fortnite | ما هو افضل طور حسب رايك ؟ ',
     'Fortnite | هل انت محترف ام نوب ؟ ',
     'Fortnite | ما هما افضل سلاحين مع بعض حسب رايك ؟ ',
 
 
]
   client.on('message', message => {
       if (message.author.bot) return;
 if (message.content.startsWith('=فورت نايت')) {
     if(!message.channel.guild) return message.reply('** This command only for servers **');
  var client= new Discord.RichEmbed()
  .setTitle("لعبه اسئله فورت نايت")
  .setColor('#FFA500')
  .setDescription(`${pubg[Math.floor(Math.random() * pubg.length)]}`)
  .setImage("https://cdn.discordapp.com/attachments/497081825492074496/500662255004942346/images.jpg")
                  .setTimestamp()
 
   message.channel.sendEmbed(client);
   message.react("??")
 }
});


const Sra7a = [
    'صراحه  |  صوتك حلوة؟',
    'صراحه  |  التقيت الناس مع وجوهين؟',
    'صراحه  |  شيء وكنت تحقق اللسان؟',
    'صراحه  |  أنا شخص ضعيف عندما؟',
    'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
    'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
    'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
    'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
    'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
    'صراحه  |  أشجع شيء حلو في حياتك؟',
    'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
    'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
    'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
    'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
    'صراحه  |  نظرة و يفسد الصداقة؟',
    'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحه  |  شخص معك بالحلوه والمُره؟',
    'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
    'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
    'صراحه  |  وش تتمنى الناس تعرف عليك؟',
    'صراحه  |  ابيع المجرة عشان؟',
    'صراحه  |  أحيانا احس ان الناس ، كمل؟',
    'صراحه  |  مع مين ودك تنام اليوم؟',
    'صراحه  |  صدفة العمر الحلوة هي اني؟',
    'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
    'صراحه  |  صفة تحبها في نفسك؟',
    'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
    'صراحه  |  تصلي صلواتك الخمس كلها؟',
    'صراحه  |  ‏تجامل أحد على راحتك؟',
    'صراحه  |  اشجع شيء سويتة بحياتك؟',
    'صراحه  |  وش ناوي تسوي اليوم؟',
    'صراحه  |  وش شعورك لما تشوف المطر؟',
    'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
    'صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  اي الدول تتمنى ان تزورها؟',
    'صراحه  |  متى اخر مره بكيت؟',
    'صراحه  |  تقيم حظك ؟ من عشره؟',
    'صراحه  |  هل تعتقد ان حظك سيئ؟',
    'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
    'صراحه  |  كلمة تود سماعها كل يوم؟',
    'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
    'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
    'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
    'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
    '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
    'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
    '‏صراحه | هل تحب عائلتك ام تكرههم؟',
    '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
    '‏صراحه  |  هل خجلت من نفسك من قبل؟',
    '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
    '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
    '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
     '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
    '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
    '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
    'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
    '‏صراحه  |  ما هو عمرك الحقيقي؟',
    '‏صراحه  |  ما اكثر شي ندمن عليه؟',
    'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
]
  client.on('message', message => {
if (message.content.startsWith('=صراحه')) {
    if(!message.channel.guild) return message.reply('** This command only for servers **');
 var client= new Discord.RichEmbed()
 .setTitle("لعبة صراحة ..")
 .setColor('RANDOM')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});


const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشك??ك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفت????ح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها ا??مخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** احد ما خرج من المنزل ***',
   '*** ها ها ها وجتك ***',
   '*** هي انت ستندم سأقتلك ***',
   '*** فلتاتي الي هنا ***',
   '*** سأنال منك انا اسن السكين ها ها ***',	
   '*** اتركني وشأني***',
   '*** سأمزقك اربا ***',
]
 client.on('message', message => {
 if (message.content.startsWith('=مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://media.discordapp.net/attachments/510952853125464083/518370030782775296/Z.png")
   message.channel.sendEmbed(mariam);
   message.react(":tada:")
  }
});


const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك الاعبين**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و ??ازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**قل لواحد ماتعرفه عطني كف**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
    "**روح المطبخ و اكسر صحن او كوب**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت ا??كف**.",
    "**قول لاي بنت موجود في الروم كلمة حلوه**.",
    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
    "**قول قصيدة **.",
    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**اول واحد تشوفه عطه كف**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
    "**تاخذ عقابين**.",
    "**قول اسم امك افتخر بأسم امك**.",
    "**ار??ي اي شيء قدامك على اي احد موجود او على نفسك**.",
    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
    "**تتصل على الوالده  و تقول لها خطفت شخص**.",
    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
    "**????تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.", 
] 
 client.on('message', message => {
   if (message.content.startsWith('=عقاب')) {        
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL)
 .addField('لعبه عقاب' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[38ab] Send By: ' + message.author.username)
    }
});

client.login(process.env.BOT_TOKEN);

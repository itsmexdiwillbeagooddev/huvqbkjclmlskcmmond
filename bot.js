const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const bot = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const canvas = require("canvas");
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
const dateFormat = require('dateformat'); 
const pretty = require('pretty-ms') 
const prefix = '-';
var table = require('table').table
var adminprefix = '#'
var ti={}  
,spee={}
,attentions={};





//ترحيب بالخاص
client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`Hi Dear 
Are you a youtuber?, you have youtube channel and you need a good banner and logo???
ok, easy! just join this server if you want **free** graphics design : https://discord.gg/38UMTEF 
we are a team of designers, we can help you to be awesome designer

Our Store : https://sellfy.com/user/

**The Best 3 Free Youtube Banner** :fire: : https://sellfy.com/p/cEwo/ - https://sellfy.com/p/K39i/ - https://sellfy.com/p/X5mg/

:hearts:.  `)
    }).catch(console.error)
})



client.login(process.env.BOT_TOKEN);

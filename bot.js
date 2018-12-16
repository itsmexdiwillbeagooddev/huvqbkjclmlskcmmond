const Discord = require('discord.js');
const developers = ["415595760990552065","314845344313901057"]
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
        return channel.send(`السلام عليكم :hearts: 
انا **SnowBot ❄**
 بوت إدارة - العاب - ترفيه 
هدف البوت جعل الديسكورد اسهل بالنسبة لمستخمي البوت
فريق البوت يشتغل يوميا على تطوير البوت و صيانته
بحيث نستقبل كل إقتراحاتكم و آرائكم وانتقاداتكم  ب سيرفر الدعم , https://discord.gg/JhD7trr
يمكنك إضافة البوت ل سيرفرك عن طريق الأمر التالي , [ **-invite** ]
و تجربتي, إنشاء الله بعجبك... :sparkles:  `)
    }).catch(console.error)
})



client.login(process.env.BOT_TOKEN);

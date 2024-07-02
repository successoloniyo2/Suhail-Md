const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_47_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MixcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDExLFxuICAgICAgICA2NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM2LFxuICAgICAgICA2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM5LFxuICAgICAgICA4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAwLFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTI0LFxuICAgICAgICAzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTIzLFxuICAgICAgICA1MixcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDc4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNCxcbiAgICAgICAgNTksXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNixcbiAgICAgICAgMTczLFxuICAgICAgICA1NixcbiAgICAgICAgNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0NixcbiAgICAgICAgMjE0LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTksXG4gICAgICAgIDM1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTU4LFxuICAgICAgICA1MixcbiAgICAgICAgNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICA2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMixcbiAgICAgICAgODksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA1LFxuICAgICAgICA3MixcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3YWR2MHdFbnluQzUvOGxBK0pOUllsZGltV29uMlVBU3FMQ1kyZDh6TDgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkxNTk4NjA1MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlBRDIyRTE1NTA5NjlENDRFQkVCQTYzRTg5NDAyMDgxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTg5NTY1NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3N1puTnVCUFNiR3dsbWpjeEVrTVBBXCIsXG4gIFwicGhvbmVJZFwiOiBcImEyNGNiNjM3LWYwMzQtNGFkYy04MjBiLTQ5ZWEzMDQ0ZDY1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAyMjUsXG4gICAgICAxNDIsXG4gICAgICAxMzUsXG4gICAgICAxMSxcbiAgICAgIDkxLFxuICAgICAgMjAyLFxuICAgICAgMSxcbiAgICAgIDExMixcbiAgICAgIDI0NixcbiAgICAgIDE0MyxcbiAgICAgIDE2MyxcbiAgICAgIDI4LFxuICAgICAgNDAsXG4gICAgICAxODEsXG4gICAgICA3NSxcbiAgICAgIDIxOCxcbiAgICAgIDQzLFxuICAgICAgMTIxLFxuICAgICAgMTgyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MCxcbiAgICAgIDIwLFxuICAgICAgMTY1LFxuICAgICAgMTMwLFxuICAgICAgMjM2LFxuICAgICAgNzUsXG4gICAgICA5MyxcbiAgICAgIDEyOCxcbiAgICAgIDI0NyxcbiAgICAgIDE5MyxcbiAgICAgIDEwMyxcbiAgICAgIDg4LFxuICAgICAgMTQzLFxuICAgICAgMjIyLFxuICAgICAgNTIsXG4gICAgICA1NCxcbiAgICAgIDQ0LFxuICAgICAgNDQsXG4gICAgICA1MCxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzVDJMNzM3SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTE1OTg2MDUzNzo2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjcwMjY5NzkyOTM2MDM3OjYxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkNoaWVmIEhhcHBpbmVzc1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ082Z29CMFEzNHlPdEFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXk3b1oyM2FhWmM0US8vL0FmNzF1OTUxMDJqWlk0aGZ1VGxpUWsrUWtIOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwQmVVOGhNYjQ5NnVHUVkyT3lKcVkvb2p6MUpqbGpPSkNxVUNEVDZhTWcrb3V3dVNLOVdoREpjMlpoc01QQUxjRlBxakVDKzY4clZGMkNteDBNWkdDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyTTNjNGlwRzBLSDBqSGlsRy9sTXh5TGQ3V0JXVUVyVlJWQ3JETWd0cElZZHU1SjdZRHcxL1psUU1jMEMyRC9Ic2lENjFZZWhVT3IwSWFYSzlsU0VEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTU5ODYwNTM3OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTg5NTY1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUh1cVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSHVxLmpzb24iOiAie1wia2V5RGF0YVwiOlwieWROMTZiZTBSdjhpUTZYMmRiUTZ1UGRYY3Y0TjJpN2VYbWhCVFJIem1QMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MTM0NTkwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5ODc0Mzk4OTU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

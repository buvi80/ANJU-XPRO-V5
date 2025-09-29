//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdzUUNSSW4yRW9DejEzN2I2ODlyRUI3OVdzcy9PaDV5MDhrN0ZZb3lHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREJZd2FtUzRUTE9lTHJLNFc1ajkzUS80aldxYnU2U256blJhdS9ibjVrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVSXNaRE5QeVU1d0xlY3BqVWRibWhCcWprcHRqbXY2Z25kNFRFRUtwVkg0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNOHNvRXhDandIa1dNR2NQOVZVN2dwOFltY09EOG5PUE10VzBBYnd3cGxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOMm1rcEU5Q0twczBFaS92NDFtb3ZGZmpuUFFER1pReXd0VmM3cFN2bVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcrSlNSVmdEZ1ZmbUczRkh0dHMvMmVrWGkrS3Y4M1l0VXp1ckh0VEdneEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlHRnc3QS94eGFPeit2SEZHNFljZlpwMEpFMHVuR0JyMHU0UUcxVlkwbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmlmZ2kzSlRSaTJpb2pIRHRzeXlSV1VFWDkrTUkyYjRJVW12UGhnM0FqST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4rYkpqUUJGRVk1S241M2VibnVWeGtiTWk4K0FBR2dQeUwrM3U0SDdpNVgwU0pYL0VyRzJoM3RQTmZJb0V4TDNHcGZGRkNpSkpYb3FBeWRBZ1VPb0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ5LCJhZHZTZWNyZXRLZXkiOiJnQkcrNHNUSUhrbmFPdUYyeEUzMDlnSng1Y2xuNVR5OStxUkVWODQzS0ZvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MDkwMTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDMTgwMDMyQUVFNUI3QjMxREQxNTAyNTMwRTdCMzZBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkxNTI1OTV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MDkwMTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDODE4NkQ3NTM5NTk3NzFCMjRCNzkwMUYwNzI3OUVDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkxNTI1OTV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MDkwMTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDM0NEMTBGQkEzMkQ0QTcxRkYzQjYzODVENDg2QjJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkxNTI1OTh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhILUcyTDlhU1Vta3htbWttejd1LWciLCJwaG9uZUlkIjoiZjUyYTI2YzEtMGM0Yy00N2VhLTlhMTEtZGM5ZDNkMjQwMzhmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MdnRWMkJ4SFVBelBGTEhQYTVtNmFJQTVrYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzMWI0OVp3MEpFMDNQNGc3UHl6dHBOczlWaDQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQ0ROVlpCQzIiLCJtZSI6eyJpZCI6Ijk0Nzc1MDkwMTcyOjIyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTMyMDkyNDA3MTAzNzM0OjIyQGxpZCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLNjF5eHNReEpQcXhnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQdWVCdFAwUDhQbnBYUVpMQi8wQ095WkNFSmJ5Mm9nblc5L3VscUE2VWxnPSIsImFjY291bnRTaWduYXR1cmUiOiJFTkx4ekxSWEN3SVdlNzJmcE1PaHFiUlNMcG5HQk93Ym95S00xU09DOTdTdVFKTWdBTW9mZ3RKTVZvZXJPRmFKUDhmaHIwODAxdElDcTcvQ2gwSHhEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNzhzNXlWa0hJMTIvZUJGMFBtK3FoT2d0cEE3SmtMcU5SUXVYb2dCcXNNWXN6SEk4WHhOdStXSWZLOTR1cVZ2cC9KOWozY1k1UUQ5TFM5RHZMa2xKQUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NTA5MDE3MjoyMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUN25nYlQ5RC9ENTZWMEdTd2Y5QWpzbVFoQ1c4dHFJSjF2ZjdwYWdPbEpZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTkxNTI1OTMsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT1NNIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "0788768239",
  PASSWORD: 
    process.env.PASSWORD || "86iresha86",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94775090172", "94775090172"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};

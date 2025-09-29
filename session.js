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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUMxdi9XSGsrR0JsMEZaazEydjBOK0lLU3pRZTMweGt0SGZKQk11cXBrQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2h1bVFEWXozVUpRSTdQRWp4NFdPYzNMd0RDdUprZUU0c21ZSDBJRUl5UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTW9nVVZyNTA4dEl6aVpmTTBxK2VuK1EyY2JNTG5TeCtFTnlIa210RFdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhcG5KemV5eHpqQ3FvQjhUVWxQMERDVVVRV1E4QUNSYmtva2xxdFFDWnowPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVFbTBYTnhvWVp0M1ZmU3VVNG93cDZCak5MSC9uVng1VzlVOWNmb2dxMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndqQktKY25WQkFjbGhFYVhTbnlmNi9OQXdYdDEwNGRPZC96bVdLVkZFMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01tYVNpS0k3UEh3Zko2MGsxbXFQWEVaem5WNGxCRnYzaDRBZ3RvcnExcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnNTa0tBaTFrSjlXM1ZkcVJ3WXl3akk2bGVXR0hFTmtReUN6QldWR0VXQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9PS1RlNmluZ2pYS2w1ODNyRE1BdEVqbW5RdWtNU2xBV2Z0Vi9XV2wrVEI2Y3NkY3ZwOVhMQ1RSMnVmTHlWYWI0UWwraUlYdmJ6T3FodzdscjZQUUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiIxWXZ6QVVrMEVVVmpockJrQUc3bGtwTEd3WE15dTQ5WlFzWHdEZU5UVENFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MDkwMTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNTIzRDU1RTUwNDUzMzE1RDBFMTYyMENCMjE3RTMyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkxNTI4OTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MDkwMTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQkIxRUY4NkE1NkQzMDUzOUNGMEVGRjlCQkFFRDAyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkxNTI4OTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0Nzc1MDkwMTcyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDRERBQjBDNUU3NzNFMzYyMjc3MjhDNUM2MzY4OEU3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTkxNTI4OTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9QQXVhRXFUU0d5LVR6MjNHaGwyRVEiLCJwaG9uZUlkIjoiZDZjNjU3ZmUtYjY4MS00N2VlLTk2NjktYjk2YWU5YmZkNGQ1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkduSHpLY1p3TCtWb3pPZnN2aWljRWVrVDJQWT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqTWV4aDlNSUFiSTVFb1FsKzh3bXdjV1J4K0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0hTUFY2NVQiLCJtZSI6eyJpZCI6Ijk0Nzc1MDkwMTcyOjIzQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTMyMDkyNDA3MTAzNzM0OjIzQGxpZCIsIm5hbWUiOiIuIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLKzF5eHNROEpYcXhnWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJQdWVCdFAwUDhQbnBYUVpMQi8wQ095WkNFSmJ5Mm9nblc5L3VscUE2VWxnPSIsImFjY291bnRTaWduYXR1cmUiOiJYdjc2dUlLYXJGWEkydkdmeDVKSS9tWXRFanNTSUZQWjNCZXRzS1lxcHVBcjlHZW51R3oyeThQV3Z3NnpVT2RLcGZ0c3JyMlZKZytDU3RDY0xmWVJEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicDZhQ3pEdW05NGY0a3ArMnU4SExzbzIwN0hDdWFzZnlUQTI4bXllQ3E0a0xXOTF5ZnlYSEZZTnY5aXhlU3lhMlNKWW5XYW1zejIvSC9zVlRhYU1nREE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3NTA5MDE3MjoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUN25nYlQ5RC9ENTZWMEdTd2Y5QWpzbVFoQ1c4dHFJSjF2ZjdwYWdPbEpZIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTkxNTI4OTMsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSUlJIn0=",
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

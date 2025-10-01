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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEo0eTl5MllmNldSN01EOGhVaDFQcVo5MGhYY3A3U0NBOUhVUS9qb1NGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkF3NnkrOVhGR1llR3ozK0pUaWg3SkwwVE5SNGdGYlRSdW93a3h0WGhpdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRlpabUVpZnZ0WGZUdEJHTEhiV1RkOElHYVpyMjRXS21tc3g5N2l2TUZFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjUnFvYkd5NmVGWXZrNTd3V2h0cGZEbERsTWIzcDcvL3BIMTdOZXNJTVVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtFUytEanVJU29NcHp5N3I3K2RzaTRmcDFtdUd4VjVhU253cm94OXNXbmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii8xS1BGTTBYMVMrRmxHVFplTUZ2dmRsb0NmU09VTDd2VEEzaytmMWs5bjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU5kK2hkNWN1b1NaLys3cXRBbzlIWjRDaGtLR2JqTUxWc0hnMmoyY29rRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkhzUkJGeFVKdjdjMFZOSnk1ZklsR0h4ZmV6VXFySEZaV3k2UDBKWjBDcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNUdVR3YmdVM2RoMDJFQlVVWGxDempSSllKTGN6OVBFZndPb1RPQk51U3ZYRytDSzRBV1JaOFo1V2lRcjJkTVhOdjhjS2gwUDdEVFNJRk91WnBsZUNRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6ImVJaDYrcUNDNTFxMXo4a3ZCSUZ1NUhlSHJGZXo3c0pndmt1NUJsM2FES1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzUwOTAxNzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM1QTdDOUI1RTA0ODg3MEZFQ0IyQTk0MzhEOEY5M0IifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTMyNDYzMn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NzUwOTAxNzJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDQkNDOTY3NDEzQTk5MkQyMkFFRDA5MDA5MDA4N0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTMyNDYzM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYUlkUk5GQkFSLTI1ZXY3TE8zZ2JXZyIsInBob25lSWQiOiIzYjc0OGFjNy02ZmU4LTRlZTEtYjVlZS1kOTViZWE0ZjlkMjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialdkenRWMWo5UDVxUHdmU2tTOFV4U0FIc0FnPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklUaEE1UDYvOWhDSlpueWN0ODdWTzhGUlFKcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJHR0s0UE0xMiIsIm1lIjp7ImlkIjoiOTQ3NzUwOTAxNzI6MjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxMzIwOTI0MDcxMDM3MzQ6MjRAbGlkIiwibmFtZSI6Ii4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xDMXl4c1F5TlAweGdZWUFTQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlB1ZUJ0UDBQOFBucFhRWkxCLzBDT3laQ0VKYnkyb2duVzkvdWxxQTZVbGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRxd2FhM1dpZHJWQXFoVS9ZSHFZUllZZTQ2WW5KQ1hnd3ZhRUtjQ1F5UVk0djRSMVpkK0E3TzBia1Z0YkNNWFFqcHhIelgwWmxXTU1mZnNnaURnS0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQNEtQQU1xM3VXRnJ4cmViV2czYURNbkQzT1hYMlUyenFNZ0xWUEt5NThGMlFyNk1QYjk1UkxudkRZQkxVUzMwYy9Jb0w4OXpKd0NIdDhVdVZNeHdEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc1MDkwMTcyOjI0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlQ3bmdiVDlEL0Q1NlYwR1N3ZjlBanNtUWhDVzh0cUlKMXZmN3BhZ09sSlkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTMyNDYzMCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFFNEYifQ==",
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

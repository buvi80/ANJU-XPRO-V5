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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0RoZnY1RTJEZGFWWml0a3FiZUNoNXFqN2Q5UmZ1T3lnRGhhazNJQWIxYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQS94Q0N1eXowT2NnV2dRb1JibG9GbjFYbUtWTVZOa05HRm5RdCsvSk8wWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSUNFN1hab0pTcVk3ZkhQK1h6aXZNeWNvcXNTczR6Y3kvTUt3SXdhOVVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrbGNqNW1nNzV4amxTMWttUDRCTnNEZDlmOHZsMkFIYU93ODRjMFZ2MjJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1IenYvUjFmMHA1cVVVeTl0MmJWREF1NXlyYzFVdUxvYThmS2xFelFjVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJzV25pdUd3WFpIeWpldjRVZTlJVGVGVmJSV3cyOHNGQTRxSERSRHdKRDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0Y4VFhpQnRjN05HdFRzL2NLNWdlTE1RcnAxQ0xGc1ZpQ3ZIS1Y5WHBrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ05SdnBkR3FWSjdWbmE2RVg3djdTV3ZneTkyVng1Y2NiejdGL1NxMjRFWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImszdG0xb0pTbVhuUUdNekp0Rkx1Y2pqaGhRQjQ2bkR5RCs3VGdYMnNaakNZVGtHTWxqcTNmQzN6NkxlVDU5emxNZVgwQkdXWlhmYS92YW5iZVlVbmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJ0ZGRmYS96Yy9LUDVGMEY3SnNZdUdBdlkvS3VNSm1kc0RVWjh3UTUxL2dBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZSVJOWE9nc1JsaUtkS3NkbmdmaVBBIiwicGhvbmVJZCI6ImQ1ZWFhYjkyLTBhMDctNDY4Yi1iY2JkLTk0ZWFhNTk1YWY2NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TXZwZkl3QXdXNUxudExyZGFVRXFnVTlSTE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0dTVVdiTkc5SGNjUGw3aGJHdjhMM3l0UGp3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldMMkhYMkQ5IiwibWUiOnsiaWQiOiI5NDc4ODc2ODIzOTozNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzNTE4NDQ5MDMxNTk2NDozNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04yS2p3OFFpdWZ3eEFZWUJpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImQ4SkdFWDZ5SUZyZmhMNktjL3MwL1hXbkd4emc3MTFWT3F3MnprWWV6QkE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhrUEVOdkpnU3U2dDFNK1IzZzFoVTJlcWR1eWZaUDllczJ1eFI3UGNZdzdPZDZTVE5QQ0s3eDAwOThZRlN4WWRHa2tvT3Z3Z2VXV3lTUFlPYXlibEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNaVJKWDJNVUI2aG40ZDNERVRCeGQxaU9xaHY4Sm5QQTJpbWV0bXVGcVBCMWlZdVZPdmRTNzhZSlgxRkluOE1BSGFhQUxYTUZDOThYbnFXVmdodDdpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg4NzY4MjM5OjM2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhmQ1JoRitzaUJhMzRTK2luUDdOUDExcHhzYzRPOWRWVHFzTnM1R0hzd1EifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlEUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTA2NzI4OCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLeUsifQ==",
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

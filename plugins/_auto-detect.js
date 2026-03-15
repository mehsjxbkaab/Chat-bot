import { WAMessageStubType } from "@adiwajshing/baileys";

export async function before(m) {
  let chat = db.data.chats[m.chat];
  if (chat.detect) {
    if (!m.messageStubType || !m.isGroup) return;
    let edtr = `@${m.sender.split`@`[0]}`;
    if (m.messageStubType == 21) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} change the Group Subject to :\n*${m.messageStubParameters[0]}*`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 22) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} has changed the group icon.`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else if (
      m.messageStubType == 1 ||
      m.messageStubType == 23 ||
      m.messageStubType == 132
    ) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} *reset* group link!\n\n`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 24) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} change the group description.\n\n${m.messageStubParameters[0]}`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 25) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} have arranged so *${m.messageStubParameters[0] == "on" ? "admin only" : "all participants"}* which can edit group info.`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 26) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} telah *${m.messageStubParameters[0] == "on" ? "close" : "open"}* group!\nNow ${m.messageStubParameters[0] == "on" ? "admin only Which" : "all participants"} can send messages.`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 29) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} has made @${m.messageStubParameters[0].split`@`[0]} as an admin.`,
          mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 30) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} has terminated @${m.messageStubParameters[0].split`@`[0]} from admin.`,
          mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 72) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} تغيير مدة الرسائل المؤقتة إلى *@${m.messageStubParameters[0]}*`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else if (m.messageStubType == 123) {
      await this.sendMessage(
        m.chat,
        {
          text: `${edtr} *تعطيل الرسائل* مؤقتًا.`,
          mentions: [m.sender],
        },
        {
          quoted: fkon,
        },
      );
    } else {
      console.log({
        messageStubType: m.messageStubType,
        messageStubParameters: m.messageStubParameters,
        type: WAMessageStubType[m.messageStubType],
      });
    }
  }
}

export const disabled = false;

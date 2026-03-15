// @instagram: noureddine_ouafy
const isLinkHttp = /https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/i;
const isWhatsAppChannel = /https:\/\/whatsapp\.com\/channel\/[A-Za-z0-9?=._-]+/i;

export async function before(
  m,
  { conn, args, usedPrefix, command, isAdmin, isBotAdmin },
) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;

  let chat = global.db.data.chats[m.chat];
  let name = conn.getName(m.sender);

  const isGroupLink = isLinkHttp.test(m.text);
  const isChannelLink = isWhatsAppChannel.test(m.text);

  function cek(grup1, grup2) {
    const regex = /^https:\/\/chat\.whatsapp\.com\/[a-zA-Z0-9]{22}$/;
    return regex.test(grup1) && regex.test(grup2) && grup1 === grup2;
  }

  if (chat.antiLink && (isGroupLink || isChannelLink)) {
    let grup = await conn.groupInviteCode(m.chat);
    let gc = await cek(m.text, "https://chat.whatsapp.com/" + grup);

    await m.reply(
      gc
        ? "لقد أرسلت رابط المجموعة هذا. أنت آمن!"
        : !isAdmin
          ? "*❗ تم اكتشاف أنك ترسل رابط مجموعة أو قناة*\n*سيتم حذف رسالتك من قبل البوت لأنه ليس لديك صلاحية*"
          : "*📣 أنت مسؤول، أنت آمن*",
    );

    await conn.delay(1000);

    if (!gc && isBotAdmin && !isAdmin) {
      await conn.sendMessage(m.chat, {
        delete: m.key,
      });

      // لإزالة العضو، يمكنك تفعيل هذا السطر:
      // await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
  return !1;
}

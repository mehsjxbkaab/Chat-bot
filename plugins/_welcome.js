// instagram.com/noureddine_ouafy
import { WAMessageStubType } from '@adiwajshing/baileys' // يدعم كل الإصدارات
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.isGroup || !m.messageStubType) return true

  const dev = 'Chat bot'
  const redes = 'https://whatsapp.com/channel/0029Vb7obv8Fy72937jJb32V'

  const fkontak = {
    key: {
      participants: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      fromMe: false,
      id: "Halo"
    },
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${dev}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    participant: "0@s.whatsapp.net"
  }

  const stubParams = m.messageStubParameters || []
  if (!Array.isArray(stubParams) || stubParams.length === 0) return true

  let chat = global.db.data.chats[m.chat] || {}
  if (typeof chat.welcome === 'undefined') chat.welcome = true
  if (!chat.welcome) return true

  const userJid = stubParams[0]
  const username = userJid.split('@')[0]
  const mention = '@' + username

  const initialMemberCount = groupMetadata.participants?.length || 0

  let avatar
  try {
    avatar = await conn.profilePictureUrl(userJid, 'image')
  } catch {
    avatar = 'https://i.imgur.com/8B4QYQY.png'
  }

  const guildName = encodeURIComponent(groupMetadata.subject)
  const apiBase = "https://api.siputzx.my.id/api/canvas"
  const backgroundUrl = encodeURIComponent('https://files.catbox.moe/u8fmgb.jpg')

  async function fetchImage(url) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error('خطأ في تحميل الصورة من API')
      return await res.buffer()
    } catch (e) {
      console.error(e)
      const fallbackRes = await fetch(avatar)
      return await fallbackRes.buffer()
    }
  }

  // 🟢 عند دخول عضو جديد
  if (
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD ||
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_INVITE
  ) {
    const memberCount = initialMemberCount
    const txtWelcome = `🌸 عضو جديد 🌸`
    const defaultWelcome = `*مرحبا @user في مجموعة @subject!*

🤖 أنا *${dev}*، المساعدة الذكية هنا ✨  
> 👥 عدد الأعضاء الآن: ${memberCount}
> 📘 لا تنس قراءة القوانين
> 🧭 اكتب *#menu* لاكتشاف أوامري

🎉 استمتع بوقتك معنا!`

    const bienvenida = (chat.welcomeText || defaultWelcome)
      .replace('@user', mention)
      .replace('@subject', groupMetadata.subject)
      .replace('@desc', groupMetadata.desc?.toString() || 'لا يوجد وصف')

    const welcomeApiUrl = `${apiBase}/welcomev2?username=${username}&guildName=${guildName}&memberCount=${memberCount}&avatar=${encodeURIComponent(avatar)}&background=${backgroundUrl}`
    let imgBuffer = await fetchImage(welcomeApiUrl)

    await conn.sendMessage(m.chat, {
      image: imgBuffer,
      caption: bienvenida,
      mentions: [userJid]
    }, { quoted: fkontak })
  }

  // 🔴 عند مغادرة عضو
  else if (
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE ||
    m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE
  ) {
    const memberCount = initialMemberCount - 1
    const txtGoodbye = `💔 مغادرة عضو 💔`
    const defaultBye = `*وداعاً @user...*

😢 نتمنى لك التوفيق خارج مجموعة @subject  
> 👥 عدد الأعضاء الآن: ${memberCount}`

    const despedida = (chat.byeText || defaultBye)
      .replace('@user', mention)
      .replace('@subject', groupMetadata.subject)

    const goodbyeApiUrl = `${apiBase}/goodbyev2?username=${username}&guildName=${guildName}&memberCount=${memberCount}&avatar=${encodeURIComponent(avatar)}&background=${backgroundUrl}`
    let imgBuffer = await fetchImage(goodbyeApiUrl)

    await conn.sendMessage(m.chat, {
      image: imgBuffer,
      caption: despedida,
      mentions: [userJid]
    }, { quoted: fkontak })
  }

  return true
}

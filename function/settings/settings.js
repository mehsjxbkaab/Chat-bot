import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

/*
Setting
*/
global.setting = {
 clearSesi: false, // trash cleaner sessions 
 clearTmp: true, // tmp trash cleaner
 addReply: true, // create with thumbnail in message
 idgc: '120363315668824185@g.us' // id gc buat join only
 }

global.info = {
 nomerbot : '212675617959',
 pairingNumber : '212675617959',
 figlet: 'Chat bot', // create a start console display
 nomorwa : '212675617959',
 nameown : 'mastafa',
 nomerown : '212635538684',
 packname : 'sticker by ',
 author : 'Chat  AI',
 namebot : '乂 Chat AI',
 wm : 'Chat LITE.',
 stickpack : 'Whatsapp',
 stickauth : 'Chat BOT',
 jid: '@s.whatsapp.net'
}

// Thumbnail 
global.media = {
 ppKosong : 'https://files.catbox.moe/h6md84.jpeg',
 didyou : 'https://files.catbox.moe/h6md84.jpeg',
 rulesBot : 'https://files.catbox.moe/h6md84.jpeg',
 thumbnail : 'https://files.catbox.moe/h6md84.jpeg',
 thumb : 'https://files.catbox.moe/h6md84.jpeg',
 logo : 'https://files.catbox.moe/h6md84.jpeg',
 unReg : 'https://files.catbox.moe/h6md84.jpeg',
 registrasi : 'https://files.catbox.moe/h6md84.jpeg',
 confess : 'https://files.catbox.moe/h6md84.jpeg',
 access : 'https://files.catbox.moe/h6md84.jpeg',
 tqto : 'https://files.catbox.moe/h6md84.jpeg',
 spotify : 'https://files.catbox.moe/h6md84.jpeg',
 weather : 'https://files.catbox.moe/h6md84.jpeg',
 gempaUrl : '212635538684',
 akses : '212635538684',
 wel : 'https://telegra.ph/file/9dbc9c39084df8691ebdd.mp4',
 good : 'https://telegra.ph/file/1c05b8c019fa525567d01.mp4',
 sound: 'https://pomf2.lain.la/f/ymca9u8.opus'
}
// Social media
global.url = {
 sig: 'https://whatsapp.com/channel/0029Vb7obv8Fy72937jJb32V',
 sgh:  'https://whatsapp.com/channel/0029Vb7obv8Fy72937jJb32V',
 sgc: 'https://whatsapp.com/channel/0029Vb7obv8Fy72937jJb32V'
}
// Donasi
global.payment = {
 psaweria: 'https://saweria.co/mamad',
 ptrakterr: '-',
 pdana: '0823427570'
}
// Info Wait
global.msg = {
 wait: '⏱️ *يرجى التحلي بالصبر*\n\> نحاول تلبية طلبكم ...',
 eror: '🤖 *Information Bot*\n\> Sorry for the inconvenience in using *Chat  Ai*. There was an error in the system while executing the command.'
}
 
// api_id web suntik
global.apiId = {
 smm: '4524',
 lapak: '300672'
}

// Apikey
global.api = {
 user: '-', // api_id antinsfw 
 screet: '-', // api_screet nsfw after that, replace it yourself
 uptime: '-',
 xyro: '-',
 lol: 'GataDiosV2',
 smm: '-',
 lapak: '-',
 prodia: '-',
 bing: '1-HLkal9xPklSXn8H_NYBhugb9UnCJKJEzQp4Rk_PxP4xxBCqtm_Os-93cXF8mtFeqde_ZGjnx2C1MM4PCS0gH8mzdX5tJ5aoaDC4G0VruZATWvvOQlHs2UBDNID5PR4MtskWzX69idiBidGDqVwfNBNZYgqb3cgqkLbyEeZnWHxxrhO3es3O8YOI5wd8Y0a31_OiLKTAzwS1ba-wvcBP9khAHrUkuQpzXuoybpwfwpQ'

}
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    nightTeam: "https://api.tioxy.my.id",
    lol: "https://api.lolhumaan.xyz",
    smm: "https://smmnusantara.id",
    lapak: "https://panel.lapaksosmed.com"
}

//Apikey
global.APIKeys = {
    "https://api.xyroinee.xyz": "vRFLiyLPWu",
    "https://api.lolhumaan.xyz": "GataDiosV2"
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
th(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
)
   

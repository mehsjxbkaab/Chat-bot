let handler = async (m, { conn, text, args, usedPrefix, command }) => {

// Database 
    const menu = global.db.data.settings[conn.user.jid]
    let menus = ['teks','document','image','gif','button']
    let gc = ['grupteks','grupimage','grupdoc','grupgif']
    // Style font
    let isiMenu = []
    let isiGrup = []
    for (let pus of menus) {
    isiMenu.push({
                    header: "Template "+pus,
                    title: "Tampilan Menu "+pus,
                    description: "",
                    id: ".template "+pus,
                })
                }
                
    for (let pus2 of gc) {
    isiGrup.push({
                    header: "Template " + pus2,
                    title: "Tampilan Welcome & Bye "+pus2,
                    description: "",
                    id: ".template "+pus2,
                })
                }
    // Type 
    let type = (args[0] || '').toLowerCase()
    
        // Command 
    switch (type) {
    case 'image':
    
    menu.image = true
    menu.gif = false
    menu.teks = false
    menu.doc = false
    menu.button = false
    m.reply(`Success change template *Image*`)
break 
    case 'gif':
    
    menu.image = false
    menu.gif = true
    menu.teks = false
    menu.doc = false
    menu.button = false
    m.reply(`Success change template *Gif*`)
break 
    case 'teks':
    
    menu.image = false
    menu.gif = false
    menu.teks = true
    menu.doc = false
    menu.button = false
    m.reply(`Success change template *Text*`)
break 
    case 'doc': case 'document':
    
    menu.image = false
    menu.gif = false
    menu.teks = false
    menu.doc = true
    m.reply(`Success change template *Document*`)

break 
    case 'button':
    
    menu.image = false
    menu.gif = false
    menu.teks = false
    menu.doc = false
    menu.button = true
    m.reply(`Success change template *Button*`)
    ///batas menu
break 
    case 'grupimage': case 'grupimg':
    
    menu.gcImg = true
    menu.gcGif = false
    menu.gcTeks = false
    menu.gcDoc = false
    m.reply(`Success change template welcome *Welcome/Goodbye Image*`)
break 
    case 'grupgif':
    
    menu.gcImg = false
    menu.gcGif = true
    menu.gcTeks = false
    menu.gcDoc = false
    m.reply(`Success change template Group *Welcome/Goodbye Gif*`)
break 
    case 'grupteks':
    
    menu.gcImg = false
    menu.gcGif = false
    menu.gcTeks = true
    menu.gcDoc = false
    m.reply(`Success change template Group *Welcome/Goodbye Text*`)
break 
    case 'grupdoc': case 'grupdocument':
    
    menu.gcImg = false
    menu.gcGif = false
    menu.gcTeks = false
    menu.gcDoc = true
    m.reply(`Success change template Group *Welcome/Goodbye Document*`)
break 
    
    default:
    
 const data = {
    title: "Open here!",
    sections: [{
            title: "Template Menu",
            highlight_label: "New",
            rows: [...isiMenu],
        },
        {
            title: 'Template Grup',
            highlight_label: "Hot",
            rows: [...isiGrup]
        }
    ]
};

return conn.sendListButton(m.chat, "Template menu & template Grup", data,
    wm)
    
    }
}
handler.help = ["image","gif","teks","doc"].map(v => `template ${v}`)
handler.tags = ['owner']
handler.command = /^(template)$/i

handler.group = false
handler.rowner = true

export default handler

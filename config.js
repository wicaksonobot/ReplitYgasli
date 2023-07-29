const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'cahyodesu'
global.rosekey = '-' //https://api.itsrose.life
//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Naa Botz'
global.namaowner = 'Dina Store'

//—————「 Setting Owner 」—————//
global.owner = '62895320810990'
global.nomorlu = '62895384652498'
global.ownernomer = ["62895384652498"]
global.premium = ['62895384652498']

//—————「 Set Wm 」—————//
global.packname = 'Naa Botz By'
global.author = 'Dina Store'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    done: '𝘿𝙤𝙣𝙚 𝙂𝙖 𝘽𝙖𝙣𝙜? 𝘿𝙤𝙣𝙚 ✅',
    admin: '𝘾𝙪𝙢𝙖 𝘼𝙙𝙢𝙞𝙣 𝙔𝙖𝙣𝙜 𝘽𝙞𝙨𝙖, 𝙇𝙪 𝙎𝙞𝙖𝙥𝙖??',
    botAdmin: '𝙋𝙚𝙧𝙞𝙣𝙩𝙖𝙝 𝙄𝙣𝙞 𝙃𝙖𝙣𝙮𝙖 𝘽𝙞𝙨𝙖 𝘿𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙆𝙚𝙩𝙞𝙠𝙖 𝘽𝙤𝙩 𝙈𝙚𝙣𝙟𝙖𝙙𝙞 𝘼𝙙𝙢𝙞𝙣 𝙂𝙧𝙤𝙪𝙥!!',
    owner: '𝙇𝙪 𝙎𝙞𝙖𝙥𝙖 ? 𝙁𝙞𝙩𝙪𝙧 𝙄𝙣𝙞 𝙆𝙝𝙪𝙨𝙪𝙨 𝙊𝙬𝙣𝙚𝙧 𝙂𝙬 𝙖𝙟𝙖!!',
    group: '𝙋𝙚𝙧𝙞𝙣𝙩𝙖𝙝 𝙄𝙣𝙞 𝙃𝙖𝙣𝙮𝙖 𝘽𝙞𝙨𝙖 𝘿𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝘿𝙞 𝙂𝙧𝙤𝙪𝙥!!',
    private: '𝙋𝙚𝙧𝙞𝙣𝙩𝙖𝙝 𝙄𝙣𝙞 𝙃𝙖𝙣𝙮𝙖 𝘽𝙞𝙨𝙖 𝘿𝙞𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝘿𝙞 𝙋𝙧𝙞𝙫𝙖𝙩𝙚!!',
    wait: '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!',
    endLimit: 'Your imit has run out, Wait at 12 at night',
    error: '*!!!Feature Error!!!*',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 25,
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/18fbf5af16d1282d245c9.png'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})

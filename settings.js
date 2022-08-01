const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['12269105661']
global.premium = ['12269105661']
global.youtube = 'https://youtube.com/c/Tisudemon'
global.ownername = 'ᴹᴿ᭄ᴛͦɪᷫsᷫᴜͥᴅͨᴇͥᴍᷧᴏᷝɴོ'
global.botname ='Hinata-Md'
global.donasi = {ᬤᘠ᭄ᨨ⫰ꢳ സ᭄ഗᘠറ്റ᭄൭͛ന്റ ച೬ຮ᭄ᰢ പ᭄ຮᨨ⫰ꢳ ഹൃദᨨ𑜸᭄ന് പറᨨꪆ൯ ഉണ്ടꪆ൨⫰๏  ꫧ൭͛ന്റ സങ്കຮങ്ങൾ ഉള്ള᭄ൽ🌎 ඉꫧ⫰ക്ക᭄ പ᭄ຮ᭄ച്ച് ൨ᘡ᭄ച്ചོ🚬 ൨ᘡ᭄ച്ചོ 🚬ღ͢ശ᭄ച്ച൨൭͛ന്റ ᤌഥ ...}
    saweria: 'https://saweria.co/tisudemon21',
    nomor: '12269105661'
}
global.packname = 'ᴹᴿ᭄ᴛͦɪᷫsᷫᴜͥᴅͨᴇͥᴍᷧᴏᷝɴོ'
global.author = 'ᴹᴿ᭄ᴛͦɪᷫsᷫᴜͥᴅͨᴇͥᴍᷧᴏᷝɴོ'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

const Jsl_0x4356f7=Jsl_0x5154;(function(_0x1f463a,_0x5eb77c){const _0x25d8b2=Jsl_0x5154,_0x2b7041=_0x1f463a();while(!![]){try{const _0xe9ac87=-parseInt(_0x25d8b2(0x1ad))/0x1+-parseInt(_0x25d8b2(0x1a5))/0x2+-parseInt(_0x25d8b2(0x1e6))/0x3+parseInt(_0x25d8b2(0x1d5))/0x4*(-parseInt(_0x25d8b2(0x1c1))/0x5)+-parseInt(_0x25d8b2(0x1a2))/0x6+parseInt(_0x25d8b2(0x1db))/0x7*(parseInt(_0x25d8b2(0x19e))/0x8)+parseInt(_0x25d8b2(0x1dc))/0x9;if(_0xe9ac87===_0x5eb77c)break;else _0x2b7041['push'](_0x2b7041['shift']());}catch(_0x2b3b8c){_0x2b7041['push'](_0x2b7041['shift']());}}}(Jsl_0xb139,0xb7f88));const {default:makeWASocket,useSingleFileAuthState,Browsers,makeInMemoryStore}=require('@adiwajshing/baileys'),fs=require('fs'),{serialize}=require('./lib/serialize'),{Message,Image,Sticker}=require('./lib/Base'),pino=require(Jsl_0x4356f7(0x1b3)),path=require(Jsl_0x4356f7(0x1da)),events=require(Jsl_0x4356f7(0x1c8)),got=require(Jsl_0x4356f7(0x1cf)),config=require(Jsl_0x4356f7(0x1e9)),{DATABASE,VERSION}=require(Jsl_0x4356f7(0x1e9)),{PluginDB}=require(Jsl_0x4356f7(0x1d1)),Greetings=require(Jsl_0x4356f7(0x1b6)),{decodeJid}=require(Jsl_0x4356f7(0x1de)),{bind}=require(Jsl_0x4356f7(0x1e4)),store=makeInMemoryStore({'logger':pino()[Jsl_0x4356f7(0x1bd)]({'level':Jsl_0x4356f7(0x1d0),'stream':Jsl_0x4356f7(0x1a6)})});require(Jsl_0x4356f7(0x1b9))['EventEmitter']['defaultMaxListeners']=0x64;function Jsl_0x5154(_0x451ec5,_0x556a55){const _0xb1398e=Jsl_0xb139();return Jsl_0x5154=function(_0x5154a0,_0x3a7b08){_0x5154a0=_0x5154a0-0x199;let _0x56088d=_0xb1398e[_0x5154a0];return _0x56088d;},Jsl_0x5154(_0x451ec5,_0x556a55);}function Jsl_0xb139(){const _0x3ecc28=['store','Desktop','photo','✅\x20Plugins\x20Installed!','toLowerCase','isSelf','sync','1270460hOwIEl','HANDLERS','./lib/ss/store.json','bind','fromMe','./plugins/','pino','match','Session_Id','./lib/Greetings','commands','uncaughtException','events','writeToFile','pattern','test','child','type','connection.update','text','10weDidw','name','stickerMessage','includes','map','split','connecting','./lib/utils','notify','dataValues','sendMessage','function','url','messages','got','silent','./lib/db/plugins','Session\x20Restored\x20✅','existsSync','SUDO','1259644nhaamU','prefix','message','Installing\x20Plugins.✅','user','path','363349dBsEOA','29180106ssjKBe','readdirSync','./lib/','error','group-participants.update','payload','imageMessage','macOS','./lib/store','.js','1211688kcGTzi','./temp/session.json','slice','./config','findAll','./plugins','join','image','Abu\x20MD\x20','statusCode','close','body','192EwrLJJ','parse','messages.upsert','./lib/session','5505624EaSvww','output','log','1025352TyNEpx'];Jsl_0xb139=function(){return _0x3ecc28;};return Jsl_0xb139();}let ssname=path[Jsl_0x4356f7(0x1ec)](__dirname,Jsl_0x4356f7(0x1e7));const {MakeSession}=require(Jsl_0x4356f7(0x1a1));!fs['existsSync'](ssname)&&MakeSession(config[Jsl_0x4356f7(0x1b5)],ssname);async function Jsl(){const _0x39a478=Jsl_0x4356f7;await config['DATABASE'][_0x39a478(0x1ac)]();const {state:_0x1b8a27,saveState:_0x4a9dde}=useSingleFileAuthState(config['Session_Id'],ssname,pino({'level':_0x39a478(0x1d0)}));let _0x384ede=makeWASocket({'logger':pino({'level':'silent'}),'auth':_0x1b8a27,'printQRInTerminal':!![],'browser':Browsers[_0x39a478(0x1e3)](_0x39a478(0x1a7)),'downloadHistory':![],'syncFullHistory':![]});store[_0x39a478(0x1b0)](_0x384ede['ev']),setInterval(()=>{const _0x35c053=_0x39a478;store[_0x35c053(0x1ba)](_0x35c053(0x1af));},0x1e*0x3c*0x3e8),_0x384ede['ev']['on'](_0x39a478(0x1bf),async _0x4f1c07=>{const _0xcad9f0=_0x39a478,{connection:_0x5cc17c,lastDisconnect:_0x5abf34}=_0x4f1c07;_0x5cc17c===_0xcad9f0(0x1c7)&&console['log'](_0xcad9f0(0x19a)+VERSION);_0x5cc17c===_0xcad9f0(0x19c)&&_0x5abf34&&_0x5abf34[_0xcad9f0(0x1df)]&&_0x5abf34[_0xcad9f0(0x1df)][_0xcad9f0(0x1a3)]['statusCode']!=0x191&&(console[_0xcad9f0(0x1a4)](_0x5abf34[_0xcad9f0(0x1df)][_0xcad9f0(0x1a3)][_0xcad9f0(0x1e1)]),Jsl());if(_0x5cc17c==='open'){console[_0xcad9f0(0x1a4)](_0xcad9f0(0x1d2)),console[_0xcad9f0(0x1a4)](_0xcad9f0(0x1d8));let _0x394d78=await PluginDB[_0xcad9f0(0x1ea)]();_0x394d78[_0xcad9f0(0x1c5)](async _0x236175=>{const _0x1b2fa9=_0xcad9f0;if(!fs[_0x1b2fa9(0x1d3)](_0x1b2fa9(0x1b2)+_0x236175[_0x1b2fa9(0x1ca)][_0x1b2fa9(0x1c2)]+'.js')){console[_0x1b2fa9(0x1a4)](_0x236175['dataValues'][_0x1b2fa9(0x1c2)]);var _0x1ad844=await got(_0x236175['dataValues'][_0x1b2fa9(0x1cd)]);_0x1ad844[_0x1b2fa9(0x19b)]==0xc8&&(fs['writeFileSync'](_0x1b2fa9(0x1b2)+_0x236175[_0x1b2fa9(0x1ca)][_0x1b2fa9(0x1c2)]+_0x1b2fa9(0x1e5),_0x1ad844['body']),require('./plugins/'+_0x236175[_0x1b2fa9(0x1ca)]['name']+_0x1b2fa9(0x1e5)));}}),fs[_0xcad9f0(0x1dd)](_0xcad9f0(0x1eb))['forEach'](_0x58906e=>{const _0x15549c=_0xcad9f0;path['extname'](_0x58906e)[_0x15549c(0x1aa)]()==_0x15549c(0x1e5)&&require(_0x15549c(0x1b2)+_0x58906e);}),console['log'](_0xcad9f0(0x1a9)),_0x384ede[_0xcad9f0(0x1cb)](_0x384ede[_0xcad9f0(0x1d9)]['id'],{'text':'💗\x20𝙰𝙱𝚄\x20𝙼𝙳\x20𝚆𝙾𝚁𝙺𝙸𝙽𝙶..\x0a\x20𝙷𝙰𝙽𝙻𝙴𝚁\x20:\x20.\x0a\x20𝙿𝙻𝚄𝙶𝙸𝙽𝚂\x20:\x20.ʜᴇʟᴘ\x20.ᴍᴇɴᴜ\x20.ʟɪsᴛ\x0a\x20𝚅𝙴𝚁𝚂𝙸𝙾𝙽\x20:\x202.1.0'});try{_0x384ede['ev']['on']('creds.update',_0x4a9dde),_0x384ede['ev']['on'](_0xcad9f0(0x1e0),async _0x1275dd=>{Greetings(_0x1275dd,_0x384ede);}),_0x384ede['ev']['on'](_0xcad9f0(0x1a0),async _0x5e76b=>{const _0x25b0d5=_0xcad9f0;if(_0x5e76b[_0x25b0d5(0x1be)]!==_0x25b0d5(0x1c9))return;let _0x49b02b=_0x5e76b[_0x25b0d5(0x1ce)][0x0],_0x53adf0=await serialize(JSON[_0x25b0d5(0x19f)](JSON['stringify'](_0x49b02b)),_0x384ede);if(!_0x53adf0[_0x25b0d5(0x1d7)])return;let _0x30e826=_0x53adf0[_0x25b0d5(0x19d)];if(_0x30e826)console[_0x25b0d5(0x1a4)](_0x30e826);events[_0x25b0d5(0x1b7)]['map'](async _0x23115d=>{const _0x677853=_0x25b0d5;if(_0x23115d[_0x677853(0x1b1)]&&!config[_0x677853(0x1d4)][_0x677853(0x1c6)](',')[_0x677853(0x1c4)](_0x53adf0['sender'][_0x677853(0x1c6)]('@')[0x0]||!_0x53adf0[_0x677853(0x1ab)]))return;if(_0x23115d['pattern']&&_0x23115d[_0x677853(0x1bb)][_0x677853(0x1bc)](_0x30e826)){var _0x31f047=_0x30e826['trim']()[_0x677853(0x1c6)](/ +/)[_0x677853(0x1e8)](0x1)[_0x677853(0x1ec)]('\x20');whats=new Message(_0x384ede,_0x53adf0,_0x49b02b),_0x23115d[_0x677853(0x1cc)](whats,_0x31f047,_0x53adf0,_0x384ede);}else{if(_0x30e826&&_0x23115d['on']===_0x677853(0x1c0))_0x53adf0[_0x677853(0x1d6)]=_0x30e826[_0x677853(0x1b4)](new RegExp(config[_0x677853(0x1ae)]))?_0x30e826[_0x677853(0x1b4)](new RegExp(config['HANDLERS']))[0x0]:'',whats=new Message(_0x384ede,_0x53adf0,_0x49b02b),_0x23115d['function'](whats,_0x30e826,_0x53adf0,_0x384ede,_0x5e76b);else{if((_0x23115d['on']===_0x677853(0x199)||_0x23115d['on']===_0x677853(0x1a8))&&_0x53adf0[_0x677853(0x1be)]===_0x677853(0x1e2))whats=new Image(_0x384ede,_0x53adf0,_0x49b02b),_0x23115d[_0x677853(0x1cc)](whats,_0x30e826,_0x53adf0,_0x384ede,_0x5e76b,_0x49b02b);else _0x23115d['on']==='sticker'&&_0x53adf0['type']===_0x677853(0x1c3)&&(whats=new Sticker(_0x384ede,_0x53adf0,_0x49b02b),_0x23115d[_0x677853(0x1cc)](whats,_0x53adf0,_0x384ede,_0x5e76b,_0x49b02b));}}});});}catch(_0x339ea4){console[_0xcad9f0(0x1a4)](_0x339ea4+'\x0a\x0a\x0a\x0a\x0a'+JSON['stringify'](msg));}}}),process['on'](_0x39a478(0x1b8),_0x527ddc=>{const _0x402b32=_0x39a478;let _0xdd26cc=_0x527ddc['message'];_0x384ede[_0x402b32(0x1cb)](_0x384ede[_0x402b32(0x1d9)]['id'],{'text':_0xdd26cc}),console['log'](_0x527ddc);});}setTimeout(()=>{Jsl();},0xbb8);
const Jsl_0x256bc3=Jsl_0x1cf1;function Jsl_0x4f56(){const _0x3cf1b3=['.js','image','readdirSync','stickerMessage','toLowerCase','findAll','11739366iCezQO','error','isSelf','4930849XUzzue','prefix','uncaughtException','store','✅\x20Plugins\x20Installed!','./plugins','Desktop','payload','trim','body','52dKgnHo','304174qxnJYv','forEach','events','writeFileSync','writeToFile','sendMessage','Abu\x20MD\x20','./lib/ss/store.json','map','notify','@adiwajshing/baileys','log','test','name','open','message','Installing\x20Plugins.✅','function','defaultMaxListeners','DATABASE','Session\x20Restored\x20✅','dataValues','3332595yxhdnC','pino','creds.update','photo','./config','./lib/store','fromMe','user','1038247JuvShc','14435GAFsuI','319HDAFWH','./lib/Base','includes','join','match','./lib/session','./lib/serialize','messages','8WdDNjZ','path','./lib/utils','split','SUDO','text','statusCode','silent','sync','6ZQzVhb','stringify','269630vZxdxj','commands','macOS','type','imageMessage','url','EventEmitter','./lib/db/plugins','Session_Id','parse','pattern','./plugins/','HANDLERS','output','messages.upsert','sticker'];Jsl_0x4f56=function(){return _0x3cf1b3;};return Jsl_0x4f56();}(function(_0x284cff,_0x4fb0ee){const _0xd9d095=Jsl_0x1cf1,_0x49994d=_0x284cff();while(!![]){try{const _0x23d38e=parseInt(_0xd9d095(0x1c1))/0x1+-parseInt(_0xd9d095(0x1fa))/0x2+parseInt(_0xd9d095(0x1b9))/0x3+-parseInt(_0xd9d095(0x1f9))/0x4*(-parseInt(_0xd9d095(0x1c2))/0x5)+-parseInt(_0xd9d095(0x1d4))/0x6*(-parseInt(_0xd9d095(0x1ef))/0x7)+-parseInt(_0xd9d095(0x1cb))/0x8*(parseInt(_0xd9d095(0x1ec))/0x9)+parseInt(_0xd9d095(0x1d6))/0xa*(-parseInt(_0xd9d095(0x1c3))/0xb);if(_0x23d38e===_0x4fb0ee)break;else _0x49994d['push'](_0x49994d['shift']());}catch(_0x584f00){_0x49994d['push'](_0x49994d['shift']());}}}(Jsl_0x4f56,0x9f576));const {default:makeWASocket,useSingleFileAuthState,Browsers,makeInMemoryStore}=require(Jsl_0x256bc3(0x1ad)),fs=require('fs'),{serialize}=require(Jsl_0x256bc3(0x1c9)),{Message,Image,Sticker}=require(Jsl_0x256bc3(0x1c4)),pino=require(Jsl_0x256bc3(0x1ba)),path=require(Jsl_0x256bc3(0x1cc)),events=require(Jsl_0x256bc3(0x1cd)),got=require('got'),config=require(Jsl_0x256bc3(0x1bd)),{DATABASE,VERSION}=require('./config'),{PluginDB}=require(Jsl_0x256bc3(0x1dd)),Greetings=require('./lib/Greetings'),{decodeJid}=require('./lib/'),{bind}=require(Jsl_0x256bc3(0x1be)),store=makeInMemoryStore({'logger':pino()['child']({'level':'silent','stream':Jsl_0x256bc3(0x1f2)})});require(Jsl_0x256bc3(0x1fc))[Jsl_0x256bc3(0x1dc)][Jsl_0x256bc3(0x1b5)]=0x64;function Jsl_0x1cf1(_0x328dd0,_0x2ced57){const _0x4f56db=Jsl_0x4f56();return Jsl_0x1cf1=function(_0x1cf1a9,_0x14e8ff){_0x1cf1a9=_0x1cf1a9-0x1ad;let _0x251d92=_0x4f56db[_0x1cf1a9];return _0x251d92;},Jsl_0x1cf1(_0x328dd0,_0x2ced57);}let authFile=path[Jsl_0x256bc3(0x1c6)](__dirname,'./temp/session.json');const {MakeSession}=require(Jsl_0x256bc3(0x1c8));!fs['existsSync'](authFile)&&MakeSession(config[Jsl_0x256bc3(0x1de)],authFile);async function Jsl(){const _0x3cbf5e=Jsl_0x256bc3;await config[_0x3cbf5e(0x1b6)][_0x3cbf5e(0x1d3)]();const {state:_0x18f674,saveState:_0x2fd41d}=useSingleFileAuthState(authfile,pino({'level':_0x3cbf5e(0x1d2)}));let _0x100ee0=makeWASocket({'logger':pino({'level':_0x3cbf5e(0x1d2)}),'auth':_0x18f674,'printQRInTerminal':!![],'browser':Browsers[_0x3cbf5e(0x1d8)](_0x3cbf5e(0x1f5)),'downloadHistory':![],'syncFullHistory':![]});store['bind'](_0x100ee0['ev']),setInterval(()=>{const _0x22bcfa=_0x3cbf5e;store[_0x22bcfa(0x1fe)](_0x22bcfa(0x201));},0x1e*0x3c*0x3e8),_0x100ee0['ev']['on']('connection.update',async _0x3f4c40=>{const _0x502415=_0x3cbf5e,{connection:_0x484adf,lastDisconnect:_0x4f8210}=_0x3f4c40;_0x484adf==='connecting'&&console[_0x502415(0x1ae)](_0x502415(0x200)+VERSION);_0x484adf==='close'&&_0x4f8210&&_0x4f8210[_0x502415(0x1ed)]&&_0x4f8210[_0x502415(0x1ed)][_0x502415(0x1e3)][_0x502415(0x1d1)]!=0x191&&(console[_0x502415(0x1ae)](_0x4f8210[_0x502415(0x1ed)][_0x502415(0x1e3)][_0x502415(0x1f6)]),Jsl());if(_0x484adf===_0x502415(0x1b1)){console[_0x502415(0x1ae)](_0x502415(0x1b7)),console[_0x502415(0x1ae)](_0x502415(0x1b3));let _0x523da3=await PluginDB[_0x502415(0x1eb)]();_0x523da3[_0x502415(0x202)](async _0x5d8d76=>{const _0x2529a0=_0x502415;if(!fs['existsSync'](_0x2529a0(0x1e1)+_0x5d8d76[_0x2529a0(0x1b8)][_0x2529a0(0x1b0)]+'.js')){console[_0x2529a0(0x1ae)](_0x5d8d76[_0x2529a0(0x1b8)][_0x2529a0(0x1b0)]);var _0x25f10c=await got(_0x5d8d76[_0x2529a0(0x1b8)][_0x2529a0(0x1db)]);_0x25f10c[_0x2529a0(0x1d1)]==0xc8&&(fs[_0x2529a0(0x1fd)](_0x2529a0(0x1e1)+_0x5d8d76[_0x2529a0(0x1b8)][_0x2529a0(0x1b0)]+'.js',_0x25f10c[_0x2529a0(0x1f8)]),require(_0x2529a0(0x1e1)+_0x5d8d76[_0x2529a0(0x1b8)][_0x2529a0(0x1b0)]+_0x2529a0(0x1e6)));}}),fs[_0x502415(0x1e8)](_0x502415(0x1f4))[_0x502415(0x1fb)](_0x3e3090=>{const _0x40ddde=_0x502415;path['extname'](_0x3e3090)[_0x40ddde(0x1ea)]()==_0x40ddde(0x1e6)&&require(_0x40ddde(0x1e1)+_0x3e3090);}),console[_0x502415(0x1ae)](_0x502415(0x1f3)),_0x100ee0[_0x502415(0x1ff)](_0x100ee0[_0x502415(0x1c0)]['id'],{'text':'💗\x20𝙰𝙱𝚄\x20𝙼𝙳\x20𝚆𝙾𝚁𝙺𝙸𝙽𝙶..\x0a\x20𝙷𝙰𝙽𝙻𝙴𝚁\x20:\x20.\x0a\x20𝙿𝙻𝚄𝙶𝙸𝙽𝚂\x20:\x20.ʜᴇʟᴘ\x20.ᴍᴇɴᴜ\x20.ʟɪsᴛ\x0a\x20𝚅𝙴𝚁𝚂𝙸𝙾𝙽\x20:\x202.1.0'});try{_0x100ee0['ev']['on'](_0x502415(0x1bb),_0x2fd41d),_0x100ee0['ev']['on']('group-participants.update',async _0x2cf0d4=>{Greetings(_0x2cf0d4,_0x100ee0);}),_0x100ee0['ev']['on'](_0x502415(0x1e4),async _0xdbec01=>{const _0x1e6cee=_0x502415;if(_0xdbec01['type']!==_0x1e6cee(0x203))return;let _0x396135=_0xdbec01[_0x1e6cee(0x1ca)][0x0],_0x45d71b=await serialize(JSON[_0x1e6cee(0x1df)](JSON[_0x1e6cee(0x1d5)](_0x396135)),_0x100ee0);if(!_0x45d71b[_0x1e6cee(0x1b2)])return;let _0x3d432d=_0x45d71b[_0x1e6cee(0x1f8)];if(_0x3d432d)console[_0x1e6cee(0x1ae)](_0x3d432d);events[_0x1e6cee(0x1d7)][_0x1e6cee(0x202)](async _0x5b14c2=>{const _0x31e5d5=_0x1e6cee;if(_0x5b14c2[_0x31e5d5(0x1bf)]&&!config[_0x31e5d5(0x1cf)][_0x31e5d5(0x1ce)](',')[_0x31e5d5(0x1c5)](_0x45d71b['sender']['split']('@')[0x0]||!_0x45d71b[_0x31e5d5(0x1ee)]))return;if(_0x5b14c2['pattern']&&_0x5b14c2[_0x31e5d5(0x1e0)][_0x31e5d5(0x1af)](_0x3d432d)){var _0x5202ee=_0x3d432d[_0x31e5d5(0x1f7)]()[_0x31e5d5(0x1ce)](/ +/)['slice'](0x1)[_0x31e5d5(0x1c6)]('\x20');whats=new Message(_0x100ee0,_0x45d71b,_0x396135),_0x5b14c2[_0x31e5d5(0x1b4)](whats,_0x5202ee,_0x45d71b,_0x100ee0);}else{if(_0x3d432d&&_0x5b14c2['on']===_0x31e5d5(0x1d0))_0x45d71b[_0x31e5d5(0x1f0)]=_0x3d432d[_0x31e5d5(0x1c7)](new RegExp(config[_0x31e5d5(0x1e2)]))?_0x3d432d[_0x31e5d5(0x1c7)](new RegExp(config['HANDLERS']))[0x0]:'',whats=new Message(_0x100ee0,_0x45d71b,_0x396135),_0x5b14c2[_0x31e5d5(0x1b4)](whats,_0x3d432d,_0x45d71b,_0x100ee0,_0xdbec01);else{if((_0x5b14c2['on']===_0x31e5d5(0x1e7)||_0x5b14c2['on']===_0x31e5d5(0x1bc))&&_0x45d71b[_0x31e5d5(0x1d9)]===_0x31e5d5(0x1da))whats=new Image(_0x100ee0,_0x45d71b,_0x396135),_0x5b14c2[_0x31e5d5(0x1b4)](whats,_0x3d432d,_0x45d71b,_0x100ee0,_0xdbec01,_0x396135);else _0x5b14c2['on']===_0x31e5d5(0x1e5)&&_0x45d71b[_0x31e5d5(0x1d9)]===_0x31e5d5(0x1e9)&&(whats=new Sticker(_0x100ee0,_0x45d71b,_0x396135),_0x5b14c2[_0x31e5d5(0x1b4)](whats,_0x45d71b,_0x100ee0,_0xdbec01,_0x396135));}}});});}catch(_0x1f71a5){console['log'](_0x1f71a5+'\x0a\x0a\x0a\x0a\x0a'+JSON[_0x502415(0x1d5)](msg));}}}),process['on'](_0x3cbf5e(0x1f1),_0x4e7352=>{const _0x32a6fe=_0x3cbf5e;let _0x5be9c9=_0x4e7352[_0x32a6fe(0x1b2)];_0x100ee0[_0x32a6fe(0x1ff)](_0x100ee0['user']['id'],{'text':_0x5be9c9}),console['log'](_0x4e7352);});}setTimeout(()=>{Jsl();},0xbb8);

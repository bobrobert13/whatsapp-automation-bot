import { MemoryDB, createBot, createFlow, createProvider } from '@bot-whatsapp/bot';
import { BaileysProvider, handleCtx } from '@bot-whatsapp/provider-baileys';

const main = async () => {
   const provider = createProvider(BaileysProvider);
   provider.initHttpServer(4000);
   provider.http.server.post('/send-message', handleCtx(async (bot, req, res) => {
         await bot.sendMessage('+58*********', '*********', {});
         res.end('enviando mensaje');
   }));
   await createBot({
      flow: createFlow([]),
      database: new MemoryDB(),
      provider
   });
}

main();
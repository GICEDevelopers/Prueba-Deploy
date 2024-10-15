import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VercelRequest, VercelResponse } from '@vercel/node';

async function startServer(req: VercelRequest, res: VercelResponse) {
  const app = await NestFactory.create(AppModule);
  app.init(); 

 
  app.getHttpAdapter().getInstance().all('/api/(.*)', (req, res) => {
    app.getHttpAdapter().getInstance().handle(req, res);
  });
}

export default startServer;
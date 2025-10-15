import { Client } from 'whatsapp-web.js';
import pkg from 'whatsapp-web.js';
const { LocalAuth } = pkg;
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT || 10000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const client = new Client({
  authStrategy: new LocalAuth({ dataPath: './.wwebjs_auth' }),
  puppeteer: {
    headless: false, // let you interact manually
    args: ['--no-sandbox'],
  },
});

client.on('qr', () => {
  console.log('QR requested (ignore this if you’re using Link with phone number)');
});

client.on('ready', () => {
  console.log('Logged in and session saved to .wwebjs_auth');
});

client.initialize();

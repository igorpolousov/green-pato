import { NextResponse } from 'next/server';

export async function POST(req: any) {
  const update = await req.json();
  
  // Process the incoming Telegram update
  if (update && update.message) {
    const { chat } = update.message;
    console.log(`Received message from chat ID: ${chat.id}`);
    
    // Example: send a simple reply (requires making an API call to Telegram)
    await fetch(`api.telegram.org{process.env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chat.id,
        text: 'Hello from Next.js Webhook!',
      }),
    });
  }

  // Acknowledge receipt to Telegram server immediately with a 200 status
  return NextResponse.json({ status: 'ok' });
}
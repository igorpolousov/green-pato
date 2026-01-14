import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { message } = body;

  if (message) {
    const chatId = message.chat.id;
    const text = message.text;

    // Echo the message back to the user
    await fetch(`api.telegram.org{process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: `You said: ${text}`,
      }),
    });
  }

  return NextResponse.json({ ok: true });
}

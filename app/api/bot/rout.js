import { NextResponse } from 'next/server'
const { bot, secretPath } = require('@/lib/telegram-bot')

export async function POST(req) {
    try {
        const body = await req.json()
        await bot.handleUpdate(body)
        return NextResponse.json({ ok: true })
    } catch (error) {
        console.error('Error processing update:', error)
        return NextResponse.json({ error: 'Failed to process update' }, { status: 500 })
    }
}

export async function GET() {
    // Для верификации вебхука или health check
    return NextResponse.json({ status: 'Bot is running' })
}
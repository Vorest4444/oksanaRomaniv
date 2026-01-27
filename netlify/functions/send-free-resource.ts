import { Resend } from 'resend'
import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

// TODO: Замініть на актуальні дані
const FROM_EMAIL = 'Оксана Романів <onboarding@resend.dev>' 
const VIDEO_URL = 'https://www.youtube.com/watch?v=XqZsoesa55w' 

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Initialize Resend inside handler to ensure env var is available
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  }

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }
  // Тільки POST запити
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { name, email } = JSON.parse(event.body || '{}')

    // Валідація
    if (!name || !email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Name and email are required' }),
      }
    }

    // Відправка email через Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: 'Ваш безкоштовний чек-лист готовий! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #113032 0%, #1a7478 100%); padding: 40px 40px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                        Вітаю, ${name}! 👋
                      </h1>
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px;">
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Дякую за інтерес до моїх матеріалів! Я рада, що ви зробили перший крок до покращення свого бізнесу.
                      </p>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Ось ваше <strong>ексклюзивне відео</strong> з чек-листом "Перші кроки підприємця":
                      </p>
                      
                      <!-- CTA Button -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 30px 0;">
                        <tr>
                          <td align="center">
                            <a href="${VIDEO_URL}" 
                               style="display: inline-block; background-color: #113032; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 50px; font-weight: 600; font-size: 16px;">
                              🎬 Переглянути відео
                            </a>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        <strong>Що ви знайдете у відео:</strong>
                      </p>
                      
                      <ul style="color: #555555; font-size: 15px; line-height: 1.8; margin: 0 0 20px 0; padding-left: 20px;">
                        <li>15 ключових кроків для успішного старту</li>
                        <li>Шаблони для планування та аналізу</li>
                        <li>Список перевірених ресурсів та інструментів</li>
                        <li>Чек-лист для щомісячного аудиту</li>
                      </ul>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                        Якщо у вас виникнуть питання або ви захочете обговорити ваші цілі особисто — 
                        <a href="https://oksana-romaniv.com/mentorship" style="color: #1a7478; text-decoration: underline;">запишіться на безкоштовну консультацію</a>.
                      </p>
                      
                      <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 30px 0 0 0;">
                        З найкращими побажаннями,<br>
                        <strong>Оксана Романів</strong><br>
                        <span style="color: #666666; font-size: 14px;">Бізнес-ментор та коуч</span>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 24px 40px; text-align: center; border-top: 1px solid #e9ecef;">
                      <p style="color: #666666; font-size: 13px; margin: 0 0 10px 0;">
                        Слідкуйте за мною в соціальних мережах:
                      </p>
                      <p style="margin: 0;">
                        <a href="https://instagram.com/" style="color: #1a7478; text-decoration: none; margin: 0 10px;">Instagram</a>
                        <a href="https://facebook.com/" style="color: #1a7478; text-decoration: none; margin: 0 10px;">Facebook</a>
                        <a href="https://t.me/" style="color: #1a7478; text-decoration: none; margin: 0 10px;">Telegram</a>
                      </p>
                      <p style="color: #999999; font-size: 12px; margin: 20px 0 0 0;">
                        © ${new Date().getFullYear()} Оксана Романів. Всі права захищені.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        id: data?.id 
      }),
    }
  } catch (err) {
    console.error('Function error:', err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', details: err instanceof Error ? err.message : 'Unknown error' }),
    }
  }
}

export { handler }

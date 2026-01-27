import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
const AIRTABLE_WAITLIST_TABLE_ID = process.env.AIRTABLE_WAITLIST_TABLE_ID

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
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

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    const { email, interest } = JSON.parse(event.body || '{}')

    if (!email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Email is required' }),
      }
    }

    // Map interest value to Ukrainian
    const interestMap: Record<string, string> = {
      'leadership': 'Курс "Лідерство без вигорання"',
      'membership': 'Membership "Коло розвитку"',
      'both': 'Обидва продукти',
    }

    // Create record in Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_WAITLIST_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                'Email': email,
                'Product Interest': interestMap[interest] || interest || 'Не вказано',
                'Status': 'New',
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Airtable error:', errorData)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Failed to save to waitlist', details: errorData }),
      }
    }

    const data = await response.json()

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Added to waitlist',
        id: data.records?.[0]?.id,
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

import { connectLambda, getStore } from "@netlify/blobs"

export async function handler(event) {
  connectLambda(event)

  const corsHeaders = {
    "Access-Control-Allow-Origin": "https://electron.observer",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }
  
  const method = event.httpMethod
  
  if (method === "OPTIONS") {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "",
    }
  }

  if (method !== "GET" && method !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders,
      body: "method not Allowed"
    }
  }

  const store = getStore("emoji-counts", {
    siteID: process.env.NETLIFY_SITE_ID,
    token: process.env.NETLIFY_BLOBS_TOKEN
  })  

  if (method === "POST") {
    const id = event.queryStringParameters?.id
    const emoji = ensureEmoji(event.body || "")

    if (!id || !emoji) {
      return {
        statusCode: 500,
        headers: corsHeaders,
        body: "not ok"
      }
    }

    const key = `${id}:${emoji}`

    const currentCount = Number(await store.get(key)) || 0
    await store.set(key, currentCount + 1)

    return {
      statusCode: 200,
      headers: corsHeaders,
      body: "ok"
    }
  }

  if (method === "GET") {
    const id = event.queryStringParameters?.id
    const prefix = `${id}:`

    const { blobs } = await store.list({ prefix })

    const values = {}
  
    for (const { key } of blobs) {
      const emoji = key.slice(prefix.length)
      const count = await store.get(key)
      values[emoji] = parseInt(count, 10)
    }  

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://electron.observer",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(values),
    }    
  }
}

function ensureEmoji(emoji) {
  const segments = Array.from(new Intl.Segmenter({ granularity: 'character' }).segment(emoji.trim()))
  const parsedEmoji = segments.length > 0 ? segments[0].segment : null
  if (/\p{Emoji}/u.test(parsedEmoji)) return parsedEmoji
}
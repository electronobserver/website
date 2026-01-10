const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    // Preflight request
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
    }
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: "method not allowed"
    }
  }

  const id = event.queryStringParameters?.id
  const emoji = ensureEmoji(event.body ?? "")

  if (!id || !emoji) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: "not ok"
    }
  }

  const key = `${id}:${emoji}`
  const store = getStore("emoji-counts")

  const currentCount = Number(await store.get(key)) || 0
  await store.set(key, currentCount + 1)

  return {
    statusCode: 200,
    headers: CORS_HEADERS,
    body: "ok"
  }
}

import { getStore } from "@netlify/blobs"

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "method not allowed"
    }
  }

  const id = event.queryStringParameters?.id
  const emoji = ensureEmoji(event.body ?? "")

  if (!id || !emoji) {
    return {
      statusCode: 400,
      body: "not ok"
    }
  }

  const key = `${id}:${emoji}`
  const store = getStore("emoji-counts")

  const currentCount = Number(await store.get(key)) || 0
  await store.set(key, currentCount + 1)

  return {
    statusCode: 200,
    body: "ok"
  }
}

function ensureEmoji(emoji) {
  const segments = Array.from(new Intl.Segmenter({ granularity: 'grapheme' }).segment(emoji.trim()))
  const parsedEmoji = segments.length > 0 ? segments[0].segment : null
  if (/\p{Emoji}/u.test(parsedEmoji)) return parsedEmoji
}
import * as NextHead from "next/head"

export default function Head() {
  const
    title = "🧅 Ceapa Cool Discord 🧅",
    desc = "🥚 Leaderboard for Ceapa Cool's discord server 🔥🍆💦",
    url = "https://leaderboard.cbt.cool",
    image = "https://cdn.discordapp.com/emojis/700539798762553355.png"
  return (
    <NextHead.default>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={desc} />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={image} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content={image} />

        <title>&#x1F9C5;Ceapa Cool Discord&#x1F9C5;</title>
    </NextHead.default>
  )
}
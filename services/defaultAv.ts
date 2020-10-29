export default function defaultAv(name: string) {
  const discrim = Number(name.split("#").pop())
  return `https://cdn.discordapp.com/embed/avatars/${discrim % 5}.png`
}
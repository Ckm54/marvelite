// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from "js-md5";


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const PUBLIC_KEY = ""
const PRIVATE_KEY = ""

const ts = Number(new Date());
const hash = md5.create()
hash.update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex')


export {PUBLIC_KEY, ts, hash}

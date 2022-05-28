// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import md5 from "js-md5";


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const PUBLIC_KEY = "1bc98542b53a9d850d459282d676e3e1"
const PRIVATE_KEY = "9aec4e4a418f0cb25dcf0278924e50d7e670386e" 

const ts = Number(new Date());
const hash = md5(ts + PRIVATE_KEY + PUBLIC_KEY)
// hash.update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex')


export {PUBLIC_KEY, ts, hash}

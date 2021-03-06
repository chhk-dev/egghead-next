import axios from 'axios'
import {NextApiRequest, NextApiResponse} from 'next'
import getAccessTokenFromCookie from 'utils/get-access-token-from-cookie'

const visits = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const token = getAccessTokenFromCookie()
    axios
      .post(`${process.env.NEXT_PUBLIC_AUTH_DOMAIN}/ahoy/visits`, req.body, {
        headers: {
          ...(token && {Authorization: `Bearer ${token}`}),
          ...req.headers,
        },
      })
      .then((data) => console.log(data))
    res.status(200).end()
  } else {
    res.statusCode = 404
    res.status(404).end()
  }
}

export default visits

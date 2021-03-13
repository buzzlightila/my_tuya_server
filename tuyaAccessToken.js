require('dotenv').config()
const Requester = require('./requester')
const TuyaSign = require('./tuyaSign')
const url = process.env.TUYA_URL;

const TuyaAccessToken = async ({clientId, secret}) => {
    const { sign, t } = TuyaSign({clientId, secret})
    const headers = { 
        'client_id': clientId, 
        sign, 
        t, 
        'sign_method': 'HMAC-SHA256'
      }

    const data = await Requester ({
        url: url + 'token?grant_type=1',
        headers: headers,
        method: 'GET'
    })

    const { result } = data

    return { ...result, t, sign }
}

module.exports = TuyaAccessToken
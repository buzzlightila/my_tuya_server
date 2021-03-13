require('dotenv').config()
const TuyaAccessToken = require('./tuyaAccessToken')
const Requester = require('./requester')
const tuyaSign = require('./tuyaSign')
const url = process.env.TUYA_URL
const clientId = process.env.CLIENT_ID
const secret = process.env.SECRET

const TuyaLamp = async (params) => {
    const { deviceId, code, value } = params
    const { access_token } = await TuyaAccessToken({clientId, secret})
    const { sign, t } = await tuyaSign({clientId, access_token, secret})
    const headers = {
        client_id: clientId,
        access_token,
        sign,
        t,
        sign_method: 'HMAC-SHA256'
    }

    const body = {
        commands: [
            {
                code,
                value
            }
        ]
    }

    const data = await Requester({
        url: url + `devices/${deviceId}/commands`,
        method: 'POST',
        headers,
        body
    })

    console.log(data)
}

module.exports = TuyaLamp

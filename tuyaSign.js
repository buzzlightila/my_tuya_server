require('dotenv').config()
const CryptoJS = require('crypto-js')

const CalcSign = ({clientId, secret, timestamp, access_token}) =>{
  var str = access_token ? clientId + access_token + timestamp : clientId + timestamp
  var hash = CryptoJS.HmacSHA256(str, secret)
  var hashInBase64 = hash.toString()
  var signUp = hashInBase64.toUpperCase()
  return signUp
}

const GetTime = () => {
  var timestamp = new Date().getTime()
  return timestamp
}

const TuyaSign = ({clientId, access_token, secret}) => { 
  var t = GetTime()
  var sign = CalcSign({clientId, secret, timestamp: t, access_token})
  return {sign, t}
}

module.exports = TuyaSign

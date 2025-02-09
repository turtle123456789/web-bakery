const crypto = require('crypto');
const https = require('https');
require('dotenv').config();
const moment = require('moment');
const MOMO_CONFIG = {
    accessKey: process.env.MOMO_ACCESS_KEY,
    secretKey:  process.env.MOMO_SECRET_KEY,
    partnerCode:  process.env.MOMO_PARTNER_CODE,
    redirectUrl: 'https://web-bakery-wine.vercel.app',
    ipnUrl: 'https://web-bakery-wine.vercel.app'
};
const PAYMENT_CONFIG = {
    vnp_TmnCode: 'CWEOOKIU', // Mã website của bạn tại VNPay
    vnp_HashSecret: 'IVBAVUN30FY7F5U8PAYF09VENC7VRY5V', // Chuỗi bí mật để tạo mã hash
    vnp_Url: 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html', // Đường dẫn thanh toán của VNPay
    vnp_ReturnUrl: 'https://web-bakery-wine.vercel.app' // URL trả về sau khi thanh toán
  };
//MOMO
const createPaymentMoMo = async (amount, method,userid) => {
    try {
        const orderId = MOMO_CONFIG.partnerCode + new Date().getTime();
        const requestId = orderId;
        const extraData = '';
        const orderInfo = userid;
        const autoCapture = true;
        const lang = 'vi';

        const rawSignature = 
            `accessKey=${MOMO_CONFIG.accessKey}&amount=${amount}&extraData=${extraData}` +
            `&ipnUrl=${MOMO_CONFIG.ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}` +
            `&partnerCode=${MOMO_CONFIG.partnerCode}&redirectUrl=${MOMO_CONFIG.redirectUrl}` +
            `&requestId=${requestId}&requestType=${method}`;

        const signature = crypto.createHmac('sha256', MOMO_CONFIG.secretKey)
            .update(rawSignature)
            .digest('hex');

        const requestBody = JSON.stringify({
            partnerCode: MOMO_CONFIG.partnerCode,
            partnerName: "Test",
            storeId: "MomoTestStore",
            requestId: requestId,
            amount: amount,
            orderId: orderId,
            orderInfo: orderInfo,
            redirectUrl: MOMO_CONFIG.redirectUrl,
            ipnUrl: MOMO_CONFIG.ipnUrl,
            lang: lang,
            requestType: method,
            autoCapture: autoCapture,
            extraData: extraData,
            signature: signature
        });

        const options = {
            hostname: 'test-payment.momo.vn',
            port: 443,
            path: '/v2/gateway/api/create',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestBody)
            }
        };

        return new Promise((resolve, reject) => {
            const req = https.request(options, res => {
                let data = '';
                res.on('data', chunk => {
                    data += chunk;
                });
                res.on('end', () => {
                    const responseBody = JSON.parse(data);
                    if (responseBody.resultCode === 0) {
                        resolve({ success: true, link: responseBody.payUrl });
                    } else {
                        reject({ success: false, message: "Thanh toán thất bại" });
                    }
                });
            });

            req.on('error', e => reject({ success: false, message: e.message }));
            req.write(requestBody);
            req.end();
        });

    } catch (error) {
        throw new Error(error.message);
    }
};

//VNPay
const createPaymentVNPay = async (req) => {
    console.log('req.body', req.body)
    let ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress || '127.0.0.1';



  var tmnCode = PAYMENT_CONFIG.vnp_TmnCode;
  var secretKey = PAYMENT_CONFIG.vnp_HashSecret;
  var vnpUrl = PAYMENT_CONFIG.vnp_Url;
  var returnUrl = PAYMENT_CONFIG.vnp_ReturnUrl;


  var createDate = moment().format('YYYYMMDDHHmmss');
  var orderId = moment().format('HHmmss');
  var amount = req.body.total;

  var orderInfo = req.body.userId;
  var orderType = "other";
  var locale = req.body.language;
  if(locale === undefined || locale === ''){
    locale = 'vn';
  }
  var currCode = 'VND';
  var vnp_Params = {};
  vnp_Params['vnp_Version'] = '2.1.0';
  vnp_Params['vnp_Command'] = 'pay';
  vnp_Params['vnp_TmnCode'] = tmnCode;
  vnp_Params['vnp_Locale'] = locale;
  vnp_Params['vnp_CurrCode'] = currCode;
  vnp_Params['vnp_TxnRef'] = orderId;
  vnp_Params['vnp_OrderInfo'] = orderInfo.replace(/ /g, "+");;
  vnp_Params['vnp_OrderType'] = orderType;
  vnp_Params['vnp_Amount'] = amount * 100;
  vnp_Params['vnp_ReturnUrl'] = returnUrl;
  vnp_Params['vnp_IpAddr'] = encodeURIComponent(ipAddr);
  vnp_Params['vnp_CreateDate'] = createDate;
  vnp_Params = sortObject(vnp_Params);

  var querystring = require('qs');
  var signData = querystring.stringify(vnp_Params, { encode: false });
  var crypto = require("crypto");     
  var hmac = crypto.createHmac("sha512", secretKey);
  var signed = hmac.update(Buffer.from(signData, 'utf-8')).digest("hex");

  vnp_Params['vnp_SecureHash'] = signed;
  vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
    return vnpUrl
    
}
function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key));
      }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
      sorted[str[key]] = encodeURIComponent(obj[str[key]]);
    }
    return sorted;
  }
module.exports = { createPaymentMoMo, createPaymentVNPay };

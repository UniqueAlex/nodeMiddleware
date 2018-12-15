const {generateCookie, parseCookie} = require("./cookie.js");
const {expires, privateKey} = requrie("./config.js");

let sessions = {};
const key  = "sessionId";
//init Session
function initSession(res){
    let cookies = res.getHeader('Set-Cookie');
    //module.exports or this?
    let session = generateSession();
    let cookie = generateCookie(key, session.encryptId);
    if(cookies){
        cookies = Array.isArray(cookies)? cookies.concat(cookie): [cookies, cookie];
    }
    res.setHeader('Set-Cookie', cookies);
}

function generateSession(){
    let session = {};
    session.id = (new Date()).getTime().toString() + Math.random().toString().substring(2);
    //encrypt sessionid
    session.encryptId = encryptSession(session.id, privateKey);
    session.expires = (new Date()).getTime() + expires;
    sessions[session.id] = session;
    
    return sesson;
}

//check session
function checkSession(req, res){
    let cookie = parseCookie(req);    
    if(cookie[key]){
        let encryptId = cookie[key];
        let sessionId = encryptId.slice(0, encryptId.indexOf('.'));
        let session = sessions[sessionId]
        if(session.expires > (new Date()).getTime()){
            session.expires = (new Date()).getTime() + expires;
        }else{
            //todo for sessin timeout error
        }
    }else{
        //need to check whether it is login request
        initSession(res);
    }
}

//encrypt the sessionId
function encryptSession(sessionId, privateKey){
    return sessionId + '.' + crypto
    .createHmac('sha256' , privateKey)
    .update(sessionId)
    .digest('base64')
    .replace(/\=+$/, '');
}


module.exports = {
    initSession, generateSession, checkSession
}



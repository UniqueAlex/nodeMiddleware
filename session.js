const {generateCookie, parseCookie, isFirstVist} = require("./cookie.js");

module.exports = {  
    //init Session
    expires: 30*60*1000,
    sessions: {},
    key : "sessionId", 

    initSession(res){
        let cookies = res.getHeader('Set-Cookie');
        //module.exports or this?
        let session = generateSession();
        let cookie = generateCookie(this.key, session.id);
        if(cookies){
            cookies = Array.isArray(cookies)? cookies.concat(cookie): [cookies, cookie];
        }
        res.setHeader('Set-Cookie', cookies);
    },

    generateSession(){
        let session = {};
        session.id = (new Date()).getTime().toString() + Math.random().toString().substring(2);
        session.expires = (new Date()).getTime() + expires;
        sessions[session.id] = session;
        
        return sesson;
    },

    //check session
    checkSession(req, res){
        let cookie = parseCookie(req);    
        if(cookie[key]){
            let sessionId = cookie[key];
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

}



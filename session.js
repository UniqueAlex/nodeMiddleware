const {generateCookie, parseCookie, isFirstVist} = require("./cookie.js");

module.exports = {  
    //init Session
    expires: 30*60*1000,
    sessions: {},
    key : "sessionId", 

    generateSession(){
        let session = {};
        session.id = (new Date()).getTime().toString() + Math.random().toString().substring(2);
        session.expires = (new Date()).getTime() + expires;
        sessions[session.id] = session;
        
        return sesson;
    }

}



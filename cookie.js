//set cookie
function generateCookie(key, val, options){
    var options = options || {};
    cookie = [key + '=' + val];
    if(options.maxAge) cookie.push('maxAge=' + options.maxAge);
    if(options.expires) cookie.push('expires=' + options.expires.toUTCString());
    if(options.path) cookie.push('path=' + options.path);
    if(options.domain) cookie.push('domain=' + options.domain);
    if(options.secure) cookie.push('Secure');
    if(options.httpOnly) cookie.push('HttpOnly');
    
    return cookie.join('; ')
    //res.setHeader('Set-Cookie', cookie.join('; '));
}
//parse the cookie to a obj
function parseCookie(req){
    let cookie;
    if(req.headers.cookie){
        cookie = req.headers.cookie;
    }   
    let parsedCookie = {}
    if(cookie){
        let cookieList = cookie.split(';');
        cookieList.map( value => {
                parsedCookie[value.split("=")[0].trim()] = value.split("=")[1];
            }
        )
        req.cookie = parsedCookie;
    }
    return parsedCookie;
}
//check the user if first send requset to backend
function isFirstVist(req){
    if(req.headers.cookie){
        if(req.headers.cookie.isFirstVist){
            return true;
        }
    }

}

module.exports = {
    generateCookie, parseCookie, isFirstVist
}


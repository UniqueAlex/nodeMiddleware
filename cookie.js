//要求session格式为key, value的obj
exports.generateCookie = function(res, key, val, options) {
    var options = options || {};
    cookie = [key + '=' + val];
    if(options.maxAge) cookie.push('maxAge=' + options.maxAge);
    if(options.expires) cookie.push('expires=' + options.expires.toUTCString());
    if(options.path) cookie.push('path=' + options.path);
    if(options.domain) cookie.push('domain=' + options.domain);
    if(options.secure) cookie.push('Secure');
    if(options.httpOnly) cookie.push('HttpOnly');
    
    //return cookie.join('; ');
    res.setHeader('Set-Cookie', cookie.join('; '));
}
//parse the cookie to a obj
exports.parseCookie = function(req){
    let cookie = req.headers.cookie;
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
exports.isFirstVist = function(req, res){
    if(req.headers.cookie.isFirstVist){
        return true;
    }else{
        exports.generateCookie(res, 'isFirstVist','1');
        console.log('sssss');
        return false;
    }
}


const url = require('url');

//parse the path, get obj include controller action param
function initPath(req){
    let path = url.parse(req.url).pathname;
    let reg = /(\/\w+?){2,}/;
    if(reg.test(path)){
        let pathParam = path.split('/');
        let controller = pathParam[1] || 'index';
        let action = pathParam[2] || 'index';
        let param = pathParam.slice(3);

        return {controller, action, param}
    }else{
        //todo error: the path not correct
    }    
}

function controller(req){
    var obj = initPath(req);
    let module = require(`.src/${obj.controller}`)
    // todo according to the business
}

module.exports = {
    initPath
}
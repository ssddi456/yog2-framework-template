/***
 * Yog中间件配置
 * 
 */
module.exports.http = {
    /***************************************************************************
    * 
    * Middleware配置
    *
    * 用于管理加载哪些中间件，以及这些中间件的加载顺序
    *
    * 配置中可以通过字符串引用中间件插件，默认配置中均是Yog2的默认中间件
    *
    * 配置中也可以通过function(req, res, next){}的形式加载中间件而无需使用插件管理
    * 
    ***************************************************************************/  
    // middleware: [
    //     'favicon',
    //     'compression',
    //     'static',
    //     'responseTime',
    //     'cookieParser',
    //     'bodyParser',
    //     'log',
    //     'ral',
    //     'views',
    //     'methodOverride',
    //     'dispatcher',
    //     'notFound',
    //     'error',
    //     function(req, res, next){
    //         next();
    //     }
    // ]
};

module.exports.favicon = {

    /***************************************************************************
    * 
    * favicon.path配置
    *
    * 设置favicon地址
    * 
    ***************************************************************************/

    path: yog.ROOT_PATH + '/static/favicon.ico'
};


/***************************************************************************
* 
* compression配置
*
* 具体配置请参考 https://github.com/expressjs/compression
* 
***************************************************************************/

module.exports.compression = {

};

/***************************************************************************
* 
* static配置
* 
***************************************************************************/

module.exports.static = {

    /***************************************************************************
    * 
    * staticPath配置
    *
    * 设置静态资源的根目录
    * 
    ***************************************************************************/

    staticPath: yog.ROOT_PATH + '/static',

    /***************************************************************************
    * 
    * urlPattern配置
    *
    * 设置静态资源访问的URL前缀
    * 
    ***************************************************************************/

    urlPattern: '/static',


    /***************************************************************************
    * 
    * options配置
    *
    * 参考 https://github.com/expressjs/serve-static#options
    * 
    ***************************************************************************/
    options: {
        maxAge: 0
    },

    /***************************************************************************
    * 
    * notFound配置
    *
    * 设置静态资源未找到时的返回信息
    * 
    ***************************************************************************/

    notFound: function(req, res){
        res.status(404);
        res.send('404: Resource not Found');
    }
};


/***************************************************************************
* 
* cookieParser 配置
*
* 配置可以参考 https://github.com/expressjs/cookie-parser
* 
***************************************************************************/

module.exports.cookieParser = {
    secret: 'yog',
    options: {}
};


/***************************************************************************
* 
* bodyParser 配置
*
* 默认开启urlencoded与json的parser，额外的parser可以自行覆盖bodyParser插件实现
*
* 配置可以参考 https://github.com/expressjs/body-parser
* 
***************************************************************************/

module.exports.bodyParser = {
    urlencoded: {

        /***************************************************************************
        * 
        * exclude配置
        *
        * 可以指定特定的req.path不通过bodyparser.urlencoded处理
        * 
        ***************************************************************************/

        // exclude: [/\//,/\/index/, /\/home\/index/],
        
        extended: false
    }
};

/***************************************************************************
* 
* methodOverride 配置
*
* 用于提供HTTP PUT DELETE的兼容
*
* 可以参考 https://github.com/expressjs/method-override
* 
***************************************************************************/

module.exports.methodOverride = [
    'X-HTTP-Method',
    'X-HTTP-Method-Override',
    'X-Method-Override',
    '_method'
];
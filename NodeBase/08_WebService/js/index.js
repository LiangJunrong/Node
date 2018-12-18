window.onload = function () {
    var MiniSite = new Object();
    /**
     * 判断浏览器
     */
    MiniSite.Browser = {
        ie: /msie/.test(window.navigator.userAgent.toLowerCase()),
        moz: /gecko/.test(window.navigator.userAgent.toLowerCase()),
        opera: /opera/.test(window.navigator.userAgent.toLowerCase()),
        safari: /safari/.test(window.navigator.userAgent.toLowerCase())
    };
    /**
     * JsLoader对象用来加载外部的js文件
     */
    MiniSite.JsLoader = {
        /**
         * 加载外部的js文件
         * @param sUrl 要加载的js的url地址
         * @fCallback js加载完成之后的处理函数
         */
        load: function (sUrl, fCallback) {
            var _script = document.createElement('script');
            _script.setAttribute('charset', 'gbk');
            _script.setAttribute('type', 'text/javascript');
            _script.setAttribute('src', sUrl);
            document.getElementsByTagName('head')[0].appendChild(_script);
            if (MiniSite.Browser.ie) {
                _script.onreadystatechange = function () {
                    if (this.readyState == 'loaded' || this.readyStaate == 'complete') {
                        //fCallback();
                        if (fCallback != undefined) {
                            fCallback();
                        }

                    }
                };
            } else if (MiniSite.Browser.moz) {
                _script.onload = function () {
                    //fCallback(); 
                    if (fCallback != undefined) {
                        fCallback();
                    }
                };
            } else {
                //fCallback();
                if (fCallback != undefined) {
                    fCallback();
                }
            }
        }
    };
    var pc = window.matchMedia('(min-width:1000px)');
    var mobile = window.matchMedia('(min-width:320px)');
    if (pc.matches) {
        MiniSite.JsLoader.load("./js/pc.js", function () {
            console.log("动态加载了pc.js");
        });
    } else {
        MiniSite.JsLoader.load("./js/mobile-terminal-adaptation.js", function () {
            console.log("动态加载了mobile-terminal-adaptation.js.");
            MiniSite.JsLoader.load("./js/mobile.js", function () {
                console.log("动态加载了mobile.js");
            });
        });
    }
}
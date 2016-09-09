var Adam = {
	/**
	 * 根据查询字符串中key获取对应的value
	 * @param  {String} key
	 * @return {String}
	 */
	getQueryParam: function(key){
	    var reg = new RegExp("(^|\\?|&)"+ key +"=([^&]*)(\\s|&|$)", "i");
	    if (reg.test(location.search)){
	    return decodeURIComponent(RegExp.$2.replace(/\+/g, " "));
	    }
	    return "";
	},

	/**
	 * 向url查询字符串中添加key及value，若key已有，则替换相应的value值，并返回操作后新的url
	 * @param {String} url   
	 * @param {String | Boolean | Number} key   
	 * @param {String | Boolean | Number} value 
	 * @return {String} 
	 */
	
	addQueryParam: function(url, key, value){
	    var newParam = key+"="+value;
	    var result = url.replace(new RegExp("(&|\\?)"+key+"=[^\&|#]*"), '$1' + newParam);
	    if (result === url) { 
	        result = (url.indexOf("?") != -1 ? url.split("?")[0]+"?"+newParam+"&"+url.split("?")[1] 
	           : (url.indexOf("#") != -1 ? url.split("#")[0]+"?"+newParam+"#"+ url.split("#")[1] 
	              : url+'?'+newParam));
	    }
	    return result;
	},
	/**
	 * 从url查询字符串中删除相应的key及value，并返回操作后新的url
	 * @param  {String} url  
	 * @param  {Sring | Boolean | Number} key
	 * @return {String}       
	 */
	removeQueryParam: function(url, key){
	        var urlparts= url.split('?');
	        var search = urlparts[1].split(/#/g)[0];   
	        var hash = urlparts[1].split(/#/g)[1];
	        if (urlparts.length>=2) {
	            var prefix= encodeURIComponent(key)+'=';
	            var pars= search.split(/&/g);
	            for (var i= pars.length; i-- > 0;) {    
	                if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
	                    pars.splice(i, 1);
	                };
	            };
	            url= urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
	            url = hash ? url += ("#"+hash) : url;
	            return url;
	        } else {
	            return url;
	        };
	},
	
	/**
	 * EcmaScript同步睡眠函数
	 * @param  {Number} milliSecond 毫秒
	 */
	ecmaSleep: function(milliSecond){
		var startTime = new Date().getTime();
		while(new Date().getTime() <= milliSecond + startTime) {
		}
	},
};

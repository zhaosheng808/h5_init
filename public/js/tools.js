/**
 * Created by DELL on 2018/1/27.
 */
;
(function () {

  var tools = {
    is_wxBrowser: function () { // 微信浏览器
      return /micromessenger/.test(navigator.userAgent.toLowerCase());
    },
    is_wbBrowser: function () {  // 微博浏览器
      return /weibo/i.test(navigator.userAgent.toLowerCase());
    },
    is_iOS: function () {
      return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
    },
    is_Android: function () {
      return /android/i.test(navigator.userAgent);
    },
    getParams: function () {
      var url = decodeURI(window.location.href);
      var theRequest = {};
      // var start = url.indexOf("?");
      var start = url.lastIndexOf("?");//ios现在是两个问号
      if (start !== -1) {
        var str = url.substr(start + 1); // substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    }
  };
  window.tools = tools;
})();
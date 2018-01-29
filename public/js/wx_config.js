/*
* 调用方法：
 var wxconfig = new WxConfig();
 var appid = appConfig.appID;
 var link = obj.link || appConfig.base_url;
 var title = obj.title || '不管你在哪里High, 请拿出最美的姿态跟祖国来张自拍';
 var desc = obj.desc || '用你的freestyle为祖国打call，是这个国庆最酷最in的flow';
 var imgUrl = obj.imgUrl || appConfig.base_url + '/images/wxShare.png';
 wxconfig.init({
 appid: appid,
 url: window.location.href,
 link: link,
 debug: false,
 title: title,
 desc: desc,
 imgUrl: imgUrl
 });
*
* */
;
(function ($, global) {
  var defaults = {
    debug: true,
    jsApiList: [
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "onMenuShareQQ",
      "onMenuShareWeibo",
      "onMenuShareQZone",
      "startRecord",
      "stopRecord",
      "onVoiceRecordEnd",
      "playVoice",
      "pauseVoice",
      "stopVoice",
      "onVoicePlayEnd",
      "uploadVoice",
      "downloadVoice",
      "chooseImage",
      "previewImage",
      "uploadImage",
      "downloadImage",
      "translateVoice",
      "getNetworkType",
      "openLocation",
      "getLocation",
      "hideOptionMenu",
      "showOptionMenu",
      "hideMenuItems",
      "showMenuItems",
      "hideAllNonBaseMenuItem",
      "showAllNonBaseMenuItem",
      "closeWindow",
      "scanQRCode",
      "chooseWXPay",
      "openProductSpecificView",
      "addCard",
      "chooseCard",
      "openCard"
    ]
  };

  var WxConfig = function () {

  };

  WxConfig.prototype = {
    init: function (options) {
      options = $.extend({}, defaults, options);
      $.ajax({
        type: 'get',
        url: 'https://api.newscctv.net/base/wx_config.php',
        data: {
          appid: options.appid,
          url: options.url
        },
        dataType: 'jsonp',
        success: function (result) {
          if (result.result == 0) {
            wx.config({
              debug: options.debug,
              appId: result.data.appid,
              timestamp: result.data.timestamp,
              nonceStr: result.data.noncestr,
              signature: result.data.signature,
              jsApiList: options.jsApiList
            });

            wx.ready(function () {
              wx.onMenuShareTimeline({
                title: options.title,
                link: options.link,
                imgUrl: options.imgUrl,
                success: function (res) {
                  if (typeof options.SUCCESS_CALLBACK !== 'undefined') {
                    options.SUCCESS_CALLBACK();
                  }
                },
                cancel: function (res) {
                },
                fail: function (result) {
                }
              });
              wx.onMenuShareAppMessage({
                title: options.title,
                desc: options.desc,
                link: options.link,
                imgUrl: options.imgUrl,
                success: function (res) {
                  if (typeof options.SUCCESS_CALLBACK !== 'undefined') {
                    options.SUCCESS_CALLBACK();
                  }
                },
                cancel: function (res) {
                },
                fail: function (result) {
                }
              });
              wx.onMenuShareQQ({
                title: options.title,
                desc: options.desc,
                link: options.link,
                imgUrl: options.imgUrl,
                success: function () {

                },
                cancel: function () {

                }
              });
              wx.onMenuShareWeibo({
                title: options.title,
                desc: options.desc,
                link: options.link,
                imgUrl: options.imgUrl,
                success: function () {

                },
                cancel: function () {

                }
              });
              wx.onMenuShareQZone({
                title: options.title,
                desc: options.desc,
                link: options.link,
                imgUrl: options.imgUrl,
                success: function () {

                },
                cancel: function () {

                }
              });
            });

            wx.error(function (res) {
              // alert("wx_error:" + JSON.stringify(res));
            })
          }
        }
      });
    }
  }

  /* CommonJS */
  if (typeof require === 'function' && typeof module === 'object' && module && typeof exports === 'object' && exports)
    module.exports = WxConfig;
  /* AMD */
  else if (typeof define === 'function' && define['amd'])
    define(function () {
      return WxConfig;
    });
  /* Global */
  else
    global['WxConfig'] = global['WxConfig'] || WxConfig;
})(jQuery, window);

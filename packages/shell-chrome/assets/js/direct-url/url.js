/*
 ** sites对象说明：
 ** @name: 跳转前的域名
 ** @include: 
 ** @selector: 跳转前确认跳转页面-按钮的类名
 */

const sites = {
  "c.pc.qq.com": {
    include: "middlem.html?pfurl=",
    selector: "#url",
  },
  "docs.qq.com": {
    include: "scenario/link.html?url=",
    selector: "span.url-src",
    timeout: 500,
  },
  "www.tianyancha.com": {
    include: "security?target=",
    selector: "div.security-link",
  },
  "jump.bdimg.com": {
    include: "safecheck/index?url=",
    selector: "div.warning_info.fl>a",
  },
  "jump2.bdimg.com": {
    include: "safecheck/index?url=",
    selector: "div.warning_info.fl>a",
  },
  "www.chinaz.com": {
    include: "go.shtml?url=",
    selector: "div.link-bd__text",
  },
  "www.douban.com": {
    include: "link2/?url=",
    selector: "a.btn-redir",
  },
  "iphone.myzaker.com": {
    include: "zaker/link.php?",
    selector: "a.btn",
  },
  "www.itdaan.com": {
    include: "link/",
    selector: "a.c-footer-a1",
  },
  "link.csdn.net": {
    include: "?target=",
    selector: "a.loading-btn",
    timeout: 100,
  },
  "link.zhihu.com": {
    include: "?target=",
    selector: "a.button"
  },
  "link.juejin.cn": {
    include: "?target=",
    selector: 'p[style="margin: 0px;"]',
  },
  "www.jianshu.com": {
    include: "go-wild?ac=2&url=",
    selector: 'div[title^="http"], div[title^="www"]',
  },
  // QQ、腾讯文档、天眼查、百度贴吧、站长之家、豆瓣、Zaker、开发者知识库、CSDN、知乎、掘金、简书etc...
}

window.onload = function () {
  console.log("[BitDance extension] 学生助手插件 - 确认跳转页直接跳转模块加载成功");

  chrome.storage.sync.get("State_DirectUrl", ({
    State_DirectUrl
  }) => {
    if (State_DirectUrl) {
      // 获取跳转前页面的主机名、页面地址
      let locHost = location.host,
        locHref = location.href;

      try {
        url(locHref, locHost);
      } catch {
        console.log('[BitDance extension] 学生助手插件 - 当前没有可自动跳转网页或当前页面不支持链接自动跳转')
      }

      function url(locHref, locHost) {
        // 跳转前页面的地址后缀带有的重定向网址
        const splitFlag = sites[locHost] && sites[locHost].include;
        // 跳转前页面中点击继续访问DOM的选择器，便于获取其中的url
        const selector = sites[locHost] && sites[locHost].selector;
        if (!splitFlag && !selector) {
          console.log('[BitDance extension] 学生助手插件 - 当前没有可自动跳转网页或当前页面不支持链接自动跳转！！！');
          return;
        }
        if (splitFlag) {
          locHref = locHref.split(splitFlag);
          location.replace(decodeURIComponent(locHref[1]));
        } else if (selector) {
          let target = document.querySelector(sites[locHost].selector);
          location.replace(target.href || target.innerText)
        }
      }
    }
  })
}

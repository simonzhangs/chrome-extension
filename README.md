# 学生助手 Chrome浏览器插件

## 简介 Overview

本项目名为学生助手，是一个Chrome浏览器扩展插件。主要针对学生群体，提高资料检索以及日常使用的便捷性、高效性及可定制性。

## 链接汇总 Link Summary

Gitee仓库：https://gitee.com/bitdance-team/chrome-extension

GitHub仓库：https://github.com/bitdance-team/chrome-extension

后台Api接口（轻服务）：https://qcmma8.app.cloudendpoint.cn/api/swagger-html

项目文档：https://qca566.api.cloudendpoint.cn/getFile?file=doc

项目展示PPT：https://qca566.api.cloudendpoint.cn/getFile?file=ppt

## 快速上手 Quick Start

第一步 下载扩展包并解压：[码云下载](https://gitee.com/bitdance-team/chrome-extension/repository/archive/master.zip) [GitHub下载](https://codeload.github.com/bitdance-team/chrome-extension/zip/refs/heads/master)

第二步 打开Chrome浏览器并访问`chrome://extensions/`

> 请确保你已经安装了谷歌浏览器。如果没有安装，[点击此处下载](https://www.google.com/intl/zh-CN/chrome/)

第三步 打开开发者模式

第四步 点击“加载已解压的扩展程序”

第五步 选择刚刚下载的压缩包的 `packages/shell-chrome` 目录即可完成安装

## 作者 Authors

[张博凯](https://github.com/coder-xiaomo)、[郑丽](https://gitee.com/zhneglili)、[郑小双](https://gitee.com/xiao_io)、张君秋、[舒诗铜](https://gitee.com/pikoyo)、张松、朱穆峰

### 分工 Division of labor

张博凯：DoubleS快捷搜索，Google广告屏蔽，代码仓库分支合并，项目Bug修复

郑小双：扩展主面板，阅读原文自动展开，鼠标样式及鼠标动效

郑丽：天气展示功能，翻译功能（使用轻服务云函数构建Api）

张君秋：网页截图功能，PPT制作

张松：确认页直接跳转功能，番茄钟

舒诗铜：轻服务后端Api（用户登录、文件上传、备忘录等），备忘录功能，仓库架构

朱穆峰：护眼模式，夜间模式

## 插件原理

### direct url - 确认页链接自动跳转

在大型社区网站，比如某乎或某金，在点击外链时候，会多弹出一个安全页，还需要再额外点击一次。而此功能就是基于上述情景开发的，通过获取该安全页url中后缀携带的就是跳转的链接，或者获取安全页面DOM节点来获取要跳转的链接，利用`location.replace`方法进行页面跳转。

实现方法是通过浏览器的`location`接口来进行操作，具体学习见[Location - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)

### 自动展开全文

获取遮罩层的DOM节点，移除该DOM节点；同时获取内容区域的DOM节点，其中包括可视和非可视区，一般非可视区是通过CSS样式来实现隐藏的，移除该类即可。

### 鼠标点击特效、鼠标样式

- 获取鼠标点击时的坐标点，添加对应的特效DOM节点和CSS样式，通过`requireAnimation`来进行特效动画绘制。
- 鼠标样式：利用CSS设置cursor的url属性，更换为对应的base64图片即可。

### 番茄钟

利用番茄钟页面和浏览器`background.js`之间通信，通信方式为`chrome.runtime.sendMessage`和`chrome.runtime.onMessage`；通过传递pomoData对象中状态信息和计时信息来同步番茄钟信息。

## 许可证 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for the full license text.

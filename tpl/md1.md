---
typora-copy-images-to: images
---

>  第一篇有界面主题的文章。
>
> 主题取名叫夜哨如何。
>
> 这两天终于把写作流程疏通一点了，但图片仍不能直接复制，暂时无解。

## 公众号被开通

开通公众号有段时日，却仍不知道如何定位。内心有一丝丝野心，想要更多人来看，可那必然有个话题，不然天天写些个猫屁狗屎谁在乎呢

就算很专注地写个话题也很可能也没人看

我还是放松点吧，像这样

今天来说说公众号怎么开通的

在这读完，你可以知道公众号到底可以干啥，以及如何进行初步的写作

## 开通后呢

​	公众号分为订阅号和服务号，区别是服务号功能多一点，可以用来卖东西，而订阅号是单纯地发发消息

​	订阅号之中有个较大的区别就是认证。认证等于购买增值服务，这些服务对于个人来说用处不大，主要是来开发。

​	如果是开发者，认证后的好处包括下面：

**发送消息**

- 客服接口（一般人也用不着）
- 群发接口 （不用登陆后台手动去发了）

**用户管理**

- 用户分组
- 设置备注名
- 获取用户基本信息
- 获取用户列表

**自定义菜单**

- 功能挺多，可以推送对应信息，可以调用很多系统原生功能，拍照、扫一扫、获取地理位置、跳转页面等等

**分享接口**

- 分享到腾迅系的应用，包括qq、微博、朋友圈等等

---

​	如果开发者没认证，也可以有以下功能：

**接收消息**

- 可以收到用户发送的消息，并且自己制定规则返回。公众平台自带关键字回复，其实也不赖了。

**图片接口**

- 可以让用户上传图片到微信的服务器，然后你自己再下载下来

**音频接口**

- 控制录音功能，并且可以上传，你自己再下载

**智能接口**

- 语音识别而已

**设备是否有网**，获取地理位置

**调起扫一扫**

认证的情况基本如此，价格每年300，不过现在微信不允许个人认证。

如果真要做点什么，建议开通服务号，因为目前新开通的账号没有留言功能了，比如我，而只有服务号可以通过账号迁移来获取留言功能。

## 注册

​	有邮箱就可以，并且要用自己的微信验证。另外说一下，一个邮箱只能注册一个微信公众平台的功能，比如不能同时用来注册小程序和公众号。

### 管理后台

​	订阅号的管理后台，简洁明了，看起来挺舒服的。![1545146291002](images/1545146291002.png)

​	响应式页面，看起来用vue写的，最低支持800像素宽的设备，不支持移动端。800-1150像素时候，左边的菜单栏会变成按钮，菜单栏隐藏，点击按钮会弹出。

有个体验问题，点击菜单的时候会刷新页面并滚动到顶部，打算顺着菜单往下点的话需要一通滚下来。

---

​	接下来介绍功能。



![1545147173567](images/1545147173567.png)

​	自动回复有三个

**关键词回复**

- 设置关键词，很多订阅号常用这功能。关键字就是文字而已，不支持正则匹配。
- 半匹配，只要消息中包含就可以，像是模糊匹配，而全匹配就是要完整相等。
- 回复内容多种多样，也可以选择随机回复，看起来更智能一点。

**自定义菜单**

- 菜单最多3个，再多就要弄子菜单。
- 菜单功能是发送消息，跳转页面，跳转小程序
- 跳转页面功能很受限制，只能是自己做得东西。

**投票管理**

- 这个挺棒的，基本就那样，有些订阅号用过。

**页面模板**

- 展示自己消息的模板，可以放到自定义菜单里面，也可以当作消息发送出去

**赞赏功能**

- > 同一作者名发表3篇以上的原创文章，可创建赞赏账户，用于赞赏收款。

**原创管理**

- 据说声明原创的话会对文章进行检验，大概类似论文查重。

**添加功能插件**

- 上图中那些不要钱的功能我都添加了

---------

​	功能介绍完毕，下面看看别的。

​	小程序，关联之后可以从订阅号链接过去，就这么个功能。

​	接下来是管理。

**消息管理**

- 可以查看所有人发送的消息，普通消息5天，多媒体消息3天。可以根据时间还有赞赏总额来排序（赞赏总额这选项...）

**用户管理**

- 查看所有关注你的用户，包括你们的互动，用户给你的赞赏
- 搜索昵称（搜了几次发现搜不到，大概出bug了）
- 和用户聊天
- 给用户分组，添加备注，也可以拉入黑名单

**素材管理**

![1545149081220](images/1545149081220.png)

基本上所有文章就是一个这样的编辑器，功能比较少，但好处是用户如果老实一点很快就能掌握个普通水平的排版。

可以添加图文模板，比如扫码和个人logo或者口号，常见片段。

----

**推广**

- 用来赚钱的，流量大一点好像就可以
- 但要认证才行，就是说没交钱的话肯定没法挣腾讯的钱

####统计

​	挺有意思的，一些模块很详尽。可以给运营者很好的参考。

**用户分析**

![1545149858614](images/1545149858614.png)

这些指标挺酷，如果看到关注人数越来越多，心里大概美滋滋。

主要用来判断内容是否合适。

**图文分析**

- 可以查看所有文章被都了多少次，来源哪里，分享转发次数，收藏次数。如果要写软文，大概要根据这些来报价。

- 查看单篇文章的分析

  转化率：分一次传播和二次传播，二次传播包括用户又分享到朋友圈等等

  趋势图：各种渠道的阅读趋势![1545150551845](images/1545150551845.png)

  用户分布，包括性别，机型，还有地区分布

  总得来说都很有意思！！



**菜单分析**

- 点击次数统计

**消息分析**

- 发送次数等等

**接口分析和网页分析**

- 这个是开发用的统计数据

**设置和开发**

- 设置模块很常见
- 开发模块一般人用不着



​	

​	

##不写了

显示这篇文章有四千字了，整理一下发了算了。
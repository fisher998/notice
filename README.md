# vant-test

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# javaH5接口需求文档
> javaH5部分的接口
## 首页
> 缺公告类型 是否置顶
```bash
1. 通知类型对应未读数量
2. 公告类型、标题、时间、链接、是否置顶、封面图、通知id、支持上拉加载（默认20条）
```
## 评论页
```bash
1. 操作人的头像和id、操作人的昵称、评论的对象的类型、封面、内容摘要、评论的时间、一级评论id、二级评论id
```
## 喜欢页
> 补充喜欢了别人的二级评论
> 补充评论内容
```bash

```
## 更多
> 需要加入type类型
```bash
1. 头像是官方logo
```
## 转发
> 转发type类型（故事或长文）
```bash
1. 操作者的id和头像和昵称
```
## 提及
> 提及type类型
```bash
1. 操作者的id和头像和昵称
```
## 申诉
> 基于哪一条通知的申诉记录的id

## 说明
> 为区分交互方法，与原生交互使用方法 加前缀
> H5名称需要 加  “JS__”。

## 使用
> H5 -> app  // web 调用 app
> app -> H5  // app 调用 web


## 方法

> 打开文章
> 包括长文及短故事
> H5 -> app
```bash
name: JS__openArticle
app_name: JS__openArticle

return:
// 新增参数 content_type: 文章类型  type:Number   1:短文 2:长文

    ios =>  data： {"arti_id": arti_id, "contentType": contentType }

    android =>  data：  (arti_id, contentType)

params:
    @arti_id     type: String  // 文章ID
    @contentType type: Number  // 文章类型   1:短文    2: 长文
```



> 打开评论
> 包括一级、二级评论

```bash
name:  JS__openComment
app_name: JS__openComment
return:
// 新增参数 content_type: 文章类型  type:Number   1:短文 2:长文

    ios =>   data:   {"arti_id": arti_id, "content_type": content_type  ,"user_id": user_id, "comment_id", comment_id, "comment_id_2": comment_id_2}

    android =>    data: (arti_id, content_type, user_id, comment_id, comment_id_2)


params:
    @arti_id   type: String   // 文章ID
    @content_type    type: Number    // 文章类型   1: 短文  2: 长文
    @user_id   type: String   // 文章的用户ID
    @comment_id    type: String    // 一级评论ID
    @comment_id_2    type: String    // 二级评论ID


注: 如果是 一级评论 则 "comment_id_2" 不传
```


> 获取当前未读通知数
> h5 页面中当前未读通知数总和
> app -> H5
```bash
name: JS__getCurrentCount
app_name: JS__getCurrentCount

return:
    ios ->  data: {"count": count}
    android -> data: (count)

params:
    @count    type: Number    // H5当前剩余未读数
```
> 启用阻止回退
> 对某个页面启用阻止回退功能
> app -> H5

```bash
name: JS__watchPreventBack
app_name: JS__watchPreventBack

return:
    ios ->  data: {"type": type}
    android -> data: (type)

params:
    @type    type: Boolean    //  true: 开启    false: 取消
```

> 阻止回退
> 阻止页面回退
> app -> H5
```bash
name: JS__preventBack
app_name: JS__preventBack
return:
    ios ->  data: {"back": back}
    android -> data: (back)

params:
    @back    type: Boolean    //  true: 不能回退    false: 可以回退
```

> 关闭webView
> app -> H5
```bash
name: JS__closePage
app_name: closePage   // 由于历史问题， 该方法app端不加 "JS__" 前缀

return:
    ios ->  data: {"back": null}
    android -> data: (null)

params:


注: 该方法不需要参数
```











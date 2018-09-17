// 全局注入
// app调用web时需要注入以下方法
// window.对应方法名_getState // type: Function

/*
打开文章
@arti_id     文章id
@content_type  1短文 2长文
*/
export function JS__openArticle (arti_id, content_type) {
    // console.log('JS__openArticle' + '\n' + 'arti_id:' + arti_id + '\n' + 'content_type:' + content_type)
    if (/android/i.test(navigator.userAgent)) {
        try {
            window.android.JS__openArticle(arti_id, content_type)
        } catch (e) {
            console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            window.webkit.messageHandlers.JS__openArticle.postMessage({ arti_id , content_type})
        } catch (e) {
            console.log(e)
        }
    }
};

/*
打开评论
@arti_id    文章id
@comment_id 评论id
@content_type  1短文 2长文
*/
export function JS__openComment (arti_id, content_type, user_id, comment_id, comment_id_2) {
    // console.log('JS__openComment' + '\n' + 'arti_id:' + arti_id + '\n' + 'content_type:' + content_type + '\n' + 'user_id:' + user_id + '\n' + 'comment_id:' + comment_id + '\n' + 'comment_id_2:' + comment_id_2)
    if (!comment_id_2) {
        if (/android/i.test(navigator.userAgent)) {
            try {
                window.android.JS__openComment(arti_id, content_type, user_id, comment_id)
            } catch (e) {
                console.log(e)
            }
        } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
            try {
                window.webkit.messageHandlers.JS__openComment.postMessage({ arti_id, content_type, user_id, comment_id })
            } catch (e) {
                console.log(e)
            }
        }
    } else {
        if (/android/i.test(navigator.userAgent)) {
            try {
                window.android.JS__openComment(arti_id, content_type, user_id, comment_id, comment_id_2)
            } catch (e) {
                console.log(e)
            }
        } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
            try {
                window.webkit.messageHandlers.JS__openComment.postMessage({ arti_id, content_type, user_id, comment_id, comment_id_2 })
            } catch (e) {
                console.log(e)
            }
        }
    }
};

/*
打开个人主页
@user_id    用户id
*/
export function JS__openPersonalCenter (user_id) {

    // console.log('JS__openPersonalCenter' + '\n' + 'user_id:' + user_id)
    
  if (/android/i.test(navigator.userAgent)) {
    try {
      window.android.JS__openPersonalCenter(user_id)
    } catch (e) {
      console.log(e)
    }
  } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
    try {
      window.webkit.messageHandlers.JS__openPersonalCenter.postMessage({user_id})
    } catch (e) {
      console.log(e)
    }
  }
};

/*
打开喜欢
@arti_id    文章id
@content_type    文章类型  1短文 2长文
*/
export function JS__openLike (arti_id, content_type) {
    // console.log('JS__openLike' + '\n' + 'arti_id:' + arti_id + '\n' + 'content_type:' + content_type)
  if (/android/i.test(navigator.userAgent)) {
    try {
      window.android.JS__openLike(arti_id, content_type)
    } catch (e) {
      console.log(e)
    }
  } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
    try {
      window.webkit.messageHandlers.JS__openLike.postMessage({arti_id, content_type})
    } catch (e) {
      console.log(e)
    }
  }
};

/*
获取当前未读通知数

*/
export function JS__getCurrentCount () {
    // console.log('JS__getCurrentCount:' + window.JS__getCurrentCount_getState ? window.JS__getCurrentCount_getState() : 0)
    if (/android/i.test(navigator.userAgent)) {
        try {
            return window.JS__getCurrentCount_getState ? window.JS__getCurrentCount_getState() : 0
        } catch (e) {
            console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            return {'body': {count: window.JS__getCurrentCount_getState ? window.JS__getCurrentCount_getState() : 0 }}
        } catch (e) {
            console.log(e)
        }
    }

}
/*
启用阻止回退
ture    开启
false   取消
*/
export function JS__watchPreventBack (type) {
  if (/android/i.test(navigator.userAgent)) {
    try {
      window.android.JS__watchPreventBack(type)
    } catch (e) {
      console.log(e)
    }
  } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
    try {
      window.webkit.messageHandlers.JS__watchPreventBack.postMessage({type :type })
    } catch (e) {
      console.log(e)
    }
  }
}

/*
@true
*/
export function JS__preventBack () {
    if (/android/i.test(navigator.userAgent)) {
        try {
            return window.JS__preventBack_getState ? window.JS__preventBack_getState() : null;
        } catch (e) {
            console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            return {back: window.JS__preventBack_getState ? window.JS__preventBack_getState() : null}
        } catch (e) {
            console.log(e)
        }
    }
}

/*
退回上一页

/*
关闭页面
*/
export function JS__closePage() {
    if (/android/i.test(navigator.userAgent)) {
        try {
            window.android.closePage()
        } catch (e) {
            console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            window.webkit.messageHandlers.closePage.postMessage({'body': {}})
        } catch (e) {
            console.log(e)
        }
    }
}


/*
改title
*/
export function JS__changeTitle(text) {
    document.getElementsByTagName('title')[0].innerHTML = text
    if (/android/i.test(navigator.userAgent)) {
        try {
        window.android.changeTitle(text)
        } catch (e) {
        console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
        window.webkit.messageHandlers.changeTitle.postMessage({'body': text})
        } catch (e) {
        console.log(e)
        }
  }
}


/*
tokenError 时调用 

*/
export function JS__tokenError() {
    if (/android/i.test(navigator.userAgent)) {
        try {
            window.android.JS__tokenError()
        } catch (e) {
            console.log(e)
        }
    } else if (/ios|iphone|ipod|pad/i.test(navigator.userAgent)) {
        try {
            window.webkit.messageHandlers.JS__tokenError.postMessage({})
        } catch (e) {
            console.log(e)
        }
    }
}
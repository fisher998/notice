export function getParamsByUrl(url) {
    var constParams = url.split('?')[1].split('&');
    var obj = {};
    for (var item of constParams) {
        var itemArr = item.split('=');
        var key = itemArr[0];
        var value = itemArr[1];
        var itemObj = {
            [key]: value
        }
        obj = Object.assign(obj, itemObj);
    }
    return obj;
}
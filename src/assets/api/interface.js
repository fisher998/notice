import fetch from '@/utils/fetch';
/*
token               用户token    String
language_type       语言类型   （1  中文   2  英文  3   韩文）
last_id             上页最后一个id
count               每页记录数
*/
export function unreadNotify(token, language_type, last_id, count) {
    const params = {
        token,
        language_type,
        last_id,
        count
    };
    return fetch({
        url: 'messageNotify/getVarietyMessageCount',
        method: 'post',
        params
    });
}
/*
token                                用户token
message_type                 消息类型   （1 评论 2 喜爱  3 转发  4 订阅  5 提及  6 更多）
last_id                              上页最后一个id
count                                每页记录数
*/
export function getUnReadNotify(token, message_type, last_id, count) {
    const params = {
        token,
        message_type,
        last_id,
        count
    };
    return fetch({
        url: 'messageNotify/intoUnreadMessage',
        method: 'post',
        params
    })
}

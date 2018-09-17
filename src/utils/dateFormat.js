import i18n from '../i18n/i18n';
function noticeTimeFormat(noticeTime, timeDifference) {
    var date = new Date(noticeTime);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var min = date.getMinutes();
    // if (timeDifference < 24 * 60 * 60 * 1000 * 365) {
    //     return `${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}: ${min < 10 ? '0' + min : min}`;
    // } else {
    //     return `${year}/${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}: ${min < 10 ? '0' + min : min}`;
    // }
    return { 
        details: `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`,
        normalTime: `${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day} ${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`
    }
};
// export function dateFormat (currentTime = 1533375718598, noticeTime = 1533375718598 - 60 * 1000 * 119 * 1) {
export function dateFormat (currentTime, noticeTime) {
    // 1min     60 * 1000
    // 1hour    60 * 60 * 1000
    // 1day     24 * 60 * 60 * 1000
    var min = 60 * 1000;
    var hour = 60 * 60 *1000;
    var day = 24 * 60 * 60 * 1000;
    var year = 365 * 24 * 60 *60 *1000;
    var timeDifference = currentTime - noticeTime;
    var formatTime = noticeTimeFormat(noticeTime, timeDifference);
    var details = formatTime.details;
    var normalTime = formatTime.normalTime;
    console.log()
    if (timeDifference < min) {
        return {
            list: i18n.t('time.moment'),
            details: details,
            normalTime: normalTime
        }
    } else if (timeDifference >= min && timeDifference < hour) {
        return {
            list: Math.floor((timeDifference / min)) + i18n.t('time.minAgo'),
            details: details,
            normalTime: normalTime
        }
    } else if (timeDifference >= hour && timeDifference < day) {
        return {
            list: Math.floor((timeDifference / hour)) + i18n.t('time.hourAgo'),
            details: details,
            normalTime: normalTime
        }
    } else if (timeDifference >= day && timeDifference < year) {
        return {
            list: details,
            details: details,
            normalTime: normalTime
        }
    } else {
        return {
            list: details.split(' ')[0],
            details: details,
            normalTime: details
        }
    }
};

export function formatDate (timeStr,formatType) {
    if (timeStr) {
        if(timeStr == ''){
            return '';
        }
        var date = new Date(time);
        timeStr = timeStr + '';
        timeStr = timeStr.substring(0, 10);
        if(typeof(timeZone) == 'number') {
            timeStr = parseInt(timeStr) + parseInt(timeZone) * 60 * 60;
        }
        var time = new Date(timeStr * 1000);
        var ymdhis = "";
        if (formatType && formatType == 1) {
            ymdhis += time.getFullYear() + "-";
            ymdhis += ((time.getMonth() + 1) > 9 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + "-";
            ymdhis += (time.getDate() > 9 ? time.getDate() : '0' + time.getDate());
            ymdhis += " " + (time.getHours() > 9 ? time.getHours() : '0' + time.getHours()) + ":";
            ymdhis += (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()) + ":";
            ymdhis += (time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds());
        }else if (formatType && formatType == 2) {
            ymdhis += time.getFullYear() + "-";
            ymdhis += ((time.getMonth() + 1) > 9 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + "-";
            ymdhis += (time.getDate() > 9 ? time.getDate() : '0' + time.getDate());
            // ymdhis += " " + (time.getHours() > 9 ? time.getHours() : '0' + time.getHours()) + ":";
            // ymdhis += (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes()) + ":";
            // ymdhis += (time.getSeconds() > 9 ? time.getSeconds() : '0' + time.getSeconds());
        }else{
            ymdhis += ((time.getMonth() + 1) > 9 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + "-";
            ymdhis += (time.getDate() > 9 ? time.getDate() : '0' + time.getDate());
            ymdhis += " " + (time.getHours() > 9 ? time.getHours() : '0' + time.getHours()) + ":";
            ymdhis += (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes());
        }
        return ymdhis;
    }else{
        return '';
    }
}

export function currentTime (formatType) {
    var time = new Date();

    var ymdhis = "";
    ymdhis += time.getFullYear() + "-";

    ymdhis += ((time.getMonth() + 1) > 9 ? (time.getMonth() + 1) : '0' + (time.getMonth() + 1)) + "-";
    ymdhis += (time.getDate() > 9 ? time.getDate() : '0' + time.getDate());

    if (formatType && formatType == 1) {
        ymdhis += " " + (time.getHours() > 9 ? time.getHours() : '0' + time.getHours()) + ":";
        ymdhis += (time.getMinutes() > 9 ? time.getMinutes() : '0' + time.getMinutes());
    }
    return ymdhis;
}

export function getTimestamp (timeDate,currentTimestamp) {
    var timestamp = '';
    if (currentTimestamp == 1) {
        timestamp = Date.parse(new Date());
    }else{
        timestamp = Date.parse(new Date(timeDate));
    }
    return timestamp;
}

export function getTimestampDay (timeDate,currentTimestamp) {
    var timestamp = '';
    if (currentTimestamp == 1) {
        timestamp = Date.parse(new Date(new Date().setHours(0, 0, 0, 0)));
    }else{
        var now = timestamp = Date.parse(new Date(new Date().setHours(0, 0, 0, 0)));
        timestamp = now - 86400000;
    }
    return timestamp;
}
export function gettimebefore (time) {
              var timer=new Date().getTime()-time;
              if(timer/1000<60){
                   return '刚刚'
              }
              else if(timer/1000/60<60){     //分钟
                  return parseInt(timer/1000/60)+' 分钟前';
              }else if(timer/1000/60/60<24){  //小时
                      return  parseInt(timer/1000/60/60)+' 小时前'
              }else if(timer/1000/60/60/24<30){
                  return parseInt(timer/1000/60/60/24)+' 天前'
              }else if(timer/1000/60/60/24/30<12){
                    return parseInt(timer/1000/60/60/24/30)+' 月前'
              }else {
                   return parseInt(timer/1000/60/60/24/30/12)+' 年前'
              }
         }
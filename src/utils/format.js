//比较两个时间的大小
export function compareDate(start,end){
    if(start&&end&&new Date(end)-new Date(start)>=0){
        return true;
    }else{
        return false
    }
}
//日期格式转化 转化成yyyy-MM-dd HH:mm:ss
export function formateDate(dateStr=new Date()){
    var date = new Date(dateStr);
    let Y = date.getFullYear(),
        M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1),
        D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()),
        h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()),
        m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()),
        s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s
}
//搜索条件，按时间段时候，时间格式转化
export function datePickerRangeTimeFormate(start,end){
    let startTime=start+" "+"00:00:00";
    let endTime=end+" "+"23:59:59"
  return [startTime,endTime]
}
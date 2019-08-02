import Vue from 'vue'

Vue.filter('date', function(date, formate) {
    formate = formate || "yyyy-MM-dd HH:mm:ss";
    date = date instanceof Date ? date : new Date(date != null ? date : "");
    // console.log(date);

    if (!isNaN(date.getTime())) {
        let year = date.getFullYear() + "";
        let month = date.getMonth() + 1;
        month = month > 9 ? month + "" : '0' + month;
        let day = date.getDate();
        day = day > 9 ? day + "" : "0" + day;

        let times = date.toTimeString().slice(0, 8).split(":");

        // let hours = formate.indexOf('hh')==-1? times[0]:times[0]>12?times[0]-9:times[0];
        let dayPart = times[0] > 12 ? "PM" : "AM";
        let is12Hours = formate.indexOf('hh') != -1;

        let hours = formate.indexOf('hh') != -1 && times[0] > 12 ? "0" + (times[0] - 12) : times[0];
        let minutes = times[1];
        let seconds = times[2];


        /**
         * 
         * yyyy     年
         * MM       月
         * dd       日
         * 
         * yyyy-MM      年-月
         * yyyy/MM      年/月
         * 
         * yyyy-MM-dd   年-月-日
         * yyyy/MM/dd   年/月/日
         * 
         * MM-dd        月-日
         * MM/dd        月/日
         * 
         * HH       时
         * mm       分
         * ss       秒
         * 
         * HH:mm        时:分  
         * mm:ss        分:秒
         * HH:mm:ss     时:分:秒
         * 
         * yyyy-MM-dd HH:mm:ss      年-月-日 时:分:秒
         * yyyy/MM/dd HH:mm:ss      年/月/日 时:分:秒
         * 
         */

        let result = formate.replace("yyyy", year).replace("MM", month).replace("dd", day).replace(/HH|hh/g, hours).replace("mm", minutes).replace("ss", seconds) + (is12Hours ? " " + dayPart : "");

        // console.log(result);

        return result;

    } else {
        return "--";
    }

})
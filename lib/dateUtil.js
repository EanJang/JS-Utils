import moment from 'moment';

export const dateUtil = {

    // format date to "YYYY-MM-DD HH:mm:ss"
    // without moment
    formatDate1(date) {
        let year = date.getFullYear().toString();

        let month = date.getMonth() + 1;
        month = month < 10 ? '0' + month.toString() : month.toString();

        let day = date.getDate();
        day = day < 10 ? '0' + day.toString() : day.toString();

        let hour = date.getHours();
        hour = hour < 10 ? '0' + hour.toString() : hour.toString();

        let minutes = date.getMinutes();
        minutes =  minutes < 10 ? '0' + minutes.toString() : minutes.toString();

        let seconds = date.getSeconds();
        seconds =  seconds < 10 ? '0' + seconds.toString() : seconds.toString();

        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    }

    // with moment
    formatDate2 (date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
};
export const timeUtil = {

    secToMin(sec) {
        if (sec == null) return null;
        try {
            let secToInt = Number(sec);
            return Math.ceil(secToInt / 60);
        } catch (error) {
            return null;
        }
    },

    minToSec(min) {
        if (min == null) return null;
        try {
            let minToInt = Number(min);
            return minToInt
        }
    }

}
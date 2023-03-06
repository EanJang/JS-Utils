export const stringUtil = {

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    },

    isURL(str) {
        const url_reg = ^(https?|ftp)://[^\s/$.?#].[^\s]*$;
        return url_reg.test(str);
    },

    isIp(str) {
        const ip_reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return ip_reg.test(str);

        // If you want to allow empty string as a valid input for IP
        // return str.length === 0 || ip_reg.test(str);
    }

}

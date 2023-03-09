export const stringUtil = {

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
    },

    kebabToPascal(str) {
        str = str
            .split('-')
            .map(v => v[0].toUpperCase() + v.slice(1))
            .join('');
        return str;
    },

    kebabToCamel(str) {
        str = str
            .split('-')
            .map(v => v[0].toUpperCase() + v.slice(1))
            .join('');
        str = str[0].toLowerCase() + str.slice(1);
        return str;
    },

    toKebab(str) {
        str = str
            .split(/(?=[A-Z])/)
            .map(v => v.toLowerCase())
            .join('-');
        return str;
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

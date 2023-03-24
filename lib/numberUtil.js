export const numberUtil = {
    formatDecimalValue(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
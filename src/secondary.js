export function formatTime() {
    const date = new Date()
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return month[date.getMonth() - 1] + ' ' + addZero(date.getDate()) + ', ' + date.getFullYear()
}

const addZero = (n) => n < 10 ? '0' + n : n
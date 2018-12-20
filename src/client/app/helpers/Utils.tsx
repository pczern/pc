const monthNames = [
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
  'December'
]

export default class Utils {
  static getMonthFromDate(date) {
    return monthNames[date.getMonth()]
  }
  static getBlogDate(dateStr) {
    const date = new Date(dateStr)
    return `${date.getDate()}. ${this.getMonthFromDate(
      date
    )}, ${date.getFullYear()}`
  }
}

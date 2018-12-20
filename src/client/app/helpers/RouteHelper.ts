export default class RouteHelper {
  static doesParamExist(match, param) {
    if (match && match.params && match.params[param]) {
      return true
    }
    return false
  }
}

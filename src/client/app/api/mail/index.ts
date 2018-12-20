import axios from 'axios'

export default class Api {
  static sendMail(from, subject, message) {
    return axios.post('/api/mail', {
      from,
      subject,
      message
    })
  }
}

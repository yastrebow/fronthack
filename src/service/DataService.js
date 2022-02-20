import axios from 'axios'

const CURRENCY_API_URL = 'http://localhost:8080'
const CURRENCIES_API_URL = `${CURRENCY_API_URL}`

class CourseDataService {

    retrieveAllCurrency(name) {
        return axios.get(`${CURRENCIES_API_URL}/cryptocurrency/Yastrebow/Andrey`);
    }
    createSubscribe(subscr) {
        return axios.post(`${CURRENCIES_API_URL}/subscription/`, subscr);
    }
}

export default new CourseDataService()


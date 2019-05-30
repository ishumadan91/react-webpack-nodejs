import axios from 'axios'

export function fetchViaCallback(url, cb) {
    axios.get(url).then((res) => cb(res))
}
export function fetchViaPromise(url) {
    return axios.get(url)
}

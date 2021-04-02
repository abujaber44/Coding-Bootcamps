const URL = 'http://localhost:3000/'

const parseJSON = res => res.json()

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('jwt')}`
})

const headers = {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
}

export function authRequest(credentials) {
  return fetch(URL + 'login', {
    method: "POST",
    headers: headers,
    body: JSON.stringify(credentials)
  })
  .then(parseJSON)
}

export function profileRequest() {
  console.log(authHeaders())
  return fetch(URL + 'profile', {
    headers: authHeaders()
  })
  .then(parseJSON)
}

export function fetchSchools() {
  return fetch(URL + 'schools').then(parseJSON)
}

export function fetchSchool(slug) {
  return fetch(URL + 'schools' + `/${slug}`).then(parseJSON)
}

export function postReview(reviewTitle, reviewDesription, score ,school_id) {
  return fetch(URL + 'reviews', {
    method: "POST",
    headers: headers,
    body: JSON.stringify({title: reviewTitle, description: reviewDesription, score: score ,school_id: school_id})
  }).then(parseJSON)
}
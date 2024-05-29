const liveURL = 'http://127.0.0.1:5000/api/v0/plants'
const testURL = 'http://localhost:3001/api/v1/'


function getFlowers() {
  return fetch(liveURL)
    .then(resp => {
      if (!resp.ok) {
        throw new Error('Failed to load flowers')
      }

      return resp.json()
    })
}

const postFlower = (newFlower) => {
  console.log('made it here and new flower is ', newFlower)
  return fetch(liveURL, {
    method: 'POST',
    body: JSON.stringify(newFlower),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}



export { getFlowers, postFlower }
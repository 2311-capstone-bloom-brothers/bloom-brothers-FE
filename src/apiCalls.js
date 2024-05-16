export const postFlower = (flower) => {
    return fetch(`http://localhost:3001/api/v1/`, {
      method: 'POST',
      body: JSON.stringify(flower),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }
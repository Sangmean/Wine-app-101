export function fetchRegions() {
  return fetch(`https://wines-api.herokuapp.com/api/regions`).then(r => r.json());
}

export function fetchWinesFrom(region) {
  return fetch(`https://wines-api.herokuapp.com/api/wines?region=${region}`).then(r => r.json());
}

export function fetchWine(id) {
  return fetch(`https://wines-api.herokuapp.com/api/wines/${id}`).then(r => r.json());
  // .then(r => console.log('aaaaaaaaaa  ', r));
}

export function likeWine(id) {
  return fetch(`https://wines-api.herokuapp.com/api/wines/${id}/like`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ like: true })
  });
}

export function unlikeWine(id) {
  return fetch(`https://wines-api.herokuapp.com/api/wines/${id}/like`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ like: false })
  });
}

export function isWineLiked(id) {}

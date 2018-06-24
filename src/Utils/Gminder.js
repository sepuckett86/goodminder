const Gminder = {};

// const baseUrl = 'http://localhost:3000/api';

Gminder.getGminders = () => {
  return fetch('/api/gminder').then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse
    });
  });
};

Gminder.getGminder = (id) => {
  return fetch(`/api/gminder/${id}`).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse
    });
  });
};

Gminder.getPrompts = () => {
  return fetch('/api/prompt').then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve([]));
    }
    return response.json().then(jsonResponse => {
      return jsonResponse
    });
  });
};

Gminder.addGminder = gminder => {
  const url = '/api/gminder';
    return fetch(url,
          {
            method: 'POST',
            headers: {
                      'Content-Type': 'application/json'
                     },
            body: JSON.stringify({gminder: gminder})
          }).then(response => {
            if (!response.ok) {
              return new Promise(resolve => resolve(null));
              }
            return response.json();
          }).then(jsonResponse => {
            return jsonResponse
          })
}

Gminder.updateGminder = (updatedGminder) => {
  const url = `api/gminder/${updatedGminder.id}`;
  return fetch(url, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({gminder: updatedGminder})
  }).then(response => {
    if (!response.ok) {
      return new Promise(resolve => resolve(null));
      }
    return response.json();
  }).then(jsonResponse => {
    return jsonResponse
  })
}

Gminder.deleteGminder = id => {
  const url = `api/gminder/${id}`;
  const fetchOptions = {
    method: 'DELETE'
  };
  return fetch(url, fetchOptions);
};

export default Gminder;

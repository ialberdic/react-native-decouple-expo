//Fake Data
const getInfo = () => new Promise((resolve) => {
  resolve([
    { id: 'spining', users: [{ name: 'Chris Froome' }, { name: 'Daniel Moreno' }, { name: 'Ivan Alberdi' }, { name: 'Rafael Nadal' }, { name: 'Neymar Jr' }, { name: 'Roger Federer' }] },
    { id: 'crossfit', users: [{ name: 'Chris Froome' }, { name: 'Daniel Moreno' }, { name: 'Ivan Alberdi' }, { name: 'Rafael Nadal' }, { name: 'Neymar Jr' }, { name: 'Roger Federer' }] },
    { id: 'training', users: [{ name: 'Chris Froome' }, { name: 'Daniel Moreno' }, { name: 'Ivan Alberdi' }, { name: 'Rafael Nadal' }, { name: 'Neymar Jr' }, { name: 'Roger Federer' }] },
    { id: 'break dance', users: [{ name: 'Chris Froome' }, { name: 'Daniel Moreno' }, { name: 'Ivan Alberdi' }, { name: 'Rafael Nadal' }, { name: 'Neymar Jr' }, { name: 'Roger Federer' }] }
  ]);
});

/**
  * Get Users and Rooms
  */
export const getUsersRooms = () => {
  /* return dispatch => new Promise((resolve, reject) => fetch('https://somecloud/api/...')
    .then(response => response.json())
    .then(data => {
      return resolve(dispatch({ type: 'GET....', data }));
    }).catch(reject)).catch((err) => { throw err.message; }); */

  return dispatch => new Promise((resolve, reject) => getInfo()   
    .then(data => {
      return resolve(dispatch({ type: 'GET_USERS_ROOM', data }));
    }).catch(reject)).catch((err) => { throw err.message; });
}

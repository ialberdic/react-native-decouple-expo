import Store from '../store/usersRoom';

export const initialState = Store;

export default function roomsReducer(state = initialState, action) {
  switch (action.type) {
    
    case 'GET_ROOM_USERS': {
      let usersRooms = [];
      console.log(action.data, " DATA");
      // Pick out the props I need
      if (action.data) {
        console.log('refresh when pull');
        usersRooms = action.data.map((item, index) => ({
          id: index,
          users: item.users
        }));
      }

      console.log(usersRooms, " URRR000");

      return {
        ...state,
        usersRooms,
      };
    }
   
    default:
      return state;
  }
}

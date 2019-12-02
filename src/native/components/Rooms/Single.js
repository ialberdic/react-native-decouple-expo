import React from 'react';
import {
  FlatList, TouchableOpacity, RefreshControl, View
} from 'react-native';
import {
  Container, Card, Text,
} from 'native-base';
import { errorMessages } from '../../../constants/messages';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';

const UsersView = ({
  error, usersRooms, roomId
}) => {
  // Error
  if (error) return <Error content={error} />;

  // Get user of this room
  let users = null;
  if (roomId && usersRooms) {
    users = usersRooms.find(item => item.id == roomId);
  }

  const keyExtractor = item => { return item.name };

  // Room not found
  if (!users) { return <Error content={errorMessages.reddit404} /> };

  return (
    <Container>
      <FlatList
        numColumns={1}
        data={users.users}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <Card style={{ paddingTop: 10, paddingBottom: 0 }}>
            <TouchableOpacity onPress={() => onPress(item)} style={{ paddingHorizontal: 6, flexDirection: 'row' }}>
              <View style={{ width: '100%', flexDirection: 'column' }}>
                <Text style={{ fontSize: 14, textAlign: 'center' }}>{item.name}</Text>
              </View>
            </TouchableOpacity>
            <Spacer size={10} />
          </Card>
        )}
      />
    </Container>
  );
};

UsersView.defaultProps = {
  error: null,
};

export default UsersView;

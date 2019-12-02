import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, TouchableOpacity, RefreshControl, View
} from 'react-native';
import {
  Container, Card, Text
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from '../UI/Loading';
import Error from '../UI/Error';
import Spacer from '../UI/Spacer';

const RoomsListing = ({
  error,
  loading,
  usersRooms,
  reFetch,
}) => {

  // Loading
  if (loading && !usersRooms) return <Loading />;

  // Error
  if (error) return <Error content={error} />;

  const keyExtractor = item => { return item.id };

  const onPress = item => Actions.users({ match: { params: { id: String(item.id) } } });

  return (
    <Container>
      <FlatList
        numColumns={1}
        data={usersRooms}
        keyExtractor={keyExtractor}
        refreshControl={(
          <RefreshControl
            refreshing={loading}
            onRefresh={reFetch}
          />
        )}
        renderItem={({ item }) => (
          <Card style={{ paddingTop: 10, paddingBottom: 0 }}>
            <TouchableOpacity key={item.id} onPress={() => onPress(item)} style={{ paddingHorizontal: 6, flexDirection: 'row' }}>
              <View style={{ width: '100%', flexDirection: 'column' }}>
                <Text style={{ fontSize: 14, padding: 20, textAlign: 'center' }}>{item.id.toUpperCase()}</Text>
              </View>
            </TouchableOpacity>
            <Spacer size={10} />
          </Card>
        )}
      />
    </Container>
  );
};

RoomsListing.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  //userRooms: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  reFetch: PropTypes.func,
};

RoomsListing.defaultProps = {
  error: null,
  reFetch: null,
};

export default RoomsListing;

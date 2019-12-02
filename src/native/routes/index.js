import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import RoomsContainer from '../../containers/Room';
import RoomsListing from '../components/Rooms/Listing';
import RoomsSingleComponent from '../components/Rooms/Single';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >
        <Stack
          key="rooms"
          title="WORKOUTS"
          icon={() => <Icon name="apps" {...DefaultProps.icons} />}
          {...DefaultProps.navbarProps}
        >
          <Scene key="rooms" component={RoomsContainer} Layout={RoomsListing} />
        </Stack>
      </Tabs>
    </Scene>

    <Scene
      back
      clone
      key="users"
      title="USERS"
      {...DefaultProps.navbarProps}
      component={RoomsContainer}
      Layout={RoomsSingleComponent}
    />
  </Stack>
);

export default Index;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DreamJournalModal from './DreamJournalModal';
import AnotherScreen from './AnotherScreen'; // 仮のスクリーン

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#828282',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopColor: '#d1d1d1',
        },
      }}
    >
      {/* <Tab.Screen name="DreamJournal" component={DreamJournalModal} /> */}
      <Tab.Screen name="Another" component={AnotherScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

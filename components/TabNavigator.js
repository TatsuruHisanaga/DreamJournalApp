import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeView from '../screens/HomeView';
import DreamJournalScreen from '../screens/DreamJournalScreen';
import RankingView from '../screens/RankingView';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="DreamJournal"
        component={DreamJournalScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Ranking"
        component={RankingView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="star" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
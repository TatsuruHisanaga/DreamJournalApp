// TabNavigator.js
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import DreamJournalScreen from '../screens/DreamJournalScreen';
import RankingScreen from '../screens/RankingScreen';
import AlarmScreen from '../screens/AlarmScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="ホーム">
      <Tab.Screen
        name="ホーム"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="夢日記"
        component={DreamJournalScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="notebook-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="アラーム"
        component={AlarmScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="alarm" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="統計"
        component={RankingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-bar"
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="マイページ"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;

import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeView from '../screens/HomeView';
import DreamJournalScreen from '../screens/DreamJournalScreen';
import RankingView from '../screens/RankingView';
import AlarmScreen from '../screens/AlarmScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="ホーム">
      <Tab.Screen
        name="ホーム"
        component={HomeView}
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
        component={RankingView}
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

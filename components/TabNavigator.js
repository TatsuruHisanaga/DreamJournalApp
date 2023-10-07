import RankingView from '../screens/RankingView';
import DreamJournalScreen from '../screens/DreamJournalScreen';
import HomeView from '../screens/HomeView';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="DreamJournal" component={DreamJournalScreen} />
      <Tab.Screen name="Ranking" component={RankingView} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
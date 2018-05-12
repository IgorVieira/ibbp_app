import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AudioScreen from "../screens/AudioScreen";
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import EventsScreen from '../screens/EventsScreen';
import SettingsScreen from '../screens/SettingsScreen';


const AudioStack = createStackNavigator({
  Audio: AudioScreen,
});

AudioStack.navigationOptions = {
  tabBarLabel: 'Audio',
  tabBarOptions: {
    activeTintColor: '#000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-mic${focused ? '' : '-outline'}`
          : 'md-mic'
      }
    />
  ),
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Início',
  tabBarOptions: {
    activeTintColor: '#000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home-outline${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: 'Buscar',
  tabBarOptions: {
    activeTintColor: '#000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-search${focused ? '' : '-outline'}` : 'md-search'}
    />
  ),
};

const Events = createStackNavigator({
  Event: EventsScreen,
});

Events.navigationOptions = {
  tabBarLabel: 'Eventos',
  tabBarOptions: {
    activeTintColor: '#000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar'}
    />
  ),
};


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Config',
  tabBarOptions: {
    activeTintColor: '#000',
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AudioStack,
  SearchStack,
  SettingsStack,
  Events,
});

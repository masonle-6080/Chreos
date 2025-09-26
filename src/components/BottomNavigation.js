// Import React and React Native components
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
// Import icon components for navigation tabs
import { PriorityIcon, BarChartIcon, CreditCardIcon, SettingsIcon } from './Icons';
// Import global styles for consistent appearance
import { globalStyles } from '../styles/styles';

// Configuration array defining the bottom navigation tabs
const tabs = [
  { name: "Lists", icon: PriorityIcon }, // Priority items and shopping lists
  { name: "Stats", icon: BarChartIcon }, // Shopping statistics and analytics
  { name: "Debts", icon: CreditCardIcon }, // Shared expenses and debt tracking
  { name: "Settings", icon: SettingsIcon }, // App settings and configuration
];

/**
 * Bottom navigation component with four main app sections
 * @param {string} activeTab - Currently selected tab name
 * @param {function} onTabPress - Callback function when tab is pressed
 */
export const BottomNavigation = ({ activeTab, onTabPress }) => {
  return (
    <View style={globalStyles.bottomNav}>
      {tabs.map((tab) => {
        const IconComponent = tab.icon; // Get the icon component for this tab
        const isActive = activeTab === tab.name; // Check if this tab is currently active

        return (
          <TouchableOpacity
            key={tab.name}
            onPress={() => onTabPress(tab.name)}
            style={[globalStyles.bottomTab, isActive && globalStyles.activeBottomTab]}
          >
            {/* Render the icon for this tab */}
            <IconComponent />
            {/* Render the tab label with conditional styling for active state */}
            <Text style={[
              globalStyles.bottomTabText,
              isActive && globalStyles.activeBottomTabText
            ]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
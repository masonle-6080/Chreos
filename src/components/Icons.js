// Import React and React Native components
import React from 'react';
import { Text } from 'react-native';
// Import global styles for consistent icon appearance
import { globalStyles } from '../styles/styles';


import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';


/**
 * Collection of icon components using Unicode emojis/symbols
 * Each icon accepts an optional style prop for customization
 */

// Check mark icon for completed items
export const CheckIcon = ({ style }) => (
  <Text style={[globalStyles.checkIcon, style]}>✓</Text>
);

// Plus icon for adding new items
export const PlusIcon = ({ style }) => (
  <Text style={[globalStyles.plusIcon, style]}>+</Text>
);

// Users icon for friends/people functionality
export const UsersIcon = ({ style }) => ( 
  <FontAwesome5 name="user-friends" size={24} color="black" />
);

// Bar chart icon for statistics/analytics
export const BarChartIcon = ({ style }) => (
  <Text style={[globalStyles.icon, style]}>📊</Text>
);

// Settings icon for app configuration
export const SettingsIcon = ({ style }) => (
  <Text style={[globalStyles.icon, style]}>⚙️</Text>
);

// Credit card icon for financial/debt tracking
export const CreditCardIcon = ({ style }) => (
  <Text style={[globalStyles.icon, style]}>💳</Text>
);

// Close/dismiss icon for modals and overlays
export const CloseIcon = ({ style }) => (
  <Text style={[globalStyles.closeIcon, style]}>×</Text>
);

// Trending up icon for growth/positive metrics
export const TrendingUpIcon = ({ style }) => (
  <Text style={[globalStyles.icon, style]}>📈</Text>
);

// Calendar icon for date-related functionality
export const CalendarIcon = ({ style }) => (
  <Text style={[globalStyles.icon, style]}>📅</Text>
);

// Camera icon for photo/receipt capture
export const CameraIcon = ({ style }) => (
  <Text style={[globalStyles.icon, style]}>📷</Text>
);

// Priority/clipboard icon for task management
export const PriorityIcon = ({ style }) => (
<AntDesign name="unordered-list" size={24} color="black" />);
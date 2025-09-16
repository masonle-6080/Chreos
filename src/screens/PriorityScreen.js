// Import React and React Native components
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
// Import custom components and styles
import { ListItem } from '../components/ListItem';
import { globalStyles } from '../styles/styles';

/**
 * Priority screen component displaying priority items and friends' requested items
 * This is the main screen showing grocery lists with a monthly spending summary
 * @param {Array} priorityItems - Array of high-priority grocery items
 * @param {Array} friendsItems - Array of items requested by friends
 * @param {function} onToggleItem - Callback to toggle item completion status
 */
export const PriorityScreen = ({ priorityItems, friendsItems, onToggleItem }) => {
  return (
    <ScrollView style={globalStyles.mainContent} showsVerticalScrollIndicator={false}>
      {/* Monthly spending summary card at the top */}
      <View style={globalStyles.summaryCard}>
        <Text style={globalStyles.summaryTitle}>This Month's Total: $247.85</Text>
      </View>

      {/* Priority items section - user's high-priority grocery items */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Priority Items</Text>
        {priorityItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onToggle={onToggleItem}
          />
        ))}
      </View>

      {/* Friends section - items requested by friends */}
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Friends</Text>
        {friendsItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onToggle={onToggleItem}
            isFromFriends={true} // Flag to indicate these are friend-requested items
          />
        ))}
      </View>
    </ScrollView>
  );
};
// Import React and React Native components
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Import check icon for completed items
import { CheckIcon } from './Icons';
// Import global styles for consistent appearance
import { globalStyles } from '../styles/styles';

/**
 * Individual list item component for displaying grocery items
 * @param {Object} item - The grocery item object containing name, quantity, etc.
 * @param {function} onToggle - Callback function to toggle item completion status
 * @param {boolean} isFromFriends - Whether this item comes from friends' lists
 */
export const ListItem = ({ item, onToggle, isFromFriends = false }) => {
  return (
    <TouchableOpacity
      onPress={() => onToggle(item.id, item.listType || "Priority")}
      style={[globalStyles.listItem, item.priority && globalStyles.priorityItem]}
    >
      {/* Checkbox area with conditional check mark */}
      <View style={[globalStyles.checkbox, item.checked && globalStyles.checkedCheckbox]}>
        {item.checked && <CheckIcon />}
      </View>

      {/* Main content area with item details */}
      <View style={globalStyles.itemContent}>
        {/* Item name with strikethrough style if checked */}
        <Text style={[globalStyles.itemName, item.checked && globalStyles.checkedItemName]}>
          {item.name}
        </Text>
        {/* Display which list this item belongs to */}
        <Text style={globalStyles.itemListType}>List: {item.listType}</Text>

        {/* Optional group badge for categorized items */}
        {item.group && (
          <View style={globalStyles.groupBadge}>
            <Text style={globalStyles.groupBadgeText}>{item.group}</Text>
          </View>
        )}

        {/* Show who requested this item if it's from friends */}
        {item.requestedBy && (
          <Text style={globalStyles.requestedBy}>
            Requested by {item.requestedBy}
          </Text>
        )}
      </View>

      {/* Right side content with friend avatar and quantity */}
      <View style={globalStyles.itemRight}>
        {/* Friend avatar with colored background */}
        {item.friendAvatar && (
          <View style={[globalStyles.friendAvatar, { backgroundColor: item.friendColor }]}>
            <Text style={globalStyles.friendAvatarText}>{item.friendAvatar}</Text>
          </View>
        )}

        {/* Quantity badge showing how many items needed */}
        {item.quantity && (
          <View style={globalStyles.quantityBadge}>
            <Text style={globalStyles.quantityText}>{item.quantity}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
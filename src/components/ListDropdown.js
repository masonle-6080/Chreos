// Import React and React Native components
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
// Import global styles and list type options
import { globalStyles } from '../styles/styles';
import { listTypeOptions } from '../data/mockData';

/**
 * Returns the appropriate emoji icon for each list type
 * @param {string} listType - The type of list (Priority, Friends, etc.)
 * @returns {string} Emoji icon for the list type
 */
const getListTypeIcon = (listType) => {
  switch (listType) {
    case 'Priority':
      return '⭐'; // Star icon for priority items
    case 'Friends':
      return '👥'; // People icon for friend requests
    case 'House 🏠':
      return '🏠'; // House icon for household items
    case 'Weekend Trip':
      return '🎒'; // Backpack icon for travel items
    default:
      return '📝'; // Default notepad icon
  }
};

/**
 * Dropdown component for selecting list types when adding new items
 * @param {function} onSelect - Callback when a list type is selected
 * @param {function} onClose - Callback to close the dropdown
 */
export const ListDropdown = ({ onSelect, onClose }) => {
  /**
   * Handles selecting a list type option and closes the dropdown
   * @param {string} option - The selected list type option
   */
  const handleSelect = (option) => {
    onSelect(option); // Call parent callback with selected option
    onClose(); // Close the dropdown
  };

  return (
    <>
      {/* Overlay to close dropdown when tapping outside */}
      <TouchableOpacity
        style={styles.overlay}
        onPress={onClose}
        activeOpacity={1}
      />

      {/* Main dropdown container */}
      <View style={globalStyles.listDropdown}>
        {/* Dropdown header with title */}
        <View style={styles.dropdownHeader}>
          <Text style={styles.dropdownTitle}>Select List Type</Text>
        </View>

        {/* List of selectable options */}
        {listTypeOptions.map((option, index) => (
          <TouchableOpacity
            key={option}
            onPress={() => handleSelect(option)}
            style={[
              globalStyles.dropdownItem,
              index === listTypeOptions.length - 1 && styles.lastItem // Remove border from last item
            ]}
          >
            <View style={styles.dropdownItemContent}>
              {/* Icon for the list type */}
              <Text style={styles.listTypeIcon}>{getListTypeIcon(option)}</Text>
              {/* List type name */}
              <Text style={globalStyles.dropdownItemText}>{option}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

// Local styles specific to the ListDropdown component
const styles = {
  // Transparent overlay that covers the entire screen to detect outside taps
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
  },
  // Header section of the dropdown with title
  dropdownHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    backgroundColor: '#f9fafb',
  },
  // Title text styling in the dropdown header
  dropdownTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textAlign: 'center',
  },
  // Container for the icon and text within each dropdown item
  dropdownItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  // Styling for the emoji icons next to each list type
  listTypeIcon: {
    fontSize: 18,
  },
  // Style modifier to remove border from the last dropdown item
  lastItem: {
    borderBottomWidth: 0,
  },
};
// Import React and necessary hooks for state management
import React, { useState } from "react";
// Import React Native UI components
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
// Import Expo status bar component
import { StatusBar } from 'expo-status-bar';

// Import custom icon components
import { UsersIcon, PlusIcon } from './src/components/Icons';
// Import navigation and modal components
import { BottomNavigation } from './src/components/BottomNavigation';
import { AddItemModal } from './src/components/AddItemModal';
import { AddFriendsModal } from './src/components/AddFriendsModal';
import { ListDropdown } from './src/components/ListDropdown';

// Import screen components for different app sections
import { PriorityScreen } from './src/screens/PriorityScreen';
import { StatsScreen } from './src/screens/StatsScreen';
import { DebtsScreen } from './src/screens/DebtsScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';

// Import custom hooks and mock data
import { useGroceryData } from './src/hooks/useGroceryData';
import { friendsData } from './src/data/mockData';

// Import global styling
import { globalStyles } from './src/styles/styles';

/**
 * Main grocery shopping app component that manages navigation between different screens
 * and handles modal states for adding items and friends
 */
export default function GroceryApp() {
  // State to track which bottom navigation tab is currently active
  const [activeBottomTab, setActiveBottomTab] = useState("Priority");

  // State variables to control visibility of different modals
  const [showAddModal, setShowAddModal] = useState(false); // Controls add item modal
  const [showAddFriendsModal, setShowAddFriendsModal] = useState(false); // Controls add friends modal
  const [showListDropdown, setShowListDropdown] = useState(false); // Controls list type dropdown

  // Custom hook that provides grocery data and related functions
  const {
    priorityItems, // Array of priority grocery items
    friendsItems, // Array of items shared with friends
    receipts, // Array of shopping receipts
    toggleItem, // Function to toggle item completion status
    addItem, // Function to add new items to lists
    attachReceipt, // Function to attach receipts to purchases
  } = useGroceryData();

  // Event handler functions for user interactions

  /**
   * Handles adding a new friend by showing success alert and closing the modal
   * @param {string} email - Email address of the friend to add
   */
  const handleAddFriend = (email) => {
    Alert.alert(
      "Friend Request Sent",
      `Friend request sent to ${email}!`,
      [{ text: "OK" }]
    );
    setShowAddFriendsModal(false);
  };

  /**
   * Toggles the visibility of the list type dropdown when floating button is pressed
   */
  const handleFloatingButtonPress = () => {
    setShowAddModal(true);
  };

  /**
   * Handles selection of a list type from dropdown and opens the add item modal
   * @param {string} listType - Type of list selected (priority, friends, etc.)
   */
  const handleListTypeSelect = (listType) => {
    setShowListDropdown(false);
    setShowAddModal(true);
  };

  /**
   * Closes the list type dropdown
   */
  const handleCloseDropdown = () => {
    setShowListDropdown(false);
  };

  /**
   * Handles adding a new item to the selected list and closes the modal
   * @param {Object} itemData - Data for the new item being added
   */
  const handleAddItem = (itemData) => {
    addItem(itemData);
    setShowAddModal(false);
  };

  /**
   * Handles bottom tab navigation and closes dropdown if open
   * @param {string} tabName - Name of the tab being pressed
   */
  const handleTabPress = (tabName) => {
    setActiveBottomTab(tabName);
    // Close dropdown if open when switching tabs
    if (showListDropdown) {
      setShowListDropdown(false);
    }
  };



  
  /**
   * 
   * Renders the appropriate screen component based on the currently active bottom tab
   * @returns {JSX.Element} The screen component to display
   */
  const renderActiveScreen = () => {
    switch (activeBottomTab) {
      case "Priority":
        // Show priority items and friends' shared items with toggle functionality
        return (
          <PriorityScreen
            priorityItems={priorityItems}
            friendsItems={friendsItems}
            onToggleItem={toggleItem}
          />
        );
      case "Stats":
        // Show shopping statistics and receipt management
        return (
          <StatsScreen
            receipts={receipts}
            onAttachReceipt={attachReceipt}
          />
        );
      case "Debts":
        // Show shared expenses and debt tracking with friends
        return (
          <DebtsScreen friends={friendsData} />
        );
      case "Settings":
        // Show app settings and configuration options
        return <SettingsScreen />;
      default:
        // Default to Priority screen if no valid tab is selected
        return (
          <PriorityScreen
            priorityItems={priorityItems}
            friendsItems={friendsItems}
            onToggleItem={toggleItem}
          />
        );
    }
  };





  // Main app render function
  return (
    <SafeAreaView style={globalStyles.container}>
      {/* Status bar with dark theme (systems time, wifi, and battery at the top */}
      <StatusBar style="dark" />

      {/* App header with title and add friends button */}
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>Shopping</Text>
        <TouchableOpacity
          onPress={() => setShowAddFriendsModal(true)}
          accessibilityLabel="Add friends"
          accessibilityHint="Opens modal to add new friends to your shopping list"
        >
          <UsersIcon />
        </TouchableOpacity>
      </View>

      {/* Main content area - displays the currently active screen */}
      {renderActiveScreen()}


      {/* Floating action BUTTON FOR ADDING NEW ITEMS*/}
      <TouchableOpacity
        style={globalStyles.floatingButton}
        onPress={handleFloatingButtonPress}
        accessibilityLabel="Add new item"
        accessibilityHint="Opens menu to select list type for new item"
      >
        <PlusIcon />
      </TouchableOpacity>

      {/* Modal for adding ADD ITEMS */}
      <AddItemModal
        visible={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddItem}
      />

      {/* Modal for ADDING FRIENDS friends to share lists with */}
      <AddFriendsModal
        visible={showAddFriendsModal}
        onClose={() => setShowAddFriendsModal(false)}
        onAdd={handleAddFriend}
      /> 

      {/* Bottom navigation bar for switching between app sections */}
      <BottomNavigation
        activeTab={activeBottomTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}
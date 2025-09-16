// Import React hooks and native components
import { useState } from 'react';
import { Alert } from 'react-native';
// Import initial data from mock data file
import {
  initialPriorityItems,
  initialFriendsItems,
  initialReceipts
} from '../data/mockData';

/**
 * Custom hook for managing grocery list data and operations
 * Provides state management for priority items, friends' items, and receipts
 * @returns {Object} Object containing data arrays and manipulation functions
 */
export const useGroceryData = () => {
  // State for managing priority grocery items
  const [priorityItems, setPriorityItems] = useState(initialPriorityItems);
  // State for managing items requested by friends
  const [friendsItems, setFriendsItems] = useState(initialFriendsItems);
  // State for managing shopping receipts (currently read-only)
  const [receipts] = useState(initialReceipts);

  /**
   * Toggles the checked status of a grocery item
   * @param {string} id - Unique identifier of the item to toggle
   * @param {string} listType - Type of list the item belongs to ("Friends" or other)
   */
  const toggleItem = (id, listType) => {
    if (listType === "Friends") {
      // Update friends items list - toggle checked status of matching item
      setFriendsItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
      );
    } else {
      // Update priority items list - toggle checked status of matching item
      setPriorityItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
      );
    }
  };

  /**
   * Adds a new item to the appropriate grocery list
   * @param {Object} itemData - Data for the new item including name, quantity, listType, etc.
   */
  const addItem = (itemData) => {
    // Create new item with unique ID and default properties
    const newItem = {
      id: Date.now().toString(), // Use timestamp as unique ID
      checked: false, // New items start unchecked
      priority: itemData.listType === "Priority", // Set priority flag based on list type
      ...itemData, // Spread the rest of the item data
    };

    if (itemData.listType === "Friends") {
      // Add to friends items list
      setFriendsItems((prev) => [...prev, newItem]);
    } else {
      // Add to priority items list (default)
      setPriorityItems((prev) => [...prev, newItem]);
    }
  };

  /**
   * Handles attaching receipt images to purchases
   * Currently shows a placeholder alert - image picker functionality to be implemented
   * @param {string} receiptId - ID of the receipt to attach an image to
   */
  const attachReceipt = (receiptId) => {
    // Show placeholder alert for future image picker functionality
    Alert.alert("Photo Feature", "Image picker coming soon!", [{ text: "OK" }]);
  };

  // Return all state values and functions for use by components
  return {
    priorityItems, // Array of priority grocery items
    friendsItems, // Array of items requested by friends
    receipts, // Array of shopping receipts
    toggleItem, // Function to toggle item completion status
    addItem, // Function to add new items to lists
    attachReceipt, // Function to attach receipt images (placeholder)
  };
};
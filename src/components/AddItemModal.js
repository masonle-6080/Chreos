// Import React and necessary hooks
import React, { useState } from 'react';
// Import React Native components for modal interface
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// Import icon and styling components
import { CloseIcon } from './Icons';
import { globalStyles } from '../styles/styles';
// Import list type options from mock data
import { listTypeOptions } from '../data/mockData';

/**
 * Modal component for adding new grocery items to lists
 * @param {boolean} visible - Controls modal visibility
 * @param {function} onClose - Callback to close the modal
 * @param {function} onAdd - Callback to add new item with item data
 */
export const AddItemModal = ({ visible, onClose, onAdd }) => {
  // State for form input fields
  const [itemName, setItemName] = useState(""); // Name of the grocery item
  const [itemQuantity, setItemQuantity] = useState(""); // Quantity needed
  const [listType, setListType] = useState("Priority"); // Which list to add item to

  /**
   * Handles adding a new item after validation
   * Resets form state and closes modal on success
   */
  const handleAdd = () => {
    if (!itemName.trim()) return; // Prevent adding empty items

    // Call parent callback with item data
    onAdd({
      name: itemName.trim(),
      quantity: itemQuantity.trim() || "1", // Default to 1 if no quantity specified
      listType,
    });

    // Reset form to initial state
    setItemName("");
    setItemQuantity("");
    setListType("Priority");
    onClose();
  };

  /**
   * Handles closing the modal and resetting form state
   */
  const handleClose = () => {
    // Clear all form fields
    setItemName("");
    setItemQuantity("");
    setListType("Priority");
    onClose();
  };

  // Render the modal interface
  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={globalStyles.modalContainer}>
        {/* Modal header with title and close button */}
        <View style={globalStyles.modalHeader}>
          <Text style={globalStyles.modalTitle}>Add Item</Text>
          <TouchableOpacity onPress={handleClose} style={globalStyles.closeButton}>
            <CloseIcon />
          </TouchableOpacity>
        </View>

        {/* Modal content with form fields */}
        <View style={globalStyles.modalContent}>
          {/* List type selection with horizontal scroll */}
          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>List Type</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={globalStyles.listTypeScroll}
            >
              {listTypeOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => setListType(option)}
                  style={[
                    globalStyles.listTypeOption,
                    listType === option && globalStyles.activeListTypeOption
                  ]}
                >
                  <Text
                    style={[
                      globalStyles.listTypeOptionText,
                      listType === option && globalStyles.activeListTypeOptionText,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Item name input field */}
          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Item Name</Text>
            <TextInput
              style={globalStyles.textInput}
              value={itemName}
              onChangeText={setItemName}
              placeholder="Enter item name"
              autoFocus
            />
          </View>

          {/* Quantity input field */}
          <View style={globalStyles.inputRow}>
            <View style={[globalStyles.inputGroup, globalStyles.inputHalf]}>
              <Text style={globalStyles.inputLabel}>Quantity</Text>
              <TextInput
                style={globalStyles.textInput}
                value={itemQuantity}
                onChangeText={setItemQuantity}
                placeholder="1"
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>

        {/* Modal action buttons */}
        <View style={globalStyles.modalButtons}>
          {/* Cancel button */}
          <TouchableOpacity onPress={handleClose} style={globalStyles.cancelButton}>
            <Text style={globalStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          {/* Add button with disabled state when no item name */}
          <TouchableOpacity
            onPress={handleAdd}
            style={[
              globalStyles.addButton,
              !itemName.trim() && globalStyles.disabledButton
            ]}
            disabled={!itemName.trim()}
          >
            <Text style={globalStyles.addButtonText}>Add Item</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
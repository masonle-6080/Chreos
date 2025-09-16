// Import React and necessary hooks
import React, { useState } from 'react';
// Import React Native components for modal interface
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// Import close icon and global styles
import { CloseIcon } from './Icons';
import { globalStyles } from '../styles/styles';

/**
 * Modal component for adding new friends to share grocery lists with
 * @param {boolean} visible - Controls modal visibility
 * @param {function} onClose - Callback to close the modal
 * @param {function} onAdd - Callback to add new friend with email
 */
export const AddFriendsModal = ({ visible, onClose, onAdd }) => {
  // State for storing the friend's email input
  const [email, setEmail] = useState("");

  /**
   * Handles adding a new friend after validation
   * Resets form state after successful submission
   */
  const handleAdd = () => {
    if (!email.trim()) return; // Prevent adding empty email
    onAdd(email.trim()); // Call parent callback with trimmed email
    setEmail(""); // Reset email input
  };

  /**
   * Handles closing the modal and resetting form state
   */
  const handleClose = () => {
    setEmail(""); // Clear email input
    onClose(); // Call parent close callback
  };

  // Render the modal interface
  return (
    <Modal visible={visible} animationType="slide" presentationStyle="pageSheet">
      <View style={globalStyles.modalContainer}>
        {/* Modal header with title and close button */}
        <View style={globalStyles.modalHeader}>
          <Text style={globalStyles.modalTitle}>Add Friend</Text>
          <TouchableOpacity onPress={handleClose} style={globalStyles.closeButton}>
            <CloseIcon />
          </TouchableOpacity>
        </View>

        {/* Modal content with form fields */}
        <View style={globalStyles.modalContent}>
          {/* Email input field for friend identification */}
          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Friend's Email or Username</Text>
            <TextInput
              style={globalStyles.textInput}
              placeholder="Enter email or username"
              value={email}
              onChangeText={setEmail}
              autoFocus
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>

          {/* Optional message field for friend request */}
          <View style={globalStyles.inputGroup}>
            <Text style={globalStyles.inputLabel}>Add a message (optional)</Text>
            <TextInput
              style={[globalStyles.textInput, { height: 80 }]}
              placeholder="Hey! Let's share our grocery lists..."
              multiline
              numberOfLines={3}
            />
          </View>
        </View>

        {/* Modal action buttons */}
        <View style={globalStyles.modalButtons}>
          {/* Cancel button */}
          <TouchableOpacity onPress={handleClose} style={globalStyles.cancelButton}>
            <Text style={globalStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          {/* Send request button with disabled state when no email */}
          <TouchableOpacity
            onPress={handleAdd}
            style={[
              globalStyles.addButton,
              !email.trim() && globalStyles.disabledButton
            ]}
            disabled={!email.trim()}
          >
            <Text style={globalStyles.addButtonText}>Send Request</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
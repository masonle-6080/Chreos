// Import React and React Native components
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
// Import global styles
import { globalStyles } from '../styles/styles';

/**
 * Individual debt card component for displaying friend's debt information
 * @param {Object} friend - Friend object with name, avatar, color, and debt amount
 * @param {function} onSettle - Callback to settle the debt with this friend
 */
const DebtCard = ({ friend, onSettle }) => {
  /**
   * Handles settling debt with confirmation dialog
   */
  const handleSettle = () => {
    Alert.alert(
      "Settle Debt",
      `Mark $${friend.owes.toFixed(2)} from ${friend.name} as settled?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Settle",
          style: "default",
          onPress: () => onSettle(friend.name)
        }
      ]
    );
  };

  return (
    <View style={globalStyles.debtCard}>
      {/* Left side: friend avatar and debt information */}
      <View style={globalStyles.debtLeft}>
        {/* Friend's colored avatar circle */}
        <View style={[globalStyles.friendAvatar, { backgroundColor: friend.color }]}>
          <Text style={globalStyles.friendAvatarText}>{friend.avatar}</Text>
        </View>
        {/* Friend's debt information */}
        <View style={styles.debtInfo}>
          <Text style={globalStyles.debtName}>{friend.name}</Text>
          <Text style={globalStyles.debtStatus}>
            {friend.owes > 0 ? `Owes you $${friend.owes.toFixed(2)}` : "All settled up"}
          </Text>
          {/* Show last transaction if there's debt */}
          {friend.owes > 0 && (
            <Text style={styles.lastTransaction}>
              Last purchase: {friend.lastPurchase || "Whole Foods, Dec 15"}
            </Text>
          )}
        </View>
      </View>

      {/* Right side: action buttons for friends with debt */}
      <View style={styles.debtActions}>
        {friend.owes > 0 && (
          <>
            {/* Remind button to send payment reminder */}
            <TouchableOpacity
              style={[globalStyles.settleButton, styles.reminderButton]}
              onPress={() => Alert.alert("Reminder", `Reminder sent to ${friend.name}!`)}
            >
              <Text style={styles.reminderButtonText}>Remind</Text>
            </TouchableOpacity>
            {/* Settle button to mark debt as paid */}
            <TouchableOpacity
              style={globalStyles.settleButton}
              onPress={handleSettle}
            >
              <Text style={globalStyles.settleButtonText}>Settle</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

/**
 * Summary card component showing overall debt statistics
 * @param {Array} friends - Array of friend objects with debt information
 */
const SummaryCard = ({ friends }) => {
  // Calculate total amount owed across all friends
  const totalOwed = friends.reduce((sum, friend) => sum + friend.owes, 0);
  // Count how many friends currently owe money
  const friendsWithDebt = friends.filter(friend => friend.owes > 0).length;

  return (
    <View style={styles.summaryCard}>
      <Text style={styles.summaryTitle}>Debt Summary</Text>
      <View style={styles.summaryContent}>
        {/* Total amount owed */}
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>${totalOwed.toFixed(2)}</Text>
          <Text style={styles.summaryLabel}>Total Owed</Text>
        </View>
        {/* Number of friends with outstanding debt */}
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>{friendsWithDebt}</Text>
          <Text style={styles.summaryLabel}>Friends with Debt</Text>
        </View>
      </View>
    </View>
  );
};

/**
 * Main debts screen component for tracking shared expenses and debt with friends
 * @param {Array} friends - Array of friend objects with debt information
 */
export const DebtsScreen = ({ friends }) => {
  /**
   * Handles settling debt with a friend (placeholder implementation)
   * @param {string} friendName - Name of the friend to settle debt with
   */
  const handleSettle = (friendName) => {
    Alert.alert("Success", `Debt settled with ${friendName}!`);
    // In a real app, you would update the friend's debt to 0
  };

  // Sort friends to show those with debt first (highest debt amounts first)
  const sortedFriends = [...friends].sort((a, b) => b.owes - a.owes);

  return (
    <ScrollView style={globalStyles.mainContent} showsVerticalScrollIndicator={false}>
      <View style={globalStyles.section}>
        {/* Page title */}
        <Text style={globalStyles.pageTitle}>Friend Debts</Text>

        {/* Summary card showing total debt statistics */}
        <SummaryCard friends={friends} />

        {/* List of friends with their debt information */}
        <View style={styles.friendsList}>
          <Text style={styles.friendsListTitle}>Friends</Text>
          {sortedFriends.map((friend) => (
            <DebtCard
              key={friend.name}
              friend={friend}
              onSettle={handleSettle}
            />
          ))}
        </View>

        {/* Helpful tip card for users */}
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>💡 Tip</Text>
          <Text style={styles.tipText}>
            Keep track of shared expenses automatically by adding items to your "House 🏠 Split" list!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Local styles specific to the DebtsScreen component
const styles = {
  // Summary card container styling
  summaryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  summaryContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#34c759',
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  friendsList: {
    marginBottom: 24,
  },
  friendsListTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  debtInfo: {
    flex: 1,
  },
  lastTransaction: {
    fontSize: 12,
    color: '#9ca3af',
    marginTop: 2,
  },
  debtActions: {
    flexDirection: 'row',
    gap: 8,
  },
  reminderButton: {
    backgroundColor: '#f3f4f6',
  },
  reminderButtonText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  tipCard: {
    backgroundColor: '#f0f9ff',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3b82f6',
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e40af',
    marginBottom: 8,
  },
  tipText: {
    fontSize: 14,
    color: '#1e40af',
    lineHeight: 20,
  },
};
// Import React and React Native components
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// Import icon components for statistics display
import { TrendingUpIcon, CalendarIcon, CameraIcon } from '../components/Icons';
// Import global styles
import { globalStyles } from '../styles/styles';

/**
 * Statistics screen component displaying shopping analytics and receipt management
 * Shows monthly spending totals, trip counts, and recent purchase activity
 * @param {Array} receipts - Array of shopping receipt objects
 * @param {function} onAttachReceipt - Callback to attach image to receipt
 */
export const StatsScreen = ({ receipts, onAttachReceipt }) => {
  return (
    <ScrollView style={globalStyles.mainContent} showsVerticalScrollIndicator={false}>
      <View style={globalStyles.section}>
        {/* Page title */}
        <Text style={globalStyles.pageTitle}>Shopping Stats</Text>

        {/* Monthly statistics card with total spending and trip count */}
        <View style={globalStyles.statsCard}>
          <View style={globalStyles.statsHeader}>
            <TrendingUpIcon />
            <Text style={globalStyles.statsHeaderText}>This Month</Text>
          </View>
          <View style={globalStyles.statsGrid}>
            {/* Total amount spent this month */}
            <View>
              <Text style={globalStyles.statsValue}>$247.85</Text>
              <Text style={globalStyles.statsLabel}>Total Spent</Text>
            </View>
            {/* Number of shopping trips this month */}
            <View>
              <Text style={globalStyles.statsValue}>23</Text>
              <Text style={globalStyles.statsLabel}>Shopping Trips</Text>
            </View>
          </View>
        </View>

        {/* Recent activity card showing receipt history */}
        <View style={globalStyles.statsCard}>
          <View style={globalStyles.statsHeader}>
            <CalendarIcon />
            <Text style={globalStyles.statsHeaderText}>Recent Activity</Text>
          </View>
          {/* List of recent receipts */}
          {receipts.map((receipt) => (
            <View key={receipt.id} style={globalStyles.activityItem}>
              {/* Left side: store info, date, and receipt image if available */}
              <View style={globalStyles.activityLeft}>
                <Text style={globalStyles.activityStore}>{receipt.store}</Text>
                <Text style={globalStyles.activityDate}>{receipt.date}</Text>
                {receipt.imageUri && (
                  <Image
                    source={{ uri: receipt.imageUri }}
                    style={globalStyles.receiptImage}
                  />
                )}
              </View>
              {/* Right side: amount and attach/change image button */}
              <View style={globalStyles.activityRight}>
                <Text style={globalStyles.activityAmount}>
                  ${receipt.amount.toFixed(2)}
                </Text>
                {/* Button to attach or change receipt image */}
                <TouchableOpacity
                  onPress={() => onAttachReceipt(receipt.id)}
                  style={globalStyles.attachButton}
                >
                  <CameraIcon />
                  <Text style={globalStyles.attachButtonText}>
                    {receipt.imageUri ? "Change" : "Attach"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
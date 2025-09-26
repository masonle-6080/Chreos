/**
 * Global styles and theme configuration for the grocery shopping app
 * Contains color constants and comprehensive StyleSheet definitions
 * for all UI components across the application
 */
import { StyleSheet } from 'react-native';

// Color constants for consistent theming throughout the app
export const colors = {
  primary: "#34c759",
  background: "#f9fafb",
  white: "#ffffff",
  text: "#111827",
  textSecondary: "#6b7280",
  border: "#e5e7eb",
  borderLight: "#f3f4f6",
  error: "#ef4444",
  blue: "#3b82f6",
  pink: "#ec4899",
  green: "#10b981",
};

// Global stylesheet containing all component styles organized by feature/screen
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  
  // Header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },

  // Main content
  mainContent: {
    flex: 1,
    padding: 16,
  },

  // Summary card
  summaryCard: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 30,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryTitle: {
    fontSize: 30,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 8,
  },

  SummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  SummaryItem: {
    flex: 1
  },
  
  SummaryItemText: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.white,
    marginBottom: 8,
  },

  // Sections
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 16,
  },

  // List items
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  priorityItem: {
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#d1d5db",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  checkedCheckbox: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  itemContent: {
    flex: 1,
    minWidth: 0,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text,
  },
  checkedItemName: {
    textDecorationLine: "line-through",
    color: colors.textSecondary,
  },
  itemListType: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  groupBadge: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignSelf: "flex-start",
    marginTop: 4,
  },
  groupBadgeText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: "500",
  },
  requestedBy: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  friendAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  friendAvatarText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },
  quantityBadge: {
    backgroundColor: colors.borderLight,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantityText: {
    fontSize: 14,
    color: "#374151",
    fontWeight: "500",
  },

  // Icons
  checkIcon: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  plusIcon: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  closeIcon: {
    fontSize: 18,
    color: "#374151",
  },
  icon: {
    fontSize: 20,
  },

  // Floating button
  floatingButton: {
    position: "absolute",
    bottom: 125,
    right: 24,
    width: 56,
    height: 56,
    backgroundColor: colors.primary,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  // Dropdown
  listDropdown: {
    position: "absolute",
    bottom: 150,
    right: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
    minWidth: 150,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  dropdownItemText: {
    fontSize: 16,
    color: colors.text,
  },

  // Modals
  modalContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.borderLight,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    flex: 1,
    padding: 24,
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
    marginBottom: 8,
  },
  listTypeScroll: {
    flexDirection: "row",
  },
  listTypeOption: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.borderLight,
    borderRadius: 16,
    marginRight: 8,
  },
  activeListTypeOption: {
    backgroundColor: colors.primary,
  },
  listTypeOptionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#374151",
  },
  activeListTypeOptionText: {
    color: colors.white,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
  },
  inputRow: {
    flexDirection: "row",
    gap: 16,
  },
  inputHalf: {
    flex: 1,
  },
  modalButtons: {
    flexDirection: "row",
    gap: 12,
    padding: 24,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 12,
    alignItems: "center",
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },
  addButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    borderRadius: 12,
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.white,
  },

  // Bottom navigation
  bottomNav: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  bottomTab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  activeBottomTab: {
    // Active state styling handled by text color
  },
  bottomTabText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.textSecondary,
    marginTop: 4,
  },
  activeBottomTabText: {
    color: colors.primary,
  },

  // Stats screen
  statsCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 24,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  statsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  statsHeaderText: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
  statsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },
  statsLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  activityItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  activityLeft: {
    flex: 1,
  },
  activityStore: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text,
  },
  activityDate: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  activityRight: {
    alignItems: "flex-end",
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text,
  },
  attachButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: colors.borderLight,
    borderRadius: 6,
  },
  attachButtonText: {
    fontSize: 12,
    color: "#374151",
    fontWeight: "500",
  },
  receiptImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginTop: 8,
  },

  // Debts screen
  debtCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  debtLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  debtName: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.text,
  },
  debtStatus: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  settleButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  settleButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "500",
  },

  // Settings screen
  settingsCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  settingsHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  settingsItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  settingsItemText: {
    fontSize: 16,
    color: colors.text,
  },
  dangerText: {
    color: colors.error,
  },
});
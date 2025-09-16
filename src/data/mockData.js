/**
 * Mock data file containing sample data for the grocery shopping app
 * Used for development and testing purposes
 */

// Initial priority grocery items - high priority items that users need to buy
export const initialPriorityItems = [
    {
      id: "1",
      name: "Organic Bananas",
      quantity: "6",
      checked: false,
      priority: true,
      group: "House 🏠 Split",
      listType: "Priority",
    },
    {
      id: "2",
      name: "Greek Yogurt",
      quantity: "2",
      checked: true,
      group: "House 🏠 Split",
      listType: "Priority",
    },
    {
      id: "3",
      name: "Sourdough Bread",
      quantity: "1",
      checked: false,
      priority: true,
      listType: "Priority",
    },
    {
      id: "4",
      name: "Avocados",
      quantity: "4",
      checked: false,
      group: "House 🏠 Split",
      listType: "Priority",
    },
    {
      id: "5",
      name: "Almond Milk",
      quantity: "1",
      checked: true,
      listType: "Priority",
    },
  ];

  // Initial items requested by friends - items that friends have asked you to pick up
  export const initialFriendsItems = [
    {
      id: "6",
      name: "Dark Chocolate",
      quantity: "2",
      checked: false,
      requestedBy: "Sarah",
      friendAvatar: "S",
      friendColor: "#ec4899",
      listType: "Friends",
    },
    {
      id: "7",
      name: "Coffee Beans",
      quantity: "1",
      checked: false,
      requestedBy: "Mike",
      friendAvatar: "M",
      friendColor: "#3b82f6",
      listType: "Friends",
    },
    {
      id: "8",
      name: "Pasta",
      quantity: "3",
      checked: true,
      requestedBy: "Sarah",
      friendAvatar: "S",
      friendColor: "#ec4899",
      listType: "Friends",
    },
  ];

  // Friends data with avatar info and debt/credit tracking
  export const friendsData = [
    { name: "Sarah", avatar: "S", color: "#ec4899", owes: 24.5 },
    { name: "Mike", avatar: "M", color: "#3b82f6", owes: 18.0 },
    { name: "Emma", avatar: "E", color: "#10b981", owes: 0 },
  ];

  // Sample shopping receipts for tracking expenses and purchases
  export const initialReceipts = [
    { id: "1", store: "Whole Foods", date: "Dec 15", amount: 67.42, imageUri: null },
    { id: "2", store: "Trader Joe's", date: "Dec 14", amount: 34.18, imageUri: null },
    { id: "3", store: "Local Bakery", date: "Dec 13", amount: 12.5, imageUri: null },
    { id: "4", store: "Whole Foods", date: "Dec 12", amount: 89.23, imageUri: null },
  ];

  // Available list type options for categorizing grocery items
  export const listTypeOptions = ["Priority", "Friends", "House 🏠", "Weekend Trip"];
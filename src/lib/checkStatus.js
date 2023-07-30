import allOrders from '../store/slicers/allOrders.slicer';

const getNewOrdersList = (
  currentDate,
  idSelectedBook,
  allOrdersArray,
  userEmail,
  period,
) => {
  const now = Date.now();
  return allOrdersArray.filter((order) => now - order.date < period);
};

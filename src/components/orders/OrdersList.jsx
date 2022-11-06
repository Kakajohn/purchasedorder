import React, { useState } from 'react';
import OrderListItem from './OrderListItem';
import OrderPreview from './OrderPreview';
const OrdersList = ({ orders }) => {
  const [activeStatuses, setActiveStatuses] = useState(orders.map(order => false)); //creates a table with the selected status for each list item (false by default)
  const [selectedOrder, setSelectedOrder] = useState(orders.lenght > 0 ? orders[0] : null); // If there are orders set orders[0] as default in any other case set null.
  const [show, setShow] = useState(false); //Modal open status.

  /**
   * handles the active/inactive staus of the list items
   * if a list item is already active and gets clicked it gets deactivated
   * if a list item is clicked it gets activated and all the others get deactivated
   */
  const handleActiveStatusChange = index => {
    let tempActiveStatuses = activeStatuses;

    tempActiveStatuses = tempActiveStatuses.map((status, statusIndex) => {
      if (index === statusIndex) {
        return !status;
      }

      return false;
    });

    setActiveStatuses(tempActiveStatuses);
  };

  //Based on the selected button we pass the index to orders to display the selected values infos.
  const handleSelectedOrderChange = index => {
    setSelectedOrder(orders[index]);
  };

  //handles the modal hide/show state
  function handleShow() {
    setShow(true);
  }
  return (
    <>
      <div className='list-group'>
        {orders &&
          orders.map((order, index) => (
            <OrderListItem
              key={order?.PurchaseOrderId ? order?.PurchaseOrderId : index}
              index={index}
              purchaseOrderTypeAbbreviation={order.PurchaseOrderTypeAbbreviation}
              purchaseOrderNo={order.PurchaseOrderNo}
              handleActiveStatusChange={handleActiveStatusChange}
              active={activeStatuses[index]}
              handleShow={handleShow}
              handleSelectedOrderChange={handleSelectedOrderChange}
            />
          ))}
      </div>

      <OrderPreview show={show} setShow={setShow} order={selectedOrder} />
    </>
  );
};

export default OrdersList;

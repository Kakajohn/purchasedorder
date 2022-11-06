import React from 'react';

const OrderTableRow = ({ detail }) => {
  /**
   * returns the Purchase Order Details as described bellow.
   */
  return (
    <tr>
      <th scope='row'>{detail?.PurchaseOrderRowProductSKU}</th>
      <td>{detail?.PurchaseOrderRowQuantity}</td>
      <td>{detail?.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
      <td>{detail?.PurchaseOrderRowTotalAmount}</td>
    </tr>
  );
};

export default OrderTableRow;

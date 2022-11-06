const OrderListItem = ({active, purchaseOrderTypeAbbreviation , purchaseOrderNo, handleActiveStatusChange,handleSelectedOrderChange,handleShow, index }) => {
    return (
    <button
        type='button'
        className={`list-group-item list-group-item-action ${active ? 'active' : ''}`}
        onClick={() => {
          handleActiveStatusChange(index);
          handleSelectedOrderChange(index);
          handleShow();
        }}
      >
        <h4>{purchaseOrderTypeAbbreviation} - {purchaseOrderNo}</h4>
      </button>
  )
}

export default OrderListItem
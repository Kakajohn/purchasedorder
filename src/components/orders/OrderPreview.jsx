import Modal from 'react-bootstrap/Modal';
import OrderTableRow from './OrderTableRow';
const OrderPreview = ({ show, setShow, order }) => {

  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{`${order?.PurchaseOrderTypeAbbreviation} - ${order?.PurchaseOrderNo}`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column'>
          <div className='d-flex mb-2'>
            {/* main content goes here */}
            <h5 className='me-1'>Purchase Order Address:</h5>
            <p>{order?.PurchaseOrderAddress}</p>
          </div>

          <div className='d-flex mb-2'>
            {/* main content goes here */}
            <h5 className='me-1'>PurchaseOrder Contact Person:</h5>
            <p>{order?.PurchaseOrderContactPerson}</p>
          </div>

          <div className='d-flex mb-2'>
            {/* main content goes here */}
            <h5 className='me-1'>Purchase Order Status:</h5>
            <p>{order?.PurchaseOrderStatus}</p>
          </div>

          <table className='table text-center'>
            <thead>
              <tr>
                <th>Product SKU</th>
                <th>Quantity Ordered</th>
                <th>Unit Price</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {order &&
                order.PurchaseOrderDetails.length > 0 &&
                order.PurchaseOrderDetails.map((detail, index) => <OrderTableRow key={index} detail={detail} />)}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OrderPreview;

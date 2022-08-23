

const order = {};



    //tolto tutti quelli precedenti al !, perchè non ha tanto senso... e aggiunto ? x verificare se è presente quella chiave...
// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

if (!order.customer?.address.city) {
  console.log('City is required');
}














import { getCustomer } from "./customer";
import { createOrder } from "./order";

const customer = getCustomer(1);
const order = createOrder(customer, 100);

console.log(customer, order);

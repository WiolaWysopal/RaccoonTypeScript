import { Customer } from "./customer";

export type Order = 
{
  id: number;
  customerId: number;
  total: number;
};

export function createOrder(customer: Customer, total: number): Order 
{
  return { id: Date.now(), customerId: customer.id, total };
}

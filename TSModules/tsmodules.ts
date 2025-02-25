namespace CustomerModule 
{
    export type Customer = 
    {
      id: number;
      name: string;
      email: string;
    };
  
    export function getCustomer(id: number): Customer 
    {
      return { id, name: "Alice", email: "alice@example.com" };
    }
  }
  
  namespace OrderModule 
  {
    export type Order = 
    {
      id: number;
      customerId: number;
      total: number;
    };
  
    export function createOrder(customerId: number, total: number): Order 
    {
      return { id: Date.now(), customerId, total };
    }
  }
  
  // Przykład:
  const customer = CustomerModule.getCustomer(1);
  const order = OrderModule.createOrder(customer.id, 100);
  console.log(customer, order);
  
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

  
  
declare module "ambient-module" 
{
    export type ProcessedOrder = 
    {
      orderId: number;
      status: "processed" | "failed";
    };
  
    export function processOrder(orderId: number): ProcessedOrder;
  }
  
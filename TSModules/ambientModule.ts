export function processOrder(orderId: number) 
{
    return {
      orderId,
      status: orderId % 2 === 0 ? "processed" : "failed",
    };
  }
  
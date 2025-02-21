abstract class PaymentMethod
{
    abstract processPayment(amount: number): void;
}

class CreditCard extends PaymentMethod
{
    private name: string = "credit card";

    processPayment(amount: number): void 
    {
        console.log(`Processing ${this.name} payment of ${amount}`)
    }
}

class CryptoCurrency extends PaymentMethod
{
    private name: string = "cryptocurrency";

    processPayment(amount: number): void 
    {
        console.log(`Processing ${this.name} payment of ${amount}`)
    }
}

class PayPal extends PaymentMethod
{
    private name: string = "PayPal";

    processPayment(amount: number): void 
    {
        console.log(`Processing ${this.name} payment of ${amount}`)
    }
}

let payments: PaymentMethod[] = 
[
    new CreditCard(),
    new CryptoCurrency(),
    new PayPal()
]

payments.forEach(pm => pm.processPayment(10));
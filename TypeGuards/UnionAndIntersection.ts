// 'amount' of paid money is common for both of payment methods:
type basePayment = 
{
    amount: number;
};

type creditCard = basePayment &
{
    type: "creditcard";
    cardNumber: string;
    expiryDate: string;
    cvc: string;
};

type payPal = basePayment &
{
    type: "paypal";
    email: string;
};

type PaymentData = creditCard | payPal;

function Payment(kind: PaymentData)
{
    if (kind.type === "creditcard")
        return "You have chosen payment by credit card.";
    return "You have chosen payment by PayPal";
};

var payCard: PaymentData =
{
    type: "creditcard",
    cardNumber: "1234567890",
    expiryDate: "01-02-03",
    cvc: "9872",
    amount: 100
}

var payPayPal: PaymentData = 
{
    type: "paypal",
    email: "user@mail.domain",
    amount: 200
}

console.log(Payment(payCard));
console.log(Payment(payPayPal));
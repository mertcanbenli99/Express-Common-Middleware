export enum OrderStatus {
  Created = "created", // order has been created but the ticket is trying to order has not been reserved.
  Cancelled = "cancelled", // The ticket the order is trying to reserve has already has been reserved or when the user has cancelled the order
  AwaitingPayment = "awaiting:payment", // The order has successfully reserved ticket
  Complete = "complete", // the order has reserved the ticket and the user has provided payment successfully
}

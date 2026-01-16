
export interface PaymentIntent {
  amount: number;
  currency: string;
  description: string;
  paymentMethodId?: string;
  customerId?: string;
  metadata?: Record<string, any>;
}

export interface PaymentResult {
  id: string;
  status: 'pending' | 'succeeded' | 'failed';
  clientSecret?: string;
  url?: string; // For PIX/Redirects
  qrCode?: string; // For PIX
  qrCodeBase64?: string; // For PIX
}

export interface PaymentGateway {
  createPayment(intent: PaymentIntent): Promise<PaymentResult>;
  createCustomer(name: string, email: string): Promise<string>;
  getPaymentStatus(id: string): Promise<PaymentResult>;
}

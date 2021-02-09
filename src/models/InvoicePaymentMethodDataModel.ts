/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Payment } from './Payment';

export type InvoicePaymentMethodDataModel = {
    /**
     * The payment method
     */
    paymentMethod?: string;
    /**
     * The destination the payment must be made to
     */
    destination?: string;
    /**
     * A payment link that helps pay to the payment destination
     */
    paymentLink?: string | null;
    /**
     * The rate between this payment method's currency and the invoice currency
     */
    rate?: string;
    /**
     * The amount paid by this payment method
     */
    paymentMethodPaid?: string;
    /**
     * The total amount paid by all payment methods to the invoice, converted to this payment method's currency
     */
    totalPaid?: string;
    /**
     * The total amount left to be paid, converted to this payment method's currency
     */
    due?: string;
    /**
     * The invoice amount, converted to this payment method's currency
     */
    amount?: string;
    /**
     * The added merchant fee to pay for network costs of this payment method.
     */
    networkFee?: string;
    /**
     * Payments made with this payment method.
     */
    payments?: Array<Payment>;
}

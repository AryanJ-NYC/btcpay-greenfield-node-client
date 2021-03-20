/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SpeedPolicy } from './SpeedPolicy';

export type CheckoutOptions = {
    /**
     * This is a risk mitigation parameter for the merchant to configure how they want to fulfill orders depending on the number of block confirmations for the transaction made by the consumer on the selected cryptocurrency
     */
    speedPolicy?: (SpeedPolicy) | null;
    /**
     * A specific set of payment methods to use for this invoice (ie. BTC, BTC-LightningNetwork). By default, select all payment methods activated in the store.
     */
    paymentMethods?: Array<string> | null;
    /**
     * The number of minutes after which an invoice becomes expired. Defaults to the store's settings. (The default store settings is 15)
     */
    expirationMinutes?: number | null;
    /**
     * The number of minutes after an invoice expired after which we are still monitoring for incoming payments. Defaults to the store's settings. (The default store settings is 1440, 1 day)
     */
    monitoringMinutes?: number | null;
    /**
     * A percentage determining whether to count the invoice as paid when the invoice is paid within the specified margin of error. Defaults to the store's settings. (The default store settings is 100)
     */
    paymentTolerance?: number | null;
    /**
     * When the customer has paid the invoice, the URL where the customer will be redirected when clicking on the `return to store` button. You can use placeholders `{InvoiceId}` or `{OrderId}` in the URL, BTCPay Server will replace those with this invoice `id` or `metadata.orderId` respectively.
     */
    redirectURL?: string | null;
    /**
     * When the customer has paid the invoice, and a `redirectURL` is set, the checkout is redirected to `redirectURL` automatically if `redirectAutomatically` is true. Defaults to the store's settings. (The default store settings is false)
     */
    redirectAutomatically?: boolean | null;
    /**
     * The language code (eg. en-US, en, fr-FR...) of the language presented to your customer in the checkout page. BTCPay Server tries to match the best language available. If null or not set, will fallback on the store's default language. You can see the list of language codes with [this operation](#operation/langCodes).
     */
    defaultLanguage?: string | null;
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NetworkFeeMode } from './NetworkFeeMode';
import type { SpeedPolicy } from './SpeedPolicy';

export type StoreBaseData = {
    /**
     * The name of the store
     */
    name?: string;
    /**
     * The absolute url of the store
     */
    website?: string;
    /**
     * The time after which an invoice is considered expired if not paid. The value will be rounded down to a minute.
     */
    invoiceExpiration?: number;
    /**
     * The time after which an invoice which has been paid but not confirmed will be considered invalid. The value will be rounded down to a minute.
     */
    monitoringExpiration?: number;
    speedPolicy?: SpeedPolicy;
    /**
     * The BOLT11 description of the lightning invoice in the checkout. You can use placeholders '{StoreName}', '{ItemDescription}' and '{OrderId}'.
     */
    lightningDescriptionTemplate?: string | null;
    /**
     * Consider an invoice fully paid, even if the payment is missing 'x' % of the full amount.
     */
    paymentTolerance?: number;
    /**
     * If true, then no authentication is needed to create invoices on this store.
     */
    anyoneCanCreateInvoice?: boolean;
    /**
     * If true, the checkout page will ask to enter an email address before accessing payment information.
     */
    requiresRefundEmail?: boolean;
    /**
     * If true, lightning payment methods show amount in satoshi in the checkout page.
     */
    lightningAmountInSatoshi?: boolean;
    /**
     * Should private route hints be included in the lightning payment of the checkout page.
     */
    lightningPrivateRouteHints?: boolean;
    /**
     * Include lightning invoice fallback to on-chain BIP21 payment url.
     */
    onChainWithLnInvoiceFallback?: boolean;
    /**
     * After successfull payment, should the checkout page redirect the user automatically to the redirect URL of the invoice?
     */
    redirectAutomatically?: boolean;
    showRecommendedFee?: boolean;
    /**
     * The fee rate recommendation in the checkout page for the on-chain payment to be confirmed after 'x' blocks.
     */
    recommendedFeeBlockTarget?: number;
    /**
     * The default language to use in the checkout page. (The different translations available are listed [here](https://github.com/btcpayserver/btcpayserver/tree/master/BTCPayServer/wwwroot/locales)
     */
    defaultLang?: string;
    /**
     * URL to a logo to include in the checkout page.
     */
    customLogo?: string | null;
    /**
     * URL to a CSS stylesheet to include in the checkout page
     */
    customCSS?: string | null;
    /**
     * The HTML title of the checkout page (when you over the tab in your browser)
     */
    htmlTitle?: string | null;
    networkFeeMode?: NetworkFeeMode;
    /**
     * If true, payjoin will be proposed in the checkout page if possible. ([More information](https://docs.btcpayserver.org/Payjoin/))
     */
    payJoinEnabled?: boolean;
    /**
     * The default payment method to load when displaying an invoice. It can be in the format of `BTC_LightningNetwork` to specify Lightning to be the default or `BTC_OnChain`/ `BTC` for on-chain to be the default.
     */
    defaultPaymentMethod?: string;
}

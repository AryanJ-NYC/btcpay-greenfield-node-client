/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentStatus } from './PaymentStatus';

export type Payment = {
    /**
     * A unique identifier for this payment
     */
    id?: string;
    /**
     * The date the payment was recorded
     */
    receivedDate?: string;
    /**
     * The value of the payment
     */
    value?: string;
    /**
     * The fee paid for the payment
     */
    fee?: string;
    /**
     * The status of the payment
     */
    status?: PaymentStatus;
    /**
     * The destination the payment was made to
     */
    destination?: string;
}

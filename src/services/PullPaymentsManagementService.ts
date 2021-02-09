/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayoutData } from '../models/PayoutData';
import type { PullPaymentData } from '../models/PullPaymentData';
import type { PullPaymentDataList } from '../models/PullPaymentDataList';
import { request as __request } from '../core/request';

export class PullPaymentsManagementService {

    /**
     * Get store's pull payments
     * Get the pull payments of a store
     * @returns PullPaymentDataList List of pull payments
     * @throws ApiError
     */
    public static async pullPaymentsGetPullPayments({
        storeId,
        includeArchived = false,
    }: {
        /** The store ID **/
        storeId: string,
        /** Whether this should list archived pull payments **/
        includeArchived?: boolean,
    }): Promise<PullPaymentDataList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/pull-payments`,
            query: {
                'includeArchived': includeArchived,
            },
        });
        return result.body;
    }

    /**
     * Create a new pull payment
     * A pull payment allows its receiver to ask for payouts up to `amount` of `currency` every `period`.
     * @returns PullPaymentData The create pull payment
     * @throws ApiError
     */
    public static async pullPaymentsCreatePullPayment({
        storeId,
        requestBody,
    }: {
        /** The store ID **/
        storeId: string,
        requestBody?: {
            /**
             * The name of the pull payment
             */
            name?: string | null,
            /**
             * The amount in `currency` of this pull payment as a decimal string
             */
            amount?: string,
            /**
             * The currency of the amount. In this current release, this parameter must be set to a cryptoCode like (`BTC`).
             */
            currency?: string,
            /**
             * The length of each period in seconds.
             */
            period?: number | null,
            /**
             * The unix timestamp when this pull payment is effective. Starts now if null or unspecified.
             */
            startsAt?: number | null,
            /**
             * The unix timestamp when this pull payment is expired. Never expires if null or unspecified.
             */
            expiresAt?: number | null,
            /**
             * The list of supported payment methods supported. In this current release, this must be set to an array with a single entry equals to `currency` (eg. `[ "BTC" ]`)
             */
            paymentMethods?: Array<string>,
        },
    }): Promise<PullPaymentData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/pull-payments`,
            body: requestBody,
            errors: {
                422: `Unable to validate the request`,
            },
        });
        return result.body;
    }

    /**
     * Archive a pull payment
     * Archive this pull payment (Will cancel all payouts awaiting for payment)
     * @returns any The pull payment has been archived
     * @throws ApiError
     */
    public static async pullPaymentsArchivePullPayment({
        storeId,
        pullPaymentId,
    }: {
        /** The ID of the store **/
        storeId: string,
        /** The ID of the pull payment **/
        pullPaymentId: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/pull-payments/${pullPaymentId}`,
            errors: {
                404: `The pull payment has not been found, or does not belong to this store`,
            },
        });
        return result.body;
    }

    /**
     * Approve Payout
     * Approve a payout
     * @returns PayoutData The payout has been approved, transitioning to `AwaitingPayment` state.
     * @throws ApiError
     */
    public static async pullPaymentsApprovePayout({
        storeId,
        payoutId,
        requestBody,
    }: {
        /** The ID of the store **/
        storeId: string,
        /** The ID of the payout **/
        payoutId: string,
        requestBody?: {
            /**
             * The revision number of the payout being modified
             */
            revision?: number,
            /**
             * The rate rule to calculate the rate of the payout. This can also be a fixed decimal. (if null or unspecified, will use the same rate setting as the store's settings)
             */
            rateRule?: string | null,
        },
    }): Promise<PayoutData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/payouts/${payoutId}`,
            body: requestBody,
            errors: {
                400: `Wellknown error codes are: \`rate-unavailable\`, \`invalid-state\`, \`amount-too-low\`, \`old-revision\``,
                404: `The payout is not found`,
                422: `Unable to validate the request`,
            },
        });
        return result.body;
    }

    /**
     * Cancel Payout
     * Cancel the payout
     * @returns any The payout has been cancelled
     * @throws ApiError
     */
    public static async pullPaymentsCancelPayout({
        storeId,
        payoutId,
    }: {
        /** The ID of the store **/
        storeId: string,
        /** The ID of the payout **/
        payoutId: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/payouts/${payoutId}`,
            errors: {
                404: `The payout is not found`,
            },
        });
        return result.body;
    }

}
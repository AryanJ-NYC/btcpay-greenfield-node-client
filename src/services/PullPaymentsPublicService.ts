/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePayoutRequest } from '../models/CreatePayoutRequest';
import type { PayoutData } from '../models/PayoutData';
import type { PayoutDataList } from '../models/PayoutDataList';
import type { PullPaymentData } from '../models/PullPaymentData';
import { request as __request } from '../core/request';

export class PullPaymentsPublicService {

    /**
     * Get Pull Payment
     * Get a pull payment
     * @returns PullPaymentData Information about the pull payment
     * @throws ApiError
     */
    public static async pullPaymentsGetPullPayment({
        pullPaymentId,
    }: {
        /** The ID of the pull payment **/
        pullPaymentId: string,
    }): Promise<PullPaymentData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/pull-payments/${pullPaymentId}`,
            errors: {
                404: `Pull payment not found`,
            },
        });
        return result.body;
    }

    /**
     * Get Payouts
     * Get payouts
     * @returns PayoutDataList The payouts of the pull payment
     * @throws ApiError
     */
    public static async pullPaymentsGetPayouts({
        pullPaymentId,
        includeCancelled = false,
    }: {
        /** The ID of the pull payment **/
        pullPaymentId: string,
        /** Whether this should list cancelled payouts **/
        includeCancelled?: boolean,
    }): Promise<PayoutDataList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/pull-payments/${pullPaymentId}/payouts`,
            query: {
                'includeCancelled': includeCancelled,
            },
            errors: {
                404: `Pull payment not found`,
            },
        });
        return result.body;
    }

    /**
     * Create Payout
     * Create a new payout
     * @returns PayoutData A new payout has been created
     * @throws ApiError
     */
    public static async pullPaymentsCreatePayout({
        pullPaymentId,
        requestBody,
    }: {
        /** The ID of the pull payment **/
        pullPaymentId: string,
        requestBody: CreatePayoutRequest,
    }): Promise<PayoutData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/pull-payments/${pullPaymentId}/payouts`,
            body: requestBody,
            errors: {
                400: `Wellknown error codes are: \`duplicate-destination\`, \`expired\`, \`not-started\`, \`archived\`, \`overdraft\`, \`amount-too-low\`, \`payment-method-not-supported\``,
                404: `Pull payment not found`,
                422: `Unable to validate the request`,
            },
        });
        return result.body;
    }

}
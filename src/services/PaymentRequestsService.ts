/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentRequestBaseData } from '../models/PaymentRequestBaseData';
import type { PaymentRequestData } from '../models/PaymentRequestData';
import type { PaymentRequestDataList } from '../models/PaymentRequestDataList';
import { request as __request } from '../core/request';

export class PaymentRequestsService {

    /**
     * Get payment requests
     * View information about the existing payment requests
     * @returns PaymentRequestDataList list of payment requests
     * @throws ApiError
     */
    public static async paymentRequestsGetPaymentRequests({
        storeId,
    }: {
        /** The store to query **/
        storeId: string,
    }): Promise<PaymentRequestDataList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-requests`,
        });
        return result.body;
    }

    /**
     * Create a new payment request
     * Create a new payment request
     * @returns PaymentRequestData Information about the new payment request
     * @throws ApiError
     */
    public static async paymentRequestsCreatePaymentRequest({
        storeId,
        requestBody,
    }: {
        /** The store to query **/
        storeId: string,
        requestBody: PaymentRequestBaseData,
    }): Promise<PaymentRequestData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/payment-requests`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when creating the payment request`,
                403: `If you are authenticated but forbidden to add new payment requests`,
            },
        });
        return result.body;
    }

    /**
     * Get payment request
     * View information about the specified payment request
     * @returns PaymentRequestData specified payment request
     * @throws ApiError
     */
    public static async paymentRequestsGetPaymentRequest({
        storeId,
        paymentRequestId,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The payment request to fetch **/
        paymentRequestId: string,
    }): Promise<PaymentRequestData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/payment-requests/${paymentRequestId}`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified payment request`,
                404: `The key is not found for this payment request`,
            },
        });
        return result.body;
    }

    /**
     * Archive payment request
     * Archives the specified payment request.
     * @returns any The payment request has been archived
     * @throws ApiError
     */
    public static async paymentRequestsArchivePaymentRequest({
        storeId,
        paymentRequestId,
    }: {
        /** The store the payment request belongs to **/
        storeId: string,
        /** The payment request to remove **/
        paymentRequestId: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/payment-requests/${paymentRequestId}`,
            errors: {
                400: `A list of errors that occurred when archiving the payment request`,
                403: `If you are authenticated but forbidden to archive the specified payment request`,
                404: `The key is not found for this payment request`,
            },
        });
        return result.body;
    }

    /**
     * Update payment request
     * Update a payment request
     * @returns PaymentRequestData The updated payment request
     * @throws ApiError
     */
    public static async paymentRequestsUpdatePaymentRequest({
        storeId,
        paymentRequestId,
        requestBody,
    }: {
        /** The store to query **/
        storeId: string,
        /** The payment request to update **/
        paymentRequestId: string,
        requestBody: PaymentRequestBaseData,
    }): Promise<PaymentRequestData> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/stores/${storeId}/payment-requests/${paymentRequestId}`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when updating the payment request`,
                403: `If you are authenticated but forbidden to update the payment request`,
            },
        });
        return result.body;
    }

}
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInvoiceRequest } from '../models/CreateInvoiceRequest';
import type { InvoiceData } from '../models/InvoiceData';
import type { InvoiceDataList } from '../models/InvoiceDataList';
import type { InvoicePaymentMethodDataModel } from '../models/InvoicePaymentMethodDataModel';
import type { MarkInvoiceStatusRequest } from '../models/MarkInvoiceStatusRequest';
import type { UpdateInvoiceRequest } from '../models/UpdateInvoiceRequest';
import { request as __request } from '../core/request';

export class InvoicesService {

    /**
     * Get invoices
     * View information about the existing invoices
     * @returns InvoiceDataList list of invoices
     * @throws ApiError
     */
    public static async invoicesGetInvoices({
        storeId,
    }: {
        /** The store to query **/
        storeId: string,
    }): Promise<InvoiceDataList> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/invoices`,
        });
        return result.body;
    }

    /**
     * Create a new invoice
     * Create a new invoice
     * @returns InvoiceData Information about the new invoice
     * @throws ApiError
     */
    public static async invoicesCreateInvoice({
        storeId,
        requestBody,
    }: {
        /** The store to query **/
        storeId: string,
        requestBody: CreateInvoiceRequest,
    }): Promise<InvoiceData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/invoices`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when creating the invoice`,
                403: `If you are authenticated but forbidden to add new invoices`,
            },
        });
        return result.body;
    }

    /**
     * Get invoice
     * View information about the specified invoice
     * @returns InvoiceData specified invoice
     * @throws ApiError
     */
    public static async invoicesGetInvoice({
        storeId,
        invoiceId,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The invoice to fetch **/
        invoiceId: string,
    }): Promise<InvoiceData> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/invoices/${invoiceId}`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified invoie`,
                404: `The key is not found for this invoice`,
            },
        });
        return result.body;
    }

    /**
     * Archive invoice
     * Archives the specified invoice.
     * @returns any The invoice has been archived
     * @throws ApiError
     */
    public static async invoicesArchiveInvoice({
        storeId,
        invoiceId,
    }: {
        /** The store the invoice belongs to **/
        storeId: string,
        /** The invoice to remove **/
        invoiceId: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/invoices/${invoiceId}`,
            errors: {
                400: `A list of errors that occurred when archiving the invoice`,
                403: `If you are authenticated but forbidden to archive the specified invoice`,
                404: `The key is not found for this invoice`,
            },
        });
        return result.body;
    }

    /**
     * Update invoice
     * Updates the specified invoice.
     * @returns InvoiceData The invoice that has been updated
     * @throws ApiError
     */
    public static async invoicesUpdateInvoice({
        storeId,
        invoiceId,
        requestBody,
    }: {
        /** The store the invoice belongs to **/
        storeId: string,
        /** The invoice to update **/
        invoiceId: string,
        requestBody: UpdateInvoiceRequest,
    }): Promise<InvoiceData> {
        const result = await __request({
            method: 'PUT',
            path: `/api/v1/stores/${storeId}/invoices/${invoiceId}`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when updating the invoice`,
                403: `If you are authenticated but forbidden to update the specified invoice`,
                404: `The key is not found for this invoice`,
            },
        });
        return result.body;
    }

    /**
     * Get invoice payment methods
     * View information about the specified invoice's payment methods
     * @returns InvoicePaymentMethodDataModel specified invoice payment methods data
     * @throws ApiError
     */
    public static async invoicesGetInvoicePaymentMethods({
        storeId,
        invoiceId,
    }: {
        /** The store to fetch **/
        storeId: string,
        /** The invoice to fetch **/
        invoiceId: string,
    }): Promise<Array<InvoicePaymentMethodDataModel>> {
        const result = await __request({
            method: 'GET',
            path: `/api/v1/stores/${storeId}/invoices/${invoiceId}/payment-methods`,
            errors: {
                403: `If you are authenticated but forbidden to view the specified invoie`,
                404: `The key is not found for this invoice`,
            },
        });
        return result.body;
    }

    /**
     * Archive invoice
     * Archives the specified invoice.
     * @returns any The invoice has been archived
     * @throws ApiError
     */
    public static async invoicesArchiveInvoice1({
        storeId,
        invoiceId,
    }: {
        /** The store the invoice belongs to **/
        storeId: string,
        /** The invoice to remove **/
        invoiceId: string,
    }): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/api/v1/stores/${storeId}/invoices/${invoiceId}/payment-methods`,
            errors: {
                400: `A list of errors that occurred when archiving the invoice`,
                403: `If you are authenticated but forbidden to archive the specified invoice`,
                404: `The key is not found for this invoice`,
            },
        });
        return result.body;
    }

    /**
     * Mark invoice status
     * Mark an invoice as invalid or settled.
     * @returns InvoiceData The updated invoice
     * @throws ApiError
     */
    public static async invoicesMarkInvoiceStatus({
        storeId,
        invoiceId,
        requestBody,
    }: {
        /** The store to query **/
        storeId: string,
        /** The invoice to update **/
        invoiceId: string,
        requestBody: MarkInvoiceStatusRequest,
    }): Promise<InvoiceData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/invoices/${invoiceId}/status`,
            body: requestBody,
            errors: {
                400: `A list of errors that occurred when updating the invoice`,
                403: `If you are authenticated but forbidden to update the invoice`,
            },
        });
        return result.body;
    }

    /**
     * Unarchive invoice
     * Unarchive an invoice
     * @returns InvoiceData The unarchived invoice
     * @throws ApiError
     */
    public static async invoicesUnarchiveInvoice({
        storeId,
        invoiceId,
    }: {
        /** The store to query **/
        storeId: string,
        /** The invoice to update **/
        invoiceId: string,
    }): Promise<InvoiceData> {
        const result = await __request({
            method: 'POST',
            path: `/api/v1/stores/${storeId}/invoices/${invoiceId}/unarchive`,
            errors: {
                400: `A list of errors that occurred when updating the invoice`,
                403: `If you are authenticated but forbidden to update the invoice`,
            },
        });
        return result.body;
    }

}
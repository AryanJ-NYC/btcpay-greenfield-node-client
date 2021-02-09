/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceStatusMark } from './InvoiceStatusMark';

export type MarkInvoiceStatusRequest = {
    /**
     * Mark an invoice as completed or invalid.
     */
    status?: (InvoiceStatusMark);
}

/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An additional status that describes why an invoice is in its current status.
 */
export enum InvoiceAdditionalStatus {
    NONE = 'None',
    PAID_LATE = 'PaidLate',
    PAID_PARTIAL = 'PaidPartial',
    MARKED = 'Marked',
    INVALID = 'Invalid',
    PAID_OVER = 'PaidOver',
}
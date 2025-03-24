'use client'





export interface DeliveriesState {
  entity: DeliveryCardProps[];
  loading: boolean;
  error: string | null;
  filtredStatus: null | string;
  page:number;
  limit:number;
  hasMore: boolean;
}




export interface DeliveryCardProps {
 
    uuid: string;
    type: string;
    currentStatus : string;
    createdAt: string;
    isReturn?: string;
    sender?: {
      company: string;
      name: string;
      contragentType: string;

    };
  
    recipient?: {
      company: string;
      name: string;
      phones: { number: string }[];
    };
    fromLocation: {
      city: string;
      address: string;
      postalCode: string;
      country: string;
    };
    toLocation: {
      city: string;
      country: string;
      address: string;
    };
    deliveryDetail?: {
      deliverySum: number;
      totalSum: number;
      deliveryVatSum: number;
      deliveryVatRate: number;
    };
    deliveryMode?: string;
    deliveryPoint?: string;
    shipmentPoint?: string;
    tariffCode?: number;

}
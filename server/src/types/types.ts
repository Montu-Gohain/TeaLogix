export type sortOrder = "ASC" | "DESC";
export interface orderType extends Array<[string, sortOrder]> {}
export interface Suppiler_ {
  id: string;
  name: string;
  email: string;
  contact_no: number;
  country: string;
}

export interface TeaProduct_ {
  id: string;
  name: string;
  type: string;
  stockQuantity: number;
  pricePerKg: number;
  supplierId: string;
}

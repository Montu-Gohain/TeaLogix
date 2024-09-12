export type sortOrder = "ASC" | "DESC";
export interface orderType extends Array<[string, sortOrder]> {}
export interface Suppiler_ {
  id: string;
  name: string;
  email: string;
  contact_no: number;
  country: string;
}

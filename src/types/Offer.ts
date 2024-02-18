import PaymentOptions from "./PaymentOptions";

export default interface Offer {
  code: number;
  name: string;
  price: number;
  itens?: string[];
  paymentOptions: PaymentOptions[];
  imagesPaths: string[];
}

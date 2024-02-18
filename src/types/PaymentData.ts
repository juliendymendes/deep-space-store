import PaymentOptions from "./PaymentOptions";

export default interface PaymentData {
	type: PaymentOptions
	cardNumber?: string
	cardOwnerName?: string
	cardExpirationDate?: string
	cardSecurityCode?: number
	cpf: string
}
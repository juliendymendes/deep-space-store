import { defineStore } from 'pinia'
import PersonalData from '@/types/PersonalData'
import DeliveryAddress from '@/types/DeliveryAddress'
import PaymentData from '@/types/PaymentData'

const personalData: PersonalData = {
	name: '',
	phone: ''
}

const deliveryAddress: DeliveryAddress ={
	bairro: '',
	cep: '',
	complemento: '',
	localidade: '',
	logradouro: '',
	uf: '',
	numero: -1
}
const paymentData: PaymentData = {
	type: 'pix',
	cpf: ""
}
export const useAppStore = defineStore('app', {
  state: () => ({
    personalData,
		deliveryAddress,
		paymentData
  }),
	actions: {
		verifyPersonalData(){
			return this.personalData.email != '' && this.personalData.phone != ''
		},
		verifyDeliveryAddress(){
			if(this.deliveryAddress.bairro != '' && this.deliveryAddress.cep != '' && this.deliveryAddress.localidade != '' && this.deliveryAddress.logradouro != '' && this.deliveryAddress.uf != '' && this.deliveryAddress.numero != -1){
				return true
			}

			return false
		},
		verifyPaymentData(){
			if(this.paymentData.type == "credito"){
				if(this.paymentData.cardExpirationDate != "" && this.paymentData.cardNumber != "" && this.paymentData.cardOwnerName != "" && this.paymentData.cardSecurityCode != 0 && this.paymentData.cpf != ""){
					return true
				}
				return false
			}

			return true
		}
	}
})

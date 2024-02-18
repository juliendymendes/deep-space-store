import { defineStore } from 'pinia'
import PersonalData from '@/types/PersonalData'
import DeliveryAddress from '@/types/DeliveryAddress'
import PaymentData from '@/types/PaymentData'
import OrderCreated from '@/types/OrderCreated'
import Offer from '@/types/Offer'

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
	paymentType: 'pix',
	cpf: ""
}

const orderCreated : OrderCreated = {
	orderCode: 0,
	offer: {
		code: 0,
		name: '',
		price: 0,
		paymentOptions: [],
		imagesPaths: []
	},
	name: '',
	phone: '',
	paymentType: 'pix',
	cpf: '',
	bairro: '',
	cep: '',
	complemento: '',
	localidade: '',
	logradouro: '',
	uf: '',
	numero: 0
}

export const useAppStore = defineStore('app', {
  state: () => ({
    personalData,
		deliveryAddress,
		paymentData,
		orderCreated
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
			if(this.paymentData.paymentType == "credito"){
				if(this.paymentData.cardExpirationDate != "" && this.paymentData.cardNumber != "" && this.paymentData.cardOwnerName != "" && this.paymentData.cardSecurityCode != 0 && this.paymentData.cpf != ""){
					return true
				}
				return false
			}

			return true
		}
	}
})

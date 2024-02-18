<template>
  <v-row class="bg-white rounded-xl pa-2">
    <v-col>
      <p class="font-weight-bold my-3">Pagamento</p>
      <v-radio-group
        inline
        class="pl-2"
        :model-value="paymentOption"
        @update:model-value="(value) => setPaymentOption(value!)"
      >
        <v-radio label="PIX" value="pix"></v-radio>
        <v-radio label="Cartão de crédito" value="credito"></v-radio>
        <v-radio label="Boleto" value="boleto"></v-radio>
      </v-radio-group>

      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="CPF (somente números)"
              required
              type="text"
              :rules="[validateCpf]"
							hide-details="auto"
            ></v-text-field>
          </v-col>

          <div class="w-100" v-if="chooseCreditCard">
            <v-col cols="12">
              <v-text-field
                label="Número do cartão"
                type="text"
                :rules="[validateCardNumber, requiredRules]"
								hide-details="auto"
              ></v-text-field>
            </v-col>

            <v-col cols="12">  
              <v-text-field
                label="Nome no cartão"
                type="text"
                :rules="[requiredRules]"
								hide-details="auto"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Data de validade"
                    type="month"
                    hide-details="auto"
										:rules="[requiredRules]"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Código de segurança"
                    type="number"
										hide-details="auto"
										:rules="[requiredRules]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
          </div>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { requiredRules, validateCpf } from "@/helpers/validators/forms";
import { ref } from "vue";

const chooseCreditCard = ref(false);

const paymentOption = ref("pix");



function setPaymentOption(value: string) {
  paymentOption.value = value;
  if (value === "credito") {
    chooseCreditCard.value = true;
  } else {
    chooseCreditCard.value = false;
  }
}

function validateCardNumber(value: string){
	if(/^\d{4} \d{4} \d{4} \d{4}$/.test(value)){
		return true
	}

	return "Número do cartão deve conter 16 caracteres numéricos."
}
</script>

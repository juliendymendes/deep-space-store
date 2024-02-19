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
							:model-value="appStore.paymentData.cpf"
							@update:model-value="value => appStore.paymentData.cpf = value"
            ></v-text-field>
          </v-col>

          <div class="w-100" v-if="chooseCreditCard">
            <v-col cols="12">
              <v-text-field
                label="Número do cartão"
                type="text"
                :rules="[validateCardNumber, requiredRules]"
                hide-details="auto"
								:model-value="appStore.paymentData.cardNumber"
								@update:model-value="value => appStore.paymentData.cardNumber = value"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Nome no cartão"
                type="text"
                :rules="[requiredRules]"
                hide-details="auto"
								:model-value="appStore.paymentData.cardOwnerName"
								@update:model-value="value => appStore.paymentData.cardOwnerName = value"
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
										:model-value="appStore.paymentData.cardExpirationDate"
										@update:model-value="value => appStore.paymentData.cardExpirationDate = value"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Código de segurança"
                    type="number"
                    hide-details="auto"
                    :rules="[requiredRules]"
										:model-value="appStore.paymentData.cardSecurityCode"
										@update:model-value="value => appStore.paymentData.cardSecurityCode = Number(value)"
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
import { requiredRules, validateCpf, validateCardNumber } from "@/helpers/validators/forms";
import { useAppStore } from "@/store/app";
import { ref } from "vue";

const chooseCreditCard = ref(false);

const paymentOption = ref("pix");

const appStore = useAppStore();

function setPaymentOption(value: string) {
  paymentOption.value = value;

  switch (value) {
    case "credito":
      appStore.paymentData.paymentType = "credito";
      chooseCreditCard.value = true;
      break;
    case "boleto":
      appStore.paymentData.paymentType = "boleto";
      chooseCreditCard.value = false;
      break;
    case "pix":
      appStore.paymentData.paymentType = "pix";
      chooseCreditCard.value = false;
      break;
  }
}


</script>

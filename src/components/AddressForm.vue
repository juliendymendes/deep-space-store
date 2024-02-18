<template>
  <v-row class="bg-white rounded-xl pa-2">
    <v-col>
      <p class="font-weight-bold">Endereço</p>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="CEP (somente números)"
              required
              type="text"
              :rules="[validateCep]"
              validate-on="blur lazy"
							hide-details="auto"
            ></v-text-field>
          </v-col>

          <div class="w-100" v-if="hasAddressInfo">
            <v-col cols="12">
              <v-row>
                <v-col cols="12" sm="9">
                  <v-text-field
                    label="Rua"
                    type="text"
                    :rules="[requiredRules]"
                    :model-value="addressInfo?.logradouro"
										hide-details="auto"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="3">
                  <v-text-field
                    label="Número"
                    type="text"
                    :rules="[requiredRules]"
										:model-value="addressInfo?.numero"
										hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    label="Cidade"
                    type="text"
                    :rules="[requiredRules]"
                    :model-value="addressInfo?.localidade"
										hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Estado"
                    type="text"
                    :rules="[requiredRules]"
                    :model-value="addressInfo?.uf"
										hide-details="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Bairro"
                type="text"
                :rules="[requiredRules]"
                :model-value="addressInfo?.bairro"
								hide-details="auto"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field label="Complemento" type="text" hide-details="auto"></v-text-field>
            </v-col>
          </div>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { requiredRules } from "@/helpers/validators/forms";

interface Address {
  bairro: string;
  cep: string;
  complemento: string;
  localidade: string;
  logradouro: string;
  uf: string;
	numero: number
}

const hasAddressInfo = ref(false);
const addressInfo = ref<Address>();

function searchAddressByCep(value: string) {
  fetch(`https://viacep.com.br/ws/${value}/json/`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      addressInfo.value = data;
      hasAddressInfo.value = true;
      console.log(addressInfo.value);
    });
}

function validateCep(value: string) {
  if (/^(\d{8})$/.test(value)) {
    searchAddressByCep(value);
    return true;
  }
  hasAddressInfo.value = false;
  return "CEP deve ter 8 números.";
}
</script>

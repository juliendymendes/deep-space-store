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
              :model-value="appStore.deliveryAddress.cep"
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
                    hide-details="auto"
                    :model-value="appStore.deliveryAddress.logradouro"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="3">
                  <v-text-field
                    label="Número"
                    type="text"
                    :rules="[requiredRules]"
                    :model-value="appStore.deliveryAddress.numero"
                    @update:model-value="
                      (value) =>
                        (appStore.deliveryAddress.numero = Number(value))
                    "
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
                    :model-value="appStore.deliveryAddress.localidade"
                    hide-details="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    label="Estado"
                    type="text"
                    :rules="[requiredRules]"
                    :model-value="appStore.deliveryAddress.uf"
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
                :model-value="appStore.deliveryAddress.bairro"
                hide-details="auto"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Complemento"
                type="text"
                hide-details="auto"
                :model-value="appStore.deliveryAddress.complemento"
                @update:model-value="
                  (value) => (appStore.deliveryAddress.complemento = value)
                "
              ></v-text-field>
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
import { useAppStore } from "@/store/app";
const hasAddressInfo = ref(false);

const appStore = useAppStore();

function searchAddressByCep(value: string) {
  fetch(`https://viacep.com.br/ws/${value}/json/`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
			if(appStore.deliveryAddress){
				appStore.deliveryAddress.bairro = data.bairro;
				appStore.deliveryAddress.cep = data.cep;
				appStore.deliveryAddress.logradouro = data.logradouro;
				appStore.deliveryAddress.localidade = data.localidade;
				appStore.deliveryAddress.uf = data.uf;

			}

      hasAddressInfo.value = true;
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

<template>
  <v-row class="bg-white rounded-xl pa-2">
    <v-col>
      <v-form>
        <p class="font-weight-bold">Endereço</p>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="CEP"
                required
                type="text"
                :rules="[validateCep]"
                validate-on="blur lazy"
              ></v-text-field>
            </v-col>

            <div class="w-100" v-if="hasAddressInfo">
              <v-col cols="12">
                <v-row>
                  <v-col cols="12" sm="9">
                    <v-text-field
                      label="Rua"
                      type="text"
                      hide-details
                      required
                      :model-value="addressInfo?.logradouro"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="3">
                    <v-text-field
                      label="Número"
                      type="text"
                      hide-details
                      required
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
                      hide-details
                      required
											:model-value="addressInfo?.localidade"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Estado"
                      type="text"
                      hide-details
                      required
											:model-value="addressInfo?.uf"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Bairro"
                  type="text"
                  hide-details
                  required
									:model-value="addressInfo?.bairro"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Complemento"
                  type="text"
                  hide-details
                ></v-text-field>
              </v-col>
            </div>
          </v-row>
        </v-container>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Address {
  bairro: string
  cep: string
  complemento: string
  localidade: string
  logradouro: string
  uf: string
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
	hasAddressInfo.value = false
  return "CEP deve 8 números.";
}
</script>

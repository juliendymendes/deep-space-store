<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height pt-10 pb-10">
      <v-row no-gutters>
        <v-col cols="12" lg="6" class="pl-xl-16">
          <v-img
            :width="500"
            aspect-ratio="16/9"
            cover
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          ></v-img>

          <v-row class="mt-5 w-75">
            <v-col cols="3" lg="2">
              <v-img
                :width="120"
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-img>
            </v-col>
            <v-col cols="3" lg="2">
              <v-img
                :width="120"
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-img>
            </v-col>
            <v-col cols="3" lg="2">
              <v-img
                :width="120"
                aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-img>
            </v-col>
          </v-row>
          <h1 class="mt-5 text-h5">Lorem isum dolor sit amet consectetur.</h1>
          <h2 class="mt-3 text-h6">R$199,99</h2>
          <h3 class="font-weight-regular mt-5">Essa oferta acompanha também</h3>
          <v-list lines="one" max-width="250" bg-color="transparent">
            <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n">
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex flex-column ga-7 pr-3">
          <v-row class="bg-white rounded-xl pa-2">
            <v-col>
              <p class="font-weight-bold">Dados pessoais</p>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12" class="d-flex flex-column ga-4">
                      <v-text-field
                        label="Nome completo"
                        required
                        type="text"
                        hide-details
                      ></v-text-field>
                      <v-text-field
                        label="E-mail"
                        type="email"
                        hide-details
                      ></v-text-field>
                      <v-text-field
                        label="Telefone"
                        type="tel"
                        hide-details
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-col>
          </v-row>

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
                        hide-details
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-row>
                        <v-col cols="12" sm="9">
                          <v-text-field
                            label="Rua"
                            type="text"
                            hide-details
                            required
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
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            label="Estado"
                            type="text"
                            hide-details
                            required
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
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        label="Complemento"
                        type="text"
                        hide-details
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-col>
          </v-row>

          <v-row class="bg-white rounded-xl pa-2">
            <v-col>
              <p class="font-weight-bold my-3">Pagamento</p>
              <v-radio-group inline class="pl-2">
                <v-radio label="PIX" value="pix"></v-radio>
                <v-radio label="Cartão de crédito" value="credito"></v-radio>
                <v-radio label="Boleto" value="boleto"></v-radio>
              </v-radio-group>
              <v-form>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="CPF"
                        required
                        type="text"
                        hide-details
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        label="Número do cartão"
                        type="text"
                        required
                        hide-details
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                        label="Nome no cartão"
                        type="text"
                        hide-details
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            label="Data de validade"
                            type="text"
                            hide-details
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            label="Código de segurança"
                            type="text"
                            hide-details
                            required
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-end">
                      <v-btn class="bg-black">Finalizar compra</v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
// export default {
//   data: () => ({
//     valid: false,
//     firstname: "",
//     lastname: "",
//     nameRules: [
//       (value) => {
//         if (value) return true;

//         return "Name is required.";
//       },
//       (value) => {
//         if (value?.length <= 10) return true;

//         return "Name must be less than 10 characters.";
//       },
//     ],
//     email: "",
//     emailRules: [
//       (value) => {
//         if (value) return true;

//         return "E-mail is requred.";
//       },
//       (value) => {
//         if (/.+@.+\..+/.test(value)) return true;

//         return "E-mail must be valid.";
//       },
//     ],
//   }),
// };
</script>

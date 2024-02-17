<template>
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
</template>

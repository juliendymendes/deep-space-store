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
</template>

<template>
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
</template>

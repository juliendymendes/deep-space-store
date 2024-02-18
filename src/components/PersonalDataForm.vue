<template>
  <v-row class="bg-white rounded-xl pa-2">
    <v-col>
      <p class="font-weight-bold">Dados pessoais</p>

      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex flex-column ga-5">
            <v-text-field
              label="Nome completo"
              type="text"
              :rules="[requiredRules]"
							hide-details="auto"
            ></v-text-field>
            <v-text-field label="E-mail" type="email" hide-details="auto"></v-text-field>
            <v-text-field
              label="Telefone"
              type="tel"
              :rules="[requiredRules, validadePhone]"
							hide-details="auto"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { requiredRules, validadePhone } from "../helpers/validators/forms"



</script>

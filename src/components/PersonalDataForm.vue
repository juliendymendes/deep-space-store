<template>
  <v-row class="bg-white rounded-xl pa-2">
    <v-col>
      <p class="font-weight-bold">Dados pessoais</p>

      <v-container>
        <v-row>
          <v-col cols="12" class="d-flex flex-column ga-5">
            <v-text-field
              id="name"
              label="Nome completo"
              type="text"
              :rules="[requiredRules]"
              required
              hide-details="auto"
              :model-value="appStore.personalData.name"
              @update:model-value="
                (value) => (appStore.personalData.name = value)
              "
            ></v-text-field>
            <v-text-field
              id="email"
              label="E-mail"
              type="email"
              hide-details="auto"
              :model-value="appStore.personalData.email"
              @update:model-value="
                (value) => (appStore.personalData.email = value)
              "
            ></v-text-field>
            <v-text-field
              id="phone"
              label="Telefone"
              type="tel"
              :rules="[requiredRules, validatePhone]"
              hide-details="auto"
              :model-value="appStore.personalData.phone"
              @update:model-value="
                (value) => (appStore.personalData.phone = value)
              "
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { requiredRules, validatePhone } from "../helpers/validators/forms";

const appStore = useAppStore();
</script>

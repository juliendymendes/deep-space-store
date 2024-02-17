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
          <PersonalDataForm/>

          <AddressForm/>

          <PaymentForm/>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
//
</script>

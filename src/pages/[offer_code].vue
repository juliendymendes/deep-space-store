<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height pt-10 pb-10">
      <v-row no-gutters>
        <v-col cols="12" lg="6" class="pl-xl-16">
          <v-img
            :width="500"
            aspect-ratio="16/9"
            cover
            :src="`http://localhost:3000/${offer?.imagesPaths[currentImage]}`"
          ></v-img>

          <v-row class="mt-5 w-75">
            <v-col
              cols="3"
              lg="2"
              v-for="(image, index) in offer?.imagesPaths"
              :key="image"
            >
              <v-img
                :width="120"
                aspect-ratio="16/9"
                cover
                :src="`http://localhost:3000/${image}`"
                class="cursor-pointer"
                @click="() => changeImage(index)"
              ></v-img>
            </v-col>
          </v-row>
          <h1 class="mt-5 text-h5">{{ offer?.name }}</h1>
          <h2 class="mt-3 text-h6">R${{ offer?.price }}</h2>
          <div v-if="offer?.itens">
            <h3 class="font-weight-regular mt-5">
              Essa oferta acompanha também
            </h3>
            <v-list lines="one" max-width="250" bg-color="transparent">
              <v-list-item
                v-for="item in offer.itens"
                :key="item"
                :title="item"
              >
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col cols="12" lg="6" class="d-flex flex-column ga-7 pr-3">
          <PersonalDataForm />

          <AddressForm />

          <PaymentForm />
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { Offer } from "@/mocks/handlers";
import { onMounted, ref } from "vue";

const offer = ref<Offer | null>(null);

const currentImage = ref(0);

function changeImage(index: number) {
  currentImage.value = index;
}

onMounted(() => {
  fetch("/offers/1", {
    method: "GET",
  })
    .then((res) => {
      if (res.ok) return res.json();

      /**
       *  TODO tratar erros
       * */
    })
    .then((data) => {
      offer.value = data;
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

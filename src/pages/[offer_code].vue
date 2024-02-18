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
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>

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
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      color="grey-lighten-4"
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
              </v-img>
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
          <v-form @submit.prevent="finalizeOrder">
            <PersonalDataForm />

            <AddressForm />

            <PaymentForm />
            <v-col cols="12" class="d-flex justify-end">
              <v-btn type="submit" class="bg-black">Finalizar compra</v-btn>
            </v-col>
          </v-form>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import { useAppStore } from "@/store/app";
import Offer from "@/types/Offer";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const router = useRoute();
const offer = ref<Offer | null>(null);
const appStore = useAppStore();
const currentImage = ref(0);

const { offer_code } = router.params;

function changeImage(index: number) {
  currentImage.value = index;
}

function finalizeOrder() {
  if (
    appStore.verifyPersonalData() &&
    appStore.verifyDeliveryAddress() &&
    appStore.verifyPaymentData()
  ) {
    const bodyContent = {
      ...appStore.personalData,
      ...appStore.deliveryAddress,
      ...appStore.paymentData,
    };
    fetch(`/offers/${offer_code}/create_order`, {
      method: "POST",
      body: JSON.stringify(bodyContent),
    }).then((res) => {
      console.log(res);
    });
  }
}

onMounted(() => {
  fetch(`/offers/${offer_code}`, {
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
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

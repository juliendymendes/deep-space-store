<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height pt-10 pb-10">
      <v-row no-gutters class="bg-white pa-3 rounded-xl">
				<v-col v-if="!hasOrder" cols="12" class="d-flex flex-column align-center">
					Você ainda não fez um pedido :(
				</v-col>
        <v-col v-else cols="12" class="d-flex flex-column align-center">
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="/success-purchase.png"
          ></v-img>
          <h1 class="text-h5 text-sm-h4 text-lg-h3">
            Pedido realizado com sucesso!
          </h1>
          <p class="text-h6">
            Total: R${{ appStore.orderCreated.offer.price }}
          </p>
          <p>Pago via {{ paymentOption }}</p>
          <p v-if="appStore.orderCreated.paymentType === 'credito'">
            {{ appStore.orderCreated.paymentStatus }}
          </p>
          <div v-else class="mt-3">
            <p>Aqui está seu código para pagamento</p>
            <v-img
              :width="500"
              aspect-ratio="16/9"
              cover
              :src="`http://localhost:3000/${appStore.orderCreated.paymentCodePath}`"
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
          </div>
          <v-row class="w-50 my-5">
            <v-col cols="12">
              <p>Informações do pedido</p>
              <p>Item: {{ appStore.orderCreated.offer.name }}</p>
              <p>Valor: R${{ appStore.orderCreated.offer.price }}</p>
              <p>Itens:</p>

              <p v-for="item in appStore.orderCreated.offer.itens" :key="item">
                * {{ item }}
              </p>
            </v-col>
            <v-col cols="12">
              <p>Informações para entrega</p>
              <p>
                {{ appStore.orderCreated.logradouro }},
                {{ appStore.orderCreated.numero }} -
                {{ appStore.orderCreated.cep }},
                {{ appStore.orderCreated.localidade }},
                {{ appStore.orderCreated.uf }}
              </p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { useAppStore } from "@/store/app";
import { onBeforeMount, onMounted, ref } from "vue";

const appStore = useAppStore();
const paymentOption = ref("");
const hasOrder = ref(false)

onBeforeMount(() => {
	if(appStore.orderCreated.orderCode == 0){
		hasOrder.value = false
	}else{
		hasOrder.value = true
	}
})

onMounted(() => {
  switch (appStore.orderCreated.paymentType) {
    case "pix":
      paymentOption.value = "PIX";
      break;
    case "credito":
      paymentOption.value = "Cartão de crédito";
      break;
    case "boleto":
      paymentOption.value = "Boleto";
      break;
  }
});
</script>

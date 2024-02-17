<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height pt-10 pb-10">
      <v-row no-gutters class="bg-white pa-3 rounded-xl">
        <v-col cols="12" class="d-flex flex-column align-center">
          <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            src="/success-purchase.png"
          ></v-img>
          <h1 class="text-h5 text-sm-h4 text-lg-h3">Pedido realizado com sucesso!</h1>
          <p class="text-h6">Total: R$199,99</p>
          <p>Pago via Cartão de crédito</p>
          <!-- <p>Aqui está seu código para pagamento</p>
					código para pagamento -->
          <v-row class="w-50 my-5">
            <v-col cols="12">
              <p>Informações do pedido</p>
              <p>Item: Lorem isum dolor sit amet consectetur.</p>
              <p>Valor: R$199,99</p>
              <p>Itens: Lorem, Lorem, Lorem</p>
            </v-col>
            <v-col cols="12">
              <p>Informações para entrega</p>
              <p>Rua Fulano de tal, 2220 - 79003-192, Campo Grande, MS</p>
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

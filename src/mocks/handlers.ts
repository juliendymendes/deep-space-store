import { http, HttpResponse } from "msw";
type Payment = "pix" | "credito" | "boleto"
export interface Offer {
	code: number
	name: string
	price: number
	itens?: string[]
	paymentOptions: Payment[]
	imagesPaths: string[]
}

const allOffers = new Map<number,Offer>([
	[1,{code: 1, name: "Projetor de luz de galáxia em forma de astronauta", price: 88,itens: ["Carregador", "Suporte"], paymentOptions: ["pix", "credito", "boleto"], imagesPaths: ["/projetor/image1.jpg", "/projetor/image2.jpg", "/projetor/image3.jpg"]}]
]);
const allOrders = new Map();

export const handlers = [
  http.get("/offers/:offerCode", ({ params }) => {
    const { offerCode } = params;

    const offer = allOffers.get(Number(offerCode));

    if (!offer) {
      return new HttpResponse(null, {
        status: 404,
        statusText: "Oferta não encontrada.",
      });
    }
    return HttpResponse.json(offer);
  }),

  http.post("/offers/:offerCode/create_order", async ({ request, params }) => {
    const newOrder = await request.json();
    const { offerCode } = params;
    allOrders.set(offerCode, newOrder);

    return HttpResponse.json(newOrder, {
      status: 201,
      statusText: "Pedido realizado com sucesso!",
    });
  }),
];

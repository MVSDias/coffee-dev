import { MapPinLineIcon } from "@phosphor-icons/react";

import CheckoutForm from "../components/CheckoutForm";
import SelectedCoffees from "../components/SelectedCoffees";
import { useCart } from "../hooks/usecart";
import { FormatCurrency } from "../utils/formmatedCurrency";

const deliveryPrice = 5.5;

export function CompleteOrder() {
  

  const { cartItemsTotalPrice, cartItemsQuantity } = useCart();

  const cartTotalPrice = cartItemsTotalPrice + deliveryPrice;

  const formattedCartItemsPrice = FormatCurrency(cartItemsTotalPrice);
  const formattedDeliveryPrice = FormatCurrency(deliveryPrice);
  const formattedCartTotalPrice = FormatCurrency(cartTotalPrice);

  

  return (
    <div className=" px-6 mt-24 mb-8 flex-1">
      <div className="">
        {/** contem o titulo e o formaddrress */}

        {/** Aqui é o componente de endereço */}
        <h3 className="text-[#8c5920] mb-2  text-2xl font-bold">Complete seu pedido</h3>

        <div>
          <div className="bg-[#F3F2F2] rounded-bl-[65px] rounded-tr-[65px] w-full px-4 py-2  text-amber-900">
            <div>
              <div className="flex items-center pt-4 mb-4 gap-1">
                <MapPinLineIcon size={28} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p className="text-[12px]">Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>

              {/** Aqui vai o formulário de endereço e o componente de escolha de pagamento*/}
              <div>
                <CheckoutForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/** contem o titulo e co formaddrress */}

      {/** aqui vai ter meu resumo de cafés escolhidos */}

      <div className=" bg-[#D7D5D5] mt-10">
        <h3 className="text-2xl mb-2 text-[#8c5920] font-bold">Cafés selecionados</h3>
        <div className="bg-[#F3F2F2] py-8 px-4 rounded-bl-[65px] rounded-tr-[65px]  text-amber-900">
          <div className=" mb-18">
            <SelectedCoffees />
          </div>

          {/** aqui é mostrado o cálculo do total */}

          <div >
            <div className="h-1 w-full bg-[#8c5920] mb-10"></div>
            <div className="flex justify-between px-2 mb-2">
              <div className="flex gap-2">
                <p>Total de itens</p>
                <span>{cartItemsQuantity}</span>
              </div>

              <span>{formattedCartItemsPrice}</span>
            </div>

            <div className="flex items-center justify-between px-2 mb-2">
              <p>Entrega</p>
              <span>{formattedDeliveryPrice}</span>
            </div>

            <div className="flex items-center justify-between px-2 mb-6">
              <p>
                <strong className="text-xl">Total</strong>
              </p>
              <span>
                <strong className="text-xl">{formattedCartTotalPrice}</strong>
              </span>
            </div>

            <div className="px-1">
              <button
              className=" bg-amber-200 w-full rounded-lg cursor-pointer py-2 font-bold mb-4"
              type="submit"
              form="address-form"              
            >
              Confirmar Pedido
            </button>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

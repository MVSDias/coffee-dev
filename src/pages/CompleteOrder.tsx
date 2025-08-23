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
    <div className=" flex flex-col lg:flex-row  px-6 md:justify-between lg:justify-center mt-24 md:mt-28 mb-8 ">
      <div className=" px-4 lg:px-4">
        {/** contem o titulo e o formaddrress */}

        {/** Aqui é o componente de endereço */}
        <h3 className="text-[#8c5920] mb-2 text-2xl font-bold">Complete seu pedido</h3>

        <div>
          <div className="bg-[#F3F2F2] rounded-bl-[65px] rounded-tr-[65px]  lg:flex lg:justify-center  py-2  text-amber-900">
            <div>
              <div className="flex items-center pt-4 sm:px-5 sm:gap-2  lg:px-4 mb-4 gap-1 md:gap-2 md:mb-8 md:px-6">
                <MapPinLineIcon  className="text-[28px] md:text-[50px] lg:text-[40px] "/>
                <div>
                  <h3 className="md:text-[20px] ">Endereço de Entrega</h3>
                  <p className="text-[12px] md:text-[16px]">Informe o endereço onde deseja receber seu pedido</p>
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

      <div className=" bg-[#D7D5D5] mt-10 md:mt-14 lg:mt-1 md:mr-4">
        <h3 className="text-2xl  mb-2 text-[#8c5920] font-bold">Cafés selecionados</h3>
        <div className="bg-[#F3F2F2] py-8 px-4 rounded-bl-[65px] rounded-tr-[65px]  text-amber-900">
          <div className=" mb-18">
            <SelectedCoffees />
          </div>

          {/** aqui é mostrado o cálculo do total */}

          <div >
            <div className="h-1 w-full bg-[#8c5920] mb-10"></div>
            <div className="flex justify-between px-2 mb-2">
              <div className="flex gap-2">
                <p className="md:text-xl md:font-semibold xl:text-2xl">Total de itens</p>
                <span className="md:text-xl xl:text-2xl md:font-semibold">{cartItemsQuantity}</span>
              </div>

              <span className="md:text-xl xl:text-2xl md:font-semibold">{formattedCartItemsPrice}</span>
            </div>

            <div className="flex items-center justify-between px-2 mb-2">
              <p  className="md:text-xl xl:text-2xl md:font-semibold">Entrega</p>
              <span className="md:text-xl xl:text-2xl md:font-semibold">{formattedDeliveryPrice}</span>
            </div>

            <div className="flex items-center justify-between px-2 mb-6">
              <p>
                <strong className="text-xl xl:text-2xl">Total</strong>
              </p>
              <span>
                <strong className="text-xl xl:text-2xl font-bold">{formattedCartTotalPrice}</strong>
              </span>
            </div>

            <div className="px-1">
              <button
              className="md:text-2xl xl:text-3xl bg-amber-200 w-full rounded-lg cursor-pointer py-2 font-bold mb-4"
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

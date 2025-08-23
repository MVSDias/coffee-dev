import { ClockIcon, CurrencyDollarIcon } from "@phosphor-icons/react";
import { MapPinLineIcon } from "@phosphor-icons/react/dist/ssr";
import { useLocation } from "react-router";
import LogoEntrega from "../assets/confirmed-order.svg";

interface AddressType {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  paymentMethod: string;
}

const OrderConfirmed = () => {
  const location = useLocation();
  const address: AddressType = location.state?.address;

  console.log("chegou na pagina orderComplete", address);
  return (
    <div className="flex flex-1 flex-col md:flex-row md:justify-center mx-10 mt-18 md:mt-4 lg:mt-0 items-center h-screen">
      <div className="object-fit">
        <div className="mb-6 lg:mb-3 ">
          <h1 className="w-full text-nowrap text-[#5f3403] font-bold text-xl mt-7 sm:text-3xl md:text-2xl sm:mt-10 md:mt-10  lg:-mt-4 lg:text-2xl">
            Muito bom!! Pedido confirmado!
          </h1>
          <p className="text-[14px] sm:text-[18px] md:text-[14px] lg:text-[16px] text-[#8b4e08]">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-4 lg:mb-2">
            <MapPinLineIcon  className=" p-1 md:p-1 text-white bg-amber-500 rounded-full text-3xl md:text-[28px]" />
            <div className=" flex flex-col py-1 ">
              <p className="text-[14px] text-[#8b4e08] ">
                Entrega em{" "}
                <strong>
                  {address.rua} {address.numero}{" "}
                </strong>
              </p>
              <p className="text-[12px] text-[#8b4e08] ">
                <strong>
                  {address.bairro} - {address.cidade}, {address.uf}
                </strong>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4 lg:mb-2">
            <ClockIcon className=" p-1 md:p-1 text-white bg-amber-500 rounded-full text-3xl md:text-[28px]" />
            <div className="">
              <p className="text-[14px] text-[#8b4e08]">Previsão de entrega</p>
              <p className="text-[12px] text-[#8b4e08]">
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4 lg:mb-0">
            <CurrencyDollarIcon className=" p-1 text-3xl md:p-1 text-white bg-amber-500 rounded-full  md:text-[28px]" />
            <div className="">
              <p className="text-[14px] text-[#8b4e08]">Pagamento na entrega</p>
              <p className="text-[12px] text-[#8b4e08]">
                <strong>{address.paymentMethod}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:mb-3  pt-5 md:pt-10 lg:pt-10 lg:ml-9 md:ml-10 lg:p-2 ">
        <img src={LogoEntrega} alt="LogoEntrega" className=" w-[80%] sm:w-[100%] md:w-[100%] lg:w-[80%] " />        
      </div>
    </div>
  );
};

export default OrderConfirmed;

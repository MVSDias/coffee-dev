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
    <div className="flex flex-1 flex-col lg:flex-row md:justify-center mx-10 mt-18 items-center min-h-screen">
      <div className="object-fit">
        <div className="mb-6">
          <h1 className="w-full text-nowrap text-[#5f3403] font-bold text-xl sm:text-3xl sm:mt-10">
            Muito bom!! Pedido confirmado!
          </h1>
          <p className="text-[14px] sm:text-[18px] text-[#8b4e08]">
            Agora é só aguaradr que logo o café chegará até você
          </p>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-4">
            <MapPinLineIcon size={38} className=" p-2 text-white bg-amber-500 rounded-full " />
            <div className=" flex flex-col py-1 ">
              <p className="text-[14px] text-[#8b4e08] ">
                Entrega em{" "}
                <strong>
                  {address.rua} {address.numero}{" "}
                </strong>
              </p>
              <p className="text-[14px] text-[#8b4e08] ">
                <strong>
                  {address.bairro} - {address.cidade}, {address.uf}
                </strong>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <ClockIcon size={38} className=" p-2 text-white bg-amber-500 rounded-full " />
            <div className="">
              <p className="text-[14px] text-[#8b4e08]">Previsão de entrega</p>
              <p className="text-[14px] text-[#8b4e08]">
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <CurrencyDollarIcon size={38} className=" p-2 text-white bg-amber-500 rounded-full " />
            <div className="">
              <p className="text-[14px] text-[#8b4e08]">Pagamento na entrega</p>
              <p className="text-[14px] text-[#8b4e08]">
                <strong>{address.paymentMethod}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={LogoEntrega} alt="LogoEntrega" className=" w-[80%] sm:w-[100%]  pt-18" />        
      </div>
    </div>
  );
};

export default OrderConfirmed;

import { useState } from "react";

import { PaymentMethod } from "../Data/paymentMethod";

const PaymentMethodsCard = () => {
  const [selected, setSelected] = useState("DINHEIRO");
  return (
    <>
      <div>
        <p>Pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
      </div>
      <div className="flex justify-evenly w-[85%]">
        {PaymentMethod.map((option) => (
          <label
            key={option.id}
            className={`cursor-pointer rounded-lg px-4 py-2 border transition
                ${selected === option.name ? "bg-blue-500 text-white border-blue-500" : "bg-white border-gray-300"}  
                `}
          >
            <input
              type="radio"
              name="opcao"
              value={option.name}
              checked={selected === option.name}
              onChange={() => setSelected(option.name)}
              className="hidden"
            />
            <div className="flex gap-2 items-center justify-center">
              {option.icon}
              {option.name}
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default PaymentMethodsCard;

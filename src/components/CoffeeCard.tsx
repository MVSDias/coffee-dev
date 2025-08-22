import { MinusIcon, PlusIcon, ShoppingCartIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useCart } from "../hooks/usecart";
import { FormatCurrency } from "../utils/formmatedCurrency";

export interface CoffeeType {
  id: number;
  tags: string;
  name: string;
  description: string;
  photo: string;
  sizes: {
    P: number;
    M: number;
    G: number;
  };
  quantity: number;
}

interface CoffeCardProps {
  coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeCardProps) {
  const { addCoffeeToCart, increaseQuantity, decreaseQuantity } = useCart();
  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState<"P" | "M" | "G">("M");

  const onIncreaseCoffee = () => {
    setQuantity((quantity) => quantity + 1);
    increaseQuantity(coffee.id, 1);
  };

  const onDecreaseCoffee = () => {
    setQuantity((q) => Math.max(q - 1, 1));
    decreaseQuantity(coffee.id, 1); // só decrementa 1
  };

  const handleAddToCart = () => {
    const coffeeToAdd = {
      // crio um objeto desestruturanto coffe e adicionando a quantidade 1
      id: coffee.id,
      name: coffee.name,
      selectedSize,
      sizes: coffee.sizes,
      price: coffee.sizes[selectedSize], // aqui pego o prelo do tamanho escolhido
      quantity,
      description: coffee.description,
      photo: coffee.photo,
      tags: coffee.tags,
    };

    // console.log("console.log", coffee);

    addCoffeeToCart(coffeeToAdd); // chamo a função do context e passo o objeto criado.
  };

  return (
    <div className="flex flex-col w-[55%]  items-center gap-3 sm:w-[80%] md:w-[80%] mt-7 mb-5 mx-auto bg-white  rounded-tr-[30px] rounded-bl-[30px]">
      <div className="mb-5">
        <img
          src={`/images/${coffee.photo}`}
          alt={coffee.name}
          className="mt-[-25px] w-[95px] sm:w-[100px] md:w-[120px]"
        />
      </div>
      <div className="max-w-[70%] flex flex-col items-center justify-center text-center">
        <p className="bg-orange-200 px-2 mt-[-20px] text-[13px] md:text-[11px] text-[#b3660f] text-nowrap sm:text-[11px] rounded-lg">
          {coffee.tags}
        </p>
        <h3 className=" text-[25px] sm:text-[20px] md:text-[15px] lg:text-[18px] mt-2 font-bold text-[#8b4e08]  text-nowrap">
          {coffee.name}
        </h3>
        <p className="text-[#be6c0e] text-[12px] mb-2 sm:text-[11px] md:text-[10px] lg:text-[11px] rounded-lg">
          {coffee.description}
        </p>
      </div>

      <div>
        {(["P", "M", "G"] as const).map((size) => (
          <label
            key={size}
            className="flex gap-3 mb-3 md:mb-2 text-[11px] sm:text-[11px] md:text-[11px] text-[#8b4e08] font-bold"
          >
            <input
              type="radio"
              name={`size-${coffee.id}`} // crio um name unico garante q cada card tenha seu radio independente
              value={size}
              checked={selectedSize === size} // comparo tamanho selecionado com o tamanho
              onChange={() => setSelectedSize(size)}
              className="accent-orange-400 cursor-pointer"
            />
            {size} - {FormatCurrency(coffee.sizes[size])}
          </label>
        ))}
      </div>
      <div className="flex  justify-center gap-3 mb-3">
        <div className="flex items-center justify-center gap-1 rounded-sm md:bg-[#D7D5D5]">
          <button
            onClick={onDecreaseCoffee}
            className="h-5 w-5 rounded-sm bg-[#D7D5D5] mr-2 md:mr-0  cursor-pointer"
            type="button"
          >
            <MinusIcon className="w-3 text-center text-[#be6c0e] mx-auto " />
          </button>
          <span className="text-[#be6c0e]">{quantity}</span>
          <button
            onClick={onIncreaseCoffee}
            type="button"
            className="h-5 w-5 md:h-4 md:w-4  rounded-sm ml-2 md:ml-0 bg-[#D7D5D5] cursor-pointer"
          >
            <PlusIcon className=" text-center text-[#be6c0e] mx-auto w-3" />
          </button>
        </div>

        <button type="button" onClick={handleAddToCart}>
          <ShoppingCartIcon
            size={24}
            weight="fill"
            className="bg-blue-300 p-0.5 rounded-sm cursor-pointer ml-3 md:ml-0"
          />
        </button>
      </div>
    </div>
  );
}

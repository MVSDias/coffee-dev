import { MinusIcon, PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { useCart } from "../hooks/usecart";
import { FormatCurrency } from "../utils/formmatedCurrency";

const SelectedCoffees = () => {
  const { decreaseQuantity, increaseQuantity, removeCoffeeOnCard, coffeeCart } = useCart();

  console.log("Esse é o conteudo do carrinho q chega no confirmOrder", coffeeCart);

  // AUMENTA A QUANTIDADE DE CAFÉ
  const onIncreaseCoffee = (id: number) => {
    increaseQuantity(id, 1);
  };

  // DIMINUI A QUANTIDADE DE CAFÉ
  const onDecreaseCoffee = (id: number) => {
    decreaseQuantity(id, 1);
  };

  //REMOVE O CAFÉ DO CARRINHO
  const handleDelete = (id: number) => {
    removeCoffeeOnCard(id);
  };
  return (
    <div className="">
      <div>
        {coffeeCart ? (
          coffeeCart.map((coffee) => (
            <div key={coffee.id}>
              <div className="flex flex-col md:flex-row gap-5 justify-center md:justify-between md:max-w-full  md:px-3 items-center mb-5 ">
                <div className="flex items-center gap-5 md:gap-12 lg:gap-25 ">
                {/* <div className="py-3 px-5 flex flex-col max-w-[110px] wrap-normal text-center shrink-0"> */}
                  <span className="font-bold md:w-[130px] lg:w-[150px] text-2xl lg:text-3xl wrap-normal">{coffee.name}</span>
                  <img src={`/images/${coffee.photo}`} className=" w-[70px] lg:w-[100px]"alt={coffee.name} />
                </div>

                
                <div className="flex max-w-full items-center gap-18 lg:gap-1">
                  <div className="flex flex-col w-full items-center justify-between gap-2 py-1 ">
                    
                    <div className="flex items-center  gap-2 md:gap-5">
                      <div className="flex  items-center  gap-3  md:max-w-[200px]  px-1  md:rounded-sm md:bg-[#D7D5D5] ">
                        <button
                          onClick={() => onDecreaseCoffee(coffee.id)}
                          className="h-6 w-6 lg:w-10 lg:h-10 rounded-sm bg-[#D7D5D5] "
                          type="button"
                        >
                          <MinusIcon className="text-[10px] md:text-[18px] text-center text-[#be6c0e] mx-auto cursor-pointer" />
                        </button>
                        <span className="text-[#be6c0e] text-sm md:text-[18px] ">{coffee.quantity}</span>
                        <button
                          onClick={() => onIncreaseCoffee(coffee.id)}
                          type="button"
                          className="h-6 w-6 lg:w-10 lg:h-10 rounded-sm bg-[#D7D5D5] mr-3"
                        >
                          <PlusIcon className="text-[10px] md:text-[18px] text-center text-[#be6c0e] mx-auto  cursor-pointer" />
                        </button>
                      </div>
                      <div className="bg-[#D7D5D5] px-2 rounded-sm md:px-3 py-2">
                        <button
                          onClick={() => handleDelete(coffee.id)}
                          type="button"
                          className="flex justify-center items-center"
                        >
                          <TrashIcon size={16} />
                          <span className="text-[10px] md:text-[12px] lg:text-[14px] cursor-pointer px-1">REMOVER</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center  justify-end py-1 px-2 md:pr-0 md:w-[100px]">
                    <p className="text-right font-semibold md:text-xl lg:text-2xl text-[#be6c0e]">{FormatCurrency(coffee.sizes[coffee.selectedSize] * coffee.quantity)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Erro ao carregar carrinho</div>
        )}
      </div>
    </div>
  );
};

export default SelectedCoffees;

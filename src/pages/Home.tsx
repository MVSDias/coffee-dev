
import { CoffeeCard } from "../components/CoffeeCard";
import LogoSection from "../components/LogoSection";
import { coffees } from "../Data/coffes";
import { useCart } from "../hooks/usecart";

const HomePage = () => {

  const {coffeeCart} = useCart();
  console.log(coffeeCart)

  const coffeeList = coffees.map((coffee) => { // mapeio os cafés estáticos do Data.coffees
    const coffeeInCart = coffeeCart.find(item => item.id === coffee.id); 
    return {
      ...coffee, // desestruturo o cofé
      quantity: coffeeInCart ? coffeeInCart.quantity : 0 
    }
  })
  
  

  return (
    <div className="bg-orange-50 mt-18">
      <section>
        <LogoSection />
      </section>
      <main className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 py-4 w-full bg-[#D7D5D5]  mt-10 items-center justify-evenly text-center">
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </main>
    </div>
  );
};

export default HomePage;

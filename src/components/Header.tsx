import { MapPinLineIcon, ShoppingCartIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import HeaderLogo from "../assets/headerLogo.png";
import { useCart } from "../hooks/usecart";

interface Location {
  city: string;
  uf: string;
}

const Header = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string>("");

  const { cartItemsQuantity } = useCart();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocalização não suportada pelo navegador");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );
          const data = await response.json();

          // O OpenStreetMap retorna a cidade e estado em 'address'
          setLocation({
            city: data.address.city || data.address.town || data.address.village,
            uf: data.address.state || data.address.region,
          });
        } catch {
          setError("Não foi possível obter cidade e estado.");
        }
      },
      () => {
        setError("Permissão de localização negada.");
      },
    );
  }, []);

  return (
    <div className="flex fixed z-10 top-0 left-0 right-0 justify-between items-center w-full py-3 px-4 md:px-14 min-h-16 bg-[rgb(240,_149,_89)]">


       {/** div-logo */}
      <div className="flex items-center shrink-0"> 
        <Link to="/">
          <img src={HeaderLogo} className="max-w-[100px]  sm:max-w-[120px] " alt="logo" />
        </Link>
      </div>


      {/** div-map & cart */}
      <div className="flex items-center  gap-2">


        {/**div-map */}
        <div className="flex items-center gap-1 shrink-0 ">
          <MapPinLineIcon className=" text-[28px] sm:text-[22px] text-amber-900 " />
          {error && <span className="text-red-700">----</span>}
          {location && (
            <div className="text-[13px] sm:text-[14px] flex flex-col text-amber-900">
              <span>{location.city} - </span>
              <span>{location.uf}</span>
            </div>
          )}
        </div>


        {/** div-cart */}
        <div className="relative ">
          <Link to="/order">
            <ShoppingCartIcon
              weight="fill"
              className="text-[#8c5920] text-[28px] sm:text-[25px] md:text-[30px] "
            />
            <div className="absolute -top-1 -right-1 flex items-center  justify-center w-4  h-4 bg-[#e65e3c] rounded-full ">
              <span className="text-[10px] text-white font-bold">{cartItemsQuantity}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

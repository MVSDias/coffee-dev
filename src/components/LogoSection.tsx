import { CoffeeIcon, PackageIcon, ShoppingCartIcon, TimerIcon } from "@phosphor-icons/react";
import Logo from "../assets/Coffee@Devs.png";
import introBackgroundImg from "../assets/intro-background.png";

const LogoSection = () => {
  return (
    <div
      className="grid grid-cols-[2fr_1fr] gap-2 py-2 mt-11 md:mt-16 md:py-6 bg-no-repeat bg-center 
    bg-cover"
      style={{
        backgroundImage: `linear-gradient(0deg, #f7dcdc 0%, #f1eaea 50%, #e0cdcd 100%), url(${introBackgroundImg})`,
      }}
    >
      <div className="flex flex-col p-3 gap-1 sm:pl-0 md:pl-10 ">
        <h2 className="text-[14px] mb-2 text-[#8c5920] text-center font-bold w-full pl-2 sm:text-[18px] sm:pl-4 md:text-3xl sm:text-left  sm:mb-0">
          Encontre o café perfeito para o seu dia ser perfeito
        </h2>

        <div className="flex w-full items-center flex-col pl-7 text-center gap-1 sm:pl-6 sm:pt-4 sm:gap-2 sm:flex-row sm:justify-center md:flex-col md:ml-1 md:py-9">
          <div className="flex w-full flex-col justify-left gap-1 sm:gap-6">
            <div className="flex items-center  gap-2">
              <CoffeeIcon
                weight="fill"
                className="text-[#8c5920] text-[11px] sm:text-[18px] md:text-2xl"
              />
              <p className="text-[#8c5920] text-[9px] sm:text-[11px] md:text-[18px]">
                O café chega quentinho até você
              </p>
            </div>

            <div className="flex items-center  gap-2">
              <PackageIcon
                weight="fill"
                className="text-[#8c5920] text-[11px] sm:text-[18px] md:text-2xl"
              />
              <p className="text-[#8c5920] text-[9px] sm:text-[11px] md:text-[18px]">
                Embalagem especial pro café
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col justify-left gap-1 sm:gap-6">
            <div className="flex items-center gap-2 justify-left">
              <TimerIcon
                weight="fill"
                className="text-[#8c5920] text-[11px] sm:text-[18px] md:text-2xl"
              />
              <p className="text-[#8c5920] text-[9px] sm:text-[11px] md:text-[18px]">
                Entrega rápida e rastreada
              </p>
            </div>

            <div className="flex items-center gap-2">
              <ShoppingCartIcon
                weight="fill"
                className="text-[#8c5920] text-[11px] sm:text-[18px] md:text-2xl"
              />
              <p className="text-[#8c5920] text-[9px] sm:text-[11px] md:text-[18px]">
                Compra simples e segura
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:px-8 items-center justify-center sm:mr-6 sm:justify-end sm:my-4">
        <img
          src={Logo}
          className="max-w-[70%]  sm:z-99 sm:max-w-[70%]  md:max-w-[120%]  lg:max-w-[90%] xl:max-w-[85%] rounded-full shadow-[0_10px_15px_rgba(249,115,22,0.5),0_10px_18px_rgba(251,191,36,0.4)]"
          alt="Logo-coffeeDevs"
        />
      </div>
    </div>
  );
};

export default LogoSection;

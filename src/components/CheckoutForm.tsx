import { yupResolver } from "@hookform/resolvers/yup";
import { CurrencyDollarIcon } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { inputFields } from "../Data/inputFields";
import { PaymentMethod } from "../Data/paymentMethod";
import { useCart } from "../hooks/usecart";

interface DataProps {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

const schema = yup
  .object({
    cep: yup
      .string()
      .required("CEP é obrigatório")
      .test("len", "CEP deve ter 8 dígitos", (val) => {
        if (!val) return false;
        const digits = val.replace(/\D/g, ""); // remove qualquer não dígito
        return digits.length === 8;
      }),
    rua: yup.string().required("Rua é obrigatória"),
    numero: yup.string().required("Número é obrigatório"),
    complemento: yup.string(),
    bairro: yup.string().required("Bairro é obrigatório"),
    cidade: yup.string().required("Cidade é obrigatória"),
    uf: yup.string().required("UF é obrigatória"),
    paymentMethod: yup
      .mixed()
      .oneOf(
        PaymentMethod.map((option) => option.name),
        "Informe o método de pagamento",
      )
      .required("Informe o método de pagamento"),
  })
  .required();

const CheckoutForm = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const selected = watch("paymentMethod");

  const onSubmit = (data: DataProps) => {
    navigate("/orderConfirmed", { state: { address: data } });
    clearCart();
    localStorage.clear();

    console.log("data do formulário", data);
  };
  return (
    <div className="bg-[#D7D5D5]">
      <form id="address-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex border-[#E6E5E5] bg-[#F3F2F2] flex-col gap-y-4 gap-x-3">
          {inputFields
            .filter((item) => item.placeholder === "CEP")
            .map((value) => (
              <div key={value.id}>
                <input
                  type={value.type}
                  {...register(value.name)}
                  placeholder={value.placeholder}
                  className={`border-[#E6E5E5] md:text-2xl lg:text-3xl md:mb-3 w-[40%] focus:outline-none focus:ring-2 focus:ring-[#8c5920] bg-[#EDEDED] rounded-lg px-3 py-1`}
                />
                <p>{errors[value.name]?.message}</p>
              </div>
            ))}
          {inputFields
            .filter((item) => item.placeholder === "Rua")
            .map((value) => (
              <div key={value.id}>
                <input
                  type={value.type}
                  {...register(value.name)}
                  placeholder={value.placeholder}
                  className={`border-[#E6E5E5] w-full md:text-2xl lg:text-3xl md:mb-3 bg-[#EDEDED] focus:outline-none focus:ring-2  focus:ring-[#8c5920] rounded-lg px-3 py-1`}
                />
                <p>{errors[value.name]?.message}</p>
              </div>
            ))}
          <div className="flex flex-col md:flex-row max-w-[90%] gap-2">
            {inputFields
              .filter((item) => item.placeholder === "Número" || item.placeholder === "Complemento")
              .map((value) => (
                <div key={value.id}>
                  <input
                    type={value.type}
                    {...register(value.name)}
                    placeholder={value.placeholder}
                    className={`border-[#E6E5E5] w-[40%] md:text-2xl lg:text-3xl md:mb-3 focus:outline-none focus:ring-2 focus:ring-[#8c5920] bg-[#EDEDED] rounded-lg px-3 py-1
                    ${value.placeholder === "Número" ? "max-w-[110px] md:min-w-[280px]" : ""}
                    ${value.placeholder === "Complemento" ? "max-w-[110px] md:min-w-[280px]" : ""}
                  `}
                  />
                  <p>{errors[value.name]?.message}</p>
                </div>
              ))}
          </div>
          <div className="flex gap-2 mb-4">
            {inputFields
              .filter(
                (item) =>
                  item.placeholder === "Bairro" ||
                  item.placeholder === "Cidade" ||
                  item.placeholder === "UF",
              )
              .map((value) => (
                <div key={value.id}>
                  <input
                    type={value.type}
                    {...register(value.name)}
                    placeholder={value.placeholder}
                    className={`border-[#E6E5E5] bg-[#EDEDED] rounded-lg md:text-2xl lg:text-3xl md:mb-3 px-3 py-1 mb-10 focus:outline-none focus:ring-2 focus:ring-[#8c5920]
                ${value.placeholder === "Bairro" ? "max-w-[110px] md:min-w-[250px] lg:min-w-[400px]" : ""}
                ${value.placeholder === "Cidade" ? "max-w-[110px] md:min-w-[250px] lg:min-w-[400px]" : ""}
                ${value.placeholder === "UF" ? "max-w-[50px] md:min-w-[100px]" : ""}
                `}
                  />
                  <p>{errors[value.name]?.message}</p>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-5 mb-7 flex bg-[#F3F2F2] px-3  py-4 flex-col text-center mx-auto ">
          <div className="mb-5 md:mt-10 gap-2 flex items-center justify-center">
            <CurrencyDollarIcon color="green" className=" md:text-[45px] lg:text-[55px] "/>
            <p className="text-[16px] md:text-2xl lg:text-[30px] wrap-normal">
              Pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
          <div className="flex flex-col lg:flex-row w-[80%] mx-auto md:justify-center gap-4">
            {PaymentMethod.map((option) => (
              <label
                key={option.id}
                className={`cursor-pointer rounded-lg md:rounded-2xl items-center justify-center py-2 border transition
                  ${selected === option.name ? "bg-blue-500  text-white border-blue-500" : "bg-white border-gray-300"}  
                `}
              >
                <input
                  type="radio"
                  {...register("paymentMethod")}
                  value={option.name}
                  className="hidden"
                />
                <div className="flex gap-2 px-3 md:text-xl lg:text-[25px] items-center justify-center">
                  {option.icon}
                  {option.name}
                </div>
              </label>
            ))}
          </div>
          <p className="text-red-500 text-sm">{errors.paymentMethod?.message}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;

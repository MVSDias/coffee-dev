import { BankIcon, CreditCardIcon, MoneyIcon } from "@phosphor-icons/react";

type PaymentMethodProps = {
  id: number;
  icon: React.ReactNode;
  name: string;
};

export const PaymentMethod: PaymentMethodProps[] = [
    {
      id: 1,
      icon: <CreditCardIcon size={15} style={{ color: "green" }} />,
      name: "CARTÃO DE CREDITO",
    },
    {
      id: 2,
      icon: <BankIcon size={15} style={{ color: "green" }} />,
      name: "CARTÃO DE DÉBITO",
    },
    {
      id: 3,
      icon: <MoneyIcon size={15} style={{ color: "green" }} />,
      name: "DINHEIRO",
    },
  ];
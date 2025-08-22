type FormFields = "cep" | "rua" | "numero" | "complemento" | "bairro" | "cidade" | "uf";

  export const inputFields: { id: number, name: FormFields; placeholder: string; type: string }[] = [
    {
      id: 1,
      name: "cep",
      placeholder: "CEP",
      type: "text",
    },
    {
      id: 2,
      name: "rua",
      placeholder: "Rua",
      type: "text",
    },
    {
      id: 3,
      name: "numero",
      placeholder: "Número",
      type: "text",
    },
    {
      id: 4,
      name: "complemento",
      placeholder: "Complemento",
      type: "text",
    },
    {
      id: 5,
      name: "bairro",
      placeholder: "Bairro",
      type: "text",
    },
    {
      id: 6,
      name: "cidade",
      placeholder: "Cidade",
      type: "text",
    },
    {
      id: 7,
      name: "uf",
      placeholder: "UF",
      type: "text",
    },
  ];
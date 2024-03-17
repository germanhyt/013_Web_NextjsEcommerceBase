interface DataItem {
  id: number;
  name: string;
  url: string;
}

interface FooterData {
  categories: DataItem[];
  contacts: DataItem[];
}

export const footerData: FooterData = {
  categories: [
    {
      id: 51,
      name: "Frutos Secos Naturales",
      url: "",
    },
    {
      id: 52,
      name: "Harinas Naturales",
      url: "",
    },
    {
      id: 53,
      name: "Embutidos",
      url: "",
    },
    {
      id: 54,
      name: "Comida para animales",
      url: "",
    },
    {
      id: 55,
      name: "Menestras Nacionales e Importados",
      url: "",
    },
    {
      id: 56,
      name: "Productos de Limpieza",
      url: "",
    },
  ],
  contacts: [
    {
      id: 101,
      name: "mercado@gmail.com",
      url: "",
    },
    {
      id: 102,
      name: "+51987654321",
      url: "",
    },
    {
      id: 103,
      name: "+51910139973",
      url: "",
    },
  ],
};

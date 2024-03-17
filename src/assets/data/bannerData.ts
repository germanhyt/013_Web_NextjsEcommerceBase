interface BannerData {
  id: number;
  img: string;
  title_right: string;
  title_middle: string;
  show_title_middle: boolean;
}

export const bannerSliderImages: BannerData[] = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710637058/Ecommerce-frontend/bienvenido_pgn5ql.svg",
    title_right: "",
    title_middle: "Bienvenido👋",
    show_title_middle: true,
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710635777/Ecommerce-frontend/frutos-secos_rzksep.svg",
    title_right: "Frutos Secos Naturales",
    title_middle: "",
    show_title_middle: false,
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710635779/Ecommerce-frontend/menestras_mtiffg.svg",
    title_right: "Menestras Nacionales e Importados",
    title_middle: "",
    show_title_middle: false,
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710635779/Ecommerce-frontend/embutidos_vlnxt1.svg",
    title_right: "Embutidos San Fernando",
    title_middle: "",
    show_title_middle: false,
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710635777/Ecommerce-frontend/comida-animales_wpzauv.svg",
    title_right: "Comida para Animales",
    title_middle: "",
    show_title_middle: false,
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710635778/Ecommerce-frontend/harinas_fo31b7.svg",
    title_right: "Harinas Naturales",
    title_middle: "",
    show_title_middle: false,
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1709948227/Ecommerce-frontend/limpieza_ykkaij.svg",
    title_right: "Productos de Limpieza",
    title_middle: "",
    show_title_middle: false,
  },
];

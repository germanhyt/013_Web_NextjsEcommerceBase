interface ProductImage {
  id: number;
  title: string;
  img: string;
}

interface ProductDetail {
  id: number;
  title: string;
  details: string;
}

interface DescriptionDetail {
  id: number;
  details: string;
}

interface ProductInfo {
  ProductHeading: string;
  ProductDetails: ProductDetail[];
  DescriptionDetailsHeading: string;
  DescriptionDetails: DescriptionDetail[];
}

export interface Product {
  id: number;
  title: string;
  category: string;
  img: string;
  ProductHeader: {
    title: string;
    publishDate: string;
    tags: string;
  };
  ProductsImages: ProductImage[];
  ProductsInfo: ProductInfo;
}

export const productsData: Product[] = [
  {
    id: 151,
    title: "Alamendras",
    category: "Frutos Secos Naturales",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Almendras",
      publishDate: "Marzo del 2024",
      tags: "Frutos Secos Naturales",
    },
    ProductsImages: [
      {
        id: 1,
        title: "Almendras",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "Almendras",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 3,
        title: "Almendras",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/. 100",
        },
        {
          id: 2,
          title: "Marca",
          details: "-",
        },
        {
          id: 3,
          title: "Contenido",
          details: "-",
        },
        {
          id: 4,
          title: "Stock",
          details: "-",
        },
      ],
      DescriptionDetailsHeading: "Detalles del Producto",
      DescriptionDetails: [
        {
          id: 1,
          details:
            "Las almendras son uno de los frutos secos más populares y versátiles. Son muy nutritivas y se pueden consumir crudas o tostadas. Son un excelente snack saludable y se pueden agregar a una variedad de platos, desde ensaladas hasta postres.",
        },
      ],
    },
  },
  {
    id: 15,
    title: "Nueces",
    category: "Frutos Secos Naturales",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Nueces",
      publishDate: "Marzo del 2024",
      tags: "Frutos Secos Naturales",
    },
    ProductsImages: [
      {
        id: 1,
        title: "Nueces",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "Nueces",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 3,
        title: "Nueces",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/. 80",
        },
        {
          id: 2,
          title: "Marca",
          details: "-",
        },
        {
          id: 3,
          title: "Contenido",
          details: "-",
        },
        {
          id: 4,
          title: "Stock",
          details: "-",
        },
      ],
      DescriptionDetailsHeading: "Detalles del Producto",
      DescriptionDetails: [
        {
          id: 1,
          details:
            "Las nueces son frutos secos deliciosos y nutritivos. Se pueden consumir crudas o tostadas y son un excelente ingrediente para una variedad de platos, desde ensaladas hasta postres. Son una opción saludable como snack y aportan una gran cantidad de nutrientes esenciales.",
        },
        {
          id: 1,
          details:
            "Beneficios: Las nueces son una excelente fuente de ácidos grasos omega-3, antioxidantes y proteínas. Ayudan a reducir el riesgo de enfermedades cardiovasculares y tienen propiedades antiinflamatorias.",
        },
        {
          id: 1,
          details:
            "Propiedades: Tienen propiedades neuroprotectoras y pueden mejorar la salud del cerebro. También son beneficiosas para la salud del corazón y pueden ayudar a reducir el colesterol.",
        },
      ],
    },
  },
  {
    id: 153,
    title: "Harina de Quinua",
    category: "Cereales y Harinas",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Harina de Quinua",
      publishDate: "Marzo del 2024",
      tags: "Cereales y Harinas",
    },
    ProductsImages: [
      {
        id: 1,
        title: "Harina de Quinua",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "Harina de Quinua",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 3,
        title: "Harina de Quinua",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/.15",
        },
        {
          id: 2,
          title: "Marca",
          details: "-",
        },
        {
          id: 3,
          title: "Contenido",
          details: "500 gramos",
        },
        {
          id: 4,
          title: "Stock",
          details: "Disponible",
        },
      ],
      DescriptionDetailsHeading: "Detalles del Producto",
      DescriptionDetails: [
        {
          id: 1,
          details:
            "La harina de quinua se obtiene al moler granos de quinua, un pseudocereal altamente nutritivo. Es versátil y se puede utilizar para preparar una variedad de platos, desde panes y pasteles hasta papillas y tortillas. Es una excelente opción para agregar valor nutricional a tus recetas.",
        },
        {
          id: 2,
          details:
            "Beneficios: La harina de quinua es una excelente fuente de proteínas, fibra y minerales. Es libre de gluten y adecuada para personas con intolerancia al gluten. Contribuye a mantener niveles saludables de azúcar en la sangre y es beneficiosa para la salud del corazón.",
        },
        {
          id: 3,
          details:
            "Propiedades: Tiene propiedades antioxidantes y antiinflamatorias. Es rica en hierro, magnesio y zinc, nutrientes esenciales para el buen funcionamiento del cuerpo.",
        },
      ],
    },
  },
  {
    id: 154,
    title: "Harina de Maca",
    category: "Superalimentos",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Harina de Maca",
      publishDate: "Marzo del 2024",
      tags: "Superalimentos",
    },
    ProductsImages: [
      {
        id: 1,
        title: "Harina de Maca",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "Harina de Maca",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 3,
        title: "Harina de Maca",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/.20",
        },
        {
          id: 2,
          title: "Marca",
          details: "-",
        },
        {
          id: 3,
          title: "Contenido",
          details: "250 gramos",
        },
        {
          id: 4,
          title: "Stock",
          details: "Disponible",
        },
      ],
      DescriptionDetailsHeading: "Detalles del Producto",
      DescriptionDetails: [
        {
          id: 1,
          details:
            "La harina de maca se obtiene al moler las raíces de la planta de maca, nativa de los Andes peruanos. Es conocida por sus propiedades energizantes y su alto contenido de nutrientes. Es un adaptógeno natural que puede ayudar a mejorar la resistencia y la vitalidad.",
        },
        {
          id: 2,
          details:
            "Beneficios: La harina de maca es rica en vitaminas, minerales y antioxidantes. Ayuda a aumentar la energía y la resistencia, equilibrar las hormonas, mejorar la fertilidad y aumentar la libido. También puede ayudar a reducir el estrés y mejorar el estado de ánimo.",
        },
        {
          id: 3,
          details:
            "Propiedades: La harina de maca contiene nutrientes como proteínas, fibra, carbohidratos, vitaminas del complejo B, vitamina C, calcio, hierro, potasio, cobre y zinc. Estos nutrientes son importantes para mantener la salud y el bienestar general del cuerpo.",
        },
      ],
    },
  },
];

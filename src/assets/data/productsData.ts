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
    link: string; // Corregir el tipo de la propiedad "link"
  };
  ProductsImages: ProductImage[];
  ProductsInfo: ProductInfo;
}

export const productsData: Product[] = [
  {
    id: 1,
    title: "Producto 1",
    category: "Frutos Secos Naturales",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Almendras",
      publishDate: "Marzo del 2024",
      tags: "Frutos Secos Naturales",
      link: "",
    },
    ProductsImages: [
      {
        id: 1,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 3,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/.100",
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
            "dataset dataset dataset dataset dataset dataset dataset dataset dataset ",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Producto 2",
    category: "Harinas Naturales",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Almendras",
      publishDate: "Marzo del 2024",
      tags: "Frutos Secos Naturales",
      link: "",
    },
    ProductsImages: [
      {
        id: 1,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 3,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/.101",
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
            "dataset dataset dataset dataset dataset dataset dataset dataset dataset ",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Producto 1",
    category: "Embutidos",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Almendras",
      publishDate: "Marzo del 2024",
      tags: "Frutos Secos Naturales",
      link: "",
    },
    ProductsImages: [
      {
        id: 1,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 3,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/.99",
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
            "dataset dataset dataset dataset dataset dataset dataset dataset dataset ",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Producto 1",
    category: "Comida para animales",
    img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
    ProductHeader: {
      title: "Almendras",
      publishDate: "Marzo del 2024",
      tags: "Frutos Secos Naturales",
      link: "",
    },
    ProductsImages: [
      {
        id: 1,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 2,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 4,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
      {
        id: 5,
        title: "",
        img: "https://res.cloudinary.com/dz0ajaf3i/image/upload/v1710005891/Ecommerce-frontend/istockphoto-922721264-612x612_tvrtke.png",
      },
    ],
    ProductsInfo: {
      ProductHeading: "Datos del producto:",
      ProductDetails: [
        {
          id: 1,
          title: "Precio",
          details: "s/.99",
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
            "dataset dataset dataset dataset dataset dataset dataset dataset dataset ",
        },
      ],
    },
  },
];

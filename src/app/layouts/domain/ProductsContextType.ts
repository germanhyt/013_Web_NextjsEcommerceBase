import { Product } from "@/assets/data/productsData";

export default interface ProductsContextType {
    products: Product[];
    searchProduct: string;
    setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
    selectProduct: string;
    setSelectProduct: React.Dispatch<React.SetStateAction<string>>;
    idProduct?: number;
    searchProductByTitle: Product[];
    selectProductsByCategory: Product[];
  }
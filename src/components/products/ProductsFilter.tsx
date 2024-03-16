"use client";

const selectOptions = [
  "Frutos Secos Naturales",
  "Harinas Naturales",
  "Embutidos",
  "Comida para animales",
  "Menestras Nacionales e Importados",
  "Productos de Limpieza",
];

const ProductsFilter = ({ setSelectProject }: { setSelectProject: any }) => {
  return (
    <select
      onChange={(e) => {
        setSelectProject(e.target.value);
      }}
      className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
    >
      <option value="" className="text-sm sm:text-md">
        Categoría
      </option>

      {selectOptions.map((option) => (
        <option key={option} className="text-normal sm:text-md">
          {option}
        </option>
      ))}
    </select>
  );
};

export default ProductsFilter;

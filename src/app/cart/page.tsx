"use client";

import { CartContext } from "@/core/hooks/CartContext";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useCallback, useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import { useDropzone } from "react-dropzone";
import { MdOutlineFileUpload } from "react-icons/md";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";

// import { render } from "@react-email/render";
// import nodemailer from "nodemailer";
// import Email from "@/components/Email/Email";

interface IFormData {
  name: string;
  phone: string;
  email: string;
  email2: string;
  image: File | null;
}

const Cart = () => {
  // Hooks
  const { cartProducts, deleteProductToCart, setCartProducts, calculateTotal } =
    useContext(CartContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    phone: "",
    email: "",
    email2: "",
    image: null,
  });
  const [file, setFile] = useState<File>();
  const onDrop = useCallback<any>((acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // Methods
  useEffect(() => {
    setIsClient(true);
  }, []);

  const infoBuyerPerson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? (files ? files[0] : null) : value,
    });
  };

  const continueOrder = () => {
    setOpenModal(true);
  };

  const cancelOrder = () => {
    setOpenModal(false);
    setLoading(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      email2: "",
      image: null,
    });
    setFile(undefined);
  };

  // About Resent with NextJS
  const sendEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (formData.email !== formData.email2) {
    //   alert(
    //     "Los correos electrónicos no coinciden. Por favor, inténtelo de nuevo."
    //   );
    //   return;
    // }

    // Integrate Cloudinary
    let imageUploaded: string | null = null;
    if (file instanceof File) {
      imageUploaded = await handleUploadImageToCloudinary(file as File);
    }
    // console.log("formData ", imageUploaded);

    interface IEmailBodyData {
      name: string;
      phone: string;
      email: string;
      image: string;
      total: string;
    }

    const request: IEmailBodyData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      image: imageUploaded ?? "",
      total: String(calculateTotal()) ?? "",
    };

    if (request !== null) {
      setLoading(true);
    }

    const res: AxiosResponse<IEmailBodyData> = await axios.post(
      "/api/send",
      request
    );

    if (res !== null && res.status === 200) {
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Correo enviado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      cancelOrder();
      setCartProducts([]);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error al enviar el correo electrónico",
      });
      cancelOrder();
    }

    // const data = res.data;
    // console.log("data ", data);
  };

  const handleUploadImageToCloudinary = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "preset-react");

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLODUINARY_API_KEY}/image/upload`,
      formData
    );

    console.log("res ", res.data.url);
    return res.data.url;
  };

  return (
    <>
      {isClient && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-28  mx-auto py-8 sm:py-12  bg-primary-light dark:bg-secondary-dark "
        >
          <div className="container">
            {cartProducts.length > 0 ? (
              <>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="sm:w-3/4 ">
                    {cartProducts.map((cp) => {
                      return (
                        <div key={cp.id}>
                          <div className="flex flex-col dark:bg-primary-dark sm:flex-row gap-2 py-4 mt-4  border-2 border-primary-dark rounded-lg">
                            <Image
                              loader={({ src }) => src}
                              src={cp.img}
                              alt="Image description"
                              className="mx-auto w-32 sm:w-48 rounded-lg"
                              width={300}
                              height={300}
                            />

                            <div className="flex flex-col md:flex-row items-center mx-auto  my-2 sm:my-5 ">
                              <p className="dark:text-white">{cp.name}</p>
                              <p className="dark:text-white">
                                <span className="font-nunito font-bold">
                                  Unidades:
                                </span>{" "}
                                {cp.quantity}
                              </p>
                              <p className="dark:text-white">
                                <span className="font-nunito font-bold">
                                  Subtotal:{" "}
                                </span>{" "}
                                s/. {cp.price}
                              </p>
                            </div>
                            <div className="flex items-center justify-center mx-auto my-2 sm:my-5">
                              <button
                                onClick={() => deleteProductToCart(cp)}
                                className="btnDelete border-2 border-primary-dark px-2 py-1 rounded-lg hover:bg-primary-dark text-black hover:text-white dark:hover:bg-secondary-dark dark:text-white dark:border-2 dark:border-primary-light dark:px-2 dark:py-1 dark:rounded-lg"
                              >
                                <MdDelete className="text-lg" />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="sm:w-1/4 font-nunito flex flex-col gap-8 items-center">
                    <h3 className="text-lg">Detalles de Compra</h3>
                    <div className="flex flex-col gap-4">
                      <p>
                        <span className="font-bold"># artículos: </span>
                        {cartProducts.length}
                      </p>
                      <p>
                        <span className="font-bold">Total:</span> s/
                        {calculateTotal()}
                      </p>
                      <Button
                        className="bg-primary-dark hover:bg-secondary-dark dark:hover:border-2 dark:hover:border-primary-dark text-white rounded-md px-2 py-1"
                        onClick={continueOrder}
                      >
                        Finalizar Compra
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="h-[75vh] w-full flex flex-col gap-2 justify-center items-center">
                  <p className="font-nunito">
                    El carrito está vacío, para comprar agregue productos
                  </p>
                  <Link href={"/"}>
                    <div className="px-4 py-2 bg-primary-dark text-white rounded-md">
                      Inicio
                    </div>
                  </Link>
                </div>
              </>
            )}
          </div>

          <Modal
            onClose={cancelOrder}
            open={openModal}
            className="flex items-center justify-center"
          >
            <div className="w-full mx-4 sm:w-6/12 rounded-lg bg-primary-light text-black border-2 text-center border-primary-dark ">
              <h3 className="py-4 font-nunito font-bold">
                Formulario de Compra
              </h3>
              {loading ? (
                <div className="flex justify-center items-center py-36">
                  <CircularProgress />
                </div>
              ) : (
                <form className="flex flex-col gap-2 px-6" onSubmit={sendEmail}>
                  <div className="flex">
                    <label className="w-1/4 text-end px-4" htmlFor="name">
                      Nombre:
                    </label>
                    <input
                      required
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Nombre ..."
                      onChange={infoBuyerPerson}
                      value={formData.name}
                      className="w-3/4 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/4 text-end px-4" htmlFor="email">
                      Email:
                    </label>
                    <input
                      required
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email..."
                      onChange={infoBuyerPerson}
                      value={formData.email}
                      className="w-3/4 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/4 text-end px-4" htmlFor="email2">
                      Confirmar Email:
                    </label>
                    <input
                      required
                      type="mail"
                      id="email2"
                      name="email2"
                      placeholder="Confirme su correo electrónico..."
                      onChange={infoBuyerPerson}
                      value={formData.email2}
                      pattern={formData.email}
                      className="w-3/4 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/4 text-end px-4" htmlFor="phone">
                      Celular:
                    </label>
                    <input
                      required
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="Celular ..."
                      onChange={infoBuyerPerson}
                      value={formData.phone}
                      className="w-3/4 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/4 text-end px-4" htmlFor="image">
                      Imagen del yape:
                    </label>
                    {/* <input
                      id="image"
                      type="file"
                      accept="image/*"
                      name="image"
                      className="w-3/4 border border-primary-dark px-2 py-1 rounded-md "
                      onChange={infoBuyerPerson}
                    /> */}
                    <div className="flex flex-col w-3/4 border border-primary-dark px-2 py-1 rounded-md">
                      <div
                        className=" bg-primary-dark border-1 py-5 rounded-md "
                        {...getRootProps()}
                      >
                        <input required {...getInputProps()} />
                        {isDragActive ? (
                          <p className="text-white my-1">
                            <MdOutlineFileUpload
                              style={{ fontSize: "24px", margin: "auto" }}
                            />
                          </p>
                        ) : (
                          <p className="text-white text-center px-2">
                            Seleccione o arrastre el archivo
                          </p>
                        )}
                      </div>
                      {!isDragActive && file === undefined && (
                        <p className="text-primary-dark  text-xs">
                          Archivo requerido
                        </p>
                      )}
                      <div className="p-lg-1 mt-2 break-all rounded ">
                        <span className="fw-bold">Archivo: </span>
                        {file !== undefined ? (
                          <span className="bg-dark text-bg-primary py-1 px-2 rounded  ">
                            {file?.name}
                          </span>
                        ) : (
                          "image.png"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="my-4 flex gap-2 justify-end">
                    <Button
                      className="rounded-md bg-primary-dark text-white px-2 py-1 hover:border hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light"
                      onClick={() => {
                        cancelOrder();
                      }}
                    >
                      Cancelar
                    </Button>
                    <Button
                      type="submit"
                      className="rounded-md bg-primary-dark text-white px-2 py-1 hover:border hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light"
                    >
                      Enviar
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Modal>
        </motion.section>
      )}
    </>
  );
};

export default Cart;

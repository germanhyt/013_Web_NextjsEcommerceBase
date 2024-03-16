"use client";

import { CartContext } from "@/core/hooks/CartContext";
import { Modal } from "@mui/material";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";

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
  const { cartProducts, deleteProductToCart, calculateTotal } =
    useContext(CartContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);
  const [urlImagen, setUrlImagen] = useState<string>("");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    phone: "",
    email: "",
    email2: "",
    image: null,
  });

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
  };

  // About Resent with NextJS
  const sendEmail = async () => {
    // console.log("formData ", formData);
    // // console.log("formData ", formData.image);

    // Integrate Cloudinary
    let imageUploaded: string | null = null;
    if (formData.image instanceof File) {
      imageUploaded = await handleUploadImageToCloudinary(formData.image);
    }
    // console.log("formData ", imageUploaded);

    interface IEmailBodyData {
      name: string;
      phone: string;
      email: string;
      image: string;
    }

    const request: IEmailBodyData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      image: imageUploaded ?? "",
    };
    // console.log("request ", request.image);
    const res: AxiosResponse<IEmailBodyData> = await axios.post(
      "/api/send",
      request
    );
    const data = res.data;
    console.log("data ", data);
  };

  const handleUploadImageToCloudinary = async (image: File) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "preset-react");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dz0ajaf3i/image/upload",
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
          className="mx-auto py-8 sm:py-16 bg-primary-light dark:bg-secondary-dark"
        >
          <div className="container mt-28 ">
            {cartProducts.length > 0 ? (
              <>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="sm:w-3/4 ">
                    {cartProducts.map((cp) => {
                      return (
                        <>
                          <div className="flex flex-col sm:flex-row gap-2 py-4 mt-4  border-2 border-primary-dark rounded-lg">
                            <Image
                              loader={({ src }) => src}
                              src={cp.img}
                              alt="Image description"
                              className="mx-auto w-32 sm:w-48 rounded-lg"
                              width={300}
                              height={300}
                            />

                            <div className="flex flex-col md:flex-row items-center mx-auto  my-2 sm:my-5">
                              <p>{cp.name}</p>
                              <p>
                                <span className="font-nunito font-bold">
                                  Unidades:
                                </span>{" "}
                                {cp.quantity}
                              </p>
                              <p>
                                <span className="font-nunito font-bold">
                                  Subtotal:{" "}
                                </span>{" "}
                                s/. {cp.price}
                              </p>
                            </div>
                            <div className="flex items-center justify-center mx-auto my-2 sm:my-5">
                              <button
                                onClick={() => deleteProductToCart(cp)}
                                className="btnDelete hover:bg-primary-dark hover:text-white"
                              >
                                <MdDelete />
                              </button>
                            </div>
                          </div>
                        </>
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
                        className="bg-primary-dark text-white rounded-md px-2 py-1"
                        onClick={continueOrder}
                      >
                        Finalizar Compra
                      </Button>
                      <Button
                        onClick={sendEmail}
                        className="bg-primary-dark text-white rounded-md px-2 py-1"
                      >
                        Test Email
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
            {loading ? (
              <></>
            ) : (
              <div className="w-full mx-4 sm:w-5/12 rounded-lg bg-primary-light border-2 text-center border-primary-dark ">
                <h3 className="py-4 font-nunito font-bold">
                  Formulario de Compra
                </h3>
                <form className="flex flex-col gap-2 px-6">
                  <div className="flex">
                    <label className="w-1/3 text-end px-4" htmlFor="name">
                      Nombre:
                    </label>
                    <input
                      //   required
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Nombre ..."
                      onChange={infoBuyerPerson}
                      value={formData.name}
                      className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 text-end px-4" htmlFor="email">
                      Email:
                    </label>
                    <input
                      //   required
                      id="email"
                      type="text"
                      name="email"
                      placeholder="Email..."
                      onChange={infoBuyerPerson}
                      value={formData.email}
                      className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 text-end px-4" htmlFor="email2">
                      Confirmar Email:
                    </label>
                    <input
                      //   required
                      type="mail"
                      id="email2"
                      name="email2"
                      placeholder="Confirme su correo electrónico,,,"
                      onChange={infoBuyerPerson}
                      value={formData.email2}
                      pattern={formData.email2}
                      className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 text-end px-4" htmlFor="phone">
                      Celular:
                    </label>
                    <input
                      //   required
                      id="phone"
                      type="text"
                      name="phone"
                      placeholder="Celular ..."
                      onChange={infoBuyerPerson}
                      value={formData.phone}
                      className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                    />
                  </div>
                  <div className="flex">
                    <label className="w-1/3 text-end px-4" htmlFor="image">
                      Imagen:
                    </label>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      name="image"
                      className="w-2/3 border border-primary-dark px-2 py-1 rounded-md "
                      onChange={infoBuyerPerson}
                    />
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
                      onClick={sendEmail}
                      className="rounded-md bg-primary-dark text-white px-2 py-1 hover:border hover:border-primary-dark hover:text-primary-dark hover:bg-primary-light"
                    >
                      Enviar
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </Modal>
        </motion.section>
      )}
    </>
  );
};

export default Cart;

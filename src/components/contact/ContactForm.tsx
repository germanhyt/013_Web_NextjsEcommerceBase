import FormInput from "@/components/reusable/FormInput";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_988p1xn",
          "template_twd2ypu",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Correo enviado correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
            console.log(result.text);

            if (form.current) form.current.reset(); //reset inputs of form
          },
          (error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Error al enviar el correo electrónico",
            });

            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="w-full">
      <div className="leading-loose">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-primary-dark rounded-xl shadow-xl text-left"
        >
          <p className="break-all font-general-medium text-center text-primary-dark dark:text-primary-light text-2xl mb-8">
            Formulario de contacto
          </p>
          <FormInput
            inputLabel="Nombres"
            labelFor="name"
            inputType="text"
            inputId="name"
            inputName="user_name"
            placeholderText="Tu nombre completo"
            ariaLabelName="Name"
          />
          <FormInput
            inputLabel="Email"
            labelFor="email"
            inputType="email"
            inputId="email"
            inputName="user_email"
            placeholderText="Your email"
            ariaLabelName="Email"
          />
          <FormInput
            inputLabel="Asunto"
            labelFor="subject"
            inputType="text"
            inputId="subject"
            inputName="subject"
            placeholderText="Asunto"
            ariaLabelName="Subject"
          />

          <div className="mt-6">
            <label
              className="block text-lg text-primary-dark dark:text-primary-light mb-2"
              htmlFor="message"
            >
              Mensaje
            </label>
            <textarea
              className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
              id="message"
              name="message"
              cols={14}
              rows={6}
              aria-label="Message"
              style={{ resize: "none" }}
            ></textarea>
          </div>

          <div className="font-nunito w-full ">
            <button
              title="Enviar mensaje"
              aria-label="Send Message"
              type="submit"
              value="Enviar"
              className="sm:w-36 text-white text-center font-medium tracking-wider bg-secondary-dark hover:bg-primary-dark focus:ring-1 focus:bg-ternary-dark rounded-lg mt-6 duration-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

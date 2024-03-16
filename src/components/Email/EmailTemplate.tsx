import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
  Img,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  image: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  phone,
  email,
  image,
}) => (
  <Html>
    <Head />
    <Preview>{name}</Preview>
    <Tailwind>
      <Body className="bg-purple-200 my-auto mx-auto font-sans">
        <Container className="my-8 mx-auto p-8 max-w-4xl bg-white rounded-lg shadow-lg">
          <Heading className=" text-primary-email text-2xl font-semibold text-left mb-4">
            ¡Hola {name}!
          </Heading>
          <Text className="text-primary-email text-lg leading-7 mb-4">
            Agradecemos tu interés en nuestros productos y estamos encantados de
            recibir tu consulta.
          </Text>
          <Text className="text-primary-email text-lg leading-7 mb-4">
            A continuación, te proporcionamos los datos de contacto que nos has
            proporcionado:
          </Text>
          <Text className="text-primary-email text-lg leading-7 mb-4">
            <span className="font-bold">Celular: </span> {phone}
          </Text>
          <Text className=" text-primary-email text-lg leading-7 mb-4">
            <span className="font-bold">Email: </span> {email}
          </Text>
          <div className="my-2">
            <Text className=" text-primary-email text-lg leading-7 mb-4">
              <span className="font-bold">Imagen: </span>
            </Text>
            <Img src={image} alt="Producto" width="300" height="300" />
          </div>
          <Hr className="my-6 mx-0 w-full" />
          <Text className="text-primary-email text-base mb-4">
            En nuestro Ecommerce, nos esforzamos por ofrecer productos de alta
            calidad y un excelente servicio al cliente. Si tienes alguna otra
            pregunta o necesitas más información, no dudes en ponerte en
            contacto con nosotros.
          </Text>
          <Text className="text-primary-email text-base mb-4">
            Esperamos poder atenderte pronto y ayudarte en lo que necesites.
          </Text>
          <Text className="text-primary-email text-base">
            ¡Gracias y que tengas un excelente día!
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EmailTemplate;

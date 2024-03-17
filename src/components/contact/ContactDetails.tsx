import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

const contacts = [
  {
    id: 1,
    name: "Lima-Perú",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    name: "germanhuaytalla22@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    name: "910139973",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full ">
      <div className="text-left max-w-xl px-6">
        <h2 className="break-all font-nunito text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8">
          Detalles de contacto
        </h2>
        <ul className="font-nunito">
          {contacts.map((contact) => (
            <li className="flex" key={contact.id}>
              <div className="w-1/4 flex justify-center">
                <i className="text-2xl text-black dark:text-primary-light mr-4">
                  {contact.icon}
                </i>
              </div>
              <span className="w-3/4 break-all text-lg mb-4 text-ternary-dark dark:text-ternary-light">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactDetails;

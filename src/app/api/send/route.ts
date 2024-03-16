import { Resend } from "resend";
import EmailTemplate from "@/components/Email/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend("re_gzZeiznQ_7LG5fz6TNnZghQbHGaRBZcT7");

export async function POST(req: NextRequest) {
  const { name, phone, email, image, total } = await req.json();
  console.log("total ", total);
  try {
    const data = await resend.emails.send({
      from: "Ecommerce <onboarding@resend.dev>",
      to: [email, "germanhuaytalla23@gmail.com"],
      subject: "Hola, somos Ecommerce",
      react: EmailTemplate({ name, phone, email, image, total }),
      text: "hello from Resend and NextJS",
    });

    console.log(data);

    return NextResponse.json(
      {
        message: "Email sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: 'Acme <onboarding@resend.dev>',
//     to: ['delivered@resend.dev'],
//     subject: 'Hello world',
//     react: EmailTemplate({ firstName: 'John' }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };

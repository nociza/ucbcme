import Input from "@components/Input";
import * as Fathom from "fathom-client";
import { useRef, useState } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { z } from "zod";
import { trpc } from "@libs/trpc";
import { useRouter } from "next/router";

interface FormData {
  email: string;
}

export default function FooterNewsletter() {
  const router = useRouter();
  const eventId = "?utm_campaign=donaterad&utm_source=google";
  const formRef = useRef<FormHandles>(null);
  const [submit, setSubmit] = useState(false);
  const { isSuccess, isError, ...contactRouter } = trpc.useMutation([
    "contact.create-contact-newsletter",
  ]);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    const schema = z
      .object({
        email: z.string().email({ message: "Email invalid" }),
      })
      .safeParse({ email: data.email });
    if (schema.success) {
      await contactRouter.mutateAsync({
        email: data.email,
      });
      formRef.current?.reset();
      formRef.current?.clearField("email");
      formRef.current?.setFieldError("email", "");
      setSubmit(true);
      if (router.asPath.includes(eventId)) {
        Fathom.trackGoal("SLXOTXYI", 0);
      }
    }
    if (!schema.success)
      formRef.current?.setFieldError("email", "Invalid Email Address");
  };
  return (
    <Form ref={formRef} onSubmit={handleSubmit} className="space-y-2">
      <Input name="email" variant="email" disabled={submit} />
      <button
        type="submit"
        disabled={submit}
        className="w-full px-3 py-1 text-base font-bold transition-all duration-300 ease-linear bg-white border-2 border-black outline-none elative rounded-xl hover:shadow-none focus-within:shadow-none hover:bg-black hover:text-white shadow-deep focus:bg-green-light disabled:bg-green-light disabled:shadow-none disabled:pointer-events-none focus-within:text-black focus:ring-4 focus:ring-secondary-light"
      >
        {isSuccess ? contactRouter.data?.message : "Subscribe"}
        {isError ?? contactRouter.error?.message}
      </button>
    </Form>
  );
}

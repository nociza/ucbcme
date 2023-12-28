import Loading from "@components/Loading";
import PrimaryButton from "@components/PrimaryButton";
import { trpc } from "@libs/trpc";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Donationcomplete() {
  const date = new Date();
  const router = useRouter();
  const session_id = router.query["session_id"] as string;
  const { ...contactRouter } = trpc.useMutation(["user.create-user"]);
  const { data, status } = trpc.useQuery(
    ["checkout.get-session", { session_id }],
    {
      onSuccess(data) {
        contactRouter.mutate({
          name: data.customer_details?.name as string,
          email: data.customer_details?.email as string,
          amount: data.amount_total as number,
          customer_id: data.id,
          honor: data.metadata?.onBehalfof as string,
          message: data.metadata?.message as string,
        });
      },
      staleTime: Infinity,
      refetchOnReconnect: false,
      refetchOnMount: false,
    }
  );
  const onBehalf = data?.metadata?.onBehalfof as string;
  const donation = data?.amount_total;
  const donationString = donation ? Math.floor(donation / 100) : null;
  const donationImpact = donationString
    ? Math.floor(donationString / 150)
    : null;
  const anyAmountHelps = donationString! < 30;

  if (status === "error") {
    try {
    } catch {}
    return (
      <div>
        <section className="flex flex-col items-center justify-center text-center align-middle">
          <header>
            <h1>Failed to load doantion.</h1>
          </header>
        </section>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div>
        <section className="mt-10">
          <header>
            <h1 className="text-center">
              ${donationString} has been donated to BCME.
              <span className="text-transparent bg-gradient-to-r from-secondary-light to-primary-light bg-clip-text sm:block">
                Your donation makes our next concert possible!{" "}
              </span>
            </h1>
          </header>
          <div className="max-w-2xl p-10 mx-auto mt-10 space-y-10 text-left border-4 rounded-xl">
            <div className="inline-block" id="donation">
              <Image src="/RAD.webp" width={40} height={40} alt="" />
              <p>{date.toLocaleDateString()}</p>
              <div>
                <h4 className="mt-4 text-base font-normal">
                  To: {data?.customer_details?.name}{" "}
                </h4>
                <p className="mt-4">
                  Thank you for making an incredible contribution of{" "}
                  <span className="font-bold">${donationString}</span> to our
                  cause
                  {onBehalf && (
                    <span className="inline">
                      {", "}
                      <span className="font-bold">{onBehalf}</span>
                    </span>
                  )}
                  .{" "}
                  {!anyAmountHelps && (
                    <span>
                      With your support, BCME will be able to cover the cost of{" "}
                      <span className="font-bold">
                        {donationImpact} Dizi's{" "}
                      </span>
                    </span>
                  )}
                </p>
                <p className="mt-4">
                  100% of your donation will be used to fuel our mission that
                  music and musicians from different cultures and backgrounds
                  can get together and create something new, something
                  constructively combining our past and present while actively
                  embracing a future of unlimited possibilities, all embodied in
                  the audible interaction throughout rehearsals, sectionals, and
                  performances.
                </p>
              </div>
            </div>
            <PrimaryButton
              onClick={() => window.print()}
              buttonText="Download Receipt"
              type="button"
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <div>
        <section className="flex flex-col items-center justify-center text-center align-middle">
          <header>
            <Loading text="Loading donation" />
          </header>
        </section>
      </div>
    </div>
  );
}

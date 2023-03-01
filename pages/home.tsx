import React from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import Appointment from "@/components/Appointment";
import Header from "@/components/Header";

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="relative z-20 flex flex-col justify-center py-4 px-7">
      <Header />
      <div className="flex items-center">
        <div className="mt-4 font-mono ">{`Hey ${session?.user?.name}! 👋🏻`}</div>
      </div>
      <div className="flex flex-col gap-6 my-5 mb-6 ">
        <Appointment />
        <Card content="quote" />
        <Card content="count" />
      </div>
      <div className="fixed z-50 bottom-8 ">
        <Navbar />
      </div>
      <div className="fixed z-40  left-3 w-[360px] h-[100px] bottom-6 rounded-2xl bg-black" />
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: { session },
  };
};

export default Home;

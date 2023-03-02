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
  return (
    <div className="relative flex flex-col flex-1 px-7">
      <div className="z-20">
        <div className="flex items-center">
          <div className="mt-4 font-mono text-white ">{`Hey ${session?.user?.name}! 👋🏻`}</div>
        </div>
        <div className="flex flex-col gap-6 my-5 mb-6 ">
          <Appointment />
          <Card content="quote" />
          <Card content="count" />
        </div>
      </div>
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

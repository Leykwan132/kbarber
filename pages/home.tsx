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
    <div className="relative flex flex-col justify-center py-10 px-7">
      <Header />
      <div className="flex items-center">
        <div className="mt-4 font-mono ">{`Hey ${session?.user?.name}! 👋🏻`}</div>
      </div>
      <div className="flex flex-col gap-6 my-5 mb-6">
        <Appointment />
        <Card content="quote" />
        <Card content="count" />
      </div>
      <div className="fixed bottom-8">
        <Navbar />
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

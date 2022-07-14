import { useEffect, useState } from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Form from "../../src/shared/PageComponents/ResetPassword/Form";

const ResetPasswor: NextPage = () => {
  const { query, isReady } = useRouter();
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (!isReady) return;
    const token: string = query.token as string;
    console.log("ResetPasswor :", token);
    (async () => {
      /*console.log("Restaurant");
      const { data } = await getRestaurantApi(`id/${id}?attributes=name`);
      console.log(data.data);
      setRestaurant(data.data);*/
    })();
  }, [isReady]);

  return <Form />;
};

export default ResetPasswor;

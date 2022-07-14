import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getCategoryApi } from "../../src/api/category/category.api";
//import styles from "../styles/Home.module.css";

const Category: NextPage = () => {
  useEffect(() => {
    console.log("Category");
    /*(async () => {
      console.log("Category");
      getCategoryApi();
    })();*/
  }, []);

  return <>Category</>;
};

export default Category;

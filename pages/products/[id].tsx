import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import CategoryCard from "../../src/shared/Components/CategoryCard";
import Spinner from "../../src/shared/Components/Spinner";
import PageTitle from "../../src/shared/Components/PageTitle";
import AddProduct from "../../src/shared/PageComponents/Product/AddProductForm";
import { getProductApi } from "../../src/api/product/product.api";
import { getCategoryApi } from "../../src/api/category/category.api";

type product = {
  _id: string;
  category: { name: string; _id: string };
  name: string;
  description: string;
  image: string;
};
type productList = {
  [key: string]: [product] | [];
};

const Products: NextPage = () => {
  const { query, isReady } = useRouter();
  const [isAdding, setAdding] = useState<boolean>(false);
  const [restarantId, setRestarantId] = useState<string>("");
  const [isAddingProduct, setAddingProduct] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<productList | null>(null);
  const [categories, setCategories] = useState<
    | [
        {
          _id: string;
          name: string;
          image: string;
        }
      ]
    | null
  >(null);
  const productList: productList = {};

  useEffect(() => {
    if (!isReady) return;
    const id: string = query.id as string;
    setRestarantId(id);
    (async () => {
      //Get Category List
      const categoryData = await getCategoryApi(
        `restaurant/${id}?attributes=name image`
      );
      setCategories(categoryData.data.data.reverse());
      console.log(categoryData.data.data.reverse());
      //Get Product List
      const data = await getProductApi(
        `restaurant/${id}?attributes=name description image`
      );

      if (data.statusText === "OK") {
        console.log("product", data.data);
        data.data.data.reverse().forEach((element: product) => {
          const categoryName = element.category?.name.trim();
          if (productList[categoryName]) {
            //@ts-ignore
            productList[categoryName].push({ ...element });
          } else {
            productList[categoryName] = [{ ...element }];
          }
        });
        setProducts(productList);
      }
      setLoading(false);
    })();
  }, [isReady, query.id, setRestarantId, isAddingProduct]);

  return (
    <div>
      {!isAdding ? (
        <>
          <div className="flex justify-between mb-2">
            <PageTitle title="Products" />
            <button
              onClick={() => {
                setAdding(true);
              }}
              className="px-5 py-2.5 font-medium  hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            >
              Add new product
            </button>
          </div>
          <div className="w-full p-2 flex flex-col justify-start flex-wrap">
            {!loading ? (
              <>
                {console.log("Loading", products)}
                {products && Object.keys(products).length > 0 ? (
                  Object.keys(products).map((category: string, i: number) => (
                    <div
                      key={i}
                      className="my-10 p-5 rounded-md border-4 border-blue-500"
                    >
                      <p className="mb-5px-5 py-2.5 font-medium text-blue-500 rounded-lg text-lg">
                        Category : {category}
                      </p>
                      <div className="flex flex-wrap">
                        {products[category].map((product: any) => (
                          <CategoryCard
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            image={product.image}
                          />
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div
                    className="flex flex-col my-5 mx-auto w-1/2 p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
                    role="alert"
                  >
                    <div className="flex justify-center">
                      <svg
                        className="inline flex-shrink-0 mr-3 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <div className=" text-center">
                        {
                          "It looks like you don't have any product in your categories yet"
                        }
                      </div>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <Spinner />
            )}
          </div>
        </>
      ) : (
        <AddProduct
          categories={categories}
          isAddingProduct={isAddingProduct}
          setAddingProduct={setAddingProduct}
          restarantId={restarantId}
          setAdding={setAdding}
        />
      )}
    </div>
  );
};

export default Products;

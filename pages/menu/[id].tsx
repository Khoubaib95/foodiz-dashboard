import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getCategoryApi } from "../../src/api/category/category.api";
import Spinner from "../../src/shared/Components/Spinner";
import PageTitle from "../../src/shared/Components/PageTitle";
import CategoryCard from "../../src/shared/Components/CategoryCard";
import AddCategory from "../../src/shared/PageComponents/Menu/AddMenuForm";

const Category: NextPage = () => {
  const [restarantId, setRestarantId] = useState<string>("");
  const [categories, setCategories] = useState<
    | [
        {
          _id: string;
          name: string;
          description: string;
          image: string;
        }
      ]
    | null
  >(null);
  const [isCategoryAdded, setCategoryAdded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAddingCategory, setAddingCategory] = useState<boolean>(false);
  const { query, isReady } = useRouter();

  useEffect(() => {
    if (!isReady) return;
    const id: string = query.id as string;
    setRestarantId(id);
    setLoading(true);
    (async () => {
      const data = await getCategoryApi(
        `restaurant/${id}?attributes=name description image`
      );
      if (data.statusText === "OK") {
        setCategories(data.data.data.reverse());
      }
      setLoading(false);
    })();
  }, [isReady, query.id, setRestarantId, isCategoryAdded]);

  return (
    <div>
      {!isAddingCategory ? (
        <>
          <div className="flex justify-between mb-2">
            <PageTitle title="Menu" />
            <button
              onClick={() => {
                setAddingCategory(true);
              }}
              className="px-5 py-2.5 font-medium  hover:text-blue-600 text-blue-500 rounded-lg text-sm"
            >
              Add new category.
            </button>
          </div>
          <div className="w-full p-2 flex flex-wrap">
            {!loading ? (
              <>
                {categories && categories.length > 0 ? (
                  categories?.map((category) => (
                    <CategoryCard
                      key={category._id}
                      name={category.name}
                      description={category.description}
                      image={category.image}
                    />
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
                          "It looks like you don't have any categories in your restaurant yet"
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
        <AddCategory
          restarantId={restarantId}
          setAddingCategory={setAddingCategory}
          isCategoryAdded={isCategoryAdded}
          setCategoryAdded={setCategoryAdded}
        />
      )}
    </div>
  );
};

export default Category;

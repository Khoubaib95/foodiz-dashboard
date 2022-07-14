import { useState } from "react";
import { useFormik } from "formik";
import { createProductApi } from "../../../../api/product/product.api";
import TextField from "../../../Components/TextField";
import TextArea from "../../../Components/TextArea";
import AddElementWrapper from "../../../Components/AddElementWrapper";
import ImageCrop from "../../../Components/ImageCrop";
import SelectCategoryModal from "../../../Components/SelectCategoryModal";
import Image from "next/image";

function AddProductForm({
  categories,
  setAdding,
  restarantId,
  isAddingProduct,
  setAddingProduct,
}: {
  categories:
    | [
        {
          _id: string;
          name: string;
          image: string;
        }
      ]
    | null;
  setAdding: any;
  restarantId: string;
  isAddingProduct: boolean;
  setAddingProduct: any;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      description: "",
      category: "",
      image: "null",
      restaurant: restarantId,
    },

    onSubmit: async (values) => {
      try {
        setLoading(true);
        const { data } = await createProductApi(values);
        if (data.message === "created") {
          const { _id, name, image } = data.data;
          setAddingProduct(!isAddingProduct);
          setLoading(false);
          setMessage("Category Added.");
        } else {
          setError("Oops an error hapen");
          setLoading(false);
        }
      } catch (error) {
        setError("Oops an error hapen");
        setLoading(false);
      }
    },
  });

  const setImage = (imageName: string) => (image: any) => {
    console.log("setImage", imageName);
    formik.setFieldValue(imageName, image);
  };

  return (
    <AddElementWrapper
      setClose={setAdding}
      handleSubmit={formik.handleSubmit}
      loading={loading}
      error={error}
      message={message}
    >
      <SelectCategoryModal
        title="Choose Category"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <div className="w-full px-8 flex flex-col">
          {categories &&
            categories.map((category) => (
              <div key={category._id}>
                <div
                  onClick={() => {
                    formik.setFieldValue("category", category._id);
                    console.log(formik.values);
                    setOpenModal(false);
                    console.log("close");
                  }}
                  className="p-4 flex items-center hover:bg-indigo-100 cursor-pointer"
                >
                  <img
                    src={category.image}
                    style={{ height: 100, width: 100 }}
                  />

                  <p className="ml-5 text-lg"> {category.name}</p>
                </div>
              </div>
            ))}
        </div>
      </SelectCategoryModal>
      <button
        onClick={() => setOpenModal(true)}
        className="text-left border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:ring-1 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        Choose Category
      </button>
      <p className="text-gray-700 text-sm font-medium ">
        {categories && formik.values.category
          ? `Selected category : ${
              categories.find((c) => c._id === formik.values.category)?.name
            }`
          : "Select category *"}
      </p>
      <TextField
        id="name"
        name="name"
        type="text"
        label="Product name"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextField
        id="price"
        name="price"
        type="number"
        label="Price"
        value={formik.values.price}
        onChange={formik.handleChange}
      />
      <TextArea
        id="product-description"
        name="description"
        rows={3}
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
        placeholder="enjoi our delicious"
        label="Product description"
        onChange={formik.handleChange}
      />

      <ImageCrop title="Product Image" setImage={setImage("image")} />
    </AddElementWrapper>
  );
}

export default AddProductForm;

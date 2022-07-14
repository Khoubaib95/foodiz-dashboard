import { useState } from "react";
import { useFormik } from "formik";
import { createCategoryApi } from "../../../../api/category/category.api";
import TextField from "../../../Components/TextField";
import TextArea from "../../../Components/TextArea";
import AddElementWrapper from "../../../Components/AddElementWrapper";
import ImageCrop from "../../../Components/ImageCrop";

function AddMenuForm({
  setAddingCategory,
  restarantId,
  isCategoryAdded,
  setCategoryAdded,
}: {
  setAddingCategory: any;
  restarantId: string;
  isCategoryAdded: boolean;
  setCategoryAdded: any;
}) {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: null,
      restaurant: restarantId,
    },
    onSubmit: async (values) => {
      setLoading(true);
      const { data } = await createCategoryApi(values);
      if (data.message === "created") {
        const { _id, name, image } = data.data;
        setMessage("Category Added.");
        setCategoryAdded(!isCategoryAdded);
        setLoading(false);
      } else {
        setError("Oops an error hapen");
        setLoading(false);
      }
    },
  });

  const setImage = (imageName: string) => (image: any) => {
    formik.setFieldValue(imageName, image);
  };
  return (
    <AddElementWrapper
      setClose={setAddingCategory}
      handleSubmit={formik.handleSubmit}
      loading={loading}
      message={message}
      error={error}
    >
      <TextField
        id="category-name"
        name="name"
        type="text"
        label="Category name"
        required
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <TextArea
        id="category-name"
        name="description"
        rows={3}
        label="Category description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <ImageCrop title="Category Image" setImage={setImage("image")} />
    </AddElementWrapper>
  );
}

export default AddMenuForm;

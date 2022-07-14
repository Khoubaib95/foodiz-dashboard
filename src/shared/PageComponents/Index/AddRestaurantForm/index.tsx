import { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { createRestaurantApi } from "../../../../api/restaurant/restaurant.api";
import { dispatchAddNewRestaurant } from "../../../../redux/user/dispatch";
import TextField from "../../../Components/TextField";
import TextArea from "../../../Components/TextArea";
import AddElementWrapper from "../../../Components/AddElementWrapper";
import ImageCrop from "../../../Components/ImageCrop";

function Form({ setAdding }: any) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { push } = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: null,
      cover: null,
    },
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const { data } = await createRestaurantApi(values);
        if (data.message === "created") {
          const { _id, name, image } = data.data;
          dispatchAddNewRestaurant({ _id, name, image });
          setLoading(false);
          setMessage("Restaurant created.");
          push(`/restaurant/${_id}`);
        } else {
          setError("Oops an error hapen");
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    },
  });

  const setImage = (imageName: string) => (image: any) => {
    formik.setFieldValue(imageName, image);
  };
  return (
    <AddElementWrapper
      setClose={setAdding}
      handleSubmit={formik.handleSubmit}
      loading={loading}
      message={message}
      error={error}
    >
      <div className="py-5 bg-white">
        <TextField
          id="restaurant-name"
          name="name"
          type="text"
          label="Restaurant name"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <TextArea
          id="restaurant-description"
          name="description"
          label=" Restaurant description"
          rows={3}
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </div>

      <ImageCrop title="Restaurant Image" setImage={setImage("image")} />
      <ImageCrop
        title="Restaurant Cover Image"
        id=""
        setImage={setImage("cover")}
      />
    </AddElementWrapper>
  );
}

export default Form;

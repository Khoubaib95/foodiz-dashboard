import { useState } from "react";
import Image from "next/image";
import CropModal from "./CropModal";

function ImageCrop({ setImage, title }: any) {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState<string>("");
  const [openCrop, setOpenCrop] = useState(false);
  const [imageReady, setReady] = useState(false);

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    //console.log("handleChange : ", file);
    if (file) {
      // const data = new FormData();
      // data.append("image", file);
      // console.log("handleChange : ", data);
      // await signInUserApi(data);
      setFile(file);
      setImageURL(URL.createObjectURL(file));
      setOpenCrop(true);
    }
  };

  return (
    <div>
      <span className="block text-sm text-gray-700 font-medium ">{title}</span>
      <CropModal
        open={openCrop}
        setOpen={setOpenCrop}
        imageURL={imageURL}
        setImageURL={setImageURL}
        setImage={setImage}
        setFile={setFile}
        setReady={setReady}
      />
      {imageReady && (
        <div className="w-full flex justify-center mb-3">
          <Image
            src={imageURL}
            alt="Photo"
            width={300}
            height={300}
            className="border-2 shadow-lg border-slate-300 rounded-md mx-auto "
          />
        </div>
      )}
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex justify-center text-sm text-gray-600">
            <label
              htmlFor={title.replaceAll(" ", "-")}
              className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <span>Upload a Photo</span>
              <input
                id={title.replaceAll(" ", "-")}
                name={title.replaceAll(" ", "-")}
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleChange}
              />
            </label>
          </div>
          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  );
}

export default ImageCrop;

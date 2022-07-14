import React, { useState } from "react";
import Cropper from "react-easy-crop";
import { Modal } from "flowbite-react";
import getCroppedImg from "./utils/croppedImage";

function FModal({
  open,
  setOpen,
  imageURL,
  setImageURL,
  setImage,
  setFile,
  setReady,
}: {
  open: boolean;
  setOpen: any;
  imageURL: any;
  setImageURL: any;
  setImage: any;
  setFile: any;
  setReady: any;
}) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const cropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const cropImage = async () => {
    // setLoading(true);
    try {
      const { file, url } = await getCroppedImg(
        imageURL,
        croppedAreaPixels,
        rotation
      );
      setImageURL(url);
      setFile(file);
      setImage(file);
      setReady(true);
      setOpen(false);
    } catch (error) {
      /*setAlert({
        isAlert: true,
        severity: "error",
        message: error.message,
        timeout: 5000,
        location: "modal",
      });*/
    }
  };

  return (
    <Modal size="3xl" show={open} onClose={() => setOpen(!open)}>
      <Modal.Header>Add Profile Image</Modal.Header>
      <Modal.Body>
        <div
          className="flex justify-center items-center"
          style={{
            height: "400px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Cropper
            style={{
              cropAreaStyle: { overflow: "hidden" },
              containerStyle: {
                backgroundColor: "rgb(51, 51, 51)",
                // width: "100%",
              },
            }}
            image={imageURL}
            crop={crop}
            zoom={zoom}
            rotation={rotation}
            aspect={1}
            onZoomChange={setZoom}
            onRotationChange={setRotation}
            onCropChange={setCrop}
            onCropComplete={cropComplete}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={cropImage}
          className={
            "ml-auto py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }
        >
          Next
        </button>
      </Modal.Footer>
    </Modal>
  );
}
export default FModal;

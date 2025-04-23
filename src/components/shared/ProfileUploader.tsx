import { images } from "@/common/constants";
import useToastify from "@/hooks/useToastify";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

function ProfileUploader({
  setter = () => {},
  title = "",
  preview = "",
  name = "imageUploader",
  wrapperClass = "",
  imageClass = "object-cover",
  avatar = images.avatar,
  ...rest
}: {
  setter?: Dispatch<SetStateAction<File | null>>;
  title?: string;
  preview?: string;
  name?: string;
  wrapperClass?: string;
  imageClass?: string;
  avatar?: string;
  [key: string]: any;
}) {
  const { errorNotify } = useToastify();
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [localFile, setLocalFile] = useState<string | null | undefined>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isImage, setIsImage] = useState(false);
  const allowedExtensions = ["jpg", "jpeg", "png"];

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files?.length > 0) {
      const file = event.target.files && event.target.files[0];
      setExtention(file?.name);
      const imageURL = URL.createObjectURL(file as Blob) || "";
      setImagePreview(imageURL);
      setter(file);
      setLocalFile(file?.name);
    } else {
      errorNotify("Invalid file type");
    }
  };

  const setExtention = (fileName: string | undefined) => {
    if (fileName) {
      const fileExtension = fileName.split(".").pop()?.toLowerCase();
      if (fileExtension && allowedExtensions.includes(fileExtension)) {
        setIsImage(true);
      } else {
        setIsImage(false);
      }
    } else {
      return;
    }
  };

  const handleDelete = () => {
    setter(null);
    setImagePreview(null);
    setLocalFile(null);
    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  useEffect(() => {
    if (preview) {
      setExtention(preview);
      setLocalFile(preview);
      setImagePreview(preview);
    }
  }, []);

  return (
    <div className={`flex-1 flex flex-col  gap-2 md:gap-4 ${wrapperClass}`}>
      {title && <span className="label">{title}</span>}
      <div className="w-full">
        <label
          htmlFor={name}
          className={`w-[120px] aspect-square rounded-full text-white text-4xl flex flex-col justify-center items-center gap-4 cursor-pointer border border-white-300 relative duration-200`}
        >
          <img
            src={imagePreview || avatar}
            alt=""
            className={`w-full h-full rounded-full bg-center ${imageClass}`}
          />

          <label
            htmlFor={name}
            className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-full absolute -right-2 bottom-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <path
                d="M14.5 12.6667V3.33333C14.5 2.6 13.9 2 13.1667 2H3.83333C3.1 2 2.5 2.6 2.5 3.33333V12.6667C2.5 13.4 3.1 14 3.83333 14H13.1667C13.9 14 14.5 13.4 14.5 12.6667ZM6.16667 9L7.83333 11.0067L10.1667 8L13.1667 12H3.83333L6.16667 9Z"
                fill="#222222"
              />
            </svg>
          </label>

          <input
            type="file"
            id={name}
            className="opacity-0 absolute w-0.5"
            ref={imageRef}
            onChange={handleChangeImage}
            alt="preview"
            {...rest}
          />
        </label>
        <div
          className={`items-center gap-1 mt-2 select-none ${
            localFile && !isImage ? "flex" : "hidden"
          }`}
        >
          <button type="button" onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                fill="#D0D0D0"
              />
            </svg>
          </button>
          <p className="text-base text-black-700 break-all">{localFile}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileUploader;

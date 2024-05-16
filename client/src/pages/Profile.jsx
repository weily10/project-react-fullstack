import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getStorage,
  uploadBytes,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";

export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  console.log(formData);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    console.log("fileName", file);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
        console.log(progress);
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  const handleSignOut = async () => {
    // try {
    //   dispatch(signOutUserStart());
    //   const res = await fetch('/api/auth/signout');
    //   const data = await res.json();
    //   if (data.success === false) {
    //     dispatch(deleteUserFailure(data.message));
    //     return;
    //   }
    //   dispatch(deleteUserSuccess(data));
    // } catch (error) {
    //   dispatch(deleteUserFailure(data.message));
    // }
  };

  return (
    <div className="text-black-700  p-3">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form action="" className="flex flex-col gap-3">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt=""
          className="object-cover h-24 w-24 mx-auto cursor-pointer"
        />
        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-500">error upload</span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-green-500"> {`Uploading ${filePerc}`}</span>
          ) : filePerc === 100 ? (
            <span> uploaded !</span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          className="border p-3"
          id="username"
          placeholder="username"
        />
        <input
          type="text"
          className="border p-3"
          id="email"
          placeholder="email"
        />
        <input
          type="text"
          className="border p-3"
          id="password"
          placeholder="password"
        />
        <button className="bg-slate-700 p-3 text-white rounded-lg">
          {" "}
          update
        </button>
      </form>
      <div className="flex justify-between mt-3">
        <span className="text-red-700 cursor-pointer">Delete Account</span>
        <span className="text-red-700 cursor-pointer" onClick={handleSignOut}>
          SignOut
        </span>
      </div>
    </div>
  );
}

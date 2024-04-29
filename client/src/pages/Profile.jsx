import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getStorage, uploadBytes, uploadBytesResumable} from 'firebase/storage'
import { app } from "../firebase";


export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  console.log(file);

  useEffect(() => {
    if (file) {
      handleFileUpload();
    }
  }, [file]);


  const handleFileUpload = (file) =>{
    const storage = getStorage(app)
    const fileName = new Date().getTime()+ file.name;
    const storageRef = ref(storage,fileName)
    const uploadTask = uploadBytesResumable(storageRef,file)

    uploadTask.on('state_changed',
    (snapshot) =>{
      const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100
      console.log(progress);
    }
  )
  }

  // allow read;
  //     allow write: if
  //     request.resource.size < 2*1024*1024 &&
  //     request.resource.contentType.matches('images/.*')
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
          src={currentUser.avatar}
          alt=""
          className="object-cover h-24 w-24 mx-auto cursor-pointer"
        />
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
        <span className="text-red-700 cursor-pointer">SignOut</span>
      </div>
    </div>
  );
}

import { axiosApi } from "@/axiosApi";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SignupHook = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [getPath, setPath] = useState();
  const [admin, setAdmin] = useState({
    adminImage: "",
    fname: "",
    lname: "",
    email: "",
    phoneNo: "",
    city: "",
    gender: "",
    password: "",
    cPass: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imagePath = URL.createObjectURL(file);
    setAdmin({
      ...admin,
      adminImage: file,
    });
    setPath({
      ...getPath,
      originalImagePath: imagePath,
    });
  };

  // Admin Data
  const adminData = (e) => {
    const { name, value } = e.target;
    setAdmin((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleGenderChange = (selectedGender) => {
    setAdmin((prevUser) => ({
      ...prevUser,
      gender: selectedGender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      let formData = new FormData();
      formData.append("adminImage", admin?.adminImage);
      formData.append("fname", admin.fname);
      formData.append("lname", admin.lname);
      formData.append("email", admin.email);
      formData.append("phoneNo", admin.phoneNo);
      formData.append("city", admin.city);
      formData.append("gender", admin.gender);
      formData.append("password", admin.password);
      formData.append("cPass", admin.cPass);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axiosApi({
        method: "post",
        url: `/admin/insertAdminData`,
        data: formData,
        config,
      });

      router.push("/admin/login");
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("An error occurred during login.");
      }
    } finally {
      setButtonLoader(false);
    }
  };
  return {
    error,
    buttonLoader,
    getPath,
    handleImageChange,
    adminData,
    handleGenderChange,
    handleSubmit,
    admin,
  };
};

export default SignupHook;

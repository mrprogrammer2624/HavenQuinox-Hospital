// useForm.js
import { useState } from "react";
import { useRouter } from "next/navigation";
import { notification } from "antd";
import { axiosApi } from "@/axiosApi";

const useForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const [formData, setFormData] = useState({
    // Initial state for both doctor signup and admin add form
    doctor: {
      // Doctor signup form fields
    },
    admin: {
      // Admin add form fields
    },
  });

  // Form handling functions
  const handleChange = (form, e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [form]: {
        ...prevData[form],
        [name]: value,
      },
    }));
  };

  const handleImageChange = (form, e) => {
    // handle image change
  };

  const handleGenderChange = (form, selectedGender) => {
    setFormData((prevData) => ({
      ...prevData,
      [form]: {
        ...prevData[form],
        gender: selectedGender,
      },
    }));
  };

  const handleSubmit = async (form, e) => {
    e.preventDefault();
    setButtonLoader(true);
    try {
      // Prepare form data based on which form is being submitted
      let formDataToSend = new FormData();
      // Append form data for doctor signup form
      if (form === "doctor") {
        // Append doctor signup form data to formDataToSend
      }
      // Append form data for admin add form
      else if (form === "admin") {
        // Append admin add form data to formDataToSend
      }

      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };

      const response = await axiosApi({
        method: "post",
        url: `/api/${form}/submit`,
        data: formDataToSend,
        config,
      });

      // Handle success notification and redirection
      typeNotification("success", `${form} data submitted successfully!`);
      router.push(`/${form}/dashboard`);
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An error occurred during form submission.");
      typeNotification("error", "Form submission unsuccessful!");
    } finally {
      setButtonLoader(false);
    }
  };

  return {
    formData,
    error,
    buttonLoader,
    contextHolder,
    handleChange,
    handleImageChange,
    handleGenderChange,
    handleSubmit,
  };
};

export default useForm;

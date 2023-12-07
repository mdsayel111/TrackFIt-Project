import axios from "axios";
import { axiosPublic } from "../Hooks/useAxiosPublic";
import emailjs from "@emailjs/browser";

export const uploadImage = async (formData) => {
  const imgbbResult = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  const photoUrl = imgbbResult.data.data.display_url;
  return photoUrl;
};

export const SaveUserInDb = async (user) => {
  const mongoDBSaveResult = await axiosPublic.post("/users", {
    ...user,
    role: "user",
  });
  return mongoDBSaveResult;
};

export const UpdateUserMongoDB = async (user) => {
  const userUpdateResult = await axiosPublic.put("/users", {
    ...user,
    status: "pending",
  });
  return userUpdateResult;
};

export const GetToken = async (email) => {
  const res = await axiosPublic.get(`/token/${email}`);
  const token = res.data.token
  console.log(token);
  localStorage.setItem("token", token);
  return;
};

export const GetRole = async (user) => {
  try {
    // console.log(user);
    const result = await axiosPublic.get(`/get-role/${user?.email}`);
    return result.data.role;
  } catch (err) {
    console.log(err);
  }
};


export const SendEmail = async (email, massage) => {
  // Set your email template parameters
  var templateParams = {
    to_name: "",
    from_name: "Your Name",
    recipient_email: email,
    message: massage || "your request is rejected",
  };

 

  // Send email using Email.js
  emailjs
    .send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TAMPLATE_ID,
      templateParams,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      function (response) {
        console.log("Email sent successfully:", response);
      },
      function (error) {
        console.log("Email sending failed:", error);
      }
    );
};
"use client";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const data = { name, email, message };

    try {
      setIsLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const jsonRes = await res.json();
      console.log(jsonRes);
      if (res.status.ok) {
        toast.success("Email sent successfully");
        router.push("/");
        return;
      }
      toast.error(jsonRes.error || "Error sending email! Please try again");
    } catch (error) {
      toast.error(
        typeof error === "string"
          ? error
          : error.message
          ? error.message
          : "Error while uploading post"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows="4"
          required
        ></textarea>
      </div>
      <CustomButton
        type="submit"
        text={"Sumbit"}
        color="primary"
        isLoading={isLoading}
      />
    </form>
  );
};

export default ContactForm;

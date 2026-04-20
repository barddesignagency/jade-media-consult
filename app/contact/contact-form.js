"use client";
import React, { useRef } from "react";
import Button from "@/components/ui/button";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hce3m8o",
        "template_2chxzn9",
        formRef.current,
        "P2mSlarq6bOZs6CIQ"
      )
      .then(
        () => {
          alert("Message sent!");
        },
        (error) => {
          console.error(error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 lg:rounded-4xl rounded-3xl"
    >
      <div className="space-y-6 font-semibold lg:font-normal">
        <input
          name="company"
          type="text"
          placeholder="Brand name or company name"
          className="w-full bg-white/10 border py-3 px-6 rounded-2xl text-white"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full bg-white/10 border py-3 px-6 rounded-2xl text-white"
        />

        <textarea
          name="message"
          placeholder="Tell us how we can help you"
          rows={6}
          className="w-full bg-white/10 border py-3 px-6 rounded-2xl text-white"
        />

        <Button variant="secondary" size="md" type="submit">
          Start the conversation
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;

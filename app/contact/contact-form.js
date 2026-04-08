import React from "react";
import Button from "@/components/ui/button";

function ContactForm() {
  return (
    <form className="bg-black py-16 px-8 lg:rounded-4xl">
      <div className="space-y-6">
        <input
          type="text"
          className="w-full bg-white/10 border border-black/20 py-3.5 px-10 rounded-2xl lg:rounded-4xl text-white/90 placeholder:text-white/50 text-xl focus:outline-2 appearance-none outline-brand/80"
          placeholder="Brand name or company name"
        />
        <input
          type="email"
          className="w-full bg-white/10 border border-black/20 py-3.5 px-10 rounded-2xl lg:rounded-4xl text-white/90 placeholder:text-white/50 text-xl focus:outline-2 appearance-none outline-brand/80"
          placeholder="Email"
        />
        <textarea
          className="w-full bg-white/10 border border-black/20 py-3.5 px-10 rounded-2xl lg:rounded-4xl text-white/90 placeholder:text-white/50 text-xl focus:outline-2 resize-none outline-brand/80"
          placeholder="Tell us how we can help you"
          rows={6}
        />
        <Button variant="secondary" size="md">
          Start the conversation
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WaitlistSchema } from "../../schema/waitlist.schema";
import Modal from "./Modal";

export default function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(WaitlistSchema),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      console.log({ data });
      setIsLoading(false);
      setIsModalOpen(true);
      reset();
    }, 2000);
  };
  return (
    <>
      <section aria-labelledby="waitlist-form">
        <div className="w-full">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-2">
              <label
                className="text-lg text-benita-white-100 font-medium"
                htmlFor="fullname"
              >
                FullName
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Your Name"
                className="block w-full h-12 px-4 py-3 text-benita-white-300 bg-transparent border rounded-xl appearance-none border-benita-white-100/10 placeholder-benita-white-100/80 focus:border-benita-primary-200 focus:bg-transparent focus:outline-none focus:ring-benita-primary-200 sm:text-sm"
                {...register("fullname")}
              />
              <p className="text-benita-red text-sm">
                {errors?.fullname?.message}
              </p>
            </div>

            <div className="flex flex-col space-y-2">
              <label
                className="text-lg text-benita-white-100 font-medium"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="block w-full h-12 px-4 py-3 text-benita-white-300 bg-transparent border rounded-xl appearance-none border-benita-white-100/10 placeholder-benita-white-100/80 focus:border-benita-primary-200 focus:bg-transparent focus:outline-none focus:ring-benita-primary-200 sm:text-sm"
                {...register("email")}
              />
              <p className="text-benita-red text-sm">{errors?.email?.message}</p>
            </div>

            <div className="py-4">
              <button
                className="bg-benita-primary-100 text-benita-black-100 font-semibold rounded-xl w-full py-3 cursor-pointer hover:opacity-30"
                type="submit"
                disabled={isLoading}
              >
                {isLoading
                  ? "Adding you to the waitlist..."
                  : "Join the Waitlist"}
              </button>
            </div>
          </form>
        </div>
      </section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

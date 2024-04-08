"use client";

import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { searchProducts } from "@/lib/products";

type Inputs = {
  query: string;
};

// TODO: add suggestions while typing (use debounce)
export default function Searchbox() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();

  return (
    <form
      className="flex grow max-w-3xl"
      onSubmit={handleSubmit(searchProducts)}
      autoComplete="off"
      aria-label="search-form"
    >
      <div className="w-full">
        <input
          className="w-full bg-slate-100 p-2 outline-none"
          placeholder="Search Lazada"
          type="text"
          aria-label="query"
          {...register("query")}
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 grid place-content-center p-2"
        aria-label="btn-submit-query"
        disabled={isSubmitting} // also disables form submission by pressing the ENTER key
      >
        <IoIosSearch size={24} fill="#fff" />
      </button>
    </form>
  );
}

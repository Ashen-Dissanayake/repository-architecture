import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Textarea } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { get } from "http";
import React, { FormEventHandler } from "react";

const Index = ({ auth, product, categoryItems }: PageProps) => {
   const { data, setData, put, processing, errors, reset } = useForm({
      name: "",
      description: "",
      price: "",
      category: "",
      status: "",
   });

   const submit: FormEventHandler = (e) => {
      e.preventDefault();
      put(route("products.update", product?.id));
   };

   return (
      <AuthenticatedLayout
         user={auth.user}
         header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
               Edit Product
            </h2>
         }
      >
         <div className="relative flex flex-col justify-center items-center p-6">
            <Head title="Edit Product" />
            <form onSubmit={submit} className="w-1/3 space-y-3">
               <div>
                  <InputLabel htmlFor="name" value="Product Name" />

                  <TextInput
                     required
                     id="name"
                     type="text"
                     name="name"
                     value={data.name}
                     className="mt-1 block w-full"
                     autoComplete="username"
                     isFocused={true}
                     placeholder={product?.name}
                     onChange={(e) => setData("name", e.target.value)}
                  />

                  <InputError message={errors.name} className="mt-2" />
               </div>

               <div className="">
                  <InputLabel htmlFor="description" value="Description" />

                  <Textarea
                     id="description"
                     name="description"
                     value={data.description}
                     className="mt-1 block w-full"
                     autoComplete="current-description"
                     placeholder={product?.description}
                     onChange={(e) => setData("description", e.target.value)}
                  />

                  <InputError message={errors.description} className="mt-2" />
               </div>

               <div>
                  <InputLabel htmlFor="price" value="Product Price" />

                  <TextInput
                     required
                     id="price"
                     type="text"
                     name="price"
                     value={data.price}
                     className="mt-1 block w-full"
                     autoComplete="price"
                     isFocused={true}
                     placeholder={product?.price}
                     onChange={(e) => setData("price", e.target.value)}
                  />

                  <InputError message={errors.price} className="mt-2" />
               </div>

               <div>
                  <InputLabel htmlFor="status" value="Status" />

                  <select
                     autoFocus
                     required
                     id="status"
                     name="status"
                     value={data.status}
                     className="mt-1 block w-full"
                     autoComplete="Status"
                     onChange={(e) => setData("status", e.target.value)}
                  >
                     <option defaultValue="-- select an option --"></option>

                     <option value="draft">draft</option>
                     <option value="active">active</option>
                     <option value="inactive">inactive</option>
                  </select>

                  <InputError message={errors.status} className="mt-2" />
               </div>

               <div>
                  <InputLabel htmlFor="category" value="Category" />

                  <select
                     required
                     id="category"
                     name="category"
                     value={data.category}
                     className="mt-1 block w-full"
                     autoComplete="category"
                     onChange={(e) => setData("category", e.target.value)}
                  >
                     <option defaultValue="-- select an option --"> </option>
                     {categoryItems?.map((category: any) => (
                        <option key={category.name} value={category.id}>
                           {category.name}
                        </option>
                     ))}
                  </select>

                  <InputError message={errors.category} className="mt-2" />
               </div>

               <div className="flex items-center justify-start mt-4">
                  <PrimaryButton className="" disabled={processing}>
                     Update Product
                  </PrimaryButton>
               </div>
            </form>
         </div>
      </AuthenticatedLayout>
   );
};

export default Index;

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Textarea } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

const Index = ({ auth }: PageProps) => {
   const { data, setData, post, processing, errors, reset } = useForm({
      name: "",
      description: "",
   });

   const submit: FormEventHandler = (e) => {
      e.preventDefault();

      post(route("categories.store"));
   };

   return (
      <AuthenticatedLayout
         user={auth.user}
         header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
               Add Category
            </h2>
         }
      >
         <div className="relative flex flex-col justify-center items-center p-6">
            <Head title="Create Category" />
            <form onSubmit={submit} className="w-1/3">
               <div>
                  <InputLabel htmlFor="name" value="Category Name" />

                  <TextInput
                     required
                     id="name"
                     type="text"
                     name="name"
                     value={data.name}
                     className="mt-1 block w-full"
                     autoComplete="username"
                     isFocused={true}
                     onChange={(e) => setData("name", e.target.value)}
                  />

                  <InputError message={errors.name} className="mt-2" />
               </div>

               <div className="mt-4">
                  <InputLabel htmlFor="description" value="Description" />

                  <Textarea
                     id="description"
                     name="description"
                     value={data.description}
                     className="mt-1 block w-full"
                     autoComplete="current-description"
                     onChange={(e) => setData("description", e.target.value)}
                  />

                  <InputError message={errors.description} className="mt-2" />
               </div>

               <div className="flex items-center justify-start mt-4">
                  <PrimaryButton className="" disabled={processing}>
                     Add Category
                  </PrimaryButton>
               </div>
            </form>
         </div>
      </AuthenticatedLayout>
   );
};

export default Index;

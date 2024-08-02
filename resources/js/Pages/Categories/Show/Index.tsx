import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { imageUrl } from "@/utils";
import { Head, usePage } from "@inertiajs/react";
import { url } from "inspector";
import React from "react";

const Index = ({ auth, products, category }: PageProps) => {
   console.log(products);
   return (
      <AuthenticatedLayout
         user={auth.user}
         header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
               Dashboard
            </h2>
         }
      >
         <Head title="Dashboard" />

         <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
               <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  {}
                  <div className="flex justify-center items-center">
                     <div className="w-full rounded overflow-hidden shadow-lg">
                        <img
                           className="max-w-screen-sm"
                           src={``}
                           alt="Sunset in the mountains"
                        />
                        <div className="flex flex-col px-6 py-4">
                           <div className="font-bold text-xl mb-2 ">
                              {category?.name}
                              <p className="text-sm">{category?.description}</p>
                           </div>
                           {products?.map((product: any) => (
                              <div
                                 key={product.id}
                                 className="w-3/5 flex flex-wrap justify-between self-center m-0 space-y-4"
                              >
                                 <p className="text-gray-700 text-base">
                                    {product.id}
                                 </p>
                                 <p className="text-gray-700 text-base">
                                    {product.name}
                                 </p>
                                 <p className="text-gray-700 text-base">
                                    {product.description}
                                 </p>
                                 <p className="text-gray-700 text-base">
                                    {product.price}
                                 </p>
                                 <p className="text-gray-700 text-base">
                                    {product.status}
                                 </p>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AuthenticatedLayout>
   );
};

export default Index;

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";
import { url } from "inspector";
import React from "react";

const Index = ({ auth, category }: PageProps) => {
   const imageUrl = [
      {
         id: "1",
         url: "https://i5.walmartimages.com/asr/eb866dae-bdca-47cc-9e0d-06c70cf829f4_1.3e74b748a64caa8ce84bc2c8dcf90b8f.jpeg",
      },
      {
         id: "2",
         url: "https://i5.walmartimages.com/asr/eb866dae-bdca-47cc-9e0d-06c70cf829f4_1.3e74b748a64caa8ce84bc2c8dcf90b8f.jpeg",
      },
      {
         id: "3",
         url: "https://i5.walmartimages.com/asr/eb866dae-bdca-47cc-9e0d-06c70cf829f4_1.3e74b748a64caa8ce84bc2c8dcf90b8f.jpeg",
      },
      {
         id: "4",
         url: "https://i5.walmartimages.com/asr/eb866dae-bdca-47cc-9e0d-06c70cf829f4_1.3e74b748a64caa8ce84bc2c8dcf90b8f.jpeg",
      },
      {
         id: "5",
         url: "https://i5.walmartimages.com/asr/eb866dae-bdca-47cc-9e0d-06c70cf829f4_1.3e74b748a64caa8ce84bc2c8dcf90b8f.jpeg",
      },
   ];
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
                  <div className="flex justify-center items-center">
                     <div className="w-full rounded overflow-hidden shadow-lg">
                        <img
                           className="max-w-screen-sm"
                           src={`
                              ${imageUrl.map((url) => {
                                 category?.id == url.id
                                    ? console.log(url.url)
                                    : null;
                              })}
                           `}
                           alt="Sunset in the mountains"
                        />
                        <div className="px-6 py-4">
                           <div className="font-bold text-xl mb-2">
                              The Coldest Sunset
                           </div>
                           <p className="text-gray-700 text-base">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Voluptatibus quia, nulla!
                              Maiores et perferendis eaque, exercitationem
                              praesentium nihil.
                           </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #photography
                           </span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #travel
                           </span>
                           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                              #winter
                           </span>
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

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, categories }: PageProps) => {
   return (
      <AuthenticatedLayout
         user={auth.user}
         header={
            <h2 className="flex justify-between font-semibold text-xl text-gray-800 leading-tight">
               Categories
            </h2>
         }
      >
         <Head title="Categories" />

         <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
               <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">
                     <div className="flex flex-col justify-center items-center mt-4">
                        <div className="flex justify-end w-full mb-10 overflow-hidden ">
                           <Link
                              href={route("categories.create")}
                              className="text-gray-50 font-semibold text-lg rounded-md p-2 transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 right-[3.2rem] relative"
                           >
                              Add Category
                           </Link>
                        </div>
                        <table className="table-fixe bg-yellow-100 rounded-[12px] w-11/12">
                           <thead>
                              <tr>
                                 <th className=" px-4 py-2">Category ID</th>
                                 <th className=" px-4 py-2">Category Name</th>
                                 <th className=" px-4 py-2 text-pretty text-clip">
                                    Description
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {categories?.map((category: any) => (
                                 <tr
                                    key={category.id}
                                    className="border-y px-4 py-2 border-separate border-spacing-y-3 text-center"
                                 >
                                    <td className="">{category.id}</td>
                                    <td className="">{category.name}</td>
                                    <td className="">{category.description}</td>

                                    <td className="flex justify-evenly p-2">
                                       <a
                                          href={route(
                                             "categories.update",
                                             category.id
                                          )}
                                          className="border-2 border-green-500 rounded-lg font-bold text-green-500 transition p-2 duration-300 ease-in-out hover:bg-green-500 hover:text-white px-5"
                                       >
                                          VIEW
                                       </a>
                                       <a
                                          href={route(
                                             "categories.edit",
                                             category.id
                                          )}
                                          className="border-2 border-blue-500 rounded-lg font-bold text-blue-500 transition p-2 duration-300 ease-in-out hover:bg-blue-500 hover:text-white px-5"
                                       >
                                          EDIT
                                       </a>

                                       <button
                                          type="button"
                                          className="bg-red-500 rounded-lg font-bold text-white text-center transitio p-3 duration-300 ease-in-out hover:bg-red-600"
                                       >
                                          DELETE
                                       </button>
                                    </td>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </AuthenticatedLayout>
   );
};

export default Index;

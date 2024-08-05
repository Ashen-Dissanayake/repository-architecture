import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, router } from "@inertiajs/react";
import React from "react";

const Index = ({ auth, products }: PageProps) => {
   // console.log(products);
   const destroy = (id: number) => {
      if (confirm("Are you sure you want to delete this item?")) {
         router.delete(route("products.destroy", id), {
            preserveState: true,
            preserveScroll: true,
         });
      }
   };

   return (
      <AuthenticatedLayout
         user={auth.user}
         header={
            <h2 className="flex justify-between font-semibold text-xl text-gray-800 leading-tight">
               Products
            </h2>
         }
      >
         <Head title="products" />

         <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
               <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                  <div className="p-6 text-gray-900">
                     <div className="flex flex-col justify-center items-center mt-4">
                        <div className="flex justify-end w-full mb-10 overflow-hidden ">
                           <Link
                              href={route("products.create")}
                              className="text-gray-50 font-semibold text-lg rounded-md p-2 transition-all duration-300 ease-in-out bg-blue-500 hover:bg-blue-600 right-[3.2rem] relative"
                           >
                              Add Products
                           </Link>
                        </div>
                        <table className="table-fixe bg-yellow-100 rounded-[12px] w-11/12">
                           <thead>
                              <tr>
                                 <th className=" px-4 py-2">Product ID</th>
                                 <th className=" px-4 py-2">Product Name</th>
                                 <th className=" px-4 py-2">Product Price</th>
                                 <th className=" px-4 py-2 text-pretty text-clip">
                                    Description
                                 </th>
                                 <th className=" px-4 py-2">Status</th>
                                 <th className=" px-4 py-2">Category Type</th>
                              </tr>
                           </thead>
                           <tbody>
                              {products?.map((product: any) => (
                                 <tr
                                    key={product.id}
                                    className="border-y px-4 py-2 border-separate border-spacing-y-3 text-center"
                                 >
                                    <td className="">{product.id}</td>
                                    <td className="">{product.name}</td>
                                    <td className="">{product.price}</td>
                                    <td className="">{product.description}</td>
                                    <td className="">{product.status}</td>
                                    <td className="">
                                       {product.category.name}
                                    </td>

                                    <td className="flex justify-evenly p-2">
                                       <a
                                          href={route(
                                             "products.show",
                                             product.id
                                          )}
                                          className="border-2 border-green-500 rounded-lg font-bold text-green-500 transition p-2 duration-300 ease-in-out hover:bg-green-500 hover:text-white px-5"
                                       >
                                          VIEW
                                       </a>
                                       <a
                                          href={route(
                                             "products.edit",
                                             product.id
                                          )}
                                          className="border-2 border-blue-500 rounded-lg font-bold text-blue-500 transition p-2 duration-300 ease-in-out hover:bg-blue-500 hover:text-white px-5"
                                       >
                                          EDIT
                                       </a>

                                       <button
                                          onClick={() => {
                                             destroy(product.id);
                                          }}
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

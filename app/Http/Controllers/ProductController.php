<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Repositories\Categories\CategoryInterface;
use App\Repositories\Products\ProductInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
   public function __construct(protected ProductInterface $productInterface)
   {
   }
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      $products = $this->productInterface->all(['*'], ['category']);
      // $products = Product::with('category')->get();

      return Inertia::render("Products/All/Index", ['products' => $products]);
   }

   /**
    * Show the form for creating a new resource.
    */
   public function create()
   {
      $categoryInterface = app()->make(CategoryInterface::class);
      $categories = $categoryInterface->all(['name', 'id']);
      // $categories = Category::get(['name', 'id']);

      return Inertia::render('Products/Create/Index', ['categories' => $categories]);
   }

   /**
    * Store a newly created resource in storage.
    */
   public function store(Request $request)
   {
      $this->productInterface->create([
         'name' => $request->name,
         'description' => $request->description,
         'price' => $request->price,
         'category_id' => $request->category,
         'status' => $request->status,
      ]);
      // Product::create(
      //    [
      //       'name' => $request->name,
      //       'description' => $request->description,
      //       'price' => $request->price,
      //       'category_id' => $request->category,
      //       'status' => $request->status,
      //    ]
      // );

      return to_route("products.index");
   }

   /**
    * Display the specified resource.
    */
   // TODO : use a Repository Function to show category of the product.
   public function show(Product $product)
   {
      return Inertia::render("Products/Show/Index", ['products' => $product]);
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(Product $product)
   {
      $categoryInterface = app()->make(CategoryInterface::class);
      $categoryItems = $categoryInterface->all(['name', 'id']);
      // $categoryItems = Category::get(['name', 'id']);

      return Inertia::render("Products/Edit/Index", ['product' => $product, 'categoryItems' => $categoryItems]);
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request, Product $product)
   {
      $this->productInterface->update($product->id, [
         'name' => $request->name,
         'description' => $request->description,
         'price' => $request->price,
         'category_id' => $request->category,
         'status' => $request->status,
      ]);
      // Product::findOrFail($product->id)->update([
      //    'name' => $request->name,
      //    'description' => $request->description,
      //    'price' => $request->price,
      //    'category_id' => $request->category,
      //    'status' => $request->status,
      // ]);

      return to_route('products.index');
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(Product $product)
   {
      $this->productInterface->deleteById($product->id);
      // $product->delete();

      return to_route('products.index');
   }
}
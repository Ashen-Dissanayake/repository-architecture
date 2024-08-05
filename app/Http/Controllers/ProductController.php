<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use IntlChar;
use Ramsey\Uuid\Type\Decimal;

class ProductController extends Controller
{
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      $products = Product::with('category')->get();
      return Inertia::render("Products/All/Index", ['products' => $products]);
   }

   /**
    * Show the form for creating a new resource.
    */
   public function create()
   {
      $categories = Category::get(['name', 'id']);
      return Inertia::render('Products/Create/Index', ['categories' => $categories]);
   }

   /**
    * Store a newly created resource in storage.
    */
   public function store(Request $request)
   {
      Product::create(
         [
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'category_id' => $request->category,
            'status' => $request->status,
         ]
      );

      return to_route("products.index");
   }

   /**
    * Display the specified resource.
    */
   public function show(Product $product)
   {
      return Inertia::render("Products/Show/Index", ['products' => $product]);
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(Product $product)
   {
      $categoryItems = Category::get(['name', 'id']);
      return Inertia::render("Products/Edit/Index", ['product' => $product, 'categoryItems' => $categoryItems]);
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request, Product $product)
   {
      Product::findOrFail($product->id)->update([
         'name' => $request->name,
         'description' => $request->description,
         'price' => $request->price,
         'category_id' => $request->category,
         'status' => $request->status,
      ]);

      return to_route('products.index');
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(Product $product)
   {
      $product->delete();

      return to_route('products.index');
   }
}

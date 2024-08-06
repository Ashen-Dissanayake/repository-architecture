<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Repositories\Categories\CategoryInterface;
use App\Repositories\Categories\CategoryRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CategoryController extends Controller
{

   /**
    * __construct
    *
    * @return void
    */
   public function __construct(protected CategoryInterface $categoryInterface)
   {
   }
   /**
    * Display a listing of the resource.
    */
   public function index()
   {
      // $categories = app()->make(CategoryInterface::class);
      // $categories = Category::all();
      $categories = $this->categoryInterface->all();

      return Inertia::render("Categories/All/Index", ["categories" => $categories]);
   }

   /**
    * Show the form for creating a new resource.
    */
   public function create()
   {
      return Inertia::render("Categories/Create/Index");
   }

   /**
    * Store a newly created resource in storage.
    */
   public function store(Request $request)
   {
      $this->categoryInterface->create($request->validate([
         'name' => 'required|max:255|string',
         'description' => 'required|max:255|string',
      ]));
      // Category::create(
      //    $request->validate([
      //       'name' => 'required|max:255|string',
      //       'description' => 'required|max:255|string',
      //    ])
      // );

      return to_route("categories.index");
   }

   /**
    * Display the specified resource.
    */
   // TODO : use a Repository Function
   public function show(Category $category)
   {
      $products = Product::where("category_id", $category->id)->get();
      return Inertia::render("Categories/Show/Index", ['category' => $category, 'products' => $products]);
   }

   /**
    * Show the form for editing the specified resource.
    */
   public function edit(Category $category)
   {
      return Inertia::render('Categories/Edit/Index', ['category' => $category]);
   }

   /**
    * Update the specified resource in storage.
    */
   public function update(Request $request, string $id)
   {


      $this->categoryInterface->update($id, $request->validate([
         'name' => 'required|max:255|string',
         'description' => 'required|max:255|string',
      ]));

      // Category::findOrFail($id)->update([
      //    'name' => $request->name,
      //    'description' => $request->description,
      // ]);

      return to_route('categories.index');
   }

   /**
    * Remove the specified resource from storage.
    */
   public function destroy(Category $category)
   {
      $this->categoryInterface->deleteById($category->id);
      // $category->delete();

      return Redirect::route('categories.index');
   }
}
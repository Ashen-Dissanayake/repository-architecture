<?php

namespace App\Providers;

use App\Repositories\Categories\CategoryInterface;
use App\Repositories\Categories\CategoryRepository;
use App\Repositories\Products\ProductInterface;
use App\Repositories\Products\ProductRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
   /**
    * Register any application services.
    */
   public function register(): void
   {
      $this->app->bind(CategoryInterface::class, CategoryRepository::class);
      $this->app->bind(ProductInterface::class, ProductRepository::class);
   }

   /**
    * Bootstrap any application services.
    */
   public function boot(): void
   {
      //
   }
}
<?php

namespace App\Providers;

use App\Repositories\Categories\CategoryInterface;
use App\Repositories\Categories\CategoryRepository;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
   /**
    * Register any application services.
    */
   public function register(): void
   {
      $this->app->bind(CategoryInterface::class, CategoryRepository::class);
   }

   /**
    * Bootstrap any application services.
    */
   public function boot(): void
   {
      //
   }
}
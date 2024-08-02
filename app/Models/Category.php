<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Category
 */
class Category extends Model
{
   protected $table = 'categories';
   protected $fillable = ['name', 'description'];

   use HasFactory;

   public function product(): HasMany
   {
      return $this->hasMany(Product::class);
   }
}
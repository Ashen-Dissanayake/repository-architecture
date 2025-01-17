<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use PHPUnit\Framework\Attributes\Before;

/**
 * Product
 */
class Product extends Model
{
   protected $table = 'products';
   protected $fillable = ['name', 'description', 'price', 'category_id', 'status'];

   use HasFactory;

   public function category(): BelongsTo
   {
      return $this->belongsTo(Category::class);
   }
}

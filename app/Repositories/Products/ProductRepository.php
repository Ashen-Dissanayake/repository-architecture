<?php

namespace App\Repositories\Products;

use App\Models\Product;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Products\ProductInterface;
use Illuminate\Database\Eloquent\Model;

class ProductRepository extends BaseRepository implements ProductInterface
{
   /**
    * @var Model
    */
   protected $model;

   /**
    * BaseRepository constructor.
    *
    * @param  Model  $model
    */
   public function __construct(Product $model)
   {
      $this->model = $model;
   }
}
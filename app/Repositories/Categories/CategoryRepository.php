<?php

namespace App\Repositories\Categories;

use App\Models\Category;
use App\Repositories\Base\BaseRepository;
use App\Repositories\Categories\CategoryInterface;
use Illuminate\Database\Eloquent\Model;

class CategoryRepository extends BaseRepository implements CategoryInterface
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
   public function __construct(Category $model)
   {
      $this->model = $model;
   }
}
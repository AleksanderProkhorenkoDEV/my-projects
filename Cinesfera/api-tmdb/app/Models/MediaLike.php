<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MediaLike extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'media_type',
        'media_id',
        'backdrop_path'
    ];

    
    /**
     *      ----------------------------------- 
     * 
     *                      SCOPES  
     * 
     *      -----------------------------------
     */

     public function scopesearchByMediaType($query, $mediaType){
        return $mediaType != null ? $query->where('media_type', $mediaType) : $query;
     }

     public function scopesearchByMediaId($query, $media_id){
        return $media_id != null ? $query->where('media_id', $media_id) : $query;
     }

     public function scopesearchByUserId($query, $user_id){
        return $user_id != null ? $query->where('user_id', $user_id) : $query;
     }
}

<?php

namespace App\Services\Media;

use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\MediaLike;

class MediaService{

    public function __construct(private MediaLike $media){}

    public function index ($params){
        $query = MediaLike::select('media_likes.*')
                            ->searchByMediaType($params['media'] ?? null)
                            ->searchByUserId($params['user_id'] ?? null)
                            ->distinct();
        
        $media = $query->paginate(20);  
        
        return $media;
    }

    public function show($user_id, $media_id){
        $media = MediaLike::where('user_id', $media_id)
                            ->where('media_id', $user_id)->first();
                            
        $haveMedia = $media != null ? true : false;
        return $haveMedia;
    }

    public function store($params){

        $dataParams = [
            "user_id"       => $params['user_id'],
            "media_type"    => $params['media_type'],
            "media_id"      => $params['media_id'],
            "backdrop_path" => $params['backdrop_path']
        ];
        $this->media = MediaLike::create($dataParams);

        return $this->media;
    }

    public function disLike($params){

        $media = MediaLike::searchByMediaId($params['media_id'])->searchByUserId($params['user_id'])->first();
        $isDelete = $media != null ? $media->delete() : false;
        
        return match ($isDelete) {
            true  => response()->json(['message' => 'Media has been removed from the like list', 'status' => 200]),
            false => response()->json(['message' => 'No such media was found, therefore it could not be deleted.', 'status' => 404]),
        };
    }
}
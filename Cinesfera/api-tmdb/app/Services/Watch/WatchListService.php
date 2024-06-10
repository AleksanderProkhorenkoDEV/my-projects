<?php

namespace App\Services\Watch;

use Illuminate\Pagination\LengthAwarePaginator;
use App\Models\WatchList;

class WatchListService{

    public function __construct(private WatchList $watch){}

    public function index ($params){
        $query = WatchList::select('*')
                            ->searchByUserId($params['user_id'] ?? null)
                            ->distinct();
        
        $watchList = $query->paginate(20);  
        
        return $watchList;
    }

    public function show ($user_id, $media_id) {
        $query = WatchList::where('user_id', $media_id)
                            ->where('media_id', $user_id)->first();

        $haveWatch = $query != null ? true : false;
        return $haveWatch;
    }

    public function store($params){
 
        $dataParams = [
            "user_id"       => $params['user_id'],
            "media_id"      => $params['media_id'],
            "backdrop_path" => $params['backdrop_path'],
            "media_type"    => $params['media_type']
        ];  
        
        $this->watch = WatchList::create($dataParams);

        return $this->watch;
    }

    public function disLike($params){

        $watch = WatchList::searchByMediaId($params['media_id'])->searchByUserId($params['user_id'])->first();
        $isDelete = $watch != null ? $watch->delete() : false;
        
        return match ($isDelete) {
            true  => response()->json(['message' => 'Media has been removed from the watch list', 'status' => 200]),
            false => response()->json(['message' => 'No such media was found, therefore it could not be deleted.', 'status' => 404]),
        };
    }
}
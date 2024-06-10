<?php

namespace App\Http\Controllers\Media;

use App\Http\Requests\Media\MediaRequest;
use App\Services\Media\MediaService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MediaLikeController extends Controller
{

    public function __construct(private MediaService $media) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $params = $request->all();
        $listOfmedia = $this->media->index($params);

        return response()->json(['message' => 'List of media', 'data' => $listOfmedia, 'status' => 200]);
    }

    public function show($media_id,$user_id){
        $haveMedia = $this->media->show($media_id, $user_id);
        return response()->json(['data' => $haveMedia, 'status' => 200]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MediaRequest $request)
    {
        $data = $this->media->store($request->all());

        return response()->json(['message' => 'movie/serie added', 'data'=> $data, 'status' => 201]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->media->disLike($request->all());
    }
}

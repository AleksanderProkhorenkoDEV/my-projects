<?php

namespace App\Http\Controllers\WatchList;

use App\Http\Requests\WatchList\WatchListRequest;
use App\Services\Watch\WatchListService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\WatchList;

class WatchListController extends Controller
{
    public function __construct(private WatchListService $watch) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $params = $request->all();
        $listOfmedia = $this->watch->index($params);

        return response()->json(['message' => 'List of media', 'data' => $listOfmedia, 'status' => 200]);
    }

    public function show($user_id, $media_id){
        $isAdd = $this->watch->show($user_id, $media_id);
        return response()->json(['data' => $isAdd, 'status' => 200]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(WatchListRequest $request)
    {
        $data = $this->watch->store($request->all());

        return response()->json(['message' => 'movie/serie added', 'data'=> $data, 'status' => 201]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        return $this->watch->disLike($request->all());
    }
}

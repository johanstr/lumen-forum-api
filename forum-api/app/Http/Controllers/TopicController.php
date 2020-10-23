<?php

namespace App\Http\Controllers;

use App\Http\Resources\Topic as TopicResource;
use App\Models\Topic;
use Illuminate\Http\Request;

class TopicController extends Controller
{
    public function index($id)
    {
        return TopicResource::collection(Topic::where('thread_id', $id)->get());
    }
}

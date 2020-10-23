<?php

namespace App\Http\Controllers;

use App\Models\Reply;
use App\Http\Resources\Reply as ReplyResource;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function index($id)
    {
        return ReplyResource::collection(Reply::where('topic_id', $id)->get());
    }
}

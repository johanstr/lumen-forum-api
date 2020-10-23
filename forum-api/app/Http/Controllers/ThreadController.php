<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use App\Models\Topic;
use App\Http\Resources\Thread as ThreadResource;
use Illuminate\Http\Request;

class ThreadController extends Controller
{
    // Index
    // Retrieves all threads from the database and returns it as json
    public function index()
    {
        return ThreadResource::collection(Thread::all());
    }

}

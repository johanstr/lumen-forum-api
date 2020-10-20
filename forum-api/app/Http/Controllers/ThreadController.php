<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class ThreadController extends Controller
{
    // Index
    // Retrieves all threads from the database and returns it as json
    public function index()
    {
        $threads = Thread::all();

        return response()->json($threads, 200);
    }
}

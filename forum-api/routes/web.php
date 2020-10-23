<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/threads', [ 'as' => 'threads.index', 'uses' => 'ThreadController@index' ]);
$router->get('/thread/{id}/topics', ['as' => 'thread.topics', 'uses' => 'TopicController@index']);
$router->get('/topic/{id}/replies', ['as' => 'topic.replies', 'uses' => 'ReplyController@index']);

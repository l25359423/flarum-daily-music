<?php

/*
 * This file is part of fof/user-directory.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Leo\DailyMusic\Content;

use Flarum\Api\Client;
use Flarum\Frontend\Document;
use Flarum\Http\Exception\RouteNotFoundException;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use Illuminate\Contracts\View\Factory;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface as Request;
use Leo\DailyMusic\Model\DailyMusic as DailyMusicModel;

class DailyMusic
{
    /**
     * @var Client
     */
    protected $api;

    /**
     * @var Factory
     */
    private $view;

    public function __construct(Client $api, Factory $view)
    {
        $this->api = $api;
        $this->view = $view;
    }

    public function __invoke(Document $document, Request $request)
    {
        return $document;
    }
}
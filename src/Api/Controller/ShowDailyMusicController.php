<?php

namespace Leo\DailyMusic\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Leo\DailyMusic\Api\Serializer\DailyMusicSerializer;

class ShowDailyMusicController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = DailyMusicSerializer::class;

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $actor = RequestUtil::getActor($request);
        $modelId = Arr::get($request->getQueryParams(), 'id');

        // $model = ...;

        return $model;
    }
}

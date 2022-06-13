<?php

namespace Shuke\DailyMusic\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\Http\RequestUtil;
use Illuminate\Contracts\Bus\Dispatcher;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Shuke\DailyMusic\Command\EditDailyMusic;
use Shuke\DailyMusic\Api\Serializer\DailyMusicSerializer;

class UpdateDailyMusicController extends AbstractShowController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = DailyMusicSerializer::class;

    /**
     * @var Dispatcher
     */
    protected $bus;

    /**
     * @param Dispatcher $bus
     */
    public function __construct(Dispatcher $bus)
    {
        $this->bus = $bus;
    }


    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $actor = RequestUtil::getActor($request);
        $modelId = Arr::get($request->getQueryParams(), 'id');
        $data = Arr::get($request->getParsedBody(), 'data', []);
        
        $model = $this->bus->dispatch(
            new EditDailyMusic($modelId, $actor, $data)
        );
        
        return $model;
    }
}

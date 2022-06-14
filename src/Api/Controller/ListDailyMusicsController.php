<?php

namespace Leo\DailyMusic\Api\Controller;

use Leo\DailyMusic\Filter\DailyMusicFilter;
use Flarum\Api\Controller\AbstractListController;
use Flarum\Http\RequestUtil;
use Flarum\Http\UrlGenerator;
use Flarum\Query\QueryCriteria;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use Leo\DailyMusic\Api\Serializer\DailyMusicSerializer;

class ListDailyMusicsController extends AbstractListController
{
    /**
     * {@inheritdoc}
     */
    public $serializer = DailyMusicSerializer::class;

    /**
     * @var UrlGenerator
     */
    protected $url;

    /**
     * @var DailyMusicFilter
     */
    protected $filterer;

    public $sort = ['id' => 'desc'];

    /**
     * @param UrlGenerator $url
     */
    public function __construct(DailyMusicFilter $filterer, UrlGenerator $url)
    {
        $this->filterer = $filterer;
        $this->url = $url;
    }

    /**
     * {@inheritdoc}
     */
    protected function data(ServerRequestInterface $request, Document $document)
    {
        // See https://docs.flarum.org/extend/api.html#api-endpoints for more information.

        $actor = RequestUtil::getActor($request);

        $filters = $this->extractFilter($request);
        $sort = $this->extractSort($request);
        $sortIsDefault = $this->sortIsDefault($request);

        $limit = $this->extractLimit($request);
        $offset = $this->extractOffset($request);
        $include = $this->extractInclude($request);

        // ...

        $criteria = new QueryCriteria($actor, $filters, $sort, $sortIsDefault);

        $results = $this->filterer->filter($criteria, $limit, $offset);

        $document->addPaginationLinks(
            $this->url->to('api')->route('daily_music'),
            $request->getQueryParams(),
            $offset,
            $limit,
            null
        );
        return $results->getResults()->load($include);;
    }
}

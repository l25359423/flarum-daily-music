<?php

namespace Leo\DailyMusic\Filter;

use Leo\DailyMusic\Model\DailyMusic;
use Flarum\Filter\AbstractFilterer;
use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;

class DailyMusicFilter extends AbstractFilterer
{
    /**
     * @param array $filters
     * @param array $filterMutators
     */
    public function __construct(array $filters, array $filterMutators)
    {
        parent::__construct($filters, $filterMutators);
    }

    protected function getQuery(User $actor): Builder
    {
        return DailyMusic::query();
    }
}

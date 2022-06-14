<?php

namespace Leo\DailyMusic\Command;

use Illuminate\Support\Arr;
use Leo\DailyMusic\DailyMusicRepository;

class DeleteDailyMusicHandler
{
    /**
     * @var DailyMusicRepository
     */
    protected $repository;

    public function __construct(DailyMusicRepository $repository)
    {
        $this->repository = $repository;
    }

    public function handle(DeleteDailyMusic $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('...');

        // ...

        return $model;
    }
}

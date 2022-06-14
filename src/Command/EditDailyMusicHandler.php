<?php

namespace Leo\DailyMusic\Command;

use Illuminate\Support\Arr;
use Leo\DailyMusic\DailyMusicRepository;
use Leo\DailyMusic\DailyMusicValidator;

class EditDailyMusicHandler
{
    /**
     * @var DailyMusicRepository
     */
    protected $repository;

    /**
     * @var DailyMusicValidator
     */
    protected $validator;

    public function __construct(DailyMusicRepository $repository, DailyMusicValidator $validator)
    {
        $this->repository = $repository;
		$this->validator = $validator;
    }

    public function handle(EditDailyMusic $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $actor->assertCan('...');

        // ...

        return $model;
    }
}

<?php

namespace Shuke\DailyMusic\Command;

use Illuminate\Support\Arr;
use Shuke\DailyMusic\DailyMusicRepository;
use Shuke\DailyMusic\DailyMusicValidator;

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

<?php

namespace Shuke\DailyMusic\Command;

use Illuminate\Support\Arr;
use Shuke\DailyMusic\DailyMusicRepository;
use Shuke\DailyMusic\DailyMusicValidator;
use Shuke\DailyMusic\Model\DailyMusic;

class CreateDailyMusicHandler
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

    public function handle(CreateDailyMusic $command)
    {
        $actor = $command->actor;
        $data = $command->data;

        $model = DailyMusic::build(
            Arr::get($data, 'attributes.title'),
            Arr::get($data, 'attributes.url')
        );

        $model->save();

        return $model;
    }
}

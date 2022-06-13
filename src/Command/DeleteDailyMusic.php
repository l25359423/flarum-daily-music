<?php

namespace Shuke\DailyMusic\Command;

use Flarum\User\User;

class DeleteDailyMusic
{
    /**
     * @var int
     */
    public $modelId;

    /**
     * @var \Flarum\User\User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    public function __construct($modelId, User $actor, array $data)
    {
        $this->modelId = $modelId;
        $this->actor = $actor;
        $this->data = $data;
    }
}

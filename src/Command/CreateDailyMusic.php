<?php

namespace Leo\DailyMusic\Command;

use Flarum\User\User;

class CreateDailyMusic
{
    /**
     * @var \Flarum\User\User
     */
    public $actor;

    /**
     * @var array
     */
    public $data;

    public function __construct(User $actor, array $data)
    {
        $this->actor = $actor;
        $this->data = $data;
    }
}

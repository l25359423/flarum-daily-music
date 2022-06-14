<?php

namespace Leo\DailyMusic\Access;

use Leo\DailyMusic\Model\DailyMusic;
use Flarum\User\Access\AbstractPolicy;
use Flarum\User\User;

class DailyMusicPolicy extends AbstractPolicy
{
    public function can(User $actor, string $ability, DailyMusic $model)
    {
        // See https://docs.flarum.org/extend/authorization.html#custom-policies for more information.
    }
}

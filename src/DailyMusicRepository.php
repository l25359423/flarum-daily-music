<?php

namespace Shuke\DailyMusic;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Shuke\DailyMusic\Model\DailyMusic;

class DailyMusicRepository
{
    /**
     * @return Builder
     */
    public function query()
    {
        return DailyMusic::query();
    }

    /**
     * @param int $id
     * @param User $actor
     * @return DailyMusic
     */
    public function findOrFail($id, User $actor = null): DailyMusic
    {
        return DailyMusic::findOrFail($id);
    }
}

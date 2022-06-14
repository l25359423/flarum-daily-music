<?php

namespace Leo\DailyMusic;

use Flarum\User\User;
use Illuminate\Database\Eloquent\Builder;
use Leo\DailyMusic\Model\DailyMusic;

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

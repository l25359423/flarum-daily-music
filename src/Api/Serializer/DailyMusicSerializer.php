<?php

namespace Shuke\DailyMusic\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Shuke\DailyMusic\Model\DailyMusic;
use InvalidArgumentException;

class DailyMusicSerializer extends AbstractSerializer
{
    /**
     * {@inheritdoc}
     */
    protected $type = 'daily-music';

    /**
     * {@inheritdoc}
     *
     * @param DailyMusic $model
     * @throws InvalidArgumentException
     */
    protected function getDefaultAttributes($model)
    {
        if (! ($model instanceof DailyMusic)) {
            throw new InvalidArgumentException(
                get_class($this).' can only serialize instances of '.DailyMusic::class
            );
        }

        // See https://docs.flarum.org/extend/api.html#serializers for more information.

        $attributes = [
            'id'            => $model->id,
            'title'         => $model->title,
            'url'           => $model->url,
            'released'      => $model->released,
            'discussion_id' => $model->discussion_id,
        ];

        return $attributes;
    }
}

<?php

use Illuminate\Database\Schema\Blueprint;
use Flarum\Database\Migration;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('daily_music')) {
            return;
        }

        $schema->create('daily_music', function (Blueprint $table) {
            $table->increments('id');
            $table->string('url');
            $table->boolean('released');
            $table->integer('discussion_id');
            // created_at & updated_at
            $table->timestamps();
        });
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('daily_music');
    },
];


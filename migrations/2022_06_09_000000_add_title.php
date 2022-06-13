<?php

use Illuminate\Database\Schema\Blueprint;

use Illuminate\Database\Schema\Builder;

// HINT: you might want to use a `Flarum\Database\Migration` helper method for simplicity!
// See https://docs.flarum.org/extend/models.html#migrations to learn more about migrations.
return [
    'up' => function (Builder $schema) {
        // up migration
        $schema->table('daily_music', function (Blueprint $table) {
            $table->string('title');
        });
    },
    'down' => function (Builder $schema) {
        // down migration
    }
];

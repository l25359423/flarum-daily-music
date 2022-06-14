<?php
namespace Leo\DailyMusic;
use Flarum\Extend;
use Leo\DailyMusic\Api\Controller;
use Leo\DailyMusic\Filter\DailyMusicFilter;
use Leo\DailyMusic\Filter\NoOpGambit;
use Leo\DailyMusic\PermissionBasedForumSettings;
use Flarum\Api\Serializer\ForumSerializer;

return [
        (new Extend\Frontend('admin'))
            ->js(__DIR__.'/js/dist/admin.js'),

        (new Extend\Routes('api'))
            ->get('/daily-music', 'daily_music', Controller\ListDailyMusicsController::class)
            ->post('/daily-music', 'daily_music.create', Controller\CreateDailyMusicController::class),

        (new Extend\Filter(DailyMusicFilter::class))
            ->addFilter(NoOpGambit::class),

        (new Extend\Frontend('forum'))
            ->js(__DIR__.'/js/dist/forum.js')
            ->css(__DIR__.'/resources/less/forum.less')
            ->route('/daily-music', 'daily_music_frontend', Content\DailyMusic::class),

        new Extend\Locales(__DIR__.'/resources/locale'),

        (new Extend\ApiSerializer(ForumSerializer::class))
            ->attributes(PermissionBasedForumSettings::class),

        (new Extend\View())
            ->namespace('leo.daily-music', __DIR__.'/resources/views'),




//        (new Extend\Policy())
//        ->modelPolicy(Leo\DailyMusic\DailyMusic::class, Leo\DailyMusic\Access\DailyMusicPolicy::class),

//        (new Extend\Routes('api'))
//        ->get('/daily-musics', 'daily-musics.index', Leo\DailyMusic\Api\Controller\ListDailyMusicsController::class)
//        ->get('/daily-musics/{id}', 'daily-musics.show', Leo\DailyMusic\Api\Controller\ShowDailyMusicController::class)
//        ->post('/daily-musics', 'daily-musics.create', Leo\DailyMusic\Api\Controller\CreateDailyMusicController::class)
//        ->patch('/daily-musics/{id}', 'daily-musics.update', Leo\DailyMusic\Api\Controller\UpdateDailyMusicController::class)
//        ->delete('/daily-musics/{id}', 'daily-musics.delete', Leo\DailyMusic\Api\Controller\DeleteDailyMusicController::class)
];

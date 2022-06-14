<?php

namespace Leo\DailyMusic\Console;

use Flarum\Console\AbstractCommand;

class PostMusic extends AbstractCommand
{
    protected function configure()
    {
        $this
            ->setName('leo:postmusic')
            ->setDescription('post music');
    }

    protected function fire()
    {
        echo "hello command";die;
        // See https://docs.flarum.org/extend/console.html#console and
        // https://symfony.com/doc/current/console.html#configuring-the-command for more information.
    }
}

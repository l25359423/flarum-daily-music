import { extend, override } from 'flarum/common/extend';
import app from 'flarum/forum/app';
import IndexPage from 'flarum/common/components/IndexPage';
import LinkButton from 'flarum/common/components/LinkButton';
import DailyMusicPage from './components/DailyMusicPage';
import DailyMusic from './models/DailyMusic';
// We provide our extension code in the form of an "initializer".
// This is a callback that will run after the core has booted.
app.initializers.add('leo-daily-music', function(app) {
    app.routes.daily_music = {
        path: '/daily-music',
        component: DailyMusicPage,
    }
    app.store.models['daily-music'] = DailyMusic;
    // Your Extension Code Here
    extend(IndexPage.prototype, 'navItems', (items) => {
        if(app.forum.attribute('canSeeDailyMusicLink')){
            items.add(
              'daily-music',
              LinkButton.component(
                  {
                    href: app.route('daily_music'),
                    icon: 'fas fa-music',
                  },
                  app.translator.trans('daily-music.forum.page.nav')
              ),
              86
            );
        }
    })
});
export * from '../modal/components'
export * from './components';

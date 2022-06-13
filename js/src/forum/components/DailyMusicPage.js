import app from 'flarum/forum/app';
import Page from 'flarum/common/components/Page';
import ItemList from 'flarum/common/utils/ItemList';
import listItems from 'flarum/common/helpers/listItems';
import IndexPage from 'flarum/forum/components/IndexPage';
import Select from 'flarum/common/components/Select';
import Button from 'flarum/common/components/Button';
import LinkButton from 'flarum/common/components/LinkButton';
import SelectDropdown from 'flarum/common/components/SelectDropdown';
import Dropdown from 'flarum/common/components/Dropdown';
import Separator from 'flarum/common/components/Separator';
import DailyMusicState from '../states/DailyMusicState';

import DailyMusicList from "./DailyMusicList";

/**
 * This page re-uses Flarum's IndexPage CSS classes
 */
export default class DailyMusicPage extends Page {
    oninit(vnode) {
        super.oninit(vnode);
        this.dailyMusic = [];
        this.bodyClass = 'User--directory';
        this.state = new DailyMusicState({});
        this.state.refreshParams(app.search.params());
        console.log(this.state)
        // this.loadResults().then(this.parseResults.bind(this))
        // console.log(this.dailyMusic);
        app.history.push('users', app.translator.trans('daily-music.forum.header.back_to_user_directory_tooltip'));
    }

    view() {
    return (
      <div className="IndexPage">
        {IndexPage.prototype.hero()}
        <div className="container">
          <div className="sideNavContainer">
            <nav className="IndexPage-nav sideNav">
              <ul>{listItems(this.sidebarItems().toArray())}</ul>
            </nav>
            <div className="IndexPage-results sideNavOffset">
              <DailyMusicList state={this.state}/>
            </div>
          </div>
        </div>
      </div>
    );
    }

    /**
    * Our own sidebar. Re-uses Index.sidebarItems as the base
    * Elements added here will only show up on the user directory page
    *
    * @return {ItemList}
    */
    sidebarItems() {
        const items = IndexPage.prototype.sidebarItems();

        items.setContent(
            'nav',
            SelectDropdown.component(
                {
                  buttonClassName: 'Button',
                  className: 'App-titleControl',
                },
                this.navItems().toArray()
            )
        );

        return items;
    }

    /**
    * Our own sidebar navigation. Re-uses Index.navItems as the base
    * Elements added here will only show up on the user directory page
    *
    * @return {ItemList}
    */
    navItems() {
        const items = IndexPage.prototype.navItems();
        const params = this.stickyParams();

        items.add(
            'daily-music',
            LinkButton.component(
                {
                  href: app.route('daily_music', params),
                  icon: 'fas fa-music',
                },
                app.translator.trans('daily-music.forum.page.nav')
            ),
            86
        );

        return items;
    }

    stickyParams() {
        return {
            sort: m.route.param('sort'),
            q: m.route.param('q'),
        };
    }
}

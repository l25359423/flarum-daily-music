import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Placeholder from 'flarum/common/components/Placeholder';
import AddMusic from '../../modal/components/AddMusic'

/**
 * Based on Flarum's DiscussionList
 */
export default class DailyMusicList extends Component {
  view() {
    const { state } = this.attrs;

    let loading;

    if (state.isLoading()) {
      loading = LoadingIndicator.component();
    } else if (state.moreResults) {
      loading = Button.component(
          {
              className: 'Button',
              onclick: state.loadMore.bind(state),
          },
          app.translator.trans('daily-music.forum.page.load_more_button')
      );
    }

    let show_add = Button.component(
        {
            className: 'Button',
            onclick: this.addButtonClicked.bind(this),
        },
        '添加'
    )



    return (
        <div>
            <table className="daily-music-table">
                <tr>
                    <th>
                        标题
                    </th>
                    <th>
                        链接
                    </th>
                    <th>
                        是否发布
                    </th>
                </tr>
                {state.dailyMusic.map((music) => {
                    return (
                        <tr>
                            <td>
                                {music.data.attributes.title}
                            </td>
                            <td>
                                {music.data.attributes.url}
                            </td>
                            <td>
                                {music.data.attributes.released ? 'Y' : 'N'}
                            </td>
                        </tr>
                    );
                })}
            </table>
            <div className="DailyMusicList-loadMore">{loading}{show_add}</div>
        </div>
    );
  }

    addButtonClicked(e) {
        e.preventDefault();

        // Open dialog
        app.modal.show(AddMusic);
    }
}

import Modal from 'flarum/common/components/Modal';
import ItemList from 'flarum/common/utils/ItemList';
import Button from 'flarum/common/components/Button';
import Stream from 'flarum/common/utils/Stream';
import DailyMusic from '../../forum/models/DailyMusic';

export default class AddMusic extends Modal {
    oninit(vnode) {
        super.oninit(vnode);
        this.daily_music = app.store.createRecord('daily-music')
        this.title = Stream(this.daily_music.title() || '');
        this.url = Stream(this.daily_music.url() || '');
    }

    className() {
        return 'AddMusicModal Modal--small';
    }

    title() {
        return "添加";
    }

    content() {
        return (
          <div className="Modal-body">
            <div className="Form">{this.items().toArray()}</div>
          </div>
        );
    }

    onsubmit(e) {
        e.preventDefault();

        this.loading = true;

        this.daily_music.save({
            title: this.title(),
            url: this.url(),
        }).then(
            () => this.hide(),
            (response) => {
                this.loading = false;
                this.handleErrors(response);
            }
        );
    }

  items() {
    const items = new ItemList();

    items.add(
        'title',
        [
          <div className="Form-group">
            <label>标题</label>
            <input className="FormControl" placeholder="标题" value={this.title()} bidi={this.title}/>
          </div>,
        ],
        100
    );

    items.add(
        'url',
        [
          <div className="Form-group">
            <label>链接</label>
            <input className="FormControl" placeholder="链接" value={this.url()} bidi={this.url}/>
          </div>,
        ],
        100
    );

      items.add(
          'actions',
          [
              <div className="Form-group">
                  {Button.component(
                      {
                          type: 'submit',
                          className: 'Button Button--primary',
                          loading: this.loading,
                      },
                      "提交"
                  )}
              </div>,
          ],
          0
      );

    return items;
  }
}

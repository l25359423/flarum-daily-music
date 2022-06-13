import Model from 'flarum/common/Model';

/**
 * Special model used only client-side to hold a free text search value in the search field
 */
export default class DailyMusic extends Model {
    id = Model.attribute('id');
    title = Model.attribute('title');
    url = Model.attribute('url');
    released = Model.attribute('released');
    discussion_id = Model.attribute('discussion_id');
}

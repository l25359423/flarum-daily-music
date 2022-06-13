/**
 * Based on Flarum's DiscussionListState
 */

export default class DailyMusicState {
  constructor(params = {}, app = window.app) {
    this.params = params;

    this.app = app;

    this.dailyMusic = [];

    this.moreResults = false;

    this.loading = false;

    this.qBuilder = {};
  }

  requestParams() {
    const params = { include: [], filter: {} };

    if (this.params.q) {
      params.filter.q = this.params.q;
    }

    return params;
  }

  getParams() {
    return this.params;
  }

  clear() {
    this.dailyMusic = [];
    m.redraw();
  }

  refreshParams(newParams) {
    if (!this.hasUsers() || Object.keys(newParams).some((key) => this.getParams()[key] !== newParams[key])) {
      const q = '';
      this.params = newParams;

      if (newParams.qBuilder) {
        Object.assign(this.qBuilder, newParams.qBuilder || {});
        this.params.q = Object.values(this.qBuilder).join(' ').trim();
      }

      if (!this.params.q && q) {
        this.params.q = q;
      }

      this.refresh();
    }
  }

  refresh() {
    this.loading = true;

    this.clear();

    return this.loadResults().then(
      (results) => {
        this.dailyMusic = [];
        this.parseResults(results);
      },
      () => {
        this.loading = false;
        m.redraw();
      }
    );
  }

  loadResults(offset) {
    const params = this.requestParams();
    params.page = { offset };
    params.include = params.include.join(',');
    return this.app.store.find('daily-music', params);
  }

  loadMore() {
    this.loading = true;

    this.loadResults(this.dailyMusic.length).then(this.parseResults.bind(this));
  }

  parseResults(results) {
    this.dailyMusic.push(...results);

    this.loading = false;
    this.moreResults = !!results.payload.links && !!results.payload.links.next;

    m.redraw();

    return results;
  }

  hasUsers() {
    return this.dailyMusic.length > 0;
  }

  isLoading() {
    return this.loading;
  }

  isSearchResults() {
    return !!this.params.q;
  }

  empty() {
    return !this.hasUsers() && !this.isLoading();
  }
}

<template>
  <div>
    <div class="ui vertical footer segment">
      <div class="ui section divider"></div>
      <div class="ui center aligned container">
        <div class="ui stackable divided grid">
          <div class="four wide column">
            <h4 class="ui header">{{$t('about')}}</h4>
            <div class="ui link list">
              <router-link to="/about" class="item">{{$t('about.site')}}</router-link>
              <router-link :to="{name: 'board.view', params: {name: 'free', seq: 98}}" class="item">{{$t('about.site.use.guide')}}</router-link>
            </div>
          </div>
          <div class="four wide column">
            <h4 class="ui header">{{$t('board')}}</h4>
            <div class="ui link list">
              <router-link :to="{name: 'board', params: {name: 'free'}}" class="item">{{$t('board.name.free')}}</router-link>
              <router-link :to="{name: 'board', params: {name: 'football'}}" class="item">{{$t('board.name.football')}}</router-link>
              <router-link :to="{name: 'board', params: {name: 'developer'}}" class="item">{{$t('board.name.swdev')}}</router-link>
            </div>
          </div>
          <div class="four wide column">
            <h4 class="ui header">{{$t('stats')}}</h4>
            <div class="ui link list">
              <router-link to="/stats/supporters" class="item">{{$t('stats.supporters')}}</router-link>
              <router-link to="/stats/attendance/league" class="item">{{$t('stats.attendance')}}</router-link>
            </div>
          </div>
          <div class="four wide column">
            <div class="ui center aligned container">
              <div class="ui link list">
                <div class="item">
                  <a href="/rss.xml">
                    <i class="rss big icon"></i> RSS
                  </a>
                </div>
                <div class="item">
                  <a href="https://github.com/JakduK" target="_blank">
                    <i class="github alternate big icon"></i> Github
                  </a>
                </div>
                <div class="item">
                  <a href="https://t.me/joinchat/EEdSAQ6kK0zyY_N_6TdW_Q" target="_blank">
                    <i class="comments outline big icon"></i> Telegram
                  </a>
                </div>
                <div class="item">
                  <a href="mailto:phjang1983@daum.net">
                    <i class="mail big icon"></i> email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="ui section divider"></div>
        <img src="/assets/jakduk/img/logo_128.png" class="ui centered mini image">
        <div class="ui tiny header">{{$t('common.jakduk.description')}}</div>
        <div class="ui horizontal small divided link list">
          <div class="item">
            <a href="https://icons8.com/web-app/for/all/ghost">Free icons by Icons8</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ui.footer.segment {
    padding: 1em 0 3em 0;
  }
</style>


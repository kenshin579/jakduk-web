<template>
  <div id="phoneSidenav" class="ui left inverted blue vertical accordion menu sidebar">
    <search-input v-model="searchKeyword" @on-enter="onSearchEnter" class="ui search item"></search-input>
    <router-link active-class="active" to="/home" class="item">{{$t('common.home')}}</router-link>
    <router-link active-class="active" to="/board/free" class="item">{{$t('board.name.free')}}</router-link>
    <router-link active-class="active" to="/board/football" class="item">{{$t('board.name.football')}}</router-link>
    <router-link active-class="active" to="/board/developer" class="item">{{$t('board.name.swdev')}}</router-link>
    <router-link active-class="active" to="/gallery" class="item">{{$t('gallery')}}</router-link>
    <router-link :class="{active: $route.name && $route.name.startsWith('stats')}" to="/stats/supporters" class="item">{{$t('stats')}}</router-link>
    <router-link active-class="active" to="/jakdu" class="item">{{$t('jakdu.write')}}</router-link>
    <div class="item">
      <a class="title">
        <i class="dropdown icon"></i>
        <i class="globe icon"></i> {{$t('common.language')}}
      </a>
      <div class="content">
        <a :href="langPath + 'ko'" class="item"><i class="kr flag"></i> {{$t('common.language.korean')}}</a>
        <a :href="langPath + 'en'" class="item"><i class="us flag"></i> {{$t('common.language.english')}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import SearchInput from '../search_input/search_input.vue';

  export default {
    data() {
      return {
        langPath: window.location.pathname,
        searchKeyword: ''
      };
    },
    mounted() {
      const $el = $(this.$el);
      $el.accordion();

      $el.sidebar({
        onHide() {
          $('html').removeClass('ios');
        },
        onVisible() {
          $('html').addClass('ios');
        }
      }).sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '#phoneSidenav a.item');
    },
    watch: {
      $route(to, from) {
        const langQueryRegexp = /([?&])?lang=[^&]+/g;

        if (to.fullPath.match(langQueryRegexp)) {
          this.langPath = to.fullPath.replace(langQueryRegexp, (matched, $1) => `${$1}lang=`);
        } else {
          this.langPath = `${to.fullPath}${to.fullPath.lastIndexOf('?') !== -1 ? '&' : '?'}lang=`;
        }

        if (to.path === '/search') {
          this.searchKeyword = to.query.q;
        }
      }
    },
    methods: {
      onSearchEnter(keyword) {
        this.$router.push({
          name: 'search',
          query: {
            q: keyword,
            w: 'ARTICLE;COMMENT;GALLERY',
            from: 0,
            size: 3
          }
        });

        $(this.$el).sidebar('toggle');
      }
    },
    components: {
      'search-input': SearchInput
    }
  };

</script>

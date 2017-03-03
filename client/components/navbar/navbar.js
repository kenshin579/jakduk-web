import Vue from 'vue';
import $ from 'jquery';
import {mapState} from 'vuex';
import './profile_menu';
import '../search_input/search_input';

export default Vue.component('navbar', {
  template: require('./navbar.html'),
  mounted() {
    const $el = $(this.$el);

    $el.find('.logon.item').each((index, item) => {
      $(item).popup({
        popup: $(item).find('.popup'),
        position: 'bottom right',
        on: 'click'
      });
    });

    $el.find('#btnSidebarToggle').click(() => {
      $('#phoneSidenav')
        .sidebar({
          context: $('#root'),
          scrollLock: true
        })
        .sidebar('setting', 'transition', 'overlay')
        .sidebar('attach events', '#phoneSidenav a.item')
        .sidebar('toggle');
    });
  },
  methods: {
    changeLocale(locale) {
      const langQueryRegexp = /lang=(.[^&]+)/g;
      if (window.location.href.match(langQueryRegexp)) {
        return window.location.href.replace(langQueryRegexp, () => `lang=${locale}`);
      } else {
        return `${window.location.href}?lang=${locale}`;
      }
    }
  },
  computed: mapState(['isAuthenticated'])
});

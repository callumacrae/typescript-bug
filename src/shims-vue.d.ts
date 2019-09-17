import Vue, { ComponentOptions } from 'vue';
import { MetaInfo, MetaInfoComputed } from 'vue-meta/types/vue-meta';
import { VueMetaPlugin } from 'vue-meta';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $meta(): VueMetaPlugin;
  }
}

// declare module 'vue/types/options' {
//   interface ComponentOptions<V extends Vue> {
//     // metaInfo?: MetaInfo | MetaInfoComputed;
//     metaInfo?: any;
//   }
// }

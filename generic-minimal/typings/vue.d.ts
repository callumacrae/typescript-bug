import Vue from 'vue';
import i18next from 'i18next';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface VueConstructor {
    t: i18next.TranslationFunction;
  }

  interface Vue {
    $skI18n: {
      locale: string;
      changeLanguage(lang: string): Promise<i18next.TranslationFunction>;
    };
  }

  interface VueConfiguration {
    lang: string;
    prismicRepo: string;
  }
}

# Steps to replicate

To install, run

```
npm install
```

This will have installed the `generic-minimal` module as an actual module inside of node_modules.

To run the build, run:

```
npm run build
```

This should work (this time).

To break, replace the generic-minimal module with a symlinked version, as if you were using npm link:

```
cd generic-minimal
npm install
cd ..
rm -rf node_modules/generic-minimal
ln -s "$(pwd)/generic-minimal" node_modules/generic-minimal
```

Now, when you run the build, you see the following error:

```
 ERROR  Failed to compile with 1 errors                                                    1:18:22 PM

 error  in /Users/callumacrae/Sites/samknows/generic-microsite/src/App.vue

ERROR in /Users/callumacrae/Sites/samknows/generic-microsite/src/App.vue
10:3 No overload matches this call.
  The last overload gave the following error.
    Argument of type '{ metaInfo: { title: string; }; }' is not assignable to parameter of type 'ComponentOptions<Vue, DefaultData<Vue>, DefaultMethods<Vue>, DefaultComputed, PropsDefinition<Record<string, any>>, Record<string, any>>'.
      Object literal may only specify known properties, and 'metaInfo' does not exist in type 'ComponentOptions<Vue, DefaultData<Vue>, DefaultMethods<Vue>, DefaultComputed, PropsDefinition<Record<string, any>>, Record<string, any>>'.
     8 | import Vue from 'vue';
     9 | export default Vue.extend({
  > 10 |   metaInfo: {
       |   ^
    11 |     title: 'WTF'
    12 |   }
    13 | });

 ERROR  Build failed with errors.
 ```

This happens with npm link and wherever the directories are relative to each other.

The only difference is that the module is symlinked instead of actually there. For some reason, that means that typescript isn't including the types from the modules being used from node_modules, such as `vue-meta`. This has also happened with other modules such as `vue-i18next` and `vuex`.

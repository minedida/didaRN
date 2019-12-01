import { withPolyfills, makeConfig } from "@haul-bundler/preset-0.60";

export default makeConfig({
  bundles: {
    index: {
      entry: withPolyfills('./index'),
      transform({ config }) {
        config.module.rules = [
          {
            exclude: '/node_modules/',
          },
          ...config.module.rules,
        ];
      },
    },
  },
});

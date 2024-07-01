import { defineConfig, presetIcons, presetUno, presetWind, UserConfig } from 'unocss'

const config = {
  presets: [presetUno(), presetWind(), presetIcons()],
  shortcuts: [
    {
      'flex-center': 'flex justify-center items-center',
      'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  rules: [],
  preflights: [
    {
      getCSS: () => `

      @keyframes meteor {
        0% {
          transform: rotate(215deg) translateX(0);
          opacity: 1;
        }
        70% {
          opacity: 1;
        }
        100% {
          transform: rotate(215deg) translateX(-500px);
          opacity: 0;
        }
      }

      @keyframes border-beam {
        100% {
          offset-distance: 100%;
        }
      }
      `,
    },
  ],
  theme: {
    colors: {
      brand: '#32FFDC',
    },
  },
}

export default defineConfig(config) as UserConfig<(typeof config)['theme']>

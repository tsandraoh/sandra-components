import { defineConfig } from 'dumi';

export default defineConfig({
  // hash: true, ？？ 打包之后文件名并没有跟 hash 后缀
  outputPath: 'docs-dist',
  favicons: ['./favicon.ico'],
  themeConfig: {
    name: '山竹',
    logo: './mangosteen.png',
    // prefersColor: { default: 'auto' },
    socialLinks: {
      github: 'https://github.com/tsandraoh/sandra-components',
    },
  },
});

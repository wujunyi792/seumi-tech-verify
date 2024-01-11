import { useSystemStore } from '@/store/system';
import { ConfigProvider } from '@douyinfe/semi-ui';
import type { Locale } from '@douyinfe/semi-ui/lib/es/locale/interface';
import en_GB from '@douyinfe/semi-ui/lib/es/locale/source/en_GB';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';
import ja_JP from '@douyinfe/semi-ui/lib/es/locale/source/ja_JP';
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import zh_TW from '@douyinfe/semi-ui/lib/es/locale/source/zh_TW';
import { Outlet } from 'umi';

const langMap: {
  [key: string]: Locale;
} = {
  'en-GB': en_GB,
  'en-US': en_US,
  'zh-CN': zh_CN,
  'zh-TW': zh_TW,
  'ja-JP': ja_JP,
};

export default function AppLayout() {
  const lang = useSystemStore((s) => s.lang);
  return (
    <ConfigProvider locale={langMap[lang]}>
      <Outlet />
    </ConfigProvider>
  );
}

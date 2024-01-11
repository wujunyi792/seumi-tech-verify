import { useSystemStore } from '@/store/system';
import { IconLanguage } from '@douyinfe/semi-icons';
import { Button, Dropdown } from '@douyinfe/semi-ui';

interface SelectLanguageProps {
  style?: React.CSSProperties;
}

const defaultLangUConfigMap: {
  [key: string]: {
    lang: string;
    label: string;
    icon: string;
    title: string;
  };
} = {
  'en-US': {
    lang: 'en-US',
    label: 'English(US)',
    icon: '🇺🇸',
    title: 'Language',
  },
  'en-GB': {
    lang: 'en-GB',
    label: 'English(UK)',
    icon: '🇬🇧',
    title: 'Language',
  },
  'zh-CN': {
    lang: 'zh-CN',
    label: '中文(简体)',
    icon: '🇨🇳',
    title: '语言',
  },
  'zh-TW': {
    lang: 'zh-TW',
    label: '中文(繁体)',
    icon: '🇭🇰',
    title: '語言',
  },
  'ja-JP': {
    lang: 'ja-JP',
    label: '日本語',
    icon: '🇯🇵',
    title: '言語',
  },
};

export default function SelectLanguage({ style }: SelectLanguageProps) {
  const system = useSystemStore();
  return (
    <Dropdown
      render={
        <Dropdown.Menu>
          {Object.keys(defaultLangUConfigMap).map((key) => {
            const item = defaultLangUConfigMap[key];
            return (
              <Dropdown.Item
                icon={item.icon}
                key={item.lang}
                selected={system.lang === item.lang}
                onClick={() => {
                  system.setLang(item.lang);
                }}
              >
                {item.label}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      }
    >
      <Button
        theme="borderless"
        icon={<IconLanguage size="large" />}
        style={{
          color: 'var(--semi-color-text-2)',
          ...style,
        }}
      >
        {defaultLangUConfigMap[system.lang].title}
      </Button>
    </Dropdown>
  );
}

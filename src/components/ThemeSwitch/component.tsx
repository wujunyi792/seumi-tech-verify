import useTheme from '@/hooks/useTheme';
import { switchThemeMode } from '@/utils/theme';
import { IconSun } from '@douyinfe/semi-icons';
import { IconDarkMode } from '@douyinfe/semi-icons-lab';
import { Button } from '@douyinfe/semi-ui';

interface ThemeSwitchProps {
  style?: React.CSSProperties;
}

export default function ThemeSwitch({ style }: ThemeSwitchProps) {
  const { themeName } = useTheme();
  return (
    <Button
      theme="borderless"
      icon={
        themeName === 'dark' ? (
          <IconSun size="large" />
        ) : (
          <IconDarkMode size="large" />
        )
      }
      style={{
        color: 'var(--semi-color-text-2)',
        ...style,
      }}
      onClick={() => {
        switchThemeMode();
      }}
    />
  );
}

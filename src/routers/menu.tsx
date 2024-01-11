import { IconSemiLogo } from '@douyinfe/semi-icons';
import { IconBadge, IconForm } from '@douyinfe/semi-icons-lab';

export type IMenu = Array<{
  type: 'inner' | 'outer';
  itemKey: string;
  target?: string;
  icon?: React.ReactNode;
  children?: IMenu;
}>;

export const AppMenu: IMenu = [
  {
    type: 'inner',
    itemKey: 'home',
    target: '/',
    icon: <IconBadge />,
  },
  {
    itemKey: 'help',
    type: 'inner',
    icon: <IconForm />,
    children: [
      {
        itemKey: 'docs',
        type: 'inner',
        target: '/docs',
      },
    ],
  },
  {
    type: 'outer',
    itemKey: 'semi',
    target: 'https://semi.design',
    icon: <IconSemiLogo />,
  },
];

import { AppMenu, IMenu } from '@/routers/menu';
import { useSystemStore } from '@/store/system';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import { Nav } from '@douyinfe/semi-ui';
import { useMemo } from 'react';
import { FormattedMessage, useIntl, useNavigate } from 'umi';

export default function SideMenu() {
  const navigate = useNavigate();
  const system = useSystemStore();
  const intl = useIntl();

  function renderMenu(menus: IMenu): React.ReactNode {
    return (
      <>
        {menus.map((menu) => {
          if (menu.children) {
            return (
              <Nav.Sub
                key={menu.itemKey}
                itemKey={menu.itemKey}
                text={intl.formatMessage({ id: `menu.${menu.itemKey}` })}
                icon={menu.icon}
              >
                {renderMenu(menu.children || [])}
              </Nav.Sub>
            );
          }
          return (
            <Nav.Item
              key={menu.itemKey}
              itemKey={menu.itemKey}
              text={intl.formatMessage({ id: `menu.${menu.itemKey}` })}
              icon={menu.icon}
              onClick={() => {
                if (menu.type === 'inner') {
                  navigate(menu.target || '/');
                  return;
                }
                window.open(menu.target, `_blank`);
              }}
            />
          );
        })}
      </>
    );
  }
  const menus = useMemo(() => renderMenu(AppMenu), [AppMenu, system.lang]);
  return (
    <Nav
      className="h-full"
      bodyStyle={{ height: '100%' }}
      openKeys={system.menuOpenKeys}
      onOpenChange={({ openKeys }) => {
        system.setMenuOpenKeys(openKeys || []);
      }}
      defaultIsCollapsed
    >
      <Nav.Header
        logo={<IconSemiLogo style={{ height: '36px', fontSize: 36 }} />}
        text={
          <div className=" whitespace-normal">
            <FormattedMessage id="app.title" />
          </div>
        }
      />
      {menus}
      <Nav.Footer collapseButton={true} />
    </Nav>
  );
}

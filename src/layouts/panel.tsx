import SelectLanguage from '@/components/SelectLanguage';
import SideMenu from '@/components/SideMenu';
import ThemeSwitch from '@/components/ThemeSwitch';
import {
  IconBell,
  IconBytedanceLogo,
  IconHelpCircle,
} from '@douyinfe/semi-icons';
import { Avatar, Button, Layout, Nav, Skeleton } from '@douyinfe/semi-ui';
import { Outlet } from 'umi';

const { Header, Footer, Sider, Content } = Layout;

export default function PanelLayout() {
  return (
    <Layout
      style={{ border: '1px solid var(--semi-color-border)' }}
      className="h-full"
    >
      <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
        <SideMenu />
      </Sider>
      <Layout>
        <Header
          style={{ backgroundColor: 'var(--semi-color-bg-1)' }}
          className="sticky top-0"
        >
          <Nav
            mode="horizontal"
            footer={
              <>
                <Button
                  theme="borderless"
                  icon={<IconBell size="large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Button
                  theme="borderless"
                  icon={<IconHelpCircle size="large" />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <ThemeSwitch style={{ marginRight: '12px' }} />
                <SelectLanguage style={{ marginRight: '12px' }} />
                <Avatar color="orange" size="small">
                  YJ
                </Avatar>
              </>
            }
          ></Nav>
        </Header>
        <Content
          style={{
            padding: '24px',
            backgroundColor: 'var(--semi-color-bg-0)',
          }}
        >
          <div
            style={{
              borderRadius: '10px',
              border: '1px solid var(--semi-color-border)',
              // height: '376px',
              padding: '32px',
            }}
          >
            <Skeleton
              placeholder={<Skeleton.Paragraph rows={2} />}
              loading={false}
            >
              <Outlet />
            </Skeleton>
          </div>
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: '24px' }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </Layout>
  );
}

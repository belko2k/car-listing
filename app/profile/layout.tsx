import Wrapper from '../components/Wrapper';
import { Separator } from '../components/ui/separator';
import { SidebarNav } from './components/SidebarNav';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarNavItems = [
    {
      title: 'Profile',
      href: '/profile',
    },
    {
      title: 'My listings',
      href: '/profile/my-listings',
    },
    {
      title: 'Favorites',
      href: '/profile/favorites',
    },
  ];

  return (
    <Wrapper>
      <div className="my-12">
        <h2 className="text-3xl font-bold mb-4">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and your listings.
        </p>
        <Separator className="my-6" />
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          <aside className="lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1">{children}</div>
        </div>
      </div>
    </Wrapper>
  );
}

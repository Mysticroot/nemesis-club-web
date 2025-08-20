import { NavLink, Link, useLocation } from 'react-router-dom';
import { FileText, HandHeart, Home, LayoutDashboard, Users, LogOut, Shield } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/context/AuthContext';

const AppSidebar = () => {
  const { logout, adminData } = useAuth();
  const location = useLocation();
  // const isOnDashboardIndex = location.pathname === '/admin/dashboard';

  // Main navigation items
  const mainNavItems = [
    {
      path: '/admin/dashboard',
      label: 'Overview',
      icon: LayoutDashboard,
      description: 'Dashboard overview and analytics',
    },
    {
      path: '/admin/dashboard/manage-blogs',
      label: 'Manage Blog Posts',
      icon: FileText,
      description: 'Manage blog content and posts',
    },
    {
      path: '/admin/dashboard/sponsor-requests',
      label: 'Sponsor Requests',
      icon: HandHeart,
      description: 'Review sponsorship requests',
    },
    {
      path: '/admin/dashboard/sponsors',
      label: 'Sponsors',
      icon: Users,
      description: 'Manage sponsor accounts',
    },
    {
      path: '/admin/dashboard/create-blog',
      label: 'Create Blog Post',
      icon: Users,
      description: 'Create a new blog post',
    },
  ];

  // Function to get navigation link classes
  const getNavLinkClasses = (isActive) => {
    const baseClasses = `
      w-full flex items-center gap-3 px-3 py-2.5 rounded-lg 
      transition-all duration-200 hover:cursor-pointer group
      relative overflow-hidden
    `;

    const activeClasses = `
      bg-primary text-primary-foreground font-medium shadow-sm
      before:absolute before:left-0 before:top-0 before:h-full 
      before:w-1 before:bg-primary-foreground before:opacity-50
    `;

    const inactiveClasses = `
      text-muted-foreground hover:text-foreground hover:bg-muted/50
      hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]
    `;

    return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  };

  // Handle logout with confirmation
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <Sidebar className="h-screen z-30 border-r border-border/50 overflow-x-hidden">
      <SidebarContent className="flex flex-col h-full">
        {/* Header */}
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-foreground">Admin Panel</span>
                {adminData && (
                  <span className="text-xs text-muted-foreground">
                    Welcome, {adminData.name || adminData.email}
                  </span>
                )}
              </div>
            </div>
            <SidebarTrigger className="ml-auto" />
          </div>
        </SidebarHeader>

        <Separator className="mx-4" />

        {/* Main Navigation */}
        <div className="flex-1  py-4">
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-4 mb-2">
              NAVIGATION
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <SidebarMenu className="space-y-1">
                {mainNavItems.map((item) => {
                  const isActive =
                    item.path === '/admin/dashboard'
                      ? location.pathname === '/admin/dashboard'
                      : location.pathname.startsWith(item.path);

                  return (
                    <SidebarMenuItem key={item.path}>
                      <NavLink to={item.path}>
                        <SidebarMenuButton
                          className={getNavLinkClasses(isActive)}
                          title={item.description}
                          aria-label={`Navigate to ${item.label}`}
                        >
                          <item.icon className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm truncate">{item.label}</span>
                          {isActive && (
                            <div className="ml-auto w-2 h-2 rounded-full bg-primary-foreground opacity-60" />
                          )}
                        </SidebarMenuButton>
                      </NavLink>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <Separator className="mx-4 my-4" />

          {/* Quick Actions */}
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-4 mb-2">
              QUICK ACTIONS
            </SidebarGroupLabel>
            <SidebarGroupContent className="px-2">
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link to="/">
                    <SidebarMenuButton
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98] hover:cursor-pointer"
                      title="View live website"
                      aria-label="Open home page in new tab"
                    >
                      <Home className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm">View Website</span>
                      <div className="ml-auto text-xs opacity-50">↗</div>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        {/* Footer / Logout */}
        <SidebarFooter className="p-4 border-t border-border/50">
          <SidebarMenuItem>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start gap-3 px-3 py-2.5 text-sm border-destructive/20 text-destructive hover:bg-destructive  hover:cursor-pointer transition-all duration-200 hover:shadow-sm"
              aria-label="Logout from admin panel"
            >
              <LogOut className="w-4 h-4 flex-shrink-0" />
              <span>Logout</span>
            </Button>
          </SidebarMenuItem>

          {/* User Info */}
          {adminData && (
            <div className="mt-3 px-3 py-2 rounded-lg bg-muted/30 border border-border/50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium text-primary">
                    {(adminData.name || adminData.email || 'A').charAt(0).toUpperCase()}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">
                    {adminData.name || 'Admin User'}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{adminData.email}</p>
                </div>
              </div>
            </div>
          )}
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

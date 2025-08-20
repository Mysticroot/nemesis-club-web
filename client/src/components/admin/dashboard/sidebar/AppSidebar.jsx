import { FileText, HandHeart, Home, LayoutDashboard, Users } from 'lucide-react';
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
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

const AppSidebar = ({ activeTab, setActiveTab }) => {
  const { isAuthenticated, logout } = useAuth(); // Assuming you have a useAuth hook for authentication

  const items = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'blogs', label: 'Blog Posts', icon: FileText },
    { id: 'requests', label: 'Sponsor Requests', icon: HandHeart },
    { id: 'sponsors', label: 'Sponsors', icon: Users },
  ];

  return (
    <Sidebar className="h-screen z-30">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-muted-foreground px-3 mb-2 flex justify-between items-center">
            Admin Panel
            <SidebarTrigger />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all ${
                      activeTab === item.id
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Link to="/blogs">
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">View Blogs</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
              <Link to="/history">
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
                    <FileText className="w-4 h-4" />
                    <span className="text-sm">View History</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
              <Link to="/">
                <SidebarMenuItem>
                  <SidebarMenuButton className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted">
                    <Home className="w-4 h-4" />
                    <span className="text-sm">Home Page</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </Link>
              <Button onClick={logout}>Logout</Button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

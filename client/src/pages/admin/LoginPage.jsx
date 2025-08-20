import AdminLoginForm from '@/components/admin/auth/AdminLoginForm';

const LoginPage = () => {
  return (
    <div className="pt-20 pb-20 bg-gray-300 pt-10 flex items-center justify-center">
      <div>
        <AdminLoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

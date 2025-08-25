import axios from '@/lib/axiosInstance';

export async function fetchAllAdmins() {
  try {
    const { data: resp } = await axios('/admin');
    // console.log(resp.data);
    return resp.data;
  } catch (error) {
    throw error;
  }
}
export async function deleteAdmin(adminId) {
  try {
    const { data: resp } = await axios.delete(`/admin/${adminId}`);
    return resp.data;
  } catch (error) {
    console.error('Failed to delete admin:', error);
    throw error;
  }
}

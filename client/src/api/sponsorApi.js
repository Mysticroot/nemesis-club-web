import axios from '@/lib/axiosInstance';

export async function fetchSponsorRequests() {
  try {
    const { data: resp } = await axios.get('/sponsors/requests');
    const result = resp.data;
    return result;
  } catch (error) {
    console.error('Error fetching sponsor requests:', error);
    throw error;
  }
}

export async function fetchApprovedSponsors() {
  try {
    const { data: resp } = await axios.get('/sponsors/requests/approved');
    // console.log(resp);
    const result = resp.data;
    return result;
  } catch (error) {
    console.error('Error fetching approved sponsors:', error);
    throw error;
  }
}

export async function updateSponsorStatus(id, status) {
  try {
    const { data: resp } = await axios.put(`/sponsors/requests/${id}/status`, { status });
    // console.log(resp);
    const result = resp.data;
    return result;
  } catch (error) {
    console.error('Error updating sponsor status:', error);
    throw error;
  }
}

export async function submitSponsorRequest(formData) {
  try {
    const { data: resp } = await axios.post('/sponsors/submit', formData);
    const result = resp.data;
    return result;
  } catch (error) {
    console.error('Error submitting sponsor request:', error);
    throw error;
  }
}

export async function deleteSponsorRequest(id) {
  try {
    const { data: resp } = await axios.delete(`/sponsors/requests/${id}`);
    const result = resp.data;
    return result;
  } catch (error) {
    console.error('Error deleting sponsor request:', error);
    throw error;
  }
}

// Sponsor History
export async function fetchSponsorHistory() {
  try {
    const { data: resp } = await axios.get('/sponsors/history');
    const result = resp.data;
    return result;
  } catch (error) {
    console.error('Error fetching sponsor history:', error);
    throw error;
  }
}

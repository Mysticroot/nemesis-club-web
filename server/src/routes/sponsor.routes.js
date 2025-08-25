import express from 'express';
import verifyToken from '../middlewares/auth.js';
import {
  createSponsorRequest,
  deleteApprovedSponsor,
  fetchAllSponsorRequests,
  fetchApprovedSponsors,
  previousSponsors,
  updateSponsorRequestStatus,
} from '../controllers/sponsor.controller.js';

const router = express.Router();

// 🔓 PUBLIC ROUTE — Submit sponsor request
router.post('/submit', createSponsorRequest); // POST /api/sponsors/submit

// 🔐 ADMIN ROUTES

// View all sponsor requests
// GET /api/sponsors/requests
router.get('/requests', verifyToken, fetchAllSponsorRequests);

// View only approved sponsors
// GET /api/sponsors/requests/approved
router.get('/requests/approved', verifyToken, fetchApprovedSponsors);

// Update sponsor request status (approve/reject)
// PUT /api/sponsors/requests/:id/status
router.put('/requests/:id/status', verifyToken, updateSponsorRequestStatus);

router.delete('/requests/:id', verifyToken, deleteApprovedSponsor); // DELETE /api/sponsors/requests/:id

router.get('/history', verifyToken, previousSponsors); // GET /api/sponsors/history

export { router as sponsorRouter };
/**
 * 📝 Future Improvements
 * ==========================
 * - Add pagination for sponsor requests
 * - Add search/filter functionality for requests
 */

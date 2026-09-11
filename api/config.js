export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.status(200).json({
    googleApiKey: process.env.BEHOLD_GOOGLE_API_KEY || '',
    rootFolderId: process.env.BEHOLD_DRIVE_ROOT_ID || '1iCHWojBMNoJTUXD38yDIIN1ooG9BsycC'
  });
}

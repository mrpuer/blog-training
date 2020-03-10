const INSTAGRAM_APP_ID = '143746280237756';
const INSTAGRAM_SECRET = '25d3567fa849f8ba0c737d9e1ae27d5c';
const INSTAGRAM_SCOPE = 'user_profile,user_media';
const INSTAGRAM_REDIRECT = 'http://localhost:3000/auth';
const INTAGRAM_TOKEN =
  'IGQVJVUDN6R3c5OVd4VDBEajBDUGJ0Uk84OTMxakN5cWVwbWx1QWt4c0ZAadWgybXgzaFpBTndZAY3JfRDFtdDRaUFdlSjZAJUmh0SHhvX2V6OU5YMEVINFpEd0dCRHhqWElRZAkxzbktheXdmb000WkJHVwZDZD';
export const INSTAGRAM_AUTH_URL = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_APP_ID}&redirect_uri=${INSTAGRAM_REDIRECT}&scope=${INSTAGRAM_SCOPE}&response_type=code&hl=en`;

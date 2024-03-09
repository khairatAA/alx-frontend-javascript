import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const res1 = await signUpUser(firstName, lastName).then((value) => (
    {
      status: 'Good',
      value,
    }
  ));

  const res2 = await uploadPhoto(fileName).catch((value) => (
    {
      status: 'Failed',
      value,
    }
  ));

  return [res1, res2];
}

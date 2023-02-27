import ProfileForm from "../components/ProfileForm";

function Profile() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs text-center">
        <h1>Profile Page</h1>
        <ProfileForm />
      </div>
    </div>
  );
}

export default Profile;

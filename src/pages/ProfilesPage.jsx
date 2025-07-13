import React from "react";
import { Link, Outlet } from "react-router-dom";
// Compare using Navlink instead of Link for better navigation experience

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="profiles-page">
        <div className="profile-page">
          {profiles.map((profile) => (
            <Link key={profile} to={`/profiles/${profile}`}>
              Profile {profile}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default ProfilesPage;

import React, { useState } from "react";

const ProfileEditor = () => {
  const [profile, setProfile] = useState({
    name: "Alex",
    email: "alex@example.com",

    address: {
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "411001",
    },

    preferences: {
      theme: "light",
      notifications: true,
    },
  });

  const updateCity = (event) => {
    const newCity = event.target.value;
    setProfile((prevProfile) => ({
      ...prevProfile,

      address: {
        ...prevProfile.address,
        city: newCity,
      },
    }));
  };

  const toggleNotifications = () =>{
    setProfile((prevProfile)=>({
        ...prevProfile,

        preferences:{
            ...prevProfile.preferences,
            notifications: !prevProfile.preferences.notifications
        }
    }))
  }

  return <div>
    <section className="demo-section">
        <h2>Profile Editor</h2>
        <p>Name : {profile.name}</p>
        <p>Email : {profile.email}</p>

        <label>
            City : <input
            value={profile.address.city} onChange={(event)=> updateCity(event)}/>
        </label>

        <label>
            State : {profile.address.state}
        </label>
        <label>
            Pincode : {profile.address.pincode}
        </label>
<p>
    Notifications :{" "}
    {profile.preferences.notifications ? "Enabled" : "Disabled"}
</p>
<button onClick={toggleNotifications}>
    Toggle Notifications
</button>
    </section>
  </div>;
};

export default ProfileEditor;

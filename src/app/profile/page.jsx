"use client"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation"; // Ensure you import the redirect helper from Next.js

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect to login if the user is not authenticated
  if (!session || !session.getUser()) {
    redirect("/api/auth/login");
  }

 

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Welcome to your profile, {user.family_name}!</h1>
      <img
        src={user.picture}
        alt={`${user.family_name}'s profile picture`}
        style={{
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          marginTop: "1rem",
        }}
      />
      <p>Email: {user.email}</p>
      <p>First Name: {user.given_name}</p>
      <p>Last Name: {user.family_name}</p>
    </div>
  );
}

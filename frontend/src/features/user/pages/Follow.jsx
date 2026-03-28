import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { useUser } from "../hooks/useUser";
import { useAuth } from "../../auth/hooks/useAuth";
import Section from "../components/Section";

function Follow() {
  const {
    handleGetFollowers,
    handleGetFollowing,
    handleGetAllUsers,
    allUser,
    followers,
    following
  } = useUser();

  const { user, handleGetMe } = useAuth();

  const getAllUsers = async ()=> {
    await handleGetAllUsers()
  }
  
  const getMe = async ()=> {
    await handleGetMe()
  }


  
  const loadData = async ()=> {
    await handleGetFollowers({username: user.username})
    await handleGetFollowing({username: user.username})
  }
  
  useEffect(()=> {
    if(!user) {
      getMe()
    }
    getAllUsers()
    loadData()
  }, [user])
  
  if(!allUser ||!followers ||!following) {
    return (
      <main>loading...</main>
    )
  }

  return (
    <div className="h-screen bg-black text-white p-3">
      <div className="grid grid-cols-3 gap-6">

        {/* Followers */}
        <Section title="followers">
          {followers.map((u, i) => (
            <UserCard key={i} user={u} uname={u.test} type="followers" />
          ))}
        </Section>

        {/* Following */}
        <Section title="following">
          {following.map((u, i) => (
            <UserCard key={i} user={u} type="following" />
          ))}
        </Section>

        {/* Others */}
        <Section title="others">
          {allUser.map((u, i) => (
            <UserCard key={i} user={u} type="others" />
          ))}
        </Section>

      </div>
    </div>
  );
}

export default Follow;
"use client";

import { useState } from "react";

import { api } from "@/trpc/react";
import { Button } from "antd";

export function UserCreate() {
  const [user, setUser] = useState<any>(null);
  const createPost = api.user.signUp.useMutation({
    onSuccess: async () => {
      console.log("User created", user);
      setUser(user);
    },
  });

  return (
    <div className="w-full max-w-xs">
      <Button
        type="primary"
        onClick={(e) => {
          e.preventDefault();
          createPost.mutate({
            email: "email111@gmail.com",
            password: "1234",
            name: "Test",
            company: {
              name: "Tesaaaaaaaaaaaa",
            },
          });
        }}
        size="large"
      >
        Primary
        ButtonAAAAAAAAAAAAAAAAAAAAAAAAAAasdfsaddfdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </Button>
      {user && <p>User created: {user.name}</p>}
    </div>
  );
}

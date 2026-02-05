import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-end  p-6 py-14">
      <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-sm text-gray-500 mb-6 font-medium">
        Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.
      </p>

      <Button
        text="Create Account"
        onClick={() => navigate("/signup")}
      />

      <div className="mt-3">
        <Button
          text="Already Registered? Login"
          variant="secondary"
          onClick={() => navigate("/login")}
        />
      </div>
    </div>
  );
}

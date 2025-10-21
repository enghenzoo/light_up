"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SocialLoginCard() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-sm p-6 shadow-xl rounded-2xl border border-border">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Continue with
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 mt-2">
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 py-2 text-base"
            onClick={() => (window.location.href = "/api/auth/google")}
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>

          {/* <Button
            className="flex items-center justify-center gap-2 py-2 text-base bg-[#1877F2] text-white hover:bg-[#166FE0]"
            onClick={() => console.log("Continue with Facebook")}
          >
            <FaFacebook className="text-xl" />
            Continue with Facebook
          </Button> */}
        </CardContent>
      </Card>
    </div>
  );
}

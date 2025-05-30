// src/app/profile/seller/page.tsx
"use client";

import React from "react";
import { SellerProfileView } from "@/components/seller/SellerProfileView";
import { mockSellerProfile } from "@/lib/data/profile";

export default function SellerProfilePage() {
  return <SellerProfileView profile={mockSellerProfile} />;
}

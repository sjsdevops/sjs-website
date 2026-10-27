"use client";

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import EnquiryModal from "@/components/ui/EnquiryModal";

export default function FeeRefundHeader() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <>
      <Header onOpenEnquiry={() => setIsEnquiryModalOpen(true)} />
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
      />
    </>
  );
}

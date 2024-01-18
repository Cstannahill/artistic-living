"use client";
import React, { useEffect } from "react";
export default function Page() {
  useEffect(() => {
    console.log("View Art Page - Use Effect");
  }, []);
  return (
    <>
      <main className="view-art-main">
        <div className="d-flex justify-content-center mt-3">
          <p style={{ width: "100%" }} className="text-center">
            Test Div - Paintings and Drawings View
          </p>
        </div>
      </main>
    </>
  );
}

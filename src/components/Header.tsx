"use client";

import React from 'react';
import Navbar from './Navbar';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Navbar />
    </header>
  );
}; 
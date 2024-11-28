"use client";

import React from 'react';
import { Header } from './Header';
import Footer from './Footer';

export interface ClientLayoutProps {
  children: React.ReactNode;
}

export const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}; 
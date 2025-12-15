import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image: string;
  link: string;
}

export interface Review {
  id: number;
  author: string;
  text: string;
  location: string;
}

export interface NavItem {
  label: string;
  path: string;
}
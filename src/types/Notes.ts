import React from "react";

export interface INotes {
  title: string;
  details: string;
  category: string;
  id: number;
}

export interface INoteCardProps {
  note: INotes;
  onDeleteClick: (id: number) => Promise<void>;
}

export interface IMenuItems {
  text: string;
  icon: React.ReactElement;
  path: string;
}

export interface ILayoutProps {
  children: React.ReactNode;
}

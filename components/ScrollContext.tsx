"use client";

import React, { createContext, useContext } from "react";

// Provides the current scroll root element (used by smooth-scroll libraries
// such as Lenis). Components that rely on IntersectionObserver (e.g. framer
// motion's whileInView) can consume this and pass it as the observer root.
export const ScrollRootContext = createContext<Element | null>(null);
export function useScrollRoot() {
  return useContext(ScrollRootContext);
}

export default ScrollRootContext;

'use client';
import { useState, useEffect } from 'react';

export default function CurrentDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }));
  }, []);

  if (!date) return <span>...</span>;

  return <span>{date}</span>;
}

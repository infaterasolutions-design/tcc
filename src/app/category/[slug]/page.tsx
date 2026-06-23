import React from 'react';
import { supabase } from '../../../lib/supabase';
import { notFound } from 'next/navigation';
import CategoryClient from './CategoryClient';

export const revalidate = 60;

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch category config
  const { data: category, error: categoryError } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (categoryError || !category) {
    return notFound();
  }

  // Fetch posts for this category
  const { data: posts, error: postsError } = await supabase
    .from('posts')
    .select('*, categories(label)')
    .eq('category_slug', slug);

  if (postsError) {
    console.error("Error fetching posts:", postsError);
  }

  // Format category to match expected config
  const config = {
    label: category.label,
    description: category.description,
    subtags: category.subtags || ['ALL'],
    accentColor: category.accent_color,
  };

  return (
    <CategoryClient 
      config={config} 
      allPosts={posts || []} 
      slug={slug} 
    />
  );
}

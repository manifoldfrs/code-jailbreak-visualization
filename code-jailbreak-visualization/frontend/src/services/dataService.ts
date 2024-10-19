import { useMutation, useQuery } from 'convex/react';

export function useEmbeddings() {
  return useQuery('getEmbeddings');
}

export function useAddEmbedding() {
  return useMutation('addEmbedding');
}

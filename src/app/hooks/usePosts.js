import { useState, useEffect } from 'react';
import { fetchPosts } from '../util/getPosts';

export const usePosts = () => {
        const [posts, setPosts] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
                const loadPosts = async () => {
                        try {
                                const { allPosts } = await fetchPosts();
                                setPosts(allPosts);
                        } catch (err) {
                                setError(err.message);
                        } finally {
                                setIsLoading(false);
                        }
                };

                loadPosts();
        }, []);

        return { posts, isLoading, error };
};
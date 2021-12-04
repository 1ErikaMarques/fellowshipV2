import { MediaPost } from '../NewPost';
import { PostType } from '../Timeline/types';

export interface PostDataPros {
    postData: PostProps;
    handleDeletePost: (postId: string | undefined) => Promise<void>;
}

export interface PostProps {
    postId?: string;
    userId: string | undefined;
    name: string;
    profilePic?: string;
    text: string;
    createdAt: number;
    postLocalization: string;
    postType: PostType;
    comments: Comments[];
    mediaPosts?: MediaPost[];
    tag?: string;
    propertyType?: string;
    propertyPrice?: string;
    likes?: Likes[];
}

export interface Likes {
    cheerId: string;
    postId?: string;
    userId: string;
    active: boolean;
}

export interface Comments {
    commentId?: string;
    postId?: string;
    userId: string;
    text: string;
    createdAt?: number;
    userPic?: string;
    name: string;
}


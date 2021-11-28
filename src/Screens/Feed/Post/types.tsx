import { MediaPost } from '../NewPost';
import { PostType } from '../Timeline/types';

export interface PostDataPros {
    postData : PostProps;
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
    comments?: Comments[];
    mediaPosts?: MediaPost[];
    tag?: string;
    propertyType?: string;
    propertyPrice?: number;
}

export interface Comments {
    commentId?: string;
    postId?: string;
    userId: string;
    text: string;
    createdAt?: number;
}


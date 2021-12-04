import { Comments } from "../../Screens/Feed/Post/types";

export interface CommentProps {
  updateCommentList: (commentData: Comments) => void;
  postId: string | undefined;
}
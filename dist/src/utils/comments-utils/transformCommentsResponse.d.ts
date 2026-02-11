import { WithId } from "mongodb";
import { CommentViewModel } from "../../dto/commentsDTO/commentsDTO";
export declare const transformCommentsResponse: (newComment: WithId<any>) => CommentViewModel;

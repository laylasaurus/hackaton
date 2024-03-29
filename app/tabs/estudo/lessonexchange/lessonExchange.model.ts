import { User } from "../../../shared/user/user.model";
import { BasePost } from "../../../shared/models/base-post"

export class LessonExchange extends BasePost {
    subject: string;
    classesOfInterest: string[];
    major: string;

    constructor(postTitle: string, observations: string, tags: string[],
        user: User, subject: string, classes: string[], major: string){
        super(postTitle, observations, tags, user);
        this.subject = subject;
        this.classesOfInterest = classes;
        this.major = major;
    }
}

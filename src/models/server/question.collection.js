import {} from "node-appwrite"

import {db, questionCollection } from "../name"
import { databases } from "./config "

export default async function createQuestionCollection(){
    await databases.createQuestionCollection(db, questionCollection, questionCollection, 
        [
            Permission.read("any"),
            Permission.read("users"),
            Permission.create("users"),
            Permission.update("users"),
            Permission.delete("users"),
        ]
    )
    console.log("Question Collection is created")

    await Promise.all([
        databases.createStringAttribute(db, questionCollection, "title", 100, true),
        databases.createStringAttribute(db, questionCollection, "content", 10000, true),
        databases.createStringAttribute(db, questionCollection, "authorId", 50, true),
        databases.createStringAttribute(db, questionCollection, "attachmentId", 50, false),
        databases.createStringAttribute(db, questionCollection, "tags", 50, true, undefined, false)
    ])
    console.log("Questions Attributes created")
    
}
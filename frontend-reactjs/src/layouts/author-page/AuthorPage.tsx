import ic_avatar from "../../icons/ic-avatar.png";

import { useEffect, useState } from "react";
import { Author } from "../../models/response-models/Author";
import { ImageComponent } from "../utils/ImageComponent";

export const AuthorPage = () => {
  const [authorList, setAuthorList] = useState<Author[]>([]);

  useEffect(() => {
    const fetchAuthorList = async () => {
      const url = "http://localhost:8080/api/authors";
      const response = await fetch(url);

      if (!response.ok) throw new Error();

      const responseData = await response.json();

      const tempList = [];

      for (const data of responseData) {
        tempList.push(
          new Author(
            data.authorId,
            data.userId,
            data.penName,
            data.bio,
            data.hasAvatar
          )
        );
      }

      setAuthorList(tempList);
    };

    fetchAuthorList().catch();
  }, []);

  return (
    <div className="my-12 flex flex-col space-y-12">
      {authorList.map((author) => {
        return (
          <div className="flex flex-row items-center justify-evenly space-x-4 mx-auto w-1/2 p-3 border-2 border-gray-500">
            <div className="w-1/3 flex flex-row justify-center">
              {author.hasAvatar ? (
                <ImageComponent
                  filename={author.userId}
                  className="w-2/3 rounded-full object-cover border-2 border-gray-300"
                />
              ) : (
                <img src={ic_avatar} className="w-2/3" alt=""></img>
              )}
            </div>
            <div className="flex flex-col items-center px-2 w-2/3">
              <div className="mx-auto w-5/6 space-y-4 ">
                <p className="text-3xl font-bold">{author.penName}</p>
                <p className="italic w-2/3 text-justify">{author.bio}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

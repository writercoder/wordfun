import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from "aws-lambda";
import * as words from "an-array-of-english-words";

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2
) => {
  const randomWord = words[Math.floor(Math.random() * words.length)];
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `The random word is ${randomWord}. Generated at ${event.requestContext.time}`,
  };
};

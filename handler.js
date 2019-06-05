'use strict';

const util = require("util");

module.exports.hello = async (event, context, callback) => {
  console.log(`This is the event: ${util.inspect(event, {depth: null})}`);
  const a = "this is an example";
  console.log(`A is: ${a}`);
  
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Now using callbacks v5',
      input: event,
    }, null, 2),
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

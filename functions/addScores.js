var Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  const { scores } = JSON.parse(event.body);

  console.log("scores in function", scores);

  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  let response;

  base("scores").create(
    [
      {
        fields: {
          q1: scores[0],
          q2: scores[1],
          q3: scores[2],
          q4: scores[3],
          q5: scores[4],
          q6: scores[5],
          q7: scores[6],
          q8: scores[7],
          q9: scores[8],
          q10: scores[9],
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        response = {
          statusCode: 400,
          body: JSON.stringify("Error adding scores"),
          headers: {
            "Access-Control-Allow-Methods": "*",
          },
        };
        callback(null, response);
      }
      records.forEach(function (record) {
        const uid = record.getId();
        console.log("new scores -->", uid);
        response = {
          statusCode: 200,
          body: JSON.stringify("scores updates"),
          headers: {
            "Access-Control-Allow-Methods": "*",
          },
        };
        callback(null, response)
      });
    }
  );
};

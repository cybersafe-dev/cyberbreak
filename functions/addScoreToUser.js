var Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  const { uid, finalScore } = JSON.parse(event.body);

  console.log("in function", uid, finalScore)
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  let response;

  base("users").update(
    [
      {
        id: uid,
        fields: {
          score: finalScore,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        response = {
          statusCode: 400,
          body: JSON.stringify("Error updating with score"),
          headers: {
            "Access-Control-Allow-Methods": "*",
          },
        };
        callback(null, response)
      }
      records.forEach(function (record) {
        console.log("updated", record.get("name"));
        response = {
          statusCode: 200,
          body: JSON.stringify("Successfully updated"),
          headers: {
            "Access-Control-Allow-Methods": "*",
          },
        };
        callback(null, response);
      });
    }
  );
};

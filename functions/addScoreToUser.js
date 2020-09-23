var Airtable = require("airtable");

exports.handler = async (event) => {
  const { uid, finalScore } = JSON.parse(event.body);
  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  base("users")
    .update([
      {
        id: uid,
        fields: {
          score: finalScore,
        },
      },
    ])
    .then((records) => {
      records.forEach(function (record) {
        console.log("updated", record.get("name"));
        return {
          statusCode: 200,
          body: "Successfully updated",
          headers: {
            "Access-Control-Allow-Methods": "*",
          },
        };
      });
    })
    .catch((error) => {
      console.error(error);
      return {
        statusCode: 400,
        body: "Error updating with score",
        headers: {
          "Access-Control-Allow-Methods": "*",
        },
      };
    });
};

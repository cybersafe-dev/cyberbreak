var Airtable = require("airtable");

exports.handler = (event, context, callback) => {
  const { email, name } = JSON.parse(event.body);

  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    process.env.AIRTABLE_BASE_ID
  );

  let response;

  base("users").create(
    [
      {
        fields: {
          email: email,
          name: name,
        },
      },
    ],
    function (err, records) {
      if (err) {
        console.error(err);
        response = {
          statusCode: 400,
          body: JSON.stringify("Error adding new user"),
          headers: {
            "Access-Control-Allow-Methods": "*",
          },
        };
        callback(null, response);
      }
      records.forEach(function (record) {
        const uid = record.getId();
        console.log("new uid -->", uid);
        response = {
          statusCode: 200,
          body: JSON.stringify(uid),
          headers: {
            "Access-Control-Allow-Methods": "*",
          },
        };
        callback(null, response)
      });
    }
  );
};

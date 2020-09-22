var Airtable = require("airtable");

exports.handler = async (event) => {
  const { email, name } = JSON.parse(event.body);

  var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "applnhFkWhSAQIvg7"
  );

  base("users")
    .create([
      {
        fields: {
          email: email,
          name: name,
        },
      },
    ])
    .then((records) => {
      records.forEach(function (record) {
        const uid = record.getId();
        console.log("new uid -->", uid)
        return {
          statusCode: 200,
          body: uid,
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
        body: "Error adding new user",
        headers: {
          "Access-Control-Allow-Methods": "*",
        },
      };
    });
};

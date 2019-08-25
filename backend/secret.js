const secrets = {
  dbUri: "mongodb+srv://dbuser:dbuser123@cluster0-sh6tx.mongodb.net/test?retryWrites=true&w=majority"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
